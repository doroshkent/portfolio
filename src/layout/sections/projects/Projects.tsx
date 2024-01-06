import React from 'react';
import { SectionTitle } from "components/SectionTitle";
import { Project } from "layout/sections/projects/project/Project";
import { FlexWrapper } from "components/FlexWrapper";
import socialImg from "assets/img/proj-1.webp";
import timerImg from "assets/img/proj-2.webp";
import { Container } from "components/Container";
import { v4 } from "uuid";
import { S } from "./Projects_Styles"

const projectsData = [
  {
    id: v4(),
    src: socialImg,
    description: "Made a social media manager template using HTML5, CSS and JS. "
  },
  {
    id: v4(),
    src: timerImg,
    description: "Made a simple card page using HTML5 and  CSS3"
  },
]

export const Projects: React.FC = () => {
  return (
    <S.Projects id="projects">
      <Container>
        <SectionTitle isWhite>Projects</SectionTitle>
        <S.Text>Some of my projects include:</S.Text>
        <FlexWrapper justify="space-between" wrap="wrap" gap="50px">
          { projectsData.map( p => <Project key={ p.id } src={ p.src }
                                            description={ p.description } /> ) }
        </FlexWrapper>
      </Container>
    </S.Projects>
  );
};
