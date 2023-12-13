import React from 'react';
import styled from "styled-components";
import { SectionTitle } from "components/SectionTitle";
import { Button } from "components/button/Button";
import { FlexWrapper } from "components/FlexWrapper";
import contactImg from "assets/img/contacts.svg"

export const Contact = () => {
  return (
    <StyledContact>
      <SectionTitle>Contact me</SectionTitle>
      <FlexWrapper justify={"space-around"}>
        <img src={contactImg} alt="decorative image"/>
        <StyledForm>
          <Field type={"email"} placeholder={"Enter email address"}/>
          <Field placeholder={"Enter message..."} as={"textarea"}/>
          <Button type={"submit"}>Send Message</Button>
        </StyledForm>
      </FlexWrapper>
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
