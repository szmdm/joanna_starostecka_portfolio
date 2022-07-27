import React from 'react'

import {
    PCCRight,
    PCCRightOne,
    PCCRightTwo,
} from './PCCRightContentTwoStyle'

const PCCRightContentTwo = ({ ...props }) => {
    return (
        <>
            <PCCRight>
                <PCCRightOne>
                    <h1>{props.titlePCCRightOne}</h1>
                    <p>{props.textPCCRightOne}</p>
                </PCCRightOne>
                <PCCRightTwo>
                    <p>{props.textPCCRightTwo}</p>
                </PCCRightTwo>
            </PCCRight>
        </>
    )
}

export default PCCRightContentTwo