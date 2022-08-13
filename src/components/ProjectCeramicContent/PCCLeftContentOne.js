import React from 'react'

import {
    PCCLeft,
    PCCLeftOne,
    PCCLeftTwo,
} from './PCCLeftContentOneStyle'

import PCCLeftOneImg_01 from '../../assets/projectsDone/pDCeramicStudio/Logo_2.png'

const PCCLeftContentOne = ({ ...props }) => {


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
                </PCCLeftOne>
                <PCCLeftTwo>
                    <h1>{props.titlePCCLeftTwo}</h1>
                    <p>
                        Studio ceramika dobro to moja warszawska,
                        autorska pracownia,gdzie powstaje głównie ceramika użytkowa w pojedyńczych egzemplarzach lub krótkich seriach.
                        Pracownia znajduje się w malowniczym miejscu, na obrzeżach miasta, blisko sosnowego lasu, pod wydmą.
                        To osobiste wnętrze, pełne znaczących przedmiotów i dzieł innych twórców.
                    </p>
                </PCCLeftTwo>
            </PCCLeft>
        </>
    )
}

export default PCCLeftContentOne