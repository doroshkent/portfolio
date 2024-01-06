import styled from "styled-components";
import { theme } from "styles/Theme";
import { font } from "styles/Common";

type SectionTitlePropsType = {
  isWhite?: boolean
  marginBottom?: string
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
  text-align: center;
  margin-bottom: ${ props => props.marginBottom || "60px" };
  ${ props => font( {
    weight: 500,
    Fmax: 40,
    Fmin: 25,
    color: props.isWhite ? theme.colors.tertiaryFont : theme.colors.accent
  } ) };

  @media ${ theme.media.mobile } {
    margin-bottom: ${ props => props.marginBottom || "50px" };
    font-weight: 600;
  }
`
