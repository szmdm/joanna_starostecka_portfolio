import React from 'react';
import PCCLeftContentOne from '../ProjectCeramicContent/PCCLeftContentOne';
import PCCLeftContentTwo from '../ProjectCeramicContent/PCCLeftContentTwo';
import PCCRightContentOne from '../ProjectCeramicContent/PCCRightContentOne';
import PCCRightContentTwo from '../ProjectCeramicContent/PCCRightContentTwo';
import PCCLeftContentFour from '../ProjectCeramicContent/PCCLeftContentFour';
import PCCLeftContentTen from '../ProjectCeramicContent/PCCLeftContentTen';
import PCCLeftContentEleven from '../ProjectCeramicContent/PCCLeftContentEleven';
import PCCLeftContentTwelve from '../ProjectCeramicContent/PCCLeftContentTwelve';
import PCCLeftContentThirteen from '../ProjectCeramicContent/PCCLeftContentThirteen';
import PCCLeftContentFourteen from '../ProjectCeramicContent/PCCLeftContentFourteen';
import PCCLeftContentFifteen from '../ProjectCeramicContent/PCCLeftContentFifteen';
import PCCLeftContentSixteen from '../ProjectCeramicContent/PCCLeftContentFifteen';

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
import PDCeramicImg_12 from "../../assets/projectsDone/pDCeramicStudio/Component_52.png"
import PDCeramicImg_13 from "../../assets/projectsDone/pDCeramicStudio/Component_53.png"
import PDCeramicImg_14 from "../../assets/projectsDone/pDCeramicStudio/Component_54.png"

import PCCRightTwoImg_01 from '../../assets/projectsDone/pDCeramicStudio/Component_34.png';

import {
    ProjectCeramicContainer,
} from './ProjectCeramicStyle';
import ContactUsButton from '../ProjectCeramicContent/ContactUsButton';
import PriceOneComponent from '../ProjectCeramicContent/PriceOneComponent';
import PageNumberComponent from '../ProjectCeramicContent/PageNumberComponent';
import PCCPictureComponent from '../ProjectCeramicContent/PCCPictureComponent';
import ColorComponent from '../ProjectCeramicContent/ColorComponent';
import FontComponent from '../ProjectCeramicContent/FontComponent';
import FourthContent from '../ProjectCeramicContent/FourthContent';
import FifthContent from '../ProjectCeramicContent/FifthContent';
import FormCeramic from '../ProjectCeramicContent/FormCeramic';
import PaymentCeramic from '../ProjectCeramicContent/PaymentCeramic';

