import React, { useEffect, useState } from 'react';
import photo from 'assets/img/photo/photo.webp';
import mediumPhoto from "assets/img/photo/photo@2x.webp";
import largePhoto from "assets/img/photo/photo@3x.webp";
import { FlexWrapper } from 'components/FlexWrapper';
import { Container } from "components/Container";
import { S } from "layout/sections/main/Main_Styles";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Main: React.FC = () => {
  const [ width, setWidth ] = useState( window.innerWidth );
  const breakpoint = 576;

  useEffect( () => {
    const handleWindowResize = () => setWidth( window.innerWidth )
    window.addEventListener( "resize", handleWindowResize );

    return () => window.removeEventListener( "resize", handleWindowResize );
  }, [] );

  const scrollToContactHandler = () => {
    const contactSection = document.getElementById( 'contact' );
    const offset = -70;

    if (contactSection) {
      const topPos = contactSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo( {
        top: topPos + offset,
        behavior: 'smooth',
      } );
    }
  };

  return (
    <S.Main id="home">
      <Container>
        <FlexWrapper align="center" justify="space-between" wrap="wrap-reverse">
          <S.DescriptionWrapper>
            <S.SmallText>Hi👋, I’m a </S.SmallText>
            <S.MainHeading>
              { width < breakpoint
                ? "front-end developer"
                : <Typewriter
                  options={ {
                    strings: [ "Web developer", "React Developer", "Frond-end developer" ],
                    autoStart: true,
                    loop: true
                  }
                  }
                /> }
              <p>front-end developer</p>
            </S.MainHeading>
            <S.Text>
              I’m <span>Anastasiya Darashkevich</span>, a developer dedicated to making the world a better place
              one
              line of code at a time.
            </S.Text>
            <S.HireMeButton onClick={ scrollToContactHandler }>Hire me</S.HireMeButton>
          </S.DescriptionWrapper>
          <S.PhotoWrapper>
            <Tilt tiltMaxAngleX={ 40 }
                  tiltMaxAngleY={ 40 }
                  perspective={ 800 }
                  transitionSpeed={ 1500 }
                  scale={ 1.1 }
                  gyroscope={ true }>
              <S.Photo src={ photo } alt="Anastasiya Darashkevich photo"
                       srcSet={ `${ mediumPhoto } 2x, ${ largePhoto } 3x` } />
            </Tilt>
          </S.PhotoWrapper>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};
