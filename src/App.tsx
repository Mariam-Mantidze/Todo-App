import { useState, KeyboardEvent } from "react";
import styled from "styled-components";
import "./App.css";
import TodoContainer from "./components/TodoContainer";
import Input from "./components/Input";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes/themes";
import GlobalStyles from "./components/GlobalStyles";

type TodoType = {
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Input toggleTheme={toggleTheme} todos={todos} setTodos={setTodos} />
        <Main>
          <TodoContainer todos={todos} setTodos={setTodos} />
        </Main>
      </ThemeProvider>
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
