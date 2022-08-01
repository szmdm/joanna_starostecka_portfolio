import React from 'react'
import styled from 'styled-components'

import PCCRightTwoImg_01 from '../../assets/projectsDone/pDCeramicStudio/Component_34.png';

const FourthContent = ({ ...props }) => {
    return (
        <FourthContentBox
        >
            <div className='topContainer'>
                <h1>{props.title}</h1>
                <div className='rowFirst'>
                    <div className='rowFirstColumnOne'>
                        {props.addComponentOne}
                    </div>
                    <div className='rowFirstColumnTwo'>
                        <img src={props.image} alt="/" />
                        <div className='textFirst'>{props.rowFirstTextSecond}</div>
                    </div>
                </div>

                <div className='rowSecond'>
                    <div className='rowSecondColumnOne'>
                        <div className='textFirst'>{props.rowSecondTextFirst}</div>
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

    .topContainer {
        display: flex;
        flex-direction: column;

        h1 {
            font-family: minion-pro, serif;
            font-style: normal;
            font-weight: 400;
            font-size: 2.5rem;
            font-size: clamp(2rem, 2.5rem, 3vw);
            text-transform: uppercase;
            color: #7E7367;
            margin-bottom: 15px;
        }
    }

    .rowFirst {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: row;
        

        .rowFirstColumnOne{
        display: flex;
        flex-basis: 211px;
        flex-direction: row;
        gap: 75px;

            .textFirst {
                font-family: "Calibri";
                font-weight: 400;
                font-size: 1.06rem;
                font-size: clamp(0.6rem, 0.94rem, 3vw);
                color: #7E7367;
            }
        }
        .rowFirstColumnTwo{
        display: flex;
        flex-basis: 211px;
        flex-direction: row;
        gap: 75px;

            .textFirst {
                font-family: "Calibri";
                font-weight: 400;
                font-size: 1.06rem;
                font-size: clamp(0.6rem, 0.94rem, 3vw);
                color: #7E7367;
            }
        }
    }   
    .rowSecond {
        display: flex;
        flex-basis: 211px;
        align-items: flex-start;
        justify-content: center;
        flex-direction: row;

        .rowSecondColumnOne {
            display: flex;
            flex-basis: 211px;
            flex-direction: row;
            gap: 75px;

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

export default FourthContent