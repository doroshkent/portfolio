import React from 'react';
import styled from "styled-components";
import { SectionTitle } from "components/SectionTitle";
import { Project } from "layout/sections/projects/project/Project";
import { FlexWrapper } from "components/FlexWrapper";
import socialImg from "assets/img/proj-1.webp";
import timerImg from "assets/img/proj-2.webp";
import dashBoardImg from "assets/img/proj-3.webp"
import { Container } from "components/Container";
import { theme } from 'styles/Theme';
import { Icon } from "components/icon/Icon";

export const Projects = () => {
  return (
    <StyledProjects>
      <Container>
        <SectionTitle isActive isWhite marginBottom="8px"><Icon iconId={"gears"} width="25" height="23" viewBox="0 0 25 23"/>Projects</SectionTitle>
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
  color: ${ theme.colors.tertiaryFont };
`

const Text = styled.p`
  text-align: center;
  margin-bottom: 24px;
`
