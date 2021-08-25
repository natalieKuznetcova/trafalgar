import styled from "styled-components";
import { theme } from "./theme";

export const ButtonStyled = styled.button`
  border-radius: 55px;
  font-weight: bold;
  font-size: 18px;
  padding: 15px 40px;
  transition: all 0.3s;
`;

export const Button = styled(ButtonStyled)`
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.blue};
  color: ${theme.colors.blue};
  
  &:hover {
    background-color: ${theme.colors.blue};
    color: ${theme.colors.white};
  }
}`;

export const ButtonBordered = styled(ButtonStyled)`
  background-color: ${theme.colors.blue};
  color: ${theme.colors.white};
  
  &:hover {
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.blue};
    color: ${theme.colors.blue};
  }
`;
