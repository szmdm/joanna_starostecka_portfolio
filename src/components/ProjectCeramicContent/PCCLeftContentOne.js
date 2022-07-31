import React from 'react'

import { 
    PCCLeft,
    PCCLeftOne,
    PCCLeftTwo,
 } from './PCCLeftContentOneStyle'

 import PCCLeftOneImg_01 from '../../assets/projectsDone/pDCeramicStudio/Logo_2.png'

const PCCLeftContentOne = ({...props}) => {
    return (
        <>
            <PCCLeft 
                backgroundColor={props.backgroundColorPCCLeft}
                imgPCCLeft={props.imgPCCLeft}
                padding={props.padding}
            >
                <PCCLeftOne>
                    <div className='menu'>
                        <span />
                        <span />
                        <span />
                    </div>
                    <img src={PCCLeftOneImg_01} alt="logo dobro ceramics" />
                    <h1>{props.titlePCCLeftOne}</h1>
                    <p>{props.textPCCLeftOne}</p>
                </PCCLeftOne>
                <PCCLeftTwo>
                    <h1>{props.titlePCCLeftTwo}</h1>
                    <p>{props.textPCCLeftTwo}</p>
                </PCCLeftTwo>
            </PCCLeft>
        </>
    )
}

export default PCCLeftContentOne