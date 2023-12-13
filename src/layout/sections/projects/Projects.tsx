import React from 'react';
import styled from "styled-components";
import { SectionTitle } from "components/SectionTitle";
import { Project } from "layout/sections/projects/project/Project";
import { FlexWrapper } from "components/FlexWrapper";
import socialImg from "assets/img/proj-1.webp";
import timerImg from "assets/img/proj-2.webp";
import dashBoardImg from "assets/img/proj-3.webp"
import { Text } from "components/Text";

export const Projects = () => {
  return (
    <StyledProjects>
      <SectionTitle>Projects</SectionTitle>
      <Text>A select number of projects</Text>
      <FlexWrapper justify={"space-around"}>
        <Project src={ socialImg }
                 description={ "Made a social media manager template using HTML 5, CSS and JS." }/>
        <Project src={ timerImg }
                 description={ "Made a simple card page using HTML 5 and  CSS 3" }/>
        <Project src={ dashBoardImg }
                 description={ "Made an I.P address tracking website." }/>
      </FlexWrapper>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  background-color: #8ed5d7;
  min-height: 80vh;
`
