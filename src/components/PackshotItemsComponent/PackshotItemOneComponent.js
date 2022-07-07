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

const PackshotItemOneComponent = ({ style }) => {
    return (
        <>
            <PackshotItemOne display={style}>
                <ItemOneViewBox>
                    <img src={PDSoftImg_04} alt='product front view'/>
                </ItemOneViewBox>
                <ItemOneContentBox>
                    <ItemOneContentTitle>
                        Soft Foundation 01 Ivory
                    </ItemOneContentTitle>
                    <ItemOneContentText>
                        Soft Makeup Foundation with Broad Spectrum SPF 20
                        to provide flawless, beautiful coverage across an array of
                        skin types and tones so your skin instantly looks its best.<p />
                        <br />
                        This lightweight, non-greasy liquid makeup glides on
                        smoothly for flawless application with a silky formula that
                        helps visibly improve skin's luminosity, tone & texture while
                        keeping it looking young and healthy<p />
                        <br />
                        Formulated with a unique blend of antioxidants including
                        vitamin E, the natural extract feverfew which is known for
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