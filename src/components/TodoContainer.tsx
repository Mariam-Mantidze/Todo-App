import styled from "styled-components";
import { useState } from "react";
import Checkbox from "/images/icon-check.svg";
import DeleteBtn from "/images/icon-cross.svg";
import FilterContainer from "./FilterContainer";
import Footer from "./Footer";

interface TodoItemProps {
  completed: boolean;
}

type TodoType = {
  id: number;
  title: string;
  completed: boolean;
};

type Filter = string;

export default function TodoContainer({ setTodos, todos }) {
  // filter useState
  const [filter, setFilter] = useState<Filter>("all");

  // function for deleting todo
  const deleteTodo = (todoId: number): void => {
    const newTodos = todos.filter((todo: TodoType) => todoId !== todo.id);

    setTodos([...newTodos]);
  };

  // function for marking todo as completed or not completed
  const markTodo = (todoId: number) => {
    // find/create object with exact todo that was clicked
    const markedTodo = todos.find((todo) => todoId === todo.id);

    // create new todo object with todos completed value
    const updatedTodo = { ...markedTodo, completed: !markedTodo.completed };

    // /create the new Todos array with updated/new todo
    const newTodos = todos.map((todo) =>
      todo.id === todoId ? updatedTodo : todo
    );
    // update the state of Todos
    setTodos(newTodos);
  };

  // function for clearing all the completed todos
  const clearCompleted = () => {
    const undoneTodos = todos.filter((todo) => !todo.completed);

    // console.log(completedTodos);

    setTodos([...undoneTodos]);
  };
  // variable for tracking active todos
  const todoCount = todos.filter((todo) => !todo.completed).length;

  // function for filtering
  const filteredTodos = todos.filter((todo: TodoType) => {
    if (filter === "active") {
      return !todo.completed;
    } else if (filter === "completed") {
      return todo.completed;
    }
    return "all";
  });

  return (
    <>
      <TodoList>
        {filteredTodos.map((todo) => (
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

            <div className="btn-container">
              <img
                onClick={() => deleteTodo(todo.id)}
                src={DeleteBtn}
                alt="delete icon x"
              />
              <button onClick={() => deleteTodo(todo.id)}>X</button>
            </div>
          </SingleTodo>
        ))}
        <SummaryContainer>
          <span className="items-left">{todoCount} items left</span>
          <span onClick={clearCompleted} className="clear-items">
            Clear Completed
          </span>
        </SummaryContainer>
      </TodoList>
      <FilterContainer filter={filter} setFilter={setFilter} />
      <Footer />
    </>
  );
}

const TodoList = styled.ul`
  width: 327px;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  background-color: ${(props) => props.theme.inputBackgroundColor};
  border-radius: 5px;
  box-shadow: ${(props) => props.theme.boxShadow};
  position: relative;
  top: -40px;

  /* padding: 16px 20px; */

  @media (min-width: 1000px) {
    width: 540px;
    margin-top: 24px;
    top: -46px;
  }
`;

const SingleTodo = styled.li<TodoItemProps>`
  border-bottom: ${(props) => props.theme.circleColor};
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: -0.1666666716337204px;
  text-align: left;
  color: ${(props) =>
    props.completed
      ? props.theme.textColor.completedStyle
      : props.theme.textColor.unCompletedStyle};
  text-decoration: ${(props) => (props.completed ? "line-through" : "")};
  cursor: pointer;

  @media (min-width: 1000px) {
    padding: 21px 0px 19px 24px;
    font-size: 18px;
    letter-spacing: -0.25px;
  }

  & .container {
    display: flex;
    align-items: center;
    gap: 12px;
    position: relative;

    @media (min-width: 1000px) {
      gap: 24px;
    }

    & input {
      opacity: 0;
      /* position: absolute; */
      width: 20px;
      height: 18px;
      cursor: pointer;

      @media (min-width: 1000px) {
        width: 22px;
      }
    }

    & img {
      position: absolute;
      top: 3px;
      left: 5px;
      opacity: ${(props) => (props.completed ? "1" : "0")};

      @media (min-width: 1000px) {
        top: 5px;
        left: 7px;
      }
    }

    & .circle {
      width: 20px;
      height: 20px;
      border: ${(props) => props.theme.circleColor};
      border-radius: 50%;
      position: absolute;
      top: -3px;
      cursor: pointer;
      background: ${(props) =>
        props.completed
          ? "linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)"
          : ""};

      @media (min-width: 1000px) {
        width: 24px;
        height: 24px;
      }
    }
  }

  & .btn-container {
    position: relative;

    & button {
      opacity: 0;
      cursor: pointer;
    }

    & img {
      position: absolute;
      width: 11.79px;
      height: 11.79px;
      top: 2px;

      @media (min-width: 1000px) {
        width: 17.68px;
        height: 17.68px;
        top: 0;
        right: 24px;
      }
    }
  }
`;

const SummaryContainer = styled.div`
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.inputBackgroundColor};
  border-radius: 5px;
  color: ${(props) => props.theme.summaryTextColor};
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.1666666716337204px;

  @media (min-width: 1000px) {
    padding: 16px 24px 20px;
    font-size: 14px;
  }

  & .clear-items {
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.textHover};
    }
  }
`;
