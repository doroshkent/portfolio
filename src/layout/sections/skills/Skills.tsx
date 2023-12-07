import React from 'react';
import { FlexWrapper } from "components/FlexWrapper";
import styled from "styled-components";
import { SectionTitle } from "components/SectionTitle";
import { Skill } from "layout/sections/skills/Skill/Skill";

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>My Skills</SectionTitle>
      <FlexWrapper wrap={"wrap"} justify={"space-between"}>
        <Skill iconId={ 'code' } title={ 'html5' }
               text={ 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim' }/>
        <Skill iconId={ 'css' } title={ 'css3' }
               text={ 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim' }/>
        <Skill iconId={ 'react' } title={ 'react' }
               text={ 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim' }/>
        <Skill iconId={ 'typescript' } title={ 'typescript' }
               text={ 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim' }/>
        <Skill iconId={ 'styledComponents' } title={ 'styled components' }
               text={ 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim' }/>
        <Skill iconId={ 'figma' } title={ 'web design' }
               text={ 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim' }/>
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  height: 100vh;
  background-color: #e3c6c6;
`
