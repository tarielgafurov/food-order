import React, {memo} from "react";
import styled from "styled-components";
import SummaryItemsRender from "./SummaryItemsRender";


const SummaryItems = ({foods}) => {

  console.log("summary-items");

  return (
    <ContainerSumaryItems>
      {foods.map((items) => {
        return (
        <>
            <SummaryItemsRender
            key={items.id}
              id={items.id}
              description={items.description}
              price={items.price}
              name={items.name}
            />
        </> 
        );
      })}
    </ContainerSumaryItems>
  );
};

export default memo(SummaryItems);

const ContainerSumaryItems = styled.div`
    width: 1300px;
    height: 800px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
    margin: auto;
    border-radius: 15px;
    margin-top: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`
