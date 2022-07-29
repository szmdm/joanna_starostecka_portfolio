import React from 'react';
import PCCLeftContentOne from '../ProjectCeramicContent/PCCLeftContentOne';
import PCCLeftContentTwo from '../ProjectCeramicContent/PCCLeftContentTwo';
import PCCRightContentOne from '../ProjectCeramicContent/PCCRightContentOne';
import PCCRightContentTwo from '../ProjectCeramicContent/PCCRightContentTwo';
import PCCLeftContentTree from '../ProjectCeramicContent/PCCLeftContentTree';

import PDCeramicImg_01 from "../../assets/projectsDone/pDCeramicStudio/Image_001.png"
import PDCeramicImg_02 from "../../assets/projectsDone/pDCeramicStudio/Image_002.png"


import {
    ProjectCeramicContainer,
} from './ProjectCeramicStyle';
import ContactUsButton from '../ProjectCeramicContent/ContactUsButton';
import PriceOneComponent from '../ProjectCeramicContent/PriceOneComponent';
import PageNumberComponent from '../ProjectCeramicContent/PageNumberComponent';

const ProjectCeramic = () => {

    return (
        <>
            <div className='overall'>
                <ProjectCeramicContainer>
                    <PCCLeftContentOne
                        backgroundColorPCCLeft='#3e4136'
                        titlePCCLeftOne='ceramic studio'
                        textPCCLeftOne=
                        'Studio ceramika dobro to moja warszawska, autorska pracownia,gdzie powstaje głównie ceramika użytkowa w pojedyńczych egzemplarzach lub krótkich seriach. Pracownia znajduje się w malowniczym miejscu, na obrzeżach miasta, blisko sosnowego lasu, pod wydmą. To osobiste wnętrze, pełne znaczących przedmiotów i dzieł innych twórców.'
                        textPCCLeftTwo=
                        'Studio ceramika dobro to moja warszawska, autorska pracownia,gdzie powstaje głównie ceramika użytkowa w pojedyńczych egzemplarzach lub krótkich seriach. Pracownia znajduje się w malowniczym miejscu, na obrzeżach miasta, blisko sosnowego lasu, pod wydmą. To osobiste wnętrze, pełne znaczących przedmiotów i dzieł innych twórców.'
                    />
                    <PCCRightContentOne
                        imgPCCRight={PDCeramicImg_01}
                    />
                </ProjectCeramicContainer>
                <ProjectCeramicContainer>
                    <PCCLeftContentTwo
                        imgPCCLeft={PDCeramicImg_02}
                        backgroundColorPCCLeft='#f2f1ed'
                    />
                    <PCCRightContentTwo
                        titlePCCRightOne='our products'
                        textPCCRightOne=
                        'Studio ceramika dobro to moja warszawska, autorska pracownia,gdzie powstaje głównie ceramika użytkowa w pojedyńczych egzemplarzach lub krótkich seriach. Pracownia znajduje się w malowniczym miejscu, na obrzeżach miasta, blisko sosnowego lasu, pod wydmą. To osobiste wnętrze, pełne znaczących przedmiotów i dzieł innych twórców.'
                        textPCCRightTwo=
                        'Studio ceramika dobro to moja warszawska, autorska pracownia,gdzie powstaje głównie ceramika użytkowa w pojedyńczych egzemplarzach lub krótkich seriach. Pracownia znajduje się w malowniczym miejscu, na obrzeżach miasta, blisko sosnowego lasu, pod wydmą. To osobiste wnętrze, pełne znaczących przedmiotów i dzieł innych twórców.'
                        backgroundColorPCCRight='#f2f1ed'
                    />
                </ProjectCeramicContainer>
                <ProjectCeramicContainer>
                    <PCCLeftContentTree
                        PCCLeftOneAlign='center'
                        PCCLeftTwoAlign='flex-start'
                        backgroundColorPCCRight='#f2f1ed'
                        color='#7E7367'
                        titlePCCLeftOne='glazed plate'
                        textPCCLeftOne=
                        'Studio ceramika dobro to moja warszawska, autorska pracownia,gdzie powstaje głównie ceramika użytkowa w pojedyńczych egzemplarzach lub krótkich seriach. Pracownia znajduje się w malowniczym miejscu, na obrzeżach miasta, blisko sosnowego lasu, pod wydmą. To osobiste wnętrze, pełne znaczących przedmiotów i dzieł innych twórców.'
                        textPCCLeftTwo=
                        'Studio ceramika dobro to moja warszawska, autorska pracownia,gdzie powstaje głównie ceramika użytkowa w pojedyńczych egzemplarzach lub krótkich seriach. Pracownia znajduje się w malowniczym miejscu, na obrzeżach miasta, blisko sosnowego lasu, pod wydmą. To osobiste wnętrze, pełne znaczących przedmiotów i dzieł innych twórców.'
                        addComponentOne={<ContactUsButton margin='20px 0 30px 0'/>}
                        addComponentTwo={<PriceOneComponent marginBottom='5px' />}
                        addComponentTree={<PageNumberComponent />}
                    >
                    </PCCLeftContentTree>

                    <PCCLeftContentTree
                        imgPCCRight={PDCeramicImg_01}
                        titlePCCLeftOne='glazed plate'
                        textPCCLeftOne=
                        'Studio ceramika dobro to moja warszawska, autorska pracownia,gdzie powstaje głównie ceramika użytkowa w pojedyńczych egzemplarzach lub krótkich seriach. Pracownia znajduje się w malowniczym miejscu, na obrzeżach miasta, blisko sosnowego lasu, pod wydmą. To osobiste wnętrze, pełne znaczących przedmiotów i dzieł innych twórców.'
                        textPCCRightTwo='Reprehenderit esse officia non ut duis adipisicing.'
                    />
                </ProjectCeramicContainer>
            </div>
        </>
    )
}

export default ProjectCeramic