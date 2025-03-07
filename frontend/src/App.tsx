import { useState } from 'react';
import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm';
import { TodoFilter } from './components/TodoFilter';
import { TodoStats } from './components/TodoStats';
import './App.css';
import { useCreateTodo, useDeleteCompletedTodo, useDeleteTodo, useTodos, useToggleTodo, useUpdateTodo } from './api/todo';

export interface Todo {
  id: number;
  content: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

const App = () => {
  const [filter, setFilter] = useState('all');
  const { data: todos, isLoading, error } = useTodos();

  const createTodoMutation = useCreateTodo();
  const updateTodoMutation = useUpdateTodo();
  const deleteTodoMutation = useDeleteTodo();
  const toggleTodoMutation = useToggleTodo();
  const clearCompletedMutation = useDeleteCompletedTodo();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Something went wrong</p>

  const filteredTodos = todos?.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });


  const addTodo = (content: string) => {
    if (content.trim()) {
      const newTodo = {
        id: Date.now(),
        content,
        completed: false,
        createdAt: new Date().toISOString()
      };

      createTodoMutation.mutate(newTodo);
    }
  };

  const toggleTodo = (id: number) => {

    toggleTodoMutation.mutate({ id });
};

  const deleteTodo = (id: number) => {
    deleteTodoMutation.mutate(id);
  };

  const editTodo = (id: number, newText: string) => {
    if (newText.trim()) {
      updateTodoMutation.mutate({ id, input: { content: newText } });
    }
  };

  const clearCompleted = () => {
    clearCompletedMutation.mutate();
  };
  
  return (
    <div className="app-container">
      <h1>Todo List</h1>
      
      <TodoForm addTodo={addTodo} />
      
      <TodoFilter 
        filter={filter} 
        setFilter={setFilter} 
        clearCompleted={clearCompleted}
      />
      
      <TodoList
        todos={filteredTodos!}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
      
      <TodoStats todos={todos!} />
    </div>
  );
};

export default App;
