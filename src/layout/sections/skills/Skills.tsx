import React from 'react';
import { FlexWrapper } from "components/FlexWrapper";
import styled from "styled-components";
import { SectionTitle } from "components/SectionTitle";
import { Skill } from "layout/sections/skills/Skill/Skill";
import skillsImg from "assets/img/skills.svg"
import { Container } from "components/Container";
import { theme } from "styles/Theme";

const skills = [
  {
    iconId: "javascript",
    title: "JavaScript",
    viewBox: "0 0 116 120",
  },
  {
    iconId: "typescript",
    title: "TypeScript",
    viewBox: "0 0 120 120",
  },
  {
    iconId: "react",
    title: "React",
    viewBox: "0 0 120 120",
  },
  {
    iconId: "redux",
    title: "Redux",
    viewBox: "0 0 120 120",
  },
  {
    iconId: "html",
    title: "HTML",
    viewBox: "0 0 120 120",
  },
  {
    iconId: "css",
    title: "CSS",
    viewBox: "0 0 120 119",
  },
  {
    iconId: "jest",
    title: "Jest",
    viewBox: "0 0 120 120",
  },
  {
    iconId: "git",
    title: "Git",
    viewBox: "0 0 92 92",
  },
  {
    iconId: "styledComponents",
    title: "Styled components",
    viewBox: "0 0 120 120",
  },
]

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle isActive>Skills</SectionTitle>
        <FlexWrapper justify={ "space-between" } align={ "center" } wrap={ "wrap-reverse" }>
          <SkillsContentWrapper>
            <Text>I have a vast experience in the following web technologies:</Text>
            <SkillsWrapper>
              { skills.map(skill => {
                return <Skill key={ skill.iconId } iconId={ skill.iconId } title={ skill.title }
                              viewBox={ skill.viewBox }/>
              }) }
            </SkillsWrapper>
          </SkillsContentWrapper>
          <Image src={ skillsImg } alt="" aria-hidden/>
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  @media ${ theme.media.mobile } {
    padding-bottom: 92px;
  }
`

const SkillsContentWrapper = styled.div`
  margin-right: 40px;
  flex-grow: 1;

  @media screen and (max-width: 1003px) {
    text-align: center;
  }

  @media ${ theme.media.mobile } {
    text-align: left;
    margin: 0 20px;
  }
`

const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(75px, 100px));
  grid-auto-rows: auto;
  gap: 20px;

  @media screen and (max-width: 1003px) {
    justify-content: center;
  }

  @media ${ theme.media.mobile } {
    grid-gap: 30px 60px;
  }
`

const Text = styled.p`
  color: #818080;
  margin-bottom: 40px;

  @media ${ theme.media.mobile } {
    margin-bottom: 50px;
  }
`

const Image = styled.img`
  @media screen and (max-width: 1094px) {
    margin: 0 auto 43px;
    max-width: 420px;
  }
  
  @media ${ theme.media.mobile } {
    max-width: 250px;
  }
`
