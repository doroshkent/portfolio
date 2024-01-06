import styled from "styled-components";
import { theme } from "styles/Theme";
import { Button } from "components/button/Button";

const Contact = styled.section`
  padding-bottom: 180px;

  @media ${ theme.media.mobile } {
    padding-bottom: 84px;
  }
`

const Form = styled.form`
  max-width: 614px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 38px;
  margin-left: 28px;

  textarea {
    resize: none;
    height: 158px;
  }

  @media ${ theme.media.tablet } {
    margin: 0 auto;
  }
`

const Field = styled.input`
  padding: 12px 18px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  background-color: ${ theme.colors.secondaryFont };
  font-family: "Be Vietnam pro", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 2;

  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.20), 0 2px 1px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14);

  &::placeholder {
    color: ${ theme.colors.placeholder };
  }
`

const SubmitButton = styled( Button )`
  background-color: rgba(52, 61, 104);
  padding: 12px 24px;
  position: relative;

  &:hover {
    background-color: rgba(52, 61, 104, 0.94);
  }
`

const Image = styled.img`
  max-width: 562px;
  width: 100%;

  @media ${ theme.media.mobile } {
    max-width: 250px;
  }
`

export const S = {
  Contact,
  Form,
  Field,
  SubmitButton,
  Image,
}
