import React from 'react';
import { SectionTitle } from "components/SectionTitle";
import { FlexWrapper } from "components/FlexWrapper";
import contactImg from "assets/img/contacts.svg"
import { Container } from "components/Container";
import { IoSend } from "react-icons/io5";
import { S } from "./Contact_Styles"

export const Contact: React.FC = () => {
  return (
    <S.Contact>
      <Container>
        <SectionTitle>Contact me</SectionTitle>
        <FlexWrapper justify="space-around" wrap="wrap" gap="36px">
          <S.Image src={ contactImg } alt="" aria-hidden/>
          <S.Form>
            <S.Field type="email" placeholder="Enter email address"/>
            <S.Field placeholder="Enter message..." as="textarea"/>
            <S.SubmitButton type="submit">
              Send Message
              <IoSend style={ { color: "#81d6f4", transform: "translate(4px, 3px)" } }/>
            </S.SubmitButton>
          </S.Form>
        </FlexWrapper>
      </Container>
    </S.Contact>
  );
};
