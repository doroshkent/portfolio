import styled from "styled-components";
import { theme } from "styles/Theme";
import React from "react";
import { Icon } from "components/icon/Icon";

type SectionTitlePropsType = {
  isActive?: boolean
  isWhite?: boolean
  marginBottom?: string
  children?: React.ReactNode
}

export const SectionTitle = (props: SectionTitlePropsType) => {
  return <StyledSectionTitle isWhite={props.isWhite} isActive={props.isActive} marginBottom={props.marginBottom}>
    <Icon iconId={"gears"} width="25" height="23" viewBox="0 0 25 23"/>
    <span>{props.children}</span>
  </StyledSectionTitle>
}

const StyledSectionTitle = styled.h2<SectionTitlePropsType>`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: ${props => props.isWhite ? theme.colors.tertiaryFont : theme.colors.accent};
  margin-bottom: ${props => props.marginBottom || "30px"} ;
  
  position: relative;

  svg {
    position: absolute;
    transform: translateX(-42px) ${props => props.isActive ? "scale(1)" : "scale(0)"};
  }
`
