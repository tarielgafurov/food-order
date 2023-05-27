import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";

const BasketItems = ({ name, price, amount }) => {
  return (
    <GlobalItemsContainer>
      <NameFood>{name}</NameFood>
      <ItemsInfonContainer>
        <PriceWithAmountContainer>
          <span>{price}</span>
          <Amount>{amount}</Amount>
        </PriceWithAmountContainer>
        <ContainerButton>
          <Button>+</Button>
          <Button>-</Button>
        </ContainerButton>
      </ItemsInfonContainer>
    </GlobalItemsContainer>
  );
};

export default BasketItems;

const GlobalItemsContainer = styled.div`
  width: 94%;
  margin-top: 20px;
  border-bottom: 3px solid gray;
  padding: 15px;
  border-radius: 10px;
  &:hover {
    background-color: gray;
    transition-duration: 1.5s;
    border-radius: 10px;
    border: 3px solid coral;
  }
`;

const ItemsInfonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const PriceWithAmountContainer = styled.div`
  width: 110px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Amount = styled.span`
  padding: 5px 10px;
  border-radius: 3px;
  border: 2px solid coral;
`;

const ContainerButton = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NameFood = styled.h3`
    display: flex;
    align-items: flex-start;
`
