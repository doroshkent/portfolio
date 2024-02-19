import React from 'react';
import { SectionTitle } from "components/SectionTitle";
import { Project } from "layout/sections/projects/project/Project";
import { FlexWrapper } from "components/FlexWrapper";
import todolistImg from "assets/img/todolist.webp";
import socialImg from "assets/img/SoMe.webp";
import counterImg from "assets/img/counter.webp"
import { Container } from "components/Container";
import { v4 } from "uuid";
import { S } from "./Projects_Styles"

const projectsData = [
  {
    id: v4(),
    src: todolistImg,
    description: "Made a Todolist App using TypeScript, React, Redux and Material UI. Implemented StoryBook. The project is still in development.",
    demoUrl: "https://doroshkent.github.io/react-todolist/",
    codeUrl: "https://github.com/doroshkent/react-todolist",
  },
  {
    id: v4(),
    src: counterImg,
    description: "Made a Counter App using TypeScript, React, Redux, Styled Components and localStorage. The project is still in development.",
    demoUrl: "https://doroshkent.github.io/counter/",
    codeUrl: "https://github.com/doroshkent/counter"
  },
  {
    id: v4(),
    src: socialImg,
    description: "My very first project. Please visit Profile and Users pages. Made a social media for front-end developers using JavaScript, React, Redux, Rest API, Styled Components.",
    demoUrl: "https://doroshkent.github.io/react-social-network/",
    codeUrl: "https://github.com/doroshkent/react-social-network"
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
                                            description={ p.description } demoUrl={p.demoUrl}
                                            codeUrl={p.codeUrl} /> ) }
        </FlexWrapper>
      </Container>
    </S.Projects>
  );
};
