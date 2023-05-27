import React, { useContext } from "react";
import styled from "styled-components";
import Image from "../assets/images/back-image.webp";
import { BasketContext } from "../store/BasketContext";
import HeaderButton from "./HeaderButton";

const Header = ({ onShowModal }) => {
  const { items } = useContext(BasketContext);

  const totalAmount = () => {
    const sum = items.reduce((a, item) => {
      return a + item.amount;
    },0);
    return sum;
  };



  return (
    <>
      <HeaderContainer>
        <h1>Order-Box</h1>
        <HeaderButton count={totalAmount()} onClick={onShowModal} />
      </HeaderContainer>
      <BacImageStyle>
        <Img src={Image} alt="img" />
      </BacImageStyle>
    </>
  );
};

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
  height: 99px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: darkgray;
  position: fixed;
  top: 0;
  z-index: 3;
`;

const BacImageStyle = styled.div`
  height: 630px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
