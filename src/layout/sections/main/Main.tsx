import React from 'react';
import photo from 'assets/img/photo/photo.webp';
import mediumPhoto from "assets/img/photo/photo@2x.webp";
import largePhoto from "assets/img/photo/photo@3x.webp";
import styled from "styled-components";
import { FlexWrapper } from 'components/FlexWrapper';
import { Button } from "components/button/Button";
import decor from "assets/img/photo-decorations.svg";
import mobileDecor from "assets/img/mobile/mobile-photo-decor.svg";
import { Container } from "components/Container";
import { theme } from "styles/Theme";
import { font } from "styles/Common";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align="center" justify="space-between" wrap="wrap-reverse">
          <DescriptionWrapper>
            <SmallText>Hi👋, I’m a </SmallText>
            <MainHeading>front-end developer</MainHeading>
            <Text>I’m <span>Anastasiya Darashkevich</span>, a developer dedicated to making the world a better place one
              line of code at a time.</Text>
            <HireMeButton>Hire me</HireMeButton>
          </DescriptionWrapper>
          <PhotoWrapper>
            <Photo src={ photo } alt={ "Anastasiya Darashkevich photo" }
                   srcSet={ `${ mediumPhoto } 2x, ${ largePhoto } 3x` }/>
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  padding: 220px 0 100px;
  display: flex;
  overflow-x: hidden;

  position: relative;
  z-index: 1;

  @media ${ theme.media.mobile } {
    padding-top: 130px;
  }

  &::before {
    content: "";
    width: 395px;
    height: 395px;
    transform: rotate(-130deg);
    border-radius: 395px;
    background: rgba(79, 71, 200, 0.40);
    filter: blur(300px);

    position: absolute;
    left: 80px;
    z-index: -999;
  }

  &::after {
    content: "";
    width: 472px;
    height: 472px;
    transform: rotate(-130deg);
    border-radius: 472px;
    background: rgba(29, 213, 208, 0.22);
    filter: blur(300px);

    position: absolute;
    right: 40px;
    top: -150px;
  }
`

const PhotoWrapper = styled.div`
  position: relative;
  margin-right: 32px;

  @media screen and (max-width: 937px) {
    margin: 0 auto 70px;
  }

  &::before {
    content: url("${ decor }");
    position: absolute;
    top: -52px;
    left: -44px;

    @media ${ theme.media.mobile } {
      content: url("${ mobileDecor }");
      top: -34px;
      left: -42px;
    }
  }
`

const Photo = styled.img`
  width: 344px;
  height: 390px;
  object-fit: cover;

  @media ${ theme.media.mobile } {
    width: 204px;
    height: 238px;
  }
`

const DescriptionWrapper = styled.div`
  max-width: 554px;
  width: 100%;
  flex-grow: 1;
  @media ${ theme.media.mobile } {
    margin: 0 30px;
  }
  
  @media screen and (max-width: 937px) {
    margin: 0 auto;
  }
`

const SmallText = styled.span`
  font-feature-settings: 'clig' off, 'liga' off;
  ${ font({ color: theme.colors.secondary, weight: 600, letterSpacing: "0.18px", Fmax: 32, Fmin: 22 }) }
`

const MainHeading = styled.h1`
  font-feature-settings: 'clig' off, 'liga' off;
  ${ font({ color: theme.colors.secondary, weight: 600, letterSpacing: "0.18px", Fmax: 48, Fmin: 28 }) }
  text-transform: capitalize;
`

const Text = styled.p`
  color: ${ theme.colors.primaryFont };
  opacity: 0.7;
  margin: 30px 0;
  font-size: 18px;
  font-weight: 400;

  span {
    font-weight: 700;
  }

  @media ${ theme.media.mobile } {
    margin: 12px 0 48px;
  }
`

const HireMeButton = styled(Button)`
  background-color: ${ theme.colors.accent };
  padding: 8px 16px;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.20), 0 3px 1px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.14);

  @media ${ theme.media.mobile } {
    padding: 10px 24px;
  }
`
