import React from 'react'

import {
    PCCLeft,
    PCCLeftOne,
    PCCLeftTwo,
} from './PCCLeftContentTreeStyle'


const PCCLeftContentTree = ({ ...props }) => {
    return (
        <>
            <PCCLeft
                backgroundColor={props.backgroundColorPCCRight}
                imgPCCLeft={props.imgPCCLeft}
                padding={props.padding}
                borderRight={props.PCCLeftBorderRight}
                borderBottomDirection={props.borderBottomDirection}
                
                
            >
                <PCCLeftOne
                    color={props.color}
                    alignItems={props.PCCLeftOneAlign}
                    margin={props.PCCLeftOneMargin}
                    PCCLeftOneJustify={props.PCCLeftOneJustify}

                >
                    <h1>{props.titlePCCLeftOne}</h1>
                    {props.addComponentFour}
                    <p>{props.textPCCLeftOne}</p>
                    {props.addComponentTwo}
                    {props.addComponentFive}
                    {props.addComponentNine}
                    {props.addComponentNineSecond}
                    {props.addComponentTen}
                </PCCLeftOne>
                <PCCLeftTwo
                    color={props.color}
                    alignItems={props.PCCLeftOneAlign}
                    margin={props.PCCLeftTwoMargin}
                    PCCLeftTwoJustify={props.PCCLeftTwoJustify}
                >
                    <h1>{props.titlePCCLeftTwo}</h1>
                    {props.addComponentSix}
                    <p>{props.textPCCLeftTwo}</p>
                    {props.addComponentTwo}
                    {props.addComponentSeven}
                    {props.addComponentNineThird}
                    {props.addComponentTenSecond}
                    
                </PCCLeftTwo>
            </PCCLeft>
        </>
    )
}

export default PCCLeftContentTree