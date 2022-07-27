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
            >
                <PCCLeftTwoInside imgPCCLeft={props.imgPCCLeft}>

                </PCCLeftTwoInside>
            </PCCLeft>
        </>
    )
}

export default PCCLeftContentTwo