import { Text } from 'components/Text';
import React from 'react';
import styled from "styled-components";

type WorkPropsType = {
  src: string
  title: string
  description: string
}

export const Work = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <Image src={props.src}/>
      <WorkTitle>{props.title}</WorkTitle>
      <Text>{props.description}</Text>
      <Link href={"#"}>demo</Link>
      <Link href={"#"}>code</Link>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  background-color: #bf7ef3;
  max-width: 540px;
  width: 100%;
`

const Image = styled.img`
  height: 260px;
  width: 100%;
  object-fit: cover;
`

const WorkTitle = styled.h3`

`

const Link = styled.a`

`
