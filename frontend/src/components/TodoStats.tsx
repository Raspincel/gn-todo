import { Todo } from "../App";

interface TodoStatsProps {
  todos: Todo[];
}

export const TodoStats = ({ todos }: TodoStatsProps) => {
  const activeTodos = todos.filter(todo => !todo.completed).length;
  const completedTodos = todos.length - activeTodos;

  return (
    <div className="todo-stats">
      <p>{activeTodos} items left</p>
      {completedTodos > 0 && (
        <p>{completedTodos} items completed</p>
      )}
    </div>
  );
};
