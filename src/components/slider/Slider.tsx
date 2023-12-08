import { StyledText } from 'components/StyledText';
import React from 'react';
import styled from "styled-components";
import { FlexWrapper } from "components/FlexWrapper";

export const Slider = () => {
  return (
    <StyledSlider>
      <Slide>
        <FlexWrapper direction={"column"}>
          <StyledText>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</StyledText>
          <Name>@ivan ivanow</Name>
        </FlexWrapper>
        <Pagination>
          <span></span>
          <span></span>
          <span></span>
        </Pagination>
      </Slide>
    </StyledSlider>
  );
};

const StyledSlider = styled.div`
  border: 1px solid red;
  max-width: 500px;
`

const Slide = styled.div`
  text-align: center;
`

const Name = styled.span`

`

const Pagination = styled.div`
  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 5px;
    background-color: #190ae1;
  }
`
