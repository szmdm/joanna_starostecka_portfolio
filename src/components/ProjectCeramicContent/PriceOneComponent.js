import React from 'react'
import styled from 'styled-components'

const PriceOneComponent = ({...props}) => {
  return (
    <>
        <PriceOne marginBottom={props.marginBottom} marginTop={props.marginTop}>
            20.00 &euro;
        </PriceOne>
    </>
  )
}

const PriceOne = styled.div `
    font-family: minion-pro, serif;
    font-style: normal;
    font-weight: 400;
    font-size: 2.5rem;
    font-size: clamp(2rem, 2.5rem, 3vw);
    text-transform: uppercase;
    color: #7E7367;
    margin-bottom: ${(props) => props.marginBottom};
    margin-top: ${(props) => props.marginTop};
    `

export default PriceOneComponent