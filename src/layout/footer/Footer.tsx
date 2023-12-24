import React from 'react';
import styled from "styled-components";
import { Icon } from "components/icon/Icon";
import { FlexWrapper } from "components/FlexWrapper";
import { theme } from "styles/Theme";
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Container } from "components/Container";
import footerImg from "assets/img/footer.svg";
import { font } from "styles/Common";


export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper justify="space-around" align={ "center" } wrap={ "wrap" } gap={ "35px" }>
          <div>
            <Text>My social media links:</Text>
            <SocialList>
              <SocialItem>
                <SocialLink><FaLinkedinIn style={ { color: "white", width: "30px", height: "30px" } }/> </SocialLink>
              </SocialItem>
              <SocialItem>
                <SocialLink><SiGmail style={ { color: "white", width: "30px", height: "30px" } }/> </SocialLink>
              </SocialItem>
              <SocialItem>
                <SocialLink><FaTelegramPlane style={ { color: "white", width: "30px", height: "30px" } }/> </SocialLink>
              </SocialItem>
            </SocialList>
          </div>
          <div>
            <Text>More projects I've worked on</Text>
            <SocialLink href={ "#" }>
              <Icon iconId={ "github" } height={ "30" } width={ "30" }
                    viewBox={ "0 0 31 31" }/>
              <span>@doroshkent</span>&nbsp;on github
            </SocialLink>
          </div>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
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
  
  @media ${theme.media.mobile} {
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
