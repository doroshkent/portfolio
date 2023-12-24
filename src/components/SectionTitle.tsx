import styled from "styled-components";
import { theme } from "styles/Theme";
import React from "react";
import { Icon } from "components/icon/Icon";
import { font } from "styles/Common";

type SectionTitlePropsType = {
  isActive?: boolean
  isWhite?: boolean
  marginBottom?: string
  children?: React.ReactNode
}

export const SectionTitle = (props: SectionTitlePropsType) => {
  return <StyledSectionTitle isWhite={ props.isWhite } isActive={ props.isActive } marginBottom={ props.marginBottom }>
    <Icon iconId={ "gears" } width="25" height="23" viewBox="0 0 25 23"/>
    <span>{ props.children }</span>
  </StyledSectionTitle>
}

const StyledSectionTitle = styled.h2<SectionTitlePropsType>`
  text-align: center;
  margin-bottom: ${ props => props.marginBottom || "60px" };
  ${ props => font({
    weight: 600,
    Fmax: 30,
    Fmin: 25,
    color: props.isWhite ? theme.colors.tertiaryFont : theme.colors.accent
  }) };

  position: relative;

  svg {
    position: absolute;
    transform: translateX(-38px) translateY(5px) ${ props => props.isActive ? "scale(1)" : "scale(0)" };
  }
  
  @media ${theme.media.mobile} {
    margin-bottom: ${ props => props.marginBottom || "50px" };
  }
`
