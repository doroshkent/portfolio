import React from 'react';
import { FlexWrapper } from "components/FlexWrapper";
import { S } from "./../Projects_Styles"

type ProjectPropsType = {
  src: string
  description: string
}

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
  return (
    <S.Project>
      <FlexWrapper direction="column" justify="space-between" align="center" gap="20px">
        <S.Image src={ props.src } alt="project screenshot" />
        <S.Description>{ props.description }</S.Description>
        <FlexWrapper justify="center" gap="30px" height="auto">
          <S.ProjectButton as="a" href="#">demo</S.ProjectButton>
          <S.ProjectButton as="a" href="#">code</S.ProjectButton>
        </FlexWrapper>
      </FlexWrapper>
    </S.Project>
  );
};
