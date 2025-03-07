interface TodoFilterProps {
  filter: string;
  setFilter: (filter: string) => void;
  clearCompleted: () => void;
}

export const TodoFilter = ({ filter, setFilter }: TodoFilterProps) => {
  return (
    <div className="todo-filter">
      <div className="filter-buttons">
        <button
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={filter === 'active' ? 'active' : ''}
          onClick={() => setFilter('active')}
        >
          Active
        </button>
        <button
          className={filter === 'completed' ? 'active' : ''}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
      </div>
      {/* <button onClick={clearCompleted} className="clear-completed">
        Clear completed
      </button> */}
    </div>
  );
};