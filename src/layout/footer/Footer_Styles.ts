import styled from "styled-components";
import { theme } from "styles/Theme";
import footerImg from "assets/img/footer.svg";
import { FlexWrapper } from "components/FlexWrapper";
import { font } from "styles/Common";

const Footer = styled.footer`
  padding: 98px 0 175px;
  background-color: ${ theme.colors.secondary };
  position: relative;
  z-index: 1;
  outline: 1px solid red;

  &:after {
    display: block;
    content: ' ';
    width: 100%;
    height: 100%;
    background-image: url(${ footerImg });
    background-size: 100% auto;
    background-repeat: no-repeat;
    position: absolute;
    top: -100px;
    z-index: -1;
  }

  ${ FlexWrapper } {
    @media ${ theme.media.mobile } {
      justify-content: left;
    }
  }

  @media ${ theme.media.mobile } {
    padding: 10px 0 36px;
  }
`

const SocialList = styled.ul`
  display: flex;
  gap: 65px;
`

const SocialItem = styled.li`

`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  font-family: "Be Vietnam Pro", sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: ${ theme.colors.secondaryFont };

  span {
    color: #0ACBBF;
    margin-left: 30px;
  }
`

const Text = styled.p`
  margin-bottom: 34px;
  ${ font({ weight: 500, color: theme.colors.secondaryFont, Fmax: 20, Fmin: 18 }) };

  @media ${ theme.media.mobile } {
    font-weight: 400;
    margin-bottom: 12px;
  }
`

export const S = {
  Footer,
  SocialList,
  SocialItem,
  SocialLink,
  Text,
}
