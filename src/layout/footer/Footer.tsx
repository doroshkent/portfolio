import React from 'react';
import styled from "styled-components";
import { Icon } from "components/icon/Icon";
import { FlexWrapper } from "components/FlexWrapper";

const iconsItems = [ "gmail", "telegram", "linkedin" ]

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper justify={"space-around"}>
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
          </SocialList>
        </div>
        <div>
          <Text>More projects I've worked on</Text>
          <Text><SocialLink href={"#"}><Icon iconId={"github"}/>@doroshkent</SocialLink> on github</Text>
        </div>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #d1eaca;
  min-height: 20vh;
`

const SocialList = styled.ul`
  display: flex;
  gap: 30px;
`

const SocialItem = styled.li`

`

const SocialLink = styled.a`

`

const Text = styled.p`

`
