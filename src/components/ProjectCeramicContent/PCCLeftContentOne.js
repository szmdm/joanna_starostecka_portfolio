import React from 'react'

import { 
    PCCLeft,
    PCCLeftOne,
    PCCLeftTwo,
 } from './PCCLeftContentOneStyle'

const PCCLeftContentOne = ({...props}) => {
    return (
        <>
            <PCCLeft 
                backgroundColor={props.backgroundColorPCCLeft}
                imgPCCLeft={props.imgPCCLeft}
                padding={props.padding}
            >
                <PCCLeftOne>
                    <h1>{props.titlePCCLeftOne}</h1>
                    <p>{props.textPCCLeftOne}</p>
                </PCCLeftOne>
                <PCCLeftTwo>
                    <h1>{props.titlePCCLeftTwo}</h1>
                    <p>{props.textPCCLeftTwo}</p>
                </PCCLeftTwo>
            </PCCLeft>
        </>
    )
}

export default PCCLeftContentOne