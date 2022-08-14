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
                    <p>
                        Studio ceramika dobro to moja warszawska,
                        autorska pracownia, gdzie
                        <span className='dots'>...</span>
                        <span className='restText'>
                            powstaje
                            głównie ceramika użytkowa w pojedyńczych egzemplarzach lub krótkich seriach.
                            Pracownia znajduje się w malowniczym miejscu, na obrzeżach miasta, blisko sosnowego lasu, pod wydmą.
                            To osobiste wnętrze, pełne znaczących przedmiotów i dzieł innych twórców.
                        </span>
                    </p>
                    <ContactUsButton margin='30px 0 30px 0' />
                </PCCRightOne>
                <PCCRightTwo>
                    <p>
                        Studio ceramika dobro to moja warszawska,
                        autorska pracownia,gdzie powstaje głównie ceramika użytkowa w pojedyńczych egzemplarzach lub krótkich seriach.
                        Pracownia znajduje się w malowniczym miejscu, na obrzeżach miasta, blisko sosnowego lasu, pod wydmą.
                        To osobiste wnętrze, pełne znaczących przedmiotów i dzieł innych twórców.
                    </p>
                    <img src={PCCRightTwoImg_01} alt="/" />
                </PCCRightTwo>
            </PCCRight>
        </>
    )
}

export default PCCRightContentTwo