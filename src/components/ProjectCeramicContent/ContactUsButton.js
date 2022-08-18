import React from 'react'
import styled from 'styled-components'

const ContactUsButton = ({ ...props }) => {
  return (
    <>
      <Button
        margin={props.margin}
      >
        contact us
      </Button>
    </>
  )
}

const Button = styled.div`
    display: block;
    text-align: center;
    width: 100%;
    height: auto;
    background-color: #3e4136;
    padding: 6px;
    font-family: "Calibri";
    font-weight: 400;
    font-size: 0.94rem;
    /* font-size: clamp(0.6rem, 0.94rem, 3vw); */
    color: #FFFFFF;
    margin: ${(props) => props.margin}
`;


export default ContactUsButton