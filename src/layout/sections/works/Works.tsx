import React from 'react';
import styled from "styled-components";
import { SectionTitle } from "components/SectionTitle";
import { Menu } from "components/menu/Menu";
import { Work } from "layout/sections/works/work/Work";
import { FlexWrapper } from "components/FlexWrapper";
import socialImg from "assets/img/proj-1.webp"
import timerImg from "assets/img/proj-2.webp"

const worksItems = [ "all", "landing page", "React", "spa" ]

export const Works = () => {
  return (
    <StyledWorks>
      <SectionTitle>My Works</SectionTitle>
      <Menu menuItems={ worksItems }/>
      <FlexWrapper justify={"space-around"}>
        <Work src={ socialImg } title={ "Social Network" }
              description={ "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit." }/>
        <Work src={ timerImg } title={ "Timer" }
              description={ "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim" }/>
      </FlexWrapper>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  background-color: #8ed5d7;
  min-height: 100vh;
`
