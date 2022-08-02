import React from 'react'

import {
    PCCLeft,
    PCCLeftOne,
    PCCLeftTwo,
} from './PCCLeftContentFourStyle'


const PCCLeftContentFour = ({ ...props }) => {
    return (
        <>
            <PCCLeft
                backgroundColor={props.backgroundColorPCCRight}
                imgPCCLeft={props.imgPCCLeft}
                padding={props.padding}
                borderRight={props.PCCLeftBorderRight}
                borderBottomDirection={props.borderBottomDirection}
                
                
            >
                {props.addComponentOne}
                {props.addComponentTwo}
            </PCCLeft>
        </>
    )
}

export default PCCLeftContentFour