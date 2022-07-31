import React from 'react';
import PCCLeftContentOne from '../ProjectCeramicContent/PCCLeftContentOne';
import PCCLeftContentTwo from '../ProjectCeramicContent/PCCLeftContentTwo';
import PCCRightContentOne from '../ProjectCeramicContent/PCCRightContentOne';
import PCCRightContentTwo from '../ProjectCeramicContent/PCCRightContentTwo';
import PCCLeftContentTree from '../ProjectCeramicContent/PCCLeftContentTree';

import PDCeramicImg_01 from "../../assets/projectsDone/pDCeramicStudio/Image_001.png"
import PDCeramicImg_02 from "../../assets/projectsDone/pDCeramicStudio/Image_002.png"
import PDCeramicImg_03 from "../../assets/projectsDone/pDCeramicStudio/Image_003_1.png"
import PDCeramicImg_04 from "../../assets/projectsDone/pDCeramicStudio/Image_004_01.png"
import PDCeramicImg_05 from "../../assets/projectsDone/pDCeramicStudio/Image_004_02.png"
import PDCeramicImg_06 from "../../assets/projectsDone/pDCeramicStudio/Image_004_03.png"
import PDCeramicImg_07 from "../../assets/projectsDone/pDCeramicStudio/Image_004_04.png"
import PDCeramicImg_08 from "../../assets/projectsDone/pDCeramicStudio/Image_005.png"
import PDCeramicImg_09 from "../../assets/projectsDone/pDCeramicStudio/Image_006.png"
import PDCeramicImg_10 from "../../assets/projectsDone/pDCeramicStudio/Image_007.png"
import PDCeramicImg_11 from "../../assets/projectsDone/pDCeramicStudio/Logo_3.png"

import PCCRightTwoImg_01 from '../../assets/projectsDone/pDCeramicStudio/Component_34.png';

