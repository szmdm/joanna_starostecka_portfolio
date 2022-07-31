import React from 'react'

import { 
    PCCLeft,
    PCCLeftTwoInside,
 } from './PCCLeftContentTwoStyle'

const PCCLeftContentTwo = ({...props}) => {
    return (
        <>
            <PCCLeft 
                backgroundColor={props.backgroundColorPCCLeft}
                borderBottomDirection={props.borderBottomDirection}
                borderRight={props.PCCLeftBorderRight}
            >
                <PCCLeftTwoInside 
                    imgPCCLeft={props.imgPCCLeft} 
                    width={props.width} 
                    height={props.height}>

                </PCCLeftTwoInside>
                {props.addComponentEight}
            </PCCLeft>
        </>
    )
}

export default PCCLeftContentTwo