import React from 'react'
import styled from 'styled-components'

const FormCeramic = ({...props}) => {
  return (
    <Form>
        {props.text}
    </Form>
  )
}


const Form = styled.div`
    width: 100%;
    height: auto;
    padding: 7px;
    border: 1px solid #CBC9C6;
    font-size: clamp(0.6rem, 0.94rem, 3vw);
    font-family: "Calibri";
    font-weight: 400;
    font-size: 1.06rem;
    color: #7E7367;
`


export default FormCeramic