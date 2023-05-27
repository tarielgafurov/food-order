import React from 'react'
import styled from 'styled-components'
import Button from '../UI/Button'

const TotalAmount = ({price , onOrder , onClose}) => {
  return (
    <GlobalContainer>
       <ContainerInfo>
         <b>Total Amount</b>
         <b>$ {price}</b>
       </ContainerInfo>
       <ActionsContainer>
         <Button onClick={onClose} >Close</Button>
         <Button onClick={onOrder} >Order</Button>
       </ActionsContainer>
     </GlobalContainer>
  )
}

         {/* {price > 0 && <Button onClick={onOrder} >Order</Button>} */}
         {/* {price > 0 && <Button onClick={onOrder} >Order</Button>} */}

export default TotalAmount


const GlobalContainer = styled.div`
    padding: 12px;
`

const ContainerInfo = styled.div`
    display: flex;
    justify-content: space-between;
`

const ActionsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    margin-top: 20px;
`
