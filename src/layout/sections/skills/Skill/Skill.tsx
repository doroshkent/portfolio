import React from 'react';
import { Icon } from "components/icon/Icon";
import { S } from "./../Skills_Styles"

type SkillPropsType = {
  iconId: string
  title: string
  viewBox: string
  width: string
  height: string
}

export const Skill: React.FC<SkillPropsType> = ({ iconId, title, viewBox, height, width }: SkillPropsType) => {
  return (
    <S.Skill>
      <S.IconWrapper>
        <Icon iconId={ iconId } width={ width } height={ height } viewBox={ viewBox } />
      </S.IconWrapper>
      <S.SkillTitle>{ title }</S.SkillTitle>
    </S.Skill>
  );
};
