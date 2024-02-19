import styled from "styled-components";
import { theme } from "styles/Theme";
import { Container } from "components/Container";
import { FlexWrapper } from "components/FlexWrapper";
import { font } from "styles/Common";
import { Button } from "components/button/Button";
import arrowIcon from "assets/img/Arrow.svg";

// Projects section

const Projects = styled.section`
  color: ${ theme.colors.tertiaryFont };

  ${ Container } > ${ FlexWrapper } {
    @media ${ theme.media.mobile } {
      gap: 40px;
    }
  }
`

const Text = styled.p`
  text-align: center;
  margin-bottom: 60px;

  ${ font( { color: "inherit", Fmax: 18, Fmin: 16 } ) } @media ${ theme.media.mobile } {
    text-align: left;
    margin-bottom: 30px;
  }
`

// Project

const Project = styled.div`
  background-color: #262C4D;
  width: 300px;
  flex-grow: 1;

  border: 4px solid;
  border-image: repeating-linear-gradient(290deg, #0D54BE, #20ECD3) 1;
`

const Description = styled.p`
  text-align: center;
  padding: 0 10px;

  ${ font( { color: "inherit", Fmax: 16, Fmin: 14 } ) }
`

const Image = styled.img`
  height: 276px;
  width: 100%;
  object-fit: cover;
  object-position: left;
`

const ProjectButton = styled( Button )`
  padding: 10px 16px;
  margin-bottom: 20px;
  border: 2px solid #FFF;
  background: rgba(52, 61, 104, 0.08);
  text-transform: uppercase;

  &::after {
    content: url(${ arrowIcon });
    position: relative;
    left: 4px;
    top: 2px;
  }

  &:hover {
    background-color: rgb(52, 61, 104);
  }
`

export const S = {
  Projects,
  Text,
  Project,
  Description,
  Image,
  ProjectButton
}
