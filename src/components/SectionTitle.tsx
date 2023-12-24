import styled from "styled-components";
import { theme } from "styles/Theme";
import React from "react";
import { font } from "styles/Common";

type SectionTitlePropsType = {
  isActive?: boolean
  isWhite?: boolean
  marginBottom?: string
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
  text-align: center;
  margin-bottom: ${ props => props.marginBottom || "60px" };
  ${ props => font({
    weight: 500,
    Fmax: 40,
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
