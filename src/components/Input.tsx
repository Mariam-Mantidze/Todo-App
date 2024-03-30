import styled from "styled-components";
import MobileDarkTheme from "/images/bg-mobile-dark.jpg";
import Sun from "/images/icon-sun.svg";

export default function Input({ todos, setTodos }) {
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

  return (
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
  );
}

const Header = styled.header`
  background: url(${MobileDarkTheme});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 46px 24px;

  & img {
    cursor: pointer;
  }

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
