import React from 'react';
import photo from 'assets/img/photo.webp'
import styled from "styled-components";
import { FlexWrapper } from 'components/FlexWrapper';

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align="center" justify="space-around">
        <div>
          <span>Hi There</span>
          <Name>I am Anastasiya Darashkevich</Name>
          <MainHeading>Front End Developer</MainHeading>
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

const StyledMain = styled.div`
  background-color: #e5d398;
  min-height: 100vh;
`

const MainHeading = styled.h1`

`

const Name = styled.h2`

`
