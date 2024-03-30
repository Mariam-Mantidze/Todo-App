import { useState, KeyboardEvent } from "react";
import styled from "styled-components";
import "./App.css";
import MobileLight from "/images/bg-mobile-light.jpg";
import Moon from "/images/icon-moon.svg";
import TodoContainer from "./components/TodoContainer";
import Input from "./components/Input";

type TodoType = {
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  return (
    <>
      <Input todos={todos} setTodos={setTodos} />
      <Main>
        <TodoContainer todos={todos} setTodos={setTodos} />
      </Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
