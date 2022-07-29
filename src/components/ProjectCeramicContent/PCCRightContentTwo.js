import React from 'react'
import ContactUsButton from './ContactUsButton';
import PCCRightTwoImg_01 from '../../assets/projectsDone/pDCeramicStudio/Component_34.png';

import {
    PCCRight,
    PCCRightOne,
    PCCRightTwo,
} from './PCCRightContentTwoStyle'

const PCCRightContentTwo = ({ ...props }) => {
    return (
        <>
            <PCCRight
                backgroundColor={props.backgroundColorPCCRight}
            >
                <PCCRightOne>
                    <h1>{props.titlePCCRightOne}</h1>
                    <p>{props.textPCCRightOne}</p>
                    <ContactUsButton margin='30px 0 30px 0'/>
                </PCCRightOne>
                <PCCRightTwo>
                    <p>{props.textPCCRightTwo}</p>
                    <img src={PCCRightTwoImg_01} alt="/" />
                </PCCRightTwo>
            </PCCRight>
        </>
    )
}

export default PCCRightContentTwo