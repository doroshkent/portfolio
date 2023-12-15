import React from 'react';
import { Icon } from "components/icon/Icon";
import styled from "styled-components";
import polygon from "assets/img/Polygon.svg"
import { FlexWrapper } from "components/FlexWrapper";

type SkillPropsType = {
  iconId: string
  title: string
}

export const Skill = (props: SkillPropsType) => {
  const viewBox = props.iconId === "git" ? "0 0 92 92" : "0 0 120 120"
  return (
    <StyledSkill>
      <FlexWrapper direction={"column"} align={"center"} justify={"center"}>
        <IconWrapper>
          <Icon iconId={props.iconId} width={"42"} height={"42"} viewBox={viewBox}/>
        </IconWrapper>
        <SkillTitle>{props.title}</SkillTitle>
      </FlexWrapper>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  
`

const IconWrapper = styled.div`
  position: relative;
  width: 75px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &::before {
    content: url(${polygon});
    position: absolute;
  }
`

const SkillTitle = styled.h3`
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.8;
`
