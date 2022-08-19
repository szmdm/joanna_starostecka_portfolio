import React from 'react'

import {
    PCCLeft,
    PCCLeftOne,
    PCCLeftTwo,
} from './PCCLeftContentTwelveStyle'


const PCCLeftContentTwelve = ({ ...props }) => {
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
                    <p>
                        Studio ceramika dobro to moja warszawska,
                        autorska pracownia, gdzie powstaje
                        <span className='dots'>...</span>
                        <span className='restText'>
                            głównie ceramika użytkowa w pojedyńczych egzemplarzach lub krótkich seriach.
                            Pracownia znajduje się w malowniczym miejscu, na obrzeżach miasta, blisko sosnowego lasu, pod wydmą.
                            To osobiste wnętrze, pełne znaczących przedmiotów i dzieł innych twórców.
                        </span>
                    </p>
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
                    <p>
                        Studio ceramika dobro to moja warszawska,
                        autorska pracownia, gdzie powstaje
                        <span className='dots'>...</span>
                        <span className='restText'>
                            głównie ceramika użytkowa w pojedyńczych egzemplarzach lub krótkich seriach.
                            Pracownia znajduje się w malowniczym miejscu.
                        </span>
                    </p>
                    {props.addComponentTwo}
                    {props.addComponentFive}
                    {props.addComponentSeven}
                    {props.addComponentNineThird}
                    {props.addComponentTenSecond}

                </PCCLeftTwo>
            </PCCLeft>
        </>
    )
}

export default PCCLeftContentTwelve