import styled from "styled-components";
import { theme } from "styles/Theme";
import { font } from "styles/Common";
import polygon from "assets/img/Polygon.svg";

// Skills section

const Skills = styled.section`
  @media ${ theme.media.mobile } {
    padding-bottom: 92px;
  }
`

const SkillsContentWrapper = styled.div`
  margin-right: 40px;
  flex-grow: 1;

  @media screen and (max-width: 1003px) {
    text-align: center;
  }

  @media ${ theme.media.mobile } {
    text-align: left;
  }
`

const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(75px, 100px));
  grid-auto-rows: auto;
  gap: 20px;

  @media screen and (max-width: 1003px) {
    justify-content: center;
  }

  @media ${ theme.media.mobile } {
    grid-gap: 30px 70px;
  }
`

const Text = styled.p`
  margin-bottom: 50px;
  ${font({Fmax: 18, Fmin: 16, color: "#818080"})}
`

const Image = styled.img`
  @media screen and (max-width: 1094px) {
    margin: 0 auto 43px;
    max-width: 420px;
  }
  
  @media ${ theme.media.mobile } {
    max-width: 250px;
  }
`

// Skill

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const IconWrapper = styled.div`
  position: relative;
  width: 75px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${polygon});
  background-repeat: no-repeat;
  background-size: 85%;
  background-position: center;
  
  @media ${theme.media.mobile} {
    width: 118px;
    height: 118px;
  }
  
  svg {
    @media ${theme.media.mobile} {
      transform: scale(1.6);
    }
  }
`

const SkillTitle = styled.h3`
  text-align: center;
  ${font({height: 1.8, Fmax: 16, Fmin: 18})};
  text-transform: capitalize;
`

export const S = {
  Skills,
  SkillsContentWrapper,
  SkillsWrapper,
  Text,
  Image,
  Skill,
  IconWrapper,
  SkillTitle,
}
