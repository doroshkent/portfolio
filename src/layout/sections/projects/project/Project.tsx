import { Button } from 'components/button/Button';
import React from 'react';
import styled from "styled-components";
import { FlexWrapper } from "components/FlexWrapper";
import arrowIcon from "assets/img/Arrow.svg"
import { font } from "styles/Common";
import { FaLaptopCode } from "react-icons/fa";
import { theme } from "styles/Theme";

type WorkPropsType = {
  src: string
  description: string
}

export const Project = (props: WorkPropsType) => {
  return (
    <StyledProject>
      <FlexWrapper direction={ "column" } justify={"space-between"} align={ "center" } gap={"20px"}>
        <Image src={ props.src } alt={ "project screenshot" }/>
        <Text>{ props.description }</Text>
        <FlexWrapper justify={"center"} gap={"30px"} height={"auto"}>
          <ProjectButton as={ "a" } href={ "#" }>demo</ProjectButton>
          <ProjectButton as={ "a" } href={ "#" }>code</ProjectButton>
        </FlexWrapper>
      </FlexWrapper>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  background-color: #262C4D; 
  width: 300px;
  flex-grow: 1;
  
  border: 4px solid;
  border-image: repeating-linear-gradient( 290deg, #0D54BE, #20ECD3) 1;
`

const Text = styled.p`
  text-align: center;
  padding: 0 10px;
  
  ${font({color: "inherit", Fmax: 16, Fmin: 14})}
`

const Image = styled.img`
  height: 276px;
  width: 100%;
  object-fit: cover;
`

const ProjectButton = styled(Button)`
  padding: 10px 16px;
  margin-bottom: 20px;
  border: 2px solid #FFF;
  background: rgba(52, 61, 104, 0.08);
  text-transform: uppercase;

  &::after {
    content: url(${arrowIcon});
    position: relative;
    left: 4px;
    top: 2px;
  }
`
