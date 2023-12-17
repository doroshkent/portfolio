import React from 'react';
import styled from "styled-components";
import { Icon } from "components/icon/Icon";
import { FlexWrapper } from "components/FlexWrapper";
import { theme } from "styles/Theme";
import { FaTelegramPlane } from "react-icons/fa";
import { Container } from "components/Container";
import footerImg from "assets/img/footer.svg"


const iconsItems = [ "gmail", "linkedin" ]

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper justify="space-between" align={ "center" } height={ "424px" }>
          <div>
            <Text>My social media links:</Text>
            <SocialList>
              { iconsItems.map((item, index) => {
                return <SocialItem key={ index }>
                  <SocialLink>
                    <Icon iconId={ item } height={ "30" } width={ "30" } viewBox={ "0 0 30 30" }/>
                  </SocialLink>
                </SocialItem>
              }) }
              <SocialItem>
                <SocialLink><FaTelegramPlane style={ { color: "white", width: "30px", height: "30px" } }/> </SocialLink>
              </SocialItem>
            </SocialList>
          </div>
          <div>
            <Text>More projects I've worked on</Text>
            <SocialLink href={ "#" }>
              <Icon iconId={ "github" } height={ "30" } width={ "30" }
                    viewBox={ "0 0 30 30" }/>
              <span>@doroshkent</span>&nbsp;on github
            </SocialLink>
          </div>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-image: url(${ footerImg });
  background-repeat: no-repeat;
  background-color: ${ theme.colors.primary };

  position: relative;

  & > div {
    padding: 0 110px;

    position: relative;
    z-index: 3;
  }

  &:after {
    display: block;
    content: ' ';
    inset: 0;
    background-color: ${ theme.colors.secondary };
    height: 212px;
    width: 100%;
    position: absolute;
    top: 50%;
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
  color: ${ theme.colors.secondaryFont };
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 34px;
`
