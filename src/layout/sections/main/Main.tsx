import React from 'react';
import photo from 'assets/img/photo.webp'
import styled from "styled-components";
import { FlexWrapper } from 'components/FlexWrapper';
import { Button } from "components/button/Button";
import { StyledText } from "components/StyledText";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align="center" justify="space-around">
        <div>
          <span>Hi👋, I’m a </span>
          <MainHeading>front-end developer</MainHeading>
          <StyledText>I’m Anastasiya Darashkevich, a developer dedicated to making the world a better place one line of code at a time.</StyledText>
          <Button>Hire me</Button>
        </div>
        <Photo src={photo} alt={"My photo"} />
      </FlexWrapper>
    </StyledMain>
  );
};

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`

const StyledMain = styled.section`
  background-color: #e5d398;
  min-height: 100vh;
`

const MainHeading = styled.h1`

`
