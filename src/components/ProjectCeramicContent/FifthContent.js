import React from 'react'
import styled from 'styled-components'
import { mediaSize } from '../../variables/Mixins'

const FifthContent = ({ ...props }) => {
    return (
        <FifthContentBox
            margin={props.margin}
            rowFirstMargin={props.rowFirstMargin}
            topHeight={props.topHeight}
            rowFirstColumnTwoDisplay={props.rowFirstColumnTwoDisplay}
            rowSecondColumnTwoDisplay={props.rowFirstColumnTwoDisplay}
            rowFirstColumnOneBasis={props.rowFirstColumnOneBasis}
            rowFirstColumnOneFlexDirection={props.rowFirstColumnOneFlexDirection}
        >
            <div className='topContainer'>
                <h1>{props.title}</h1>
                <div className='rowFirst'>
                    <div className='rowFirstColumnOne'>
                        {props.addComponentOne}
                        {props.addComponentSix}
                        {props.addComponentSeven}
                        {props.addComponentEight}
                        {props.addComponentNine}
                    </div>
                    <div className='rowFirstColumnTwo'>
                        {props.addComponentTree}
                        {props.addComponentFive}
                    </div>
                </div>
            </div>
        </FifthContentBox>
    )
}

const FifthContentBox = styled.div`
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
            font-family: minion-pro, serif;
            font-style: normal;
            font-weight: 400;
            font-size: 2.5rem;
            font-size: clamp(2rem, 2.5rem, 3vw);
            text-transform: uppercase;
            color: #7E7367;
            margin-bottom: 35px;
        }
    }

    .rowFirst {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        gap: 60px;
        margin: ${(props) => props.rowFirstMargin};
        flex-wrap: wrap;
        

        .rowFirstColumnOne{
        display: flex;
        flex-basis: ${(props) => props.rowFirstColumnOneBasis};
        flex-direction: ${(props) => props.rowFirstColumnOneFlexDirection};
        gap: 23px;

            .textFirst {
                font-family: "Calibri";
                font-weight: 400;
                font-size: 1.06rem;
                font-size: clamp(0.6rem, 0.94rem, 3vw);
                color: #7E7367;
            }

        @media screen and (max-width: ${mediaSize}) {
            gap: 15px;
        }
        }
        .rowFirstColumnTwo {
        display: ${(props) => props.rowFirstColumnTwoDisplay};
        flex-basis: 211px;
        flex-direction: column;
        gap: 23px;

            .textFirst {
                font-family: "Calibri";
                font-weight: 400;
                font-size: 1.06rem;
                font-size: clamp(0.6rem, 0.94rem, 3vw);
                color: #7E7367;
            }

        @media screen and (max-width: ${mediaSize}) {
            gap: 15px;
        }
        }

    @media screen and (max-width: ${mediaSize}) {
        gap: 15px;
    }
    }   
    .rowSecond {
        display: flex;
        flex-basis: 211px;
        align-items: flex-start;
        justify-content: center;
        flex-direction: row;
        gap: 75px;

        .rowSecondColumnOne {
            display: flex;
            flex-basis: 211px;
            flex-direction: row;

            .textFirst {
                font-family: "Calibri";
                font-weight: 400;
                font-size: 1.06rem;
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
                font-size: 1.06rem;
                font-size: clamp(0.6rem, 0.94rem, 3vw);
                color: #7E7367;
            }
        }
    }
`

const RowFirstColumnOneText = styled.div`
    display: ${(props) => props.rowFirstColumnOneTextDisplay};
    font-family: "Calibri";
    font-weight: 400;
    font-size: 1.06rem;
    font-size: clamp(0.6rem, 0.94rem, 3vw);
    color: #7E7367;
`

const RowSecondColumnOneText = styled.div`
    display: ${(props) => props.rowSecondColumnOneTextDisplay};
    font-family: "Calibri";
    font-weight: 400;
    font-size: 1.06rem;
    font-size: clamp(0.6rem, 0.94rem, 3vw);
    color: #7E7367;
`

export default FifthContent