import React from 'react';
import { FlexWrapper } from "components/FlexWrapper";
import styled from "styled-components";
import { SectionTitle } from "components/SectionTitle";
import { Skill } from "layout/sections/skills/Skill/Skill";
import skillsImg from "assets/img/skills.svg"
import { Container } from "components/Container";
import { theme } from "styles/Theme";
import { font } from "styles/Common";

const skills = [
  {
    iconId: "javascript",
    title: "JavaScript",
    viewBox: "0 0 116 120",
    width: "38",
    height: "38",
  },
  {
    iconId: "typescript",
    title: "TypeScript",
    viewBox: "0 0 120 120",
    width: "38",
    height: "38",
  },
  {
    iconId: "react",
    title: "React",
    viewBox: "0 0 120 120",
    width: "46",
    height: "46",
  },
  {
    iconId: "redux",
    title: "Redux",
    viewBox: "0 0 120 120",
    width: "42",
    height: "42",
  },
  {
    iconId: "html",
    title: "HTML",
    viewBox: "0 0 120 120",
    width: "44",
    height: "44",
  },
  {
    iconId: "css",
    title: "CSS",
    viewBox: "0 0 120 119",
    width: "44",
    height: "44",
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
    width: "44",
    height: "44",
  },
  {
    iconId: "styledComponents",
    title: "Styled components",
    viewBox: "0 0 120 120",
    width: "38",
    height: "38",
  },
]

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <FlexWrapper justify={ "space-between" } align={ "center" } wrap={ "wrap-reverse" }>
          <SkillsContentWrapper>
            <Text>I have a vast experience in the following web technologies:</Text>
            <SkillsWrapper>
              { skills.map(skill => {
                return <Skill key={ skill.iconId } iconId={ skill.iconId } title={ skill.title }
                              viewBox={ skill.viewBox } width={ skill.width || "40"} height={ skill.height || "40"}/>
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
    grid-gap: 30px 70px;
  }
`

const Text = styled.p`
  margin-bottom: 50px;
  ${font({Fmax: 18, Fmin: 16, color: "#818080"})}
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
