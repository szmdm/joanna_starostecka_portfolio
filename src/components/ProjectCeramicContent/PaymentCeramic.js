import React from 'react'
import styled from 'styled-components'

const PaymentCeramic = ({...props}) => {
  return (
    <Payment>
        {<img src={props.img} alt="/" />}
    </Payment>
  )
}


const Payment = styled.div`
    width: 100%;
    height: auto;
    padding: 7px;
`


export default PaymentCeramic