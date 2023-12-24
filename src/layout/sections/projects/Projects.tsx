import React from 'react';
import styled from "styled-components";
import { SectionTitle } from "components/SectionTitle";
import { Project } from "layout/sections/projects/project/Project";
import { FlexWrapper } from "components/FlexWrapper";
import socialImg from "assets/img/proj-1.webp";
import timerImg from "assets/img/proj-2.webp";
import { Container } from "components/Container";
import { theme } from 'styles/Theme';
import { font } from "styles/Common";

export const Projects = () => {
  return (
    <StyledProjects>
      <Container>
        <SectionTitle isActive isWhite marginBottom="8px">Projects</SectionTitle>
        <Text>A select number of projects</Text>
        <FlexWrapper justify={"space-between"} wrap={"wrap"} gap={"50px"}>
          <Project src={ socialImg }
                   description={ "Made a social media manager template using HTML5, CSS and JS. " }/>
          <Project src={ timerImg }
                   description={ "Made a simple card page using HTML5 and  CSS3" }/>
        </FlexWrapper>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  color: ${ theme.colors.tertiaryFont };
  
   ${Container} > ${FlexWrapper} {
     @media ${theme.media.mobile} {
       gap: 40px;
     }
   }
`

const Text = styled.p`
  text-align: center;
  margin-bottom: 60px;
  
  ${font({color: "inherit", Fmax: 18, Fmin: 16})}
`
