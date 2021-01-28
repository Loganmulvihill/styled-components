import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => props.theme.freeSpeechBlue};
  color: white;
  appearance: none;
  border 2px solid white-space;
  padding: 0.25em 0.5em;
  transition: background-color .25s, color .25s;

  ${(props) => {
    switch (props.size) {
      case "small":
        return "font-size:12px;";
      case "large":
        return "font-size:20px;";
    }

    return "font-size: 16px;";
  }}

  &:hover {
    background-color:white;
    color:${(props) => props.theme.freeSpeechBlue};
    cursor:pointer;
  }
`;

export default Button;
