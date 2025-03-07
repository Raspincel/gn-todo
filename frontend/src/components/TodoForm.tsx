import { useState } from 'react';

interface TodoFormProps {
  addTodo: (text: string) => void;
}

export const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        className="todo-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        aria-label="Add a new todo"
      />
      <button type="submit" className="add-btn">Add</button>
    </form>
  );
};