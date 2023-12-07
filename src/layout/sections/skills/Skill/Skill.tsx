import React from 'react';
import { Icon } from "components/icon/Icon";
import styled from "styled-components";
import { StyledText } from "components/StyledText";

type SkillPropsType = {
  iconId: string
  title: string
  text: string
}

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon iconId={props.iconId}/>
      <SkillTitle>{props.title}</SkillTitle>
      <StyledText>{props.text}</StyledText>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 30%;
  background-color: rgba(255, 250, 250, 0.62);
  margin: 15px;
`

const SkillTitle = styled.h3`

`
