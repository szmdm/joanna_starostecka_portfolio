import React from 'react'

import {
    PCCLeft,
    PCCLeftOne,
    PCCLeftTwo,
} from './PCCLeftContentThirteenStyle'


const PCCLeftContentThirteen = ({ ...props }) => {
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
                    <div className='colorBox'>
                    <p>{props.textPCCLeftOne}</p>
                    {props.addComponentNine}
                    </div>
                    <div className='colorBox'>
                    {props.addComponentNineSecond}
                    </div>
                </PCCLeftOne>
                <PCCLeftTwo
                    color={props.color}
                    alignItems={props.PCCLeftOneAlign}
                    margin={props.PCCLeftTwoMargin}
                    PCCLeftTwoJustify={props.PCCLeftTwoJustify}
                >
                    {props.addComponentSix}
                    <div className='colorBox'>
                    <p>{props.textPCCLeftTwo}</p>
                    {props.addComponentNineThird}
                    </div>
                    
                </PCCLeftTwo>
            </PCCLeft>
        </>
    )
}

export default PCCLeftContentThirteen