import React from 'react';
import { FlexWrapper } from "components/FlexWrapper";
import styled from "styled-components";
import { SectionTitle } from "components/SectionTitle";
import { Skill } from "layout/sections/skills/Skill/Skill";
import { Text } from "components/Text";
import skillsImg from "assets/img/skills.svg"

const skills = [
  {
    iconId: "javascript",
    title: "JavaScript"
  },
  {
    iconId: "typescript",
    title: "TypeScript"
  },
  {
    iconId: "react",
    title: "React"
  },
  {
    iconId: "redux",
    title: "Redux"
  },
  {
    iconId: "html",
    title: "HTML"
  },
  {
    iconId: "css",
    title: "CSS"
  },
  {
    iconId: "jest",
    title: "Jest"
  },
  {
    iconId: "styledComponents",
    title: "styled components"
  },
  {
    iconId: "git",
    title: "Git"
  },

]

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>Skills</SectionTitle>
      <FlexWrapper justify={ "space-between" }>
        <div>
          <Text>I have a vast experience in the following web technologies:</Text>
          <FlexWrapper wrap={"wrap"} gap={"42px"}>
            {skills.map(skill => {
              return <Skill iconId={skill.iconId} title={skill.title} />
            })}
          </FlexWrapper>
        </div>
        <img src={skillsImg} alt="" aria-hidden/>
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  min-height: 100vh;
  background-color: #e3c6c6;
`
