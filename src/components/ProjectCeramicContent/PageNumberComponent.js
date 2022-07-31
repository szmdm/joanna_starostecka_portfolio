import React from 'react'
import styled from 'styled-components'

const PageNumberComponent = ({...props}) => {

    let number = '<    1    >'
    
  return (
    <>
        <PageNumber>
            <p>{number}</p>
        </PageNumber>
    </>
  )
}

const PageNumber = styled.div`
    font-family: "Calibri";
    font-weight: 400;
    font-size: 1.06rem;
    font-size: clamp(0.6rem, 0.94rem, 3vw);
    color: ${(props) => props.color};
    white-space: pre;
`

export default PageNumberComponent