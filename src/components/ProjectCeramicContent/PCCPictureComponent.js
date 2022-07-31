import React from 'react'
import styled from 'styled-components'


const PCCPictureComponent = ({ ...props }) => {
    return (
        <Picture 
            width={props.width} 
            padding={props.padding} 
            margin={props.margin} 
            position={props.position} 
            >
            <img src={props.image} alt="/" />
        </Picture>
    )
}

const Picture = styled.div`
    position: ${(props) => props.position};
    height: auto;
    width: ${(props) => props.width};
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};


`

export default PCCPictureComponent