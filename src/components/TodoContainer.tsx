import styled from "styled-components";
import { useState } from "react";
import Checkbox from "/images/icon-check.svg";
import DeleteBtn from "/images/icon-cross.svg";
import FilterContainer from "./FilterContainer";
import Footer from "./Footer";

interface TodoItemProps {
  completed: boolean;
}

export default function TodoContainer({ setTodos, todos }) {
  const [filter, setFilter] = useState("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    } else if (filter === "completed") {
      return todo.completed;
    }
    return true;
  });

  // function for deleting todo
  const deleteTodo = (todoId: number): void => {
    const newTodos = todos.filter((todo) => todoId !== todo.id);

    setTodos([...newTodos]);
  };

  // function for marking todo as completed or not completed
  const markTodo = (todoId: number) => {
    const markedTodo = todos.find((todo) => todoId === todo.id);

    const updatedTodo = { ...markedTodo, completed: !markedTodo.completed };
    // console.log(updatedTodo);

    const newTodos = todos.map((todo) =>
      todo.id === todoId ? updatedTodo : todo
    );
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
              <img src={DeleteBtn} alt="" />
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
  color: ${(props) =>
    props.completed ? "rgba(77, 80, 103, 1)" : "rgba(200, 203, 231, 1)"};
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
    }
  }
`;

const SummaryContainer = styled.div`
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(37, 39, 61, 1);
  border-radius: 5px;
  color: rgba(91, 94, 126, 1);
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.1666666716337204px;

  & .clear-items {
    cursor: pointer;
  }
`;
