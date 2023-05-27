import React from 'react'
import styled from 'styled-components'

const Input = (props) => {
  return (
    <StyledInput value={props.value} style={props} type={props.type} onChange={props.onChange} min="1" max="5"/>
  )
}

export default Input


const StyledInput = styled.input`
    width: ${(props) => props.width || "120px"};
    height: ${(props) => props.height || "30px"};
    border: 2px solid gray; 
    outline: none;
    border-radius: 8px;
    font-size: 18px;
    text-align: center;
`
