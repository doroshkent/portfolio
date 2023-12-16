import React from 'react';
import styled from "styled-components";
import { SectionTitle } from "components/SectionTitle";
import { Button } from "components/button/Button";
import { FlexWrapper } from "components/FlexWrapper";
import contactImg from "assets/img/contacts.svg"
import { Container } from "components/Container";
import { theme } from "styles/Theme";
import paperPlane from "assets/img/paperPlane.svg"

export const Contact = () => {
  return (
    <StyledContact>
      <Container>
        <SectionTitle>Contact me</SectionTitle>
        <FlexWrapper justify={ "space-around" }>
          <img src={ contactImg } alt="" aria-hidden/>
          <StyledForm>
            <Field type={ "email" } placeholder={ "Enter email address" }/>
            <Field placeholder={ "Enter message..." } as={ "textarea" }/>
            <SubmitButton type={ "submit" }>Send Message</SubmitButton>
          </StyledForm>
        </FlexWrapper>
      </Container>
    </StyledContact>
  );
};

const StyledContact = styled.section`
  padding: 74px 0;
`

const StyledForm = styled.form`
  max-width: 614px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 43px;
  margin: 0 auto;
  
  textarea {
    resize: none;
    height: 158px;
  }
`

const Field = styled.input`
  padding: 12px 18px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  background-color: ${theme.colors.secondaryFont};
  font-family: "Be Vietnam pro", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 2;
  
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.20), 0 2px 1px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14);
  
  &::placeholder {
    color: ${theme.colors.placeholder};
  }
`

const SubmitButton = styled(Button)`
  background-color: #343D68;
  padding: 12px 24px;
  
  &::after {
    content: url(${paperPlane});
    margin-left: 20px;
  }
`
