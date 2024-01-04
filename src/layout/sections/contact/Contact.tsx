import React, { ElementRef, useRef } from 'react';
import { SectionTitle } from "components/SectionTitle";
import { FlexWrapper } from "components/FlexWrapper";
import contactImg from "assets/img/contacts.svg"
import { Container } from "components/Container";
import { IoSend } from "react-icons/io5";
import { S } from "./Contact_Styles";
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {

  const form = useRef<ElementRef<'form'>>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if(!form.current) return;

    emailjs.sendForm('service_cfco04m', 'template_vgsff9a', form.current, 'P2vU05ekTFkPwz99d')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <S.Contact id="contact">
      <Container>
        <SectionTitle>Contact me</SectionTitle>
        <FlexWrapper justify="space-around" wrap="wrap" gap="36px">
          <S.Image src={ contactImg } alt="" aria-hidden/>
          <S.Form ref={form} onSubmit={sendEmail}>
            <S.Field required placeholder="Enter your name" name={"user_name"}/>
            <S.Field required type="email" placeholder="Enter email address" name={"email"}/>
            <S.Field required placeholder="Enter message..." as="textarea" name={"message"}/>
            <S.SubmitButton type="submit">
              Send Message
              <IoSend style={ { color: "#81d6f4", transform: "translate(10px, 3px)" } }/>
            </S.SubmitButton>
          </S.Form>
        </FlexWrapper>
      </Container>
    </S.Contact>
  );
};
