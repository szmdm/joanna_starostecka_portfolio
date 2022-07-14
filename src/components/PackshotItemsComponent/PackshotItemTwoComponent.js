import React from 'react'

import PDSoftImg_10 from '../../assets/projectsDone/pDSoft/packshotItem/Elipse_1.png'
import PDSoftImg_11 from '../../assets/projectsDone/pDSoft/packshotItem/packshot_module02_view01_pack01.png'
import PDSoftImg_12 from '../../assets/projectsDone/pDSoft/packshotItem/packshot_module02_view01_pack02.png'
import PDSoftImg_13 from '../../assets/projectsDone/pDSoft/packshotItem/packshot_module02_view01_cap.png'

import {
    PackshotItemTwo,
    PackshotItemTwoContent,
    PackshotItemTwoText,
    PackshotItemTwoImages,
    PackshotItemTwoImage,
}
    from '../PackshotItemsComponent/PackshotItemTwoComponentStyle'

const PackshotItemTwoComponent = () => {
    return (
        <>
            <PackshotItemTwo>
                <PackshotItemTwoContent>
                    <PackshotItemTwoText>
                        <div className='number'>5</div>
                        <div className='under-number'>shades</div>
                    </PackshotItemTwoText>
                    <PackshotItemTwoImages>
                        <PackshotItemTwoImage>
                            <img className='img PDSoftImg_10'src={PDSoftImg_10} alt="/" />
                            <img className='img PDSoftImg_11' src={PDSoftImg_11} alt="/" />
                            <img className='img PDSoftImg_12' src={PDSoftImg_12} alt="/" />
                            <img className='PDSoftImg_13' src={PDSoftImg_13} alt="/" />
                        </PackshotItemTwoImage>

                    </PackshotItemTwoImages>
                    <div className='shades'>see all shades</div>
                </PackshotItemTwoContent>
            </PackshotItemTwo>
        </>
    )
}

export default PackshotItemTwoComponent