const ProjectCeramic = () => {

    return (
        <>
            <div className='overall'>
                <ProjectCeramicContainer>
                    <PCCLeftContentOne
                        backgroundColorPCCLeft='#3e4136'
                        titlePCCLeftOne='ceramic studio'
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
                        backgroundColorPCCRight='#f2f1ed'
                        />
                </ProjectCeramicContainer>
                <ProjectCeramicContainer>
                    <PCCLeftContentTen
                        PCCLeftOneJustify='center'
                        PCCLeftTwoJustify='center'
                        PCCLeftBorderRight='1px solid #D19886'
                        PCCLeftOneMargin='0 0px 50px 0px'
                        PCCLeftTwoMargin='75px 0px 0px 0px'
                        PCCLeftOneAlign='center'
                        PCCLeftTwoAlign='flex-start'
                        backgroundColorPCCRight='#f2f1ed'
                        color='#7E7367'
                        titlePCCLeftOne='glazed plate'
                        titlePCCLeftTwo='&nbsp;'
                        addComponentOne={<ContactUsButton margin='20px 0 30px 0' />}
                        addComponentTwo={<PriceOneComponent marginBottom='5px' marginTop='10px' />}
                        addComponentTree={<PageNumberComponent />}
                    >
                    </PCCLeftContentTen>
                    <PCCRightContentOne
                        imgPCCRight={PDCeramicImg_03}
                    />
                </ProjectCeramicContainer>
                <ProjectCeramicContainer>
                    <PCCLeftContentEleven
                        PCCLeftOneJustify='center'
                        PCCLeftTwoJustify='center'
                        PCCLeftBorderRight='1px solid #D19886'
                        PCCLeftOneMargin='50px 0px 50px 0px'
                        PCCLeftTwoMargin='50px 0px 50px 0px'
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
                        addComponentFour={<PCCPictureComponent image={PDCeramicImg_04} width='210px' height='268px' widthMediaSize='250px' heightMediaSize='250px' padding='5px 0 0 0' margin='0px 0 25px 0' />}
                        addComponentFive={<PCCPictureComponent image={PCCRightTwoImg_01} width='44px' height='44px' widthMediaSize='44px' heightMediaSize='44px' padding='0 0 0 0' margin='0px 0 0px 0' />}
                        addComponentSix={<PCCPictureComponent image={PDCeramicImg_05} width='auto' height='268px' widthMediaSize='250px' heightMediaSize='250px' padding='5px 0 0 0' margin='0px 0 25px 0' />}
                    >
                    </PCCLeftContentEleven>
                    <PCCLeftContentEleven
                        PCCLeftOneJustify='center'
                        PCCLeftTwoJustify='center'
                        borderBottomDirection='left: 0;'
                        PCCLeftOneMargin='0 0px 0px 0px'
                        PCCLeftTwoMargin='0 0px 5px 0px'
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
                        addComponentFour={<PCCPictureComponent image={PDCeramicImg_06} width='210px' height='268px' widthMediaSize='250px' heightMediaSize='250px' padding='5px 0 0 0' margin='0px 0 25px 0' />}
                        addComponentFive={<PCCPictureComponent image={PCCRightTwoImg_01} width='44px' height='44px' widthMediaSize='44px' heightMediaSize='44px' padding='0 0 0 0' margin='0px 0 0px 0' />}
                        addComponentSix={<PCCPictureComponent image={PDCeramicImg_07} width='210px' height='268px' widthMediaSize='250px' heightMediaSize='250px' padding='5px 0 0 0' margin='0px 0 25px 0' />}
                    >
                    </PCCLeftContentEleven>
                </ProjectCeramicContainer>
                <ProjectCeramicContainer>
                    <PCCLeftContentTwo
                        PCCLeftBorderRight='1px solid #D19886'
                        imgPCCLeft={PDCeramicImg_08}
                        backgroundColorPCCLeft='#f2f1ed'
                        width='100%'
                        height='100%'
                    />
                    <PCCLeftContentTwelve
                        PCCLeftOneJustify='center'
                        PCCLeftTwoJustify='center'
                        borderBottomDirection='left: 0;'
                        PCCLeftOneMargin='10px 0px 10px 0px'
                        PCCLeftTwoMargin='0px 0px 50px 0px'
                        PCCLeftOneAlign='center'
                        PCCLeftTwoAlign='flex-start'
                        backgroundColorPCCRight='#f2f1ed'
                        color='#7E7367'
                        titlePCCLeftOne='user persona'
                        titlePCCLeftTwo='&nbsp;'
                        addComponentOne={<ContactUsButton margin='20px 0 30px 0' />}
                        addComponentTree={<PageNumberComponent />}
                    >
                    </PCCLeftContentTwelve>
                </ProjectCeramicContainer>
                <ProjectCeramicContainer>
                    <PCCLeftContentTwelve
                        PCCLeftOneJustify='center'
                        PCCLeftTwoJustify='center'
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
                    </PCCLeftContentTwelve>
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
                    <PCCLeftContentTwelve
                        PCCLeftOneJustify='center'
                        PCCLeftTwoJustify='center'
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
                    </PCCLeftContentTwelve>
                </ProjectCeramicContainer>
                <ProjectCeramicContainer>
                    <PCCLeftContentThirteen
                        PCCLeftBorderRight='1px solid #D19886'
                        borderBottomDirection='right: 0;'
                        PCCLeftOneMargin='10px 0px 10px 0px'
                        PCCLeftTwoMargin='10px 0px 150px 0px'
                        PCCLeftOneAlign='center'
                        PCCLeftTwoAlign='flex-start'
                        PCCLeftOneJustify='center'
                        PCCLeftTwoJustify='center'
                        backgroundColorPCCRight='#f2f1ed'
                        color='#7E7367'
                        titlePCCLeftOne='colors'
                        titlePCCLeftTwo='&nbsp;'
                        textPCCLeftOne=''
                        textPCCLeftTwo=''
                        addComponentOne={<ContactUsButton margin='20px 0 30px 0' />}
                        addComponentTree={<PageNumberComponent />}
                        addComponentNine={<ColorComponent border='1px solid #7E7367' backgroundColor='#E2E2D8' text='white' hexColor='f2f1ee' />}
                        addComponentNineSecond={<ColorComponent border='none' backgroundColor='#3E4136' text='dark green' hexColor='3d4236' />}
                        addComponentNineThird={<ColorComponent border='none' backgroundColor='#7E7367' text='grey' hexColor='   a49d94' />}
                    >
                    </PCCLeftContentThirteen>
                    <PCCLeftContentFourteen
                        PCCLeftBorderRight='none'
                        borderBottomDirection='left: 0;'
                        PCCLeftOneMargin='135px 0px 10px 0px'
                        PCCLeftTwoMargin='10px 0px 155px 0px'
                        PCCLeftOneAlign='center'
                        PCCLeftOneJustify='flex-start'
                        PCCLeftTwoJustify='center'
                        PCCLeftTwoAlign='flex-start'
                        backgroundColorPCCRight='#f2f1ed'
                        color='#7E7367'
                        titlePCCLeftOne='fonts'
                        titlePCCLeftTwo='&nbsp;'
                        textPCCLeftOne=''
                        textPCCLeftTwo=''
                        addComponentTen={<FontComponent text='Calibri' fontFamily='Calibri' fontType='regular' fontFamilySpan='Calibri' />}
                        addComponentTenSecond={<FontComponent text='Minion Pro' fontFamily='Minion Pro' fontType='regular' fontFamilySpan='Calibri' />}
                    >
                    </PCCLeftContentFourteen>
                </ProjectCeramicContainer>
                <ProjectCeramicContainer>
                    <PCCLeftContentFour
                        PCCLeftBorderRight='1px solid #D19886'
                        borderBottomDirection='right: 0;'
                        backgroundColorPCCRight='#f2f1ed'
                        color='#7E7367'
                        addComponentOne={<FourthContent
                            title='action'
                            rowSecondColumnOneText='first category button'
                            rowSecondTextSecond='second category button'
                            addComponentOne={<ContactUsButton />}
                            image={PCCRightTwoImg_01}
                            margin='15px 60px 15px 35px'
                            rowFirstMargin='0px 0px 15px 0px'
                            topHeight='180px'
                            rowFirstColumnTwoDisplay='flex'
                            rowFirstColumnOneTextDisplay='none'
                        />}
                        addComponentTwo={<FourthContent
                            title='steppers'
                            rowSecondColumnOneText='amount of products'
                            margin='15px 60px 15px 35px'
                            rowFirstMargin='0px 0px 15px 0px'
                            topHeight='180px'
                            rowFirstColumnTwoDisplay='none'
                            rowFirstColumnOneTextDisplay='flex'
                            rowFirstColumnOneText='< 1 >'
                            rowSecondColumnTwoDisplay='flex'
                            rowSecondColumnOneTextDisplay=''
                        />}
                    />
                    <PCCLeftContentSixteen
                        PCCLeftBorderRight='none'
                        borderBottomDirection='left: 0;'
                        backgroundColorPCCRight='#f2f1ed'
                        color='#7E7367'
                        addComponentOne={<FifthContent
                            title='profile'
                            image={PCCRightTwoImg_01}
                            margin='15px 60px 15px 35px'
                            rowFirstMargin='0px 0px 15px 0px'
                            // topHeight='180px'
                            rowFirstColumnTwoDisplay='flex'
                            rowFirstColumnOneTextDisplay='none'
                            addComponentOne={<FormCeramic text='login' />}
                            addComponentTree={<FormCeramic text='phone number' />}
                            addComponentSix={<FormCeramic text='password' />}
                            addComponentFive={<FormCeramic text='adress' />}
                            rowFirstColumnOneBasis='211px'
                            rowFirstColumnOneFlexDirection='column'
                        />}
                        addComponentTwo={<FifthContent
                            title='payment'
                            margin='15px 60px 15px 35px'
                            rowFirstMargin='0px 0px 15px 0px'
                            topHeight='180px'
                            rowFirstColumnTwoDisplay='none'
                            addComponentSeven={<PaymentCeramic img={PDCeramicImg_12} />}
                            addComponentEight={<PaymentCeramic img={PDCeramicImg_13} />}
                            addComponentNine={<PaymentCeramic img={PDCeramicImg_14} />}
                            rowFirstColumnOneTextDisplay='none'
                            rowSecondColumnTwoDisplay='flex'
                            rowSecondColumnOneTextDisplay='none'
                            rowFirstColumnOneBasis='440px'
                            rowFirstColumnOneFlexDirection='row'
                        />}
                    />
                </ProjectCeramicContainer>
                <ProjectCeramicContainer>
                    <PCCLeftContentFifteen
                        PCCLeftBorderRight='1px solid #D19886'
                        borderBottomDirection='right: 0;'
                        backgroundColorPCCRight='#f2f1ed'
                        color='#7E7367'
                        addComponentOne={<FourthContent
                            title='photos by'
                            rowSecondColumnOneText={
                                <div>
                                    Karolina Grabowska<br />
                                    John Diez<br />
                                    Nadi Lindsay <br />
                                    Kasia Sikorska <br />
                                    RFstudio<br />
                                </div>
                            }
                            image={PCCRightTwoImg_01}
                            margin='15px 60px 225px 35px'
                            marginMediaSize='15px 60px 25px 35px'
                            marginCeramicBasic='15px 60px 25px 35px'
                            rowFirstMargin='0px 0px 0px 0px'
                            topHeight='180px'
                            rowFirstColumnTwoDisplay='none'
                            rowFirstColumnOneTextDisplay='none'
                        />}
                    />
                    <PCCLeftContentFifteen
                        PCCLeftBorderRight='none'
                        borderBottomDirection='left: 0;'
                        backgroundColorPCCRight='#f2f1ed'
                        color='#7E7367'
                        addComponentOne={<FourthContent
                            title='design'
                            rowSecondColumnOneText={
                                <div className='divTextFirst'>
                                    Joanna Starostecka
                                </div>
                            }
                            image={PCCRightTwoImg_01}
                            margin='15px 60px 15px 35px'
                            rowFirstMargin='0px 0px 0px 0px'
                            topHeight='180px'
                            topHeightMediaSize='110px'
                            rowFirstColumnTwoDisplay='none'
                            rowFirstColumnOneTextDisplay='none'
                        />}
                        addComponentTwo={<FourthContent
                            title='developed by'
                            margin='15px 60px 15px 35px'
                            rowFirstMargin='0px 0px 15px 0px'
                            topHeight='180px'
                            topHeightMediaSize='125px'
                            rowFirstColumnTwoDisplay='none'
                            rowFirstColumnOneTextDisplay='flex'
                            rowFirstColumnOneText={
                                <div className='divTextFirst'>
                                    Piotr Dobrowolski
                                </div>
                            }
                            rowSecondColumnTwoDisplay='flex'
                            rowSecondColumnOneTextDisplay='none'
                        />}
                    />
                </ProjectCeramicContainer>

            </div>
        </>
    )
}

export default ProjectCeramic