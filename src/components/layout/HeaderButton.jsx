import React from 'react'
import styled from 'styled-components'
import { SlBasket } from "react-icons/sl"

const HeaderButton = ({className,count , ...restProps}) => {
  return (
    <Conrtainer className={className} {...restProps} >
      <SlBasket/>
      <b>Your Card</b>
      <b>{count}</b>
    </Conrtainer>
  )
}

export default HeaderButton

const Conrtainer = styled.div`
    border: 2px solid white;
    width: 240px;
    height: 55px;
    font-size: 20px;
    background-color: #696868;
    color: white;
    padding: 0px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    border: none;
    &:hover{
        background-color: #242323;
    }
    .bump{
            animation: bump 300ms ease-out;
        }
        @keyframes bump {
            0% {
                transform: scale(1);
            }
            10% {
                transform: scale(0.9);
            }
            30% {
                transform: scale(1.1);
            }
            50% {
                transform: scale(1.15);
            }
            100% {
                transform: scale(1);
            }
        }
`
