import React from 'react'

import {
    PCCRight,
    PCCRightOne,
    PCCRightTwo,
} from './PCCRightContentOneStyle'

const PCCRightContentOne = ({ ...props }) => {
    return (
        <>
            <PCCRight imgPCCRight={props.imgPCCRight}>
                <PCCRightOne>

                </PCCRightOne>
                <PCCRightTwo>

                </PCCRightTwo>
            </PCCRight>
        </>
    )
}

export default PCCRightContentOne