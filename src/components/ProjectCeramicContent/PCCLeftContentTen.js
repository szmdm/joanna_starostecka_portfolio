import React from 'react'
import ContactUsButton from './ContactUsButton';

import {
    PCCLeft,
    PCCLeftOne,
    PCCLeftTwo,
} from './PCCLeftContentTenStyle'


const PCCLeftContentTen = ({ ...props }) => {

    let text_1 = '< 1 >';

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
                        <span className='dots'>{text_1}</span>
                        <span className='restText'>
                            Studio ceramika dobro to moja warszawska,
                            autorska pracownia, gdzie powstaje
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
                    <div className='contactButton'>
                    <ContactUsButton margin='20px 0 20px 0' />
                    </div>
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
                        autorska pracownia, gdzie
                        <span className='dots'>...</span>
                        <span className='restText'>
                            powstaje
                            głównie ceramika użytkowa w pojedyńczych egzemplarzach lub krótkich seriach.
                            Pracownia znajduje się w malowniczym miejscu, na obrzeżach miasta, blisko sosnowego lasu, pod wydmą.
                            To osobiste wnętrze, pełne znaczących przedmiotów i dzieł innych twórców.
                        </span>
                    </p>
                    {props.addComponentTwo}
                    {props.addComponentFive}
                    {props.addComponentSeven}
                    {props.addComponentNineThird}
                    {props.addComponentTenSecond}
                    <ContactUsButton margin='30px 0 30px 0' />
                </PCCLeftTwo>
            </PCCLeft>
        </>
    )
}

export default PCCLeftContentTen