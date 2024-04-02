export type TodoType = {
  id: number;
  title: string;
  completed: boolean;
};

export type InputProps = {
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  toggleTheme?: () => void;
  theme?: string;
};
