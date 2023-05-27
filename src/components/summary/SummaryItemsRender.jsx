import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { BasketContext } from '../store/BasketContext'
import Button from '../UI/Button'
import Input from '../UI/Input'

const SummaryItemsRender = ({ description , id , price , name }) => {

    const { addItemsBasket } = useContext(BasketContext)
    const [amount , setAmount] = useState(1)

    const amountChangeHandler = (event) => {
        setAmount(+event.target.value)
    }

    const addItemhandler = () => {

        const basketItem = {
            price,
            name,
            id,
            amount
        }
        addItemsBasket(basketItem)
    }

  return (
    <ContainerItems>
        <Container>
        <Name>{name}</Name>
      <Description>{description}</Description>
      <Price>{price}</Price>
        </Container>
        <ContainerUI>
            <ContainerAmount>
                <Price>Amount : </Price>
                <Input value={amount} onChange={amountChangeHandler} width="60px" type="number"/>
            </ContainerAmount>
            <Button onClick={addItemhandler} >ADD</Button>
        </ContainerUI>
    </ContainerItems>
  )
}

export default SummaryItemsRender


const ContainerItems = styled.div`
    width: 95%;
    height: 170px;
    border-bottom: 4px solid gray;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`

const Name = styled.h3`
    font-size: 25px;
    margin: 0;
`

const Description = styled.h3`
    font-size: 18px;
    margin: 0;
`

const Price = styled.h3`
    color: coral;
    font-size: 20px;
    margin: 0;
`

const ContainerUI = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    width: 180px;
    height: 100%;
`

const ContainerAmount = styled.div`
    width: 170px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
