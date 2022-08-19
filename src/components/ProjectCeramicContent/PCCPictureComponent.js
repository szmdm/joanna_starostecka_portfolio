import React from 'react'
import styled from 'styled-components'
import { mediaSize } from '../../variables/Mixins'


const PCCPictureComponent = ({ ...props }) => {
    return (
        <Picture 
            width={props.width} 
            height={props.height} 
            widthMediaSize={props.widthMediaSize} 
            heightMediaSize={props.heightMediaSize} 
            padding={props.padding} 
            margin={props.margin} 
            position={props.position} 
            image={props.image}
            >
            {/* <img src={props.image} alt="/" /> */}
        </Picture>
    )
}

const Picture = styled.div`
    position: ${(props) => props.position};
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};
    background-image: url(${(props) => props.image});
    background-repeat: no-repeat;
    background-size: cover;

@media screen and (max-width: ${mediaSize}) {
    height: ${(props) => props.heightMediaSize};
    width: ${(props) => props.widthMediaSize};
}

`

export default PCCPictureComponent