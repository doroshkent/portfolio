import styled from "styled-components";
import { theme } from "styles/Theme";

export const Button = styled.button`
  color: ${theme.colors.secondaryFont};
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    transform: scale(1.1);
    
    @media ${theme.media.mobile} {
      transform: none;
    }
  }
`
