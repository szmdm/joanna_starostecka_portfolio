import React from 'react'

import PDSoftImg_04 from '../../assets/projectsDone/pDSoft/packshot_module02_01.png'
import PDSoftImg_09 from '../../assets/projectsDone/pDSoft/packshotItem/rank_01.png'

import {
    PackshotItemOne,
    ItemOneViewBox,
    ItemOneContentBox,
    ItemOneContentTitle,
    ItemOneContentText,
    ItemOneRank,
    ItemOneShopButtons,
    ItemOneButton,
    ItemOnePages,
}
from '../PackshotItemsComponent/PackshotItemOneComponentStyle'

const PackshotItemOneComponent = () => {
    return (
        <>
            <PackshotItemOne>
                <ItemOneViewBox>
                    <img src={PDSoftImg_04} alt='product front view'/>
                </ItemOneViewBox>
                <ItemOneContentBox>
                    <ItemOneContentTitle>
                        Soft Foundation 01 Ivory
                    </ItemOneContentTitle>
                    <ItemOneContentText>
                        Soft Makeup Foundation with Broad Spectrum SPF 20<br />
                        to provide flawless, beautiful coverage across an array of<br />
                        skin types and tones so your skin instantly looks its best.<p />
                        <br />
                        This lightweight, non-greasy liquid makeup glides on<br />
                        smoothly for flawless application with a silky formula that<br />
                        helps visibly improve skin's luminosity, tone & texture while<br />
                        keeping it looking young and healthy<p />
                        <br />
                        Formulated with a unique blend of antioxidants including<br />
                        vitamin E, the natural extract feverfew which is known for<br />
                        its calming properties, and skin-enhancing natural soy

                        <div>see all shades</div>
                    </ItemOneContentText>
                    <ItemOneRank>
                        <img src={PDSoftImg_09} alt='/'/>
                    </ItemOneRank>
                    <ItemOnePages>
                        -        2        +
                    </ItemOnePages>
                    <ItemOneShopButtons>
                        <ItemOneButton borderColor="grey">
                            add to card
                        </ItemOneButton>
                        <ItemOneButton borderColor="black">
                            buy now
                        </ItemOneButton>
                    </ItemOneShopButtons>
                </ItemOneContentBox>
            </PackshotItemOne>
        </>
    )
}

export default PackshotItemOneComponent