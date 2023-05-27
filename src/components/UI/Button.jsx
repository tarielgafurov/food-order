import React from 'react'
import styled from 'styled-components'

const Button = ({children , onClick}) => {
  return (
    <StyledButton onClick={onClick} >{children}</StyledButton>
  )
}

export default Button


const StyledButton = styled.button`
    padding: 11px 25px;
    background-color: coral;
    border-radius: 10px;
    border: none;
    &:hover{
        background-color: #462003;
        color: white;
        transform: scale(1.1);
        transition-duration: 0.5s;
    }
    &:active{
        transform: scale(1.3);
        transition-duration: 0.5s;
        background-color: coral;
    }
`