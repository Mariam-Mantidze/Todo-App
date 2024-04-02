import styled from "styled-components";
import MobileDarkTheme from "/images/bg-mobile-dark.jpg";
import Sun from "/images/icon-sun.svg";
import Moon from "/images/icon-moon.svg";

export default function Input({ todos, setTodos, toggleTheme, theme }) {
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
        <img
          onClick={toggleTheme}
          src={theme === "light" ? Moon : Sun}
          alt={theme === "dark" ? "Sun Icon" : "Moon Icon"}
        />
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
  background: ${(props) => props.theme.headerImg};
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 46px 24px;

  @media (min-width: 768px) {
    background: ${(props) => props.theme.headerDesktop};
  }

  & img {
    cursor: pointer;
  }

  & .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 327px;

    @media (min-width: 1000px) {
      width: 541px;
    }

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
  box-shadow: ${(props) => props.theme.boxShadow};

  & .circle {
    width: 20px;
    height: 20px;
    border: ${(props) => props.theme.circleColor};
    border-radius: 50%;
    position: absolute;
    top: 27%;
    left: 20px;

    @media (min-width: 1000px) {
      width: 24px;
      height: 24px;
      left: 24px;
      top: 29%;
    }
  }
`;

const EnterTodo = styled.input`
  background: ${(props) => props.theme.inputBackgroundColor};
  padding: 18px 54px;
  width: 327px;
  border-radius: 5px;
  border: none;
  box-shadow: ${(props) => props.theme.boxShadow};

  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: -0.1666666716337204px;
  text-align: left;
  color: ${(props) => props.theme.inputColor};

  @media (min-width: 1000px) {
    width: 540px;
    padding: 20px 64px;
    font-size: 18px;
  }

  &:focus {
    outline: none;
  }
`;
