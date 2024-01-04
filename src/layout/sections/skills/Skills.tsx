import React from 'react';
import { v4 } from "uuid";
import { FlexWrapper } from "components/FlexWrapper";
import { SectionTitle } from "components/SectionTitle";
import { Skill } from "layout/sections/skills/Skill/Skill";
import skillsImg from "assets/img/skills.svg"
import { Container } from "components/Container";
import { S } from "./Skills_Styles"

const skillsData = [
  {
    id: v4(),
    iconId: "javascript",
    title: "JavaScript",
    viewBox: "0 0 116 120",
    width: "38",
    height: "38",
  },
  {
    id: v4(),
    iconId: "typescript",
    title: "TypeScript",
    viewBox: "0 0 120 120",
    width: "38",
    height: "38",
  },
  {
    id: v4(),
    iconId: "react",
    title: "React",
    viewBox: "0 0 120 120",
    width: "46",
    height: "46",
  },
  {
    id: v4(),
    iconId: "redux",
    title: "Redux",
    viewBox: "0 0 120 120",
    width: "42",
    height: "42",
  },
  {
    id: v4(),
    iconId: "html",
    title: "HTML",
    viewBox: "0 0 120 120",
    width: "44",
    height: "44",
  },
  {
    id: v4(),
    iconId: "css",
    title: "CSS",
    viewBox: "0 0 120 119",
    width: "44",
    height: "44",
  },
  {
    id: v4(),
    iconId: "jest",
    title: "Jest",
    viewBox: "0 0 120 120",
  },
  {
    id: v4(),
    iconId: "git",
    title: "Git",
    viewBox: "0 0 92 92",
    width: "44",
    height: "44",
  },
  {
    id: v4(),
    iconId: "styledComponents",
    title: "Styled components",
    viewBox: "0 0 120 120",
    width: "38",
    height: "38",
  },
]

export const Skills: React.FC = () => {
  return (
    <S.Skills id="skills">
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <FlexWrapper justify="space-between" align="center" wrap="wrap-reverse">
          <S.SkillsContentWrapper>
            <S.Text>I have a vast experience in the following web technologies:</S.Text>
            <S.SkillsWrapper>
              { skillsData.map(s => {
                return <Skill key={ s.id } iconId={ s.iconId } title={ s.title }
                              viewBox={ s.viewBox } width={ s.width || "40" } height={ s.height || "40" }/>
              }) }
            </S.SkillsWrapper>
          </S.SkillsContentWrapper>
          <S.Image src={ skillsImg } alt="" aria-hidden/>
        </FlexWrapper>
      </Container>
    </S.Skills>
  );
};
