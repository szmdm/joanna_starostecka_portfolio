import React from 'react'
import styled from 'styled-components'
import { mediaSize, mobileLMediaSize } from '../../variables/Mixins';

const ColorComponent = ({ ...props }) => {
    return (
        <>
            <Color 
                border={props.border} 
                backgroundColor={props.backgroundColor} 
                text={props.text} 
                hexColor={props.hexColor} 
            />
            <ColorContent>
                <p>{props.text}</p>
                <span>{props.hexColor}</span>
            </ColorContent>
        </>
    )
}

const Color = styled.div`
    height: 89px;
    width: 207px;
    border: ${(props) => props.border};
    background-color: ${(props) => props.backgroundColor};

    @media screen and (max-width: ${mediaSize}) {
        width: 130px;
        margin-right: 20px; 
    }
`;

const ColorContent = styled.div`
        
        height: auto;
        margin-bottom: 35px;

        p {
            margin-top: 25px;
            margin-bottom: 0px;
            color: #7E7367;
            font-family: 'Minion Pro';
            font-style: normal;
            font-weight: 400;
            font-size: 25px;
            line-height: 105.5%;
        }

        span {
            margin-top: 25px;
            margin-bottom: 10px;
            color: #7E7367;
            font-family: 'Calibri';
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 144%;
        }
`

export default ColorComponent