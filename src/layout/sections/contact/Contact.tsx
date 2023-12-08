import React from 'react';
import styled from "styled-components";
import { SectionTitle } from "components/SectionTitle";
import { Button } from "components/button/Button";

export const Contact = () => {
  return (
    <StyledContact>
      <SectionTitle>Contact</SectionTitle>
      <StyledForm>
        <Field placeholder={"name"}/>
        <Field placeholder={"subject"}/>
        <Field placeholder={"message"} as={"textarea"}/>
        <Button type={"submit"}>Send Message</Button>
      </StyledForm>
    </StyledContact>
  );
};

const StyledContact = styled.section`
  background-color: #efc7de;
  min-height: 50vh;
`

const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
`

const Field = styled.input`

`
