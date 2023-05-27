import React, { useContext } from "react";
import styled from "styled-components";
import { BasketContext } from "../store/BasketContext";
import Modal from "../UI/Modal";
import BasketItems from "./BasketItems";
import TotalAmount from "./TotalAmount";

// const items = [
//   {
//     name: "kuurdak",
//     price: 200,
//     amount: "2",
//   },
//   {
//     name: "kuurdak",
//     price: 200,
//     amount: "2",
//   },
//   {
//     name: "kuurdak",
//     price: 200,
//     amount: "2",
//   },
//   {
//     name: "kuurdak",
//     price: 200,
//     amount: "2",
//   },
// ];

const Basket = ({ onShowModal }) => {

    const { items } = useContext(BasketContext)

  return (
    <>
      <Modal onclose={() => {}}>
        {items.length ? (
          <ContainerFixedScroll>
            {items.map((item) => {
              return (
                <BasketItems
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  amount={item.amount}
                />
              );
            })}
          </ContainerFixedScroll>
        ) : null}
        <TotalAmount onClose={onShowModal} price={200} />
      </Modal>
    </>
  );
};

export default Basket;

const ContainerFixedScroll = styled.div`
  max-height: 228px;
  overflow-y: scroll;
  margin-bottom: 20px;
`;
