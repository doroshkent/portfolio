import React from 'react';
import photo from 'assets/img/photo/photo.webp';
import mediumPhoto from "assets/img/photo/photo@2x.webp";
import largePhoto from "assets/img/photo/photo@3x.webp";
import { FlexWrapper } from 'components/FlexWrapper';
import { Container } from "components/Container";
import { S } from "layout/sections/main/Main_Styles";
import Typewriter from 'typewriter-effect';

export const Main: React.FC = () => {
  return (
    <S.Main>
      <Container>
        <FlexWrapper align="center" justify="space-between" wrap="wrap-reverse">
          <S.DescriptionWrapper>
            <S.SmallText>Hi👋, I’m a </S.SmallText>
            <S.MainHeading>
              <p>front-end developer</p>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.pauseFor(1500)
                    .typeString('web')
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString('front-end developer')
                    .start();
                }}
              />
            </S.MainHeading>
            <S.Text>
              I’m <span>Anastasiya Darashkevich</span>, a developer dedicated to making the world a better place
              one
              line of code at a time.
            </S.Text>
            <S.HireMeButton>Hire me</S.HireMeButton>
          </S.DescriptionWrapper>
          <S.PhotoWrapper>
            <S.Photo src={ photo } alt="Anastasiya Darashkevich photo"
                     srcSet={ `${ mediumPhoto } 2x, ${ largePhoto } 3x` }/>
          </S.PhotoWrapper>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};
