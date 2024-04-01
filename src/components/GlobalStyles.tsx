import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

li {
  list-style: none;
}
body {
  background-color: ${(props) => props.theme.backGroudColor};
  font-family: "Josefin Sans", sans-serif;
  height: 100dvh;
}

button,
input {
  font-family: "Josefin Sans", sans-serif;
}

    
`;

export default GlobalStyles;
