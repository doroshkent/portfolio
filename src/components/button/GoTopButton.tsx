import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";
import { theme } from "styles/Theme";
import { animateScroll as scroll } from "react-scroll";

export const GoTopButton = () => {
  const [ showBtn, setShowBtn ] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowBtn(true)
      } else {
        setShowBtn(false)
      }
    })
  }, [])

  const scrollToTop = () => scroll.scrollToTop();

  return (
    <>
      { showBtn &&
        <StyledGoTopButton onClick={ scrollToTop }>
          <FaArrowUp color={ theme.colors.primary }/>
        </StyledGoTopButton> }
    </>
  );
};

const StyledGoTopButton = styled.button`
  background-color: ${ theme.colors.secondary };
  border: 1px solid ${ theme.colors.primary };
  border-radius: 50%;
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 99999999;
`
