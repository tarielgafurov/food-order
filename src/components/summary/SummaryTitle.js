import React, {memo} from 'react'
import styled from 'styled-components'

const SummaryTitle = ({clickHandler}) => { //props === {}

  console.log("summary com");

  clickHandler()

  return (
    <Container>
      <h1>Fast food is a type of mass-produced food designed  of service.</h1>
      <p>The fastest form of "fast food" consists of pre-cooked meals which reduce waiting periods to mere seconds.</p>
      <p>The fastest form of "fast food" consists of pre-cooked meals which reduce waiting periods to mere seconds.</p>
    </Container>
  )
}

export default memo(SummaryTitle)


const Container = styled.div`
    margin: auto;
    width: 45rem;
    height: 280px;
    border-radius: 15px;
    font-weight: 400;
    position: relative;
    padding: 10px;
    margin-top: -10rem;
    background-color: #383838;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    > p{
        font-size: 20px;
    }
`