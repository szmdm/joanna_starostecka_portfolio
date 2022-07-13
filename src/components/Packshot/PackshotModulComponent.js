import React, { useState, useContext } from 'react'
import {
    PackshotModul,
    Packshot,
    PackshotButton,
} from './packshotModulComponentStyle'

import PDSoftImg_04 from '../../assets/projectsDone/pDSoft/packshot_module02_01.png'
import PDSoftImg_05 from '../../assets/projectsDone/pDSoft/packshot_module02_02.png'
import PDSoftImg_06 from '../../assets/projectsDone/pDSoft/packshot_module02_03.png'
import PDSoftImg_07 from '../../assets/projectsDone/pDSoft/packshot_module02_04.png'
import PDSoftImg_08 from '../../assets/projectsDone/pDSoft/packshot_module02_05.png'


const PackshotModulComponent = ({ packshotTrigger, packshotTriggerTwo, displayStatus }) => {

    



    return (
        <>
            <PackshotModul displayStatus={displayStatus}>
                <Packshot >
                    <img src={PDSoftImg_04} alt="/" />
                    <PackshotButton onClick={packshotTrigger} />
                </Packshot>
                <Packshot >
                    <img src={PDSoftImg_05} alt="/" />
                    <PackshotButton onClick={packshotTriggerTwo}/>
                </Packshot>
                <Packshot >
                    <img src={PDSoftImg_06} alt="/" />
                    <PackshotButton />
                </Packshot>
                <Packshot >
                    <img src={PDSoftImg_07} alt="/" />
                    <PackshotButton />
                </Packshot>
                <Packshot >
                    <img src={PDSoftImg_08} alt="/" />
                    <PackshotButton />
                </Packshot>
            </PackshotModul>
        </>
    )
}

export default PackshotModulComponent