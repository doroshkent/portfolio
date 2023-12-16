import React from 'react';
import photo from 'assets/img/photo.webp'
import styled from "styled-components";
import { FlexWrapper } from 'components/FlexWrapper';
import { Button } from "components/button/Button";
import decor from "assets/img/photo-decorations.svg"
import { Container } from "components/Container";
import { theme } from "styles/Theme";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align="center" justify="space-between">
          <DescriptionWrapper>
            <SmallText>Hi👋, I’m a </SmallText>
            <MainHeading>front-end developer</MainHeading>
            <Text>I’m <span>Anastasiya Darashkevich</span>, a developer dedicated to making the world a better place one line of code at a time.</Text>
            <HireMeButton>Hire me</HireMeButton>
          </DescriptionWrapper>
          <PhotoWrapper>
            <Photo src={photo} alt={"My photo"} />
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
`

const Photo = styled.img`
  width: 344px;
  height: 390px;
  object-fit: cover;
`
const PhotoWrapper = styled.div`
  position: relative;
  margin-right: 10px;
  &::before {
    content: url("${decor}");
    position: absolute;
    top: -52px;
    left: -44px;
  }
`

const DescriptionWrapper = styled.div`
  color: ${theme.colors.secondary};
  max-width: 554px;
  font-size: 18px;
  font-weight: 400;
`

const SmallText = styled.span`
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 0.18px;
`

const MainHeading = styled.h1`
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 48px;
  font-weight: 600;
  letter-spacing: 0.18px;
  text-transform: capitalize;
`

const Text = styled.p`
  color: ${theme.colors.primaryFont};
  opacity: 0.7;
  margin: 30px 0;
  
  span {
    font-weight: 700;
  }
`

const HireMeButton = styled(Button)`
  background-color: ${theme.colors.accent};
  padding: 8px 16px;
`
