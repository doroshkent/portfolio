import React from 'react';
import styled from "styled-components";
import { Icon } from "components/icon/Icon";
import { FlexWrapper } from "components/FlexWrapper";

const iconsItems = ["instagram", "telegram", "vk", "linkedin"]

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction={"column"} align={"center"}>
        <Name>Anastasiya</Name>
        <SocialList>
          {iconsItems.map((item, index) => {
            return <SocialItem key={index}>
              <SocialLink>
                <Icon iconId={item} height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"}/>
              </SocialLink>
            </SocialItem>
          })}
        </SocialList>
        <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #d1eaca;
  min-height: 20vh;
`

const Name = styled.span`

`

const SocialList = styled.ul`
  display: flex;
  gap: 30px;
`

const SocialItem = styled.li`

`

const SocialLink = styled.a`

`

const Copyright = styled.small`
`
