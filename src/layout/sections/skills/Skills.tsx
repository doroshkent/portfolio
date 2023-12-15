import React from 'react';
import { FlexWrapper } from "components/FlexWrapper";
import styled from "styled-components";
import { SectionTitle } from "components/SectionTitle";
import { Skill } from "layout/sections/skills/Skill/Skill";
import skillsImg from "assets/img/skills.svg"
import { Container } from "components/Container";

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
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <FlexWrapper justify={ "space-between" } align={"center"}>
          <SkillsWrapper>
            <Text>I have a vast experience in the following web technologies:</Text>
            <FlexWrapper wrap={ "wrap" } gap={ "44px" }>
              { skills.map(skill => {
                return <Skill iconId={ skill.iconId } title={ skill.title }/>
              }) }
            </FlexWrapper>
          </SkillsWrapper>
          <img src={ skillsImg } alt="" aria-hidden/>
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  padding: 70px 0;
`

const SkillsWrapper = styled.div`
  max-width: 600px;
  width: 100%;
`

const Text = styled.p`
  color: #818080;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 40px;
`
