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

  &:after {
    display: block;
    content: ' ';
    height: 150px;
    background-image: url(${ footerImg });
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    position: absolute;
    left: 0;
    right: 0;
    top: -120px;
    z-index: -1;

    @media ${ theme.media.mobile } {
      background-size: contain;
      top: -30px;
    }
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
  
  &:only-child:hover {
    transform: scale(1.3);

    @media ${theme.media.mobile} {
      transform: none;
    }
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
