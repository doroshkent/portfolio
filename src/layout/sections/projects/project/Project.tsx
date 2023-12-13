import { Button } from 'components/button/Button';
import { Text } from 'components/Text';
import React from 'react';
import styled from "styled-components";

type WorkPropsType = {
  src: string
  description: string
}

export const Project = (props: WorkPropsType) => {
  return (
    <StyledProject>
      <Image src={props.src}/>
      <Text>{props.description}</Text>
      <Button as={"a"} href={"#"}>demo</Button>
      <Button as={"a"} href={"#"}>code</Button>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  background-color: #bf7ef3;
  max-width: 380px;
  width: 100%;
`

const Image = styled.img`
  height: 276px;
  width: 100%;
  object-fit: cover;
`
