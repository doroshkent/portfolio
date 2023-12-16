import styled from "styled-components";
import { theme } from "styles/Theme";
import gearsImg from "assets/img/gears.svg"

type SectionTitlePropsType = {
  active?: boolean
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: ${theme.colors.accent};
  margin-bottom: 30px;
  
  position: relative;
  
  &::before {
    content: ${(props) => props.active && `url(${gearsImg})`};
    
    position: absolute;
    transform: translateX(-44px);
  }
`
