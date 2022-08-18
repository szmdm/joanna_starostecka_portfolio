import React from 'react'
import styled from 'styled-components'

import { ceramicBasis, mediaSize } from '../../variables/Mixins';

const FourthContent = ({ ...props }) => {
    return (
        <FourthContentBox
            margin={props.margin}
            marginMediaSize={props.marginMediaSize}
            marginCeramicBasic={props.marginCeramicBasic}
            rowFirstMargin={props.rowFirstMargin}
            topHeight={props.topHeight}
            topHeightMediaSize={props.topHeightMediaSize}
            rowFirstColumnTwoDisplay={props.rowFirstColumnTwoDisplay}
            rowSecondColumnTwoDisplay={props.rowFirstColumnTwoDisplay}
        >
            <div className='topContainer'>
                <h1>{props.title}</h1>
                <div className='rowFirst'>
                    <div className='rowFirstColumnOne'>
                        <RowFirstColumnOneText
                            rowFirstColumnOneTextDisplay={props.rowFirstColumnOneTextDisplay}
                            rowFirstColumnOneText={props.rowFirstColumnOneText}
                        >
                            {props.rowFirstColumnOneText}
                        </RowFirstColumnOneText>
                        {props.addComponentOne}
                        {props.addComponentSix}
                    </div>
                    <div className='rowFirstColumnTwo'>
                        <img src={props.image} alt="/" />
                        <div className='textFirst'>{props.rowFirstTextSecond}</div>
                    </div>
                </div>

                <div className='rowSecond'>
                    <div className='rowSecondColumnOne'>
                        <RowSecondColumnOneText
                            rowSecondColumnOneTextDisplay={props.rowSecondColumnOneTextDisplay}
                            rowSecondColumnOneText={props.rowSecondColumnOneText}
                        >
                            {props.rowSecondColumnOneText}
                        </RowSecondColumnOneText>
                    </div>
                    <div className='rowSecondColumnTwo'>
                        <div className='textSecond'>{props.rowSecondTextSecond}</div>
                    </div>
                </div>
            </div>
        </FourthContentBox>
    )
}

const FourthContentBox = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: ${(props) => props.margin};
    width: 100%;

    .topContainer {
        display: flex;
        flex-direction: column;
        height: ${(props) => props.topHeight};
        width: 100%;

        h1 {
            width: 225px;
            font-family: minion-pro, serif;
            font-style: normal;
            font-weight: 400;
            font-size: 2.5rem;
            /* font-size: clamp(2rem, 2.5rem, 3vw); */
            text-transform: uppercase;
            color: #7E7367;
            margin-bottom: 35px;
        }

    @media screen and (max-width: ${mediaSize}) {
        height: ${props => props.topHeightMediaSize};
    }
    }

    .rowFirst {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        gap: 75px;
        margin: ${(props) => props.rowFirstMargin};

        

        .rowFirstColumnOne{
        display: flex;
        flex-basis: 211px;
        flex-direction: row;
        gap: 75px;

            .textFirst {
                font-family: "Calibri";
                font-weight: 400;
                font-size: 0.94rem;
                font-size: clamp(0.6rem, 0.94rem, 3vw);
                color: #7E7367;

            }
        }
        .rowFirstColumnTwo {
        display: ${(props) => props.rowFirstColumnTwoDisplay};
        flex-basis: 211px;
        flex-direction: row;
        gap: 75px;

            .textFirst {
                font-family: "Calibri";
                font-weight: 400;
                font-size: 0.94rem;
                /* font-size: clamp(0.6rem, 0.94rem, 3vw); */
                color: #7E7367;
            }

        @media screen and (max-width: ${mediaSize}) {
            display: none;
        }
        }
    }   
    .rowSecond {
        display: flex;
        flex-basis: 211px;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: row;
        gap: 75px;

        .rowSecondColumnOne {
            display: flex;
            flex-basis: 211px;
            flex-direction: row;
            gap: 75px;

            .textFirst {
                font-family: "Calibri";
                font-weight: 400;
                font-size: 0.94rem;
                font-size: clamp(0.6rem, 0.94rem, 3vw);
                color: #7E7367;
            }
        }
        .rowSecondColumnTwo {
            display: flex;
            flex-basis: 211px;
            flex-direction: row;
            gap: 75px;


            .textSecond {
                font-family: "Calibri";
                font-weight: 400;
                font-size: 0.94rem;
                /* font-size: clamp(0.6rem, 0.94rem, 3vw); */
                color: #7E7367;
            }

        @media screen and (max-width: ${mediaSize}) {
            display: none;
        }
        }
    }

@media screen and (max-width: ${mediaSize}) {
    margin: ${props => props.marginMediaSize};
}
@media screen and (min-width: ${mediaSize}) and (max-width: ${ceramicBasis}) {
    margin: ${props => props.marginCeramicBasic};
}
`

const RowFirstColumnOneText = styled.div`
    display: ${(props) => props.rowFirstColumnOneTextDisplay};
    font-family: "Calibri";
    font-weight: 400;
    font-size: 0.94rem;
    /* font-size: clamp(0.6rem, 0.94rem, 3vw); */
    color: #7E7367;
    
    .divTextFirst {
        font-size: 1.25rem;
        font-size: clamp(0.9rem, 1.25rem, 3vw);
    }
`

const RowSecondColumnOneText = styled.div`
    display: ${(props) => props.rowSecondColumnOneTextDisplay};
    font-family: "Calibri";
    font-weight: 400;
    font-size: 0.94rem;
    /* font-size: clamp(0.6rem, 0.94rem, 3vw); */
    color: #7E7367;

    .divTextFirst {
        font-size: 1.25rem;
        font-size: clamp(0.9rem, 1.25rem, 3vw);
    }
`

export default FourthContent