import {
    ProjectCeramicContainer,
} from './ProjectCeramicStyle';
import ContactUsButton from '../ProjectCeramicContent/ContactUsButton';
import PriceOneComponent from '../ProjectCeramicContent/PriceOneComponent';
import PageNumberComponent from '../ProjectCeramicContent/PageNumberComponent';
import PCCPictureComponent from '../ProjectCeramicContent/PCCPictureComponent';
import ColorComponent from '../ProjectCeramicContent/ColorComponent';

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
                        PCCLeftBorderRight='1px solid #D19886'
                        imgPCCLeft={PDCeramicImg_02}
                        backgroundColorPCCLeft='#f2f1ed'
                        width='81%'
                        height='81%'
                    />
                    <PCCRightContentTwo
                        titlePCCRightOne='our products'
                        textPCCRightOne=
                        'Studio ceramika dobro to moja warszawska, autorska pracownia,gdzie powstaje głównie ceramika użytkowa w pojedyńczych egzemplarzach lub krótkich seriach. Pracownia znajduje się w malowniczym miejscu, na obrzeżach miasta, blisko sosnowego lasu, pod wydmą. To osobiste wnętrze, pełne znaczących przedmiotów i dzieł innych twórców.'
                        textPCCRightTwo=
                        'Studio ceramika dobro to moja warszawska, autorska pracownia,gdzie powstaje głównie ceramika użytkowa w pojedyńczych egzemplarzach lub krótkich seriach. Pracownia znajduje się w malowniczym'
                        backgroundColorPCCRight='#f2f1ed'
                    />
                </ProjectCeramicContainer>
                <ProjectCeramicContainer>
                    <PCCLeftContentTree
                        PCCLeftBorderRight='1px solid #D19886'
                        PCCLeftOneMargin='0 0px 50px 0px'
                        PCCLeftTwoMargin='40px 0px 50px 0px'
                        PCCLeftOneAlign='center'
                        PCCLeftTwoAlign='flex-start'
                        backgroundColorPCCRight='#f2f1ed'
                        color='#7E7367'
                        titlePCCLeftOne='glazed plate'
                        titlePCCLeftTwo='&nbsp;'
                        textPCCLeftOne=
                        'Studio ceramika dobro to moja warszawska, autorska pracownia,gdzie powstaje głównie ceramika użytkowa w pojedyńczych egzemplarzach lub krótkich seriach. Pracownia znajduje się w malowniczym miejscu, na obrzeżach miasta, blisko sosnowego lasu, pod wydmą. To osobiste wnętrze, pełne znaczących przedmiotów i dzieł innych twórców.'
                        textPCCLeftTwo=
                        'Studio ceramika dobro to moja warszawska, autorska pracownia,gdzie powstaje głównie ceramika użytkowa w pojedyńczych egzemplarzach lub krótkich seriach. Pracownia znajduje się w malowniczym miejscu, na obrzeżach miasta, blisko sosnowego lasu, pod wydmą. To osobiste wnętrze, pełne znaczących przedmiotów i dzieł innych twórców.'
                        addComponentOne={<ContactUsButton margin='20px 0 30px 0' />}
                        addComponentTwo={<PriceOneComponent marginBottom='5px' marginTop='20px' />}
                        addComponentTree={<PageNumberComponent />}
                    >
                    </PCCLeftContentTree>
                    <PCCRightContentOne
                        imgPCCRight={PDCeramicImg_03}
                    />
                </ProjectCeramicContainer>
                <ProjectCeramicContainer>
                    <PCCLeftContentTree
                        PCCLeftBorderRight='1px solid #D19886'
                        PCCLeftOneMargin='0 0px 0px 0px'
                        PCCLeftOneAlign='center'
                        PCCLeftTwoAlign='flex-start'
                        backgroundColorPCCRight='#f2f1ed'
                        color='#7E7367'
                        titlePCCLeftOne='plates'
                        titlePCCLeftTwo='&nbsp;'
                        textPCCLeftOne=
                        'Studio ceramika dobro to moja warszawska ...'
                        textPCCLeftTwo=
                        'Studio ceramika dobro to moja warszawska ...'
                        addComponentOne={<ContactUsButton margin='20px 0 30px 0' />}
                        addComponentTwo={<PriceOneComponent marginBottom='15px' marginTop='20px' />}
                        addComponentTree={<PageNumberComponent />}
                        addComponentFour={<PCCPictureComponent image={PDCeramicImg_04} width='210px' padding='5px 0 0 0' margin='0px 0 25px 0' />}
                        addComponentFive={<PCCPictureComponent image={PCCRightTwoImg_01} width='auto' padding='0 0 0 0' margin='0px 0 0px 0' />}
                        addComponentSix={<PCCPictureComponent image={PDCeramicImg_05} width='auto' padding='5px 0 0 0' margin='0px 0 25px 0' />}
                    >
                    </PCCLeftContentTree>
                    <PCCLeftContentTree
                        borderBottomDirection='left: 0;'
                        PCCLeftOneMargin='0 0px 0px 0px'
                        PCCLeftOneAlign='center'
                        PCCLeftTwoAlign='flex-start'
                        PCCLeftBorderRight='none'
                        backgroundColorPCCRight='#f2f1ed'
                        color='#7E7367'
                        titlePCCLeftOne='cups'
                        titlePCCLeftTwo='&nbsp;'
                        textPCCLeftOne=
                        'Studio ceramika dobro to moja warszawska ...'
                        textPCCLeftTwo=
                        'Studio ceramika dobro to moja warszawska ...'
                        addComponentOne={<ContactUsButton margin='20px 0 30px 0' />}
                        addComponentTwo={<PriceOneComponent marginBottom='15px' marginTop='20px' />}
                        addComponentTree={<PageNumberComponent />}
                        addComponentFour={<PCCPictureComponent image={PDCeramicImg_06} width='210px' padding='5px 0 0 0' margin='0px 0 25px 0' />}
                        addComponentFive={<PCCPictureComponent image={PCCRightTwoImg_01} width='auto' padding='0 0 0 0' margin='0px 0 0px 0' />}
                        addComponentSix={<PCCPictureComponent image={PDCeramicImg_07} width='auto' padding='5px 0 0 0' margin='0px 0 25px 0' />}
                    >
                    </PCCLeftContentTree>
                </ProjectCeramicContainer>
                <ProjectCeramicContainer>
                    <PCCLeftContentTwo
                        PCCLeftBorderRight='1px solid #D19886'
                        imgPCCLeft={PDCeramicImg_08}
                        backgroundColorPCCLeft='#f2f1ed'
                        width='100%'
                        height='100%'
                    />
                    <PCCLeftContentTree
                        borderBottomDirection='left: 0;'
                        PCCLeftOneMargin='10px 0px 10px 0px'
                        PCCLeftTwoMargin='10px 0px 60px 0px'
                        PCCLeftOneAlign='center'
                        PCCLeftTwoAlign='flex-start'
                        backgroundColorPCCRight='#f2f1ed'
                        color='#7E7367'
                        titlePCCLeftOne='user persona'
                        titlePCCLeftTwo='&nbsp;'
                        textPCCLeftOne=
                        'Studio ceramika dobro to moja warszawska, autorska pracownia,gdzie powstaje głównie ceramika użytkowa w pojedyńczych egzemplarzach lub krótkich seriach. Pracownia znajduje się w malowniczym miejscu, na obrzeżach miasta, blisko sosnowego lasu, pod wydmą. To osobiste wnętrze, pełne znaczących przedmiotów i dzieł innych twórców.'
                        textPCCLeftTwo=
                        'Studio ceramika dobro to moja warszawska, autorska pracownia,gdzie powstaje głównie ceramika użytkowa w pojedyńczych egzemplarzach lub krótkich seriach. Pracownia znajduje się w malowniczym'
                        addComponentOne={<ContactUsButton margin='20px 0 30px 0' />}
                        addComponentTree={<PageNumberComponent />}
                    >
                    </PCCLeftContentTree>
                </ProjectCeramicContainer>
                <ProjectCeramicContainer>
                    <PCCLeftContentTree
                        PCCLeftBorderRight='1px solid #D19886'
                        PCCLeftOneMargin='10px 0px 10px 0px'
                        PCCLeftTwoMargin='10px 0px 15px 0px'
                        PCCLeftOneAlign='center'
                        PCCLeftTwoAlign='flex-start'
                        backgroundColorPCCRight='#f2f1ed'
                        color='#7E7367'
                        titlePCCLeftOne='proces'
                        titlePCCLeftTwo='&nbsp;'
                        textPCCLeftOne=
                        'Studio ceramika dobro to moja warszawska, autorska pracownia,gdzie powstaje głównie ceramika użytkowa w pojedyńczych egzemplarzach lub krótkich seriach. Pracownia znajduje się w malowniczym miejscu, na obrzeżach miasta, blisko sosnowego lasu, pod wydmą. To osobiste wnętrze, pełne znaczących przedmiotów i dzieł innych twórców.'
                        textPCCLeftTwo=
                        'Studio ceramika dobro to moja warszawska, autorska pracownia,gdzie powstaje głównie ceramika użytkowa w pojedyńczych egzemplarzach lub krótkich seriach. Pracownia znajduje się w malowniczym'
                        addComponentSeven={<PCCPictureComponent image={PCCRightTwoImg_01} width='auto' padding='0 0 0 0' margin='40px 0 0px 0' />}

                    >
                    </PCCLeftContentTree>
                    <PCCLeftContentTwo
                        imgPCCLeft={PDCeramicImg_09}
                        backgroundColorPCCLeft='#f2f1ed'
                        width='81%'
                        height='81%'
                        borderBottomDirection='left: 0;'
                        PCCLeftBorderRight='none'
                    />
                </ProjectCeramicContainer>
                <ProjectCeramicContainer>
                    <PCCLeftContentTwo
                        imgPCCLeft={PDCeramicImg_10}
                        backgroundColorPCCLeft='#f2f1ed'
                        width='100%'
                        height='100%'
                        borderBottomDirection='right: 0;'
                        PCCLeftBorderRight='1px solid #D19886'
                        addComponentEight={<PCCPictureComponent image={PDCeramicImg_11} width='auto' padding='0 0 0 0' margin='40px 0 0px 0' position='absolute' />}

                    />
                    <PCCLeftContentTree
                        borderBottomDirection='left: 0;'
                        PCCLeftOneMargin='10px 0px 10px 0px'
                        PCCLeftTwoMargin='10px 0px 105px 0px'
                        PCCLeftOneAlign='center'
                        PCCLeftTwoAlign='flex-start'
                        backgroundColorPCCRight='#f2f1ed'
                        color='#7E7367'
                        titlePCCLeftOne='logo'
                        titlePCCLeftTwo='&nbsp;'
                        textPCCLeftOne=
                        'Studio ceramika dobro to moja warszawska, autorska pracownia,gdzie powstaje głównie ceramika użytkowa w pojedyńczych egzemplarzach lub krótkich seriach. Pracownia znajduje się w malowniczym miejscu, na obrzeżach miasta, blisko sosnowego lasu, pod wydmą. To osobiste wnętrze, pełne znaczących przedmiotów i dzieł innych twórców.'
                        textPCCLeftTwo=
                        'Studio ceramika dobro to moja warszawska, autorska pracownia,gdzie powstaje głównie ceramika użytkowa w pojedyńczych egzemplarzach lub krótkich seriach. Pracownia znajduje się w malowniczym'
                        addComponentOne={<ContactUsButton margin='20px 0 30px 0' />}
                        addComponentTree={<PageNumberComponent />}
                    >
                    </PCCLeftContentTree>
                </ProjectCeramicContainer>
                <ProjectCeramicContainer>
                    <PCCLeftContentTree
                        PCCLeftBorderRight='1px solid #D19886'
                        borderBottomDirection='right: 0;'
                        PCCLeftOneMargin='10px 0px 10px 0px'
                        PCCLeftTwoMargin='10px 0px 215px 0px'
                        PCCLeftOneAlign='center'
                        PCCLeftTwoAlign='flex-start'
                        backgroundColorPCCRight='#f2f1ed'
                        color='#7E7367'
                        titlePCCLeftOne='colors'
                        titlePCCLeftTwo='&nbsp;'
                        textPCCLeftOne=''
                        textPCCLeftTwo=''
                        addComponentOne={<ContactUsButton margin='20px 0 30px 0' />}
                        addComponentTree={<PageNumberComponent />}
                        addComponentNine={<ColorComponent border='1px solid #7E7367' backgroundColor='#E2E2D8'  text='white' hexColor='f2f1ee' />}
                        addComponentNineSecond={<ColorComponent border='none' backgroundColor='#3E4136' text='dark green' hexColor='3d4236'/>}
                        addComponentNineThird={<ColorComponent border='none' backgroundColor='#7E7367' text='grey' hexColor='   a49d94'/>}
                    >
                    </PCCLeftContentTree>
                    <PCCLeftContentTree
                        PCCLeftBorderRight='1px solid #D19886'
                        borderBottomDirection='right: 0;'
                        PCCLeftOneMargin='10px 0px 10px 0px'
                        PCCLeftTwoMargin='10px 0px 215px 0px'
                        PCCLeftOneAlign='center'
                        PCCLeftTwoAlign='flex-start'
                        backgroundColorPCCRight='#f2f1ed'
                        color='#7E7367'
                        titlePCCLeftOne='colors'
                        titlePCCLeftTwo='&nbsp;'
                        textPCCLeftOne=''
                        textPCCLeftTwo=''
                        addComponentOne={<ContactUsButton margin='20px 0 30px 0' />}
                        addComponentTree={<PageNumberComponent />}
                        addComponentNine={<ColorComponent border='1px solid #7E7367' backgroundColor='#E2E2D8'  text='white' hexColor='f2f1ee' />}
                        addComponentNineSecond={<ColorComponent border='none' backgroundColor='#3E4136' text='dark green' hexColor='3d4236'/>}
                        addComponentNineThird={<ColorComponent border='none' backgroundColor='#7E7367' text='grey' hexColor='   a49d94'/>}
                    >
                    </PCCLeftContentTree>
                </ProjectCeramicContainer>
            </div>
        </>
    )
}

export default ProjectCeramic