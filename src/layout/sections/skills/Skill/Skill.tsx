import React from 'react';
import { Icon } from "components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
  iconId: string
  title: string
}

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon iconId={props.iconId} viewBox={"0 0 120 120"}/>
      <SkillTitle>{props.title}</SkillTitle>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  min-width: 75px;
  background-color: rgba(255, 250, 250, 0.62);
`

const SkillTitle = styled.h3`

`
