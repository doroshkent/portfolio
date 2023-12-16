import { Button } from 'components/button/Button';
import React from 'react';
import styled from "styled-components";
import { FlexWrapper } from "components/FlexWrapper";
import arrowIcon from "assets/img/Arrow.svg"

type WorkPropsType = {
  src: string
  description: string
}

export const Project = (props: WorkPropsType) => {
  return (
    <StyledProject>
      <FlexWrapper direction={ "column" } justify={ "space-between" } align={ "center" } gap={"20px"}>
        <Image src={ props.src } alt={ "project screenshot" }/>
        <Text>{ props.description }</Text>
        <ProjectButton as={ "a" } href={ "#" }>learn more</ProjectButton>
      </FlexWrapper>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  background-color: #262C4D;
  max-width: 380px;
  width: 100%;
  min-height: 435px;
  
  border: 4px solid;
  border-image: repeating-linear-gradient( 290deg, #0D54BE, #20ECD3) 1;
`

const Text = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  margin: 0 10px;
`

const Image = styled.img`
  height: 276px;
  width: 100%;
  object-fit: cover;
`

const ProjectButton = styled(Button)`
  padding: 8px 16px 14px;
  margin-bottom: 12px;
  border: 2px solid #FFF;
  background: rgba(52, 61, 104, 0.08);
  text-transform: capitalize;

  &::after {
    content: url(${arrowIcon});
    position: relative;
    left: 4px;
    top: 2px;
  }
`
