import React from "react";
import styled from "styled-components";

const StyledBaackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0,0.7);
  z-index: 20;
`;

const StyledModalContent = styled.div`
  position: fixed;
  top: 20vh;
  width: 40rem;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;
  left: calc(50% - 23rem);

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Backdrop = ({ onclose }) => {
  return <StyledBaackdrop onClick={onclose} />;
};

const ModalContent = ({children}) => {
  return <StyledModalContent>{children}</StyledModalContent>
};

const Modal = ({children}) => {
  return <>
    <Backdrop/>
    <ModalContent>{children}</ModalContent>
  </>;
};

export default Modal;
