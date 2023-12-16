import styled from "styled-components";
import { theme } from "styles/Theme";
import gearsImg from "assets/img/gears.svg"

type SectionTitlePropsType = {
  active?: boolean
  isWhite?: boolean
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: ${props => props.isWhite ? theme.colors.tertiaryFont : theme.colors.accent};
  margin-bottom: 30px;
  
  position: relative;
  
  &::before {
    content: ${(props) => props.active && `url(${gearsImg})`};
    color: ${props => props.isWhite ? theme.colors.tertiaryFont : theme.colors.accent};
    
    position: absolute;
    transform: translateX(-44px);
  }
`
