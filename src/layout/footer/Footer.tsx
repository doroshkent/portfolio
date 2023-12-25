import React from 'react';
import { Icon } from "components/icon/Icon";
import { FlexWrapper } from "components/FlexWrapper";
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Container } from "components/Container";
import { S } from "./Footer_Styles";

const socialMediaData = [
  {
    Icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/anastasiya-darashkevich-43901b270/"
  },
  {
    Icon: SiGmail,
    href: "mailto:darashkevich.anastasiya@gmail.com"
  },
  {
    Icon: FaTelegramPlane,
    href: "https://t.me/doroshkent"
  }
]


export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Container>
        <FlexWrapper justify="space-around" align="center" wrap="wrap" gap="35px">
          <div>
            <S.Text>My social media links:</S.Text>
            <S.SocialList>
              { socialMediaData.map(sm => (
                <S.SocialItem>
                  <S.SocialLink href={ sm.href } target="_blank">
                    <sm.Icon style={ { color: "white", width: "30px", height: "30px" } }/>
                  </S.SocialLink>
                </S.SocialItem>
              )) }
            </S.SocialList>
          </div>
          <div>
            <S.Text>More projects I've worked on</S.Text>
            <S.SocialLink href="https://github.com/doroshkent" target="_blank">
              <Icon iconId="github" height="30" width="30" viewBox="0 0 31 31"/>
              <span>@doroshkent</span>&nbsp;on github
            </S.SocialLink>
          </div>
        </FlexWrapper>
      </Container>
    </S.Footer>
  );
};
