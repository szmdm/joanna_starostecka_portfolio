import React from 'react'
import styled from 'styled-components'

const FontComponent = ({ ...props }) => {
    return (
        <>
            <FontContent
                text={props.text}
                fontFamilySpan={props.fontFamilySpan} 
                fontFamily={props.fontFamily}
            >
                <p>{props.text}</p>
                <div className='subText'>{props.fontType}</div>
            </FontContent>
        </>
    )
}

const FontContent = styled.div`
    height: 89px;
    width: 207px;
    border: ${(props) => props.border};
    background-color: ${(props) => props.backgroundColor};
    

        p {
            margin-top: 25px;
            margin-bottom: 0px;
            color: #7E7367;
            font-family: ${(props) => props.fontFamily};
            font-style: ${(props) => props.fontStyle};
            font-weight: ${(props) => props.fontWeight};
            font-size: 40px;
            font-size: clamp(2rem,2.5rem,3vw);
            line-height: 105.5%;
        }

        .subText {
            margin-top: 25px;
            margin-bottom: 10px;
            color: #7E7367;
            font-family: ${(props) => props.fontFamilySpan};
            font-style: ${(props) => props.fontStyleSpan};
            font-weight: ${(props) => props.fontWeightSpan};
            font-size: 15px;
            font-size: clamp(0.8rem,0.93rem,3vw);
            line-height: 105.5%;
        }
`

export default FontComponent