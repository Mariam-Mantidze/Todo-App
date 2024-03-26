import { useState, KeyboardEvent } from "react";
import styled from "styled-components";
import "./App.css";

type TodoType = {
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const addTodo = (e: KeyboardEvent<HTMLInputElement>): void => {
    const inputElement = e.target as HTMLInputElement;
    if (e.key == "Enter" && inputElement.value.trim() !== "") {
      setTodos([
        ...todos,
        { id: Math.random(), title: inputElement.value, completed: false },
      ]);
      inputElement.value = "";
    }
  };

  const deleteTodo = (todoId: number): void => {
    const newTodos = todos.filter((todo) => todoId !== todo.id);

    setTodos([...newTodos]);
  };

  const markTodo = (todoId: number) => {
    const markedTodo = todos.find((todo) => todoId === todo.id);

    const updatedTodo = { ...markedTodo, completed: !markedTodo.completed };
    // console.log(updatedTodo);

    const newTodos = todos.map((todo) =>
      todo.id === todoId ? updatedTodo : todo
    );
    setTodos(newTodos);
  };

  return (
    <>
      <EnterTodo type="text" placeholder="enter todo" onKeyDown={addTodo} />
      <TodoList>
        {todos.map((todo) => (
          <SingleTodo key={todo.id}>
            <div className="container">
              <input
                onChange={() => markTodo(todo.id)}
                type="checkbox"
                name="completed"
              />
              {todo.title}
            </div>

            <button onClick={() => deleteTodo(todo.id)}>X</button>
          </SingleTodo>
        ))}
      </TodoList>
    </>
  );
}

const EnterTodo = styled.input`
  background: rgba(37, 39, 61, 1);
`;

const TodoList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  background-color: rgba(37, 39, 61, 1);
  border-radius: 5px;

  /* padding: 16px 20px; */
`;

const SingleTodo = styled.li`
  border-bottom: 1px solid rgba(57, 58, 75, 1);
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .container {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;

export default App;
