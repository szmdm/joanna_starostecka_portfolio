import React from 'react'

import { 
    PCCLeft,
    PCCLeftOne,
    PCCLeftTwo,
 } from './PCCLeftContentTreeStyle'


const PCCLeftContentTree = ({...props}) => {
    return (
        <>
            <PCCLeft 
                backgroundColor={props.backgroundColorPCCRight}
                imgPCCLeft={props.imgPCCLeft}
                padding={props.padding}
            >
                <PCCLeftOne
                 color={props.color}
                 alignItems={props.PCCLeftOneAlign}
                 >
                    <h1>{props.titlePCCLeftOne}</h1>
                    <p>{props.textPCCLeftOne}</p>
                </PCCLeftOne>
                <PCCLeftTwo
                 color={props.color}
                 alignItemsTwo={props.PCCLeftTwoAlign}

                >
                    <h1>{props.titlePCCLeftTwo}</h1>
                    <p>{props.textPCCLeftTwo}</p>
                    {props.addComponentTwo}
                    {props.addComponentTree}
                    {props.addComponentOne}
                </PCCLeftTwo>
            </PCCLeft>
        </>
    )
}

export default PCCLeftContentTree