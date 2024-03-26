import { useState, KeyboardEvent } from "react";
import styled from "styled-components";
import "./App.css";
import MobileDarkTheme from "/images/bg-mobile-dark.jpg";
import Sun from "/images/icon-sun.svg";
import Moon from "/images/icon-moon.svg";
import MobileLight from "/images/bg-mobile-light.jpg";
import Checkbox from "/images/icon-check.svg";

type TodoType = {
  id: number;
  title: string;
  completed: boolean;
};

interface TodoItemProps {
  completed: boolean;
}

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
      <Header>
        <div className="header-container">
          <h1>Todo</h1>
          <img src={Sun} alt="" />
        </div>
        <InputContainer>
          <div className="circle"></div>
          <EnterTodo
            type="text"
            placeholder="Create a new todo..."
            onKeyDown={addTodo}
          />
        </InputContainer>
      </Header>

      <Main>
        <TodoList>
          {todos.map((todo) => (
            <SingleTodo key={todo.id} completed={todo.completed}>
              <div className="container">
                <div className="circle"></div>
                <img src={Checkbox} alt="checkbox" />
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
          <SingleTodo>
            <span className="items-left">5 items left</span>
            <span className="clear-items">Clear Completed</span>
          </SingleTodo>
        </TodoList>
      </Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  background: url(${MobileDarkTheme});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 46px 24px;

  & .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 327px;

    & h1 {
      color: rgba(255, 255, 255, 1);
      letter-spacing: 10px;
      font-weight: 500;
      text-transform: uppercase;
    }
  }
`;

const InputContainer = styled.div`
  position: relative;
  margin-top: 40px;
  box-shadow: 0px 35px 50px -15px rgba(0, 0, 0, 0.5);

  & .circle {
    width: 20px;
    height: 20px;
    border: 1px solid rgba(57, 58, 75, 1);
    border-radius: 50%;
    position: absolute;
    top: 27%;
    left: 20px;
  }
`;

const EnterTodo = styled.input`
  background: rgba(37, 39, 61, 1);
  padding: 18px 54px;
  width: 327px;
  border-radius: 5px;
  border: none;

  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: -0.1666666716337204px;
  text-align: left;
  color: rgba(200, 203, 231, 1);
`;

const TodoList = styled.ul`
  width: 327px;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  background-color: rgba(37, 39, 61, 1);
  border-radius: 5px;
  box-shadow: 0px 35px 50px -15px rgba(0, 0, 0, 0.5);
  position: relative;
  top: -40px;

  /* padding: 16px 20px; */
`;

const SingleTodo = styled.li<TodoItemProps>`
  border-bottom: 1px solid rgba(57, 58, 75, 1);
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: -0.1666666716337204px;
  text-align: left;
  color: ${(props) => (props.completed ? "rgba(77, 80, 103, 1)" : "")};
  text-decoration: ${(props) => (props.completed ? "line-through" : "")};

  & .container {
    display: flex;
    align-items: center;
    gap: 12px;
    position: relative;

    & input {
      opacity: 0;
      /* position: absolute; */
      width: 20px;
      height: 18px;
      cursor: pointer;
    }

    & img {
      position: absolute;
      top: 3px;
      left: 5px;
      opacity: ${(props) => (props.completed ? "1" : "0")};
    }

    & .circle {
      width: 20px;
      height: 20px;
      border: 1px solid rgba(57, 58, 75, 1);
      border-radius: 50%;
      position: absolute;
      top: -3px;
      cursor: pointer;
      background: ${(props) =>
        props.completed
          ? "linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)"
          : ""};
    }
  }
`;

// const InfoContainer = styled.div`
//   padding: 16px 20px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background: rgba(37, 39, 61, 1);
//   border-radius: 5px;
// `;

export default App;
