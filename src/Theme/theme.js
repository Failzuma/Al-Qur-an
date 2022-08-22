import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#222",
  fontColor: "#eaeaea",
};

export const darkTheme = {
  body: "#eaeaea",
  fontColor: "#222",
};

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.body}
    }
`;