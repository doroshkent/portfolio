import styled from "styled-components";

const Header = styled.header<{isOpen: boolean}>`
  min-height: ${props => props.isOpen ? '130px' : '72px' };
  background-color: #FCFCFC;
  padding: 12px 0;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.20), 0 2px 1px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14);
  transition: 0.5s 0.1s;

  position: fixed;
  top: 0;
  left: 0; 
  right: 0;
  z-index: 9999;
`

export const S = {
  Header,
}
