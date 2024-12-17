export type Todo = {
  id: number;
  content: string;
};

export type TodosProps = {
  todos: Todo[];
};

export const Todos: React.FC<TodosProps> = ({ todos }) => {
  return (
    <div>
      {todos.map(({ id, content }) => (
        <div key={id}>{content}</div>
      ))}
    </div>
  );
};
