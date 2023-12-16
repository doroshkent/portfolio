import React from 'react';
import styled from "styled-components";
import { SectionTitle } from "components/SectionTitle";
import { Project } from "layout/sections/projects/project/Project";
import { FlexWrapper } from "components/FlexWrapper";
import socialImg from "assets/img/proj-1.webp";
import timerImg from "assets/img/proj-2.webp";
import dashBoardImg from "assets/img/proj-3.webp"
import { Container } from "components/Container";

export const Projects = () => {
  return (
    <StyledProjects>
      <Container>
        <ProjectsTitle active>Projects</ProjectsTitle>
        <Text>A select number of projects</Text>
        <FlexWrapper justify={"space-between"} wrap={"wrap"} gap={"2vw"}>
          <Project src={ socialImg }
                   description={ "Made a social media manager template using HTML 5, CSS and JS. " }/>
          <Project src={ timerImg }
                   description={ "Made a simple card page using HTML 5 and  CSS 3" }/>
          <Project src={ dashBoardImg }
                   description={ "Made an I.P address tracking website." }/>
        </FlexWrapper>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  padding: 30px 0 40px;
  color: rgba(255, 255, 255, 0.87);
`

const ProjectsTitle = styled(SectionTitle)`
  color: rgba(255, 255, 255, 0.87);
  margin-bottom: 8px;
  
  //шо тут как тут
  &::before {
  }
`

const Text = styled.p`
  text-align: center;
  margin-bottom: 24px;
`
