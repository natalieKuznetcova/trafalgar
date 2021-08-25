import styled from "styled-components";
import { theme } from "../../../../styled-component/theme";

export const StyledLink = styled.a`
  color: ${theme.colors.gray};
  width: 100%;
  min-width: 110px;
  text-decoration: none;
  padding: 0 10px;
  text-align: center;
  
  &:hover {
    font-weight: bold;
  }
  &:active {
    font-weight: bold;
  }
`;
