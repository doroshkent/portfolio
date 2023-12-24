import React from 'react';
import { Icon } from "components/icon/Icon";
import styled from "styled-components";
import polygon from "assets/img/Polygon.svg";
import { theme } from "styles/Theme";
import { font } from "styles/Common";

type SkillPropsType = {
  iconId: string
  title: string
  viewBox: string
  width?: string
  height?: string
}

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
        <IconWrapper>
          <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox}/>
        </IconWrapper>
        <SkillTitle>{props.title}</SkillTitle>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const IconWrapper = styled.div`
  position: relative;
  width: 75px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${polygon});
  background-repeat: no-repeat;
  background-size: 85%;
  background-position: center;
  
  @media ${theme.media.mobile} {
    width: 118px;
    height: 118px;
  }
  
  svg {
    @media ${theme.media.mobile} {
      transform: scale(1.6);
    }
  }
`

const SkillTitle = styled.h3`
  text-align: center;
  ${font({height: 1.8, Fmax: 16, Fmin: 18})};
  text-transform: capitalize;
`
