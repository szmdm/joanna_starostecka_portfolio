import React from 'react'
import ScrollToTop from '../ScrollToTop'
import {
    MainContainerNike,
    FirstContainerNike,
    HeadNike,
    HeroNike,
    OneSectionHeroNike,
    TwoSectionHeroNike,
    TreeSectionHeroNike,
    FooterNike,
    NikeImg01,
    NikeImg02,
    NikeImg03,
    SecondContainerNike,
    Head2Nike,
    Hero2Nike,
    OneSectionHero2Nike,
    TwoSectionHero2Nike,
    ThirdContainerNike,
    Hero3Nike,
    TwoSectionHero3Nike,
    Footer3Nike,
    FourthContainerNike,
    Hero4Nike,
    OneSectionHero4Nike,
    TwoSectionHero4Nike,
    TreeSectionHero4Nike,
    HiddenFooter4,
}
    from './ProjectDoneNikeStyle'
import img_01 from '../../assets/projects/nike/nike-logo1.png'
import img_02 from '../../assets/projects/nike/nike-txt1.png'
import img_03 from '../../assets/projects/nike/nike-pan.png'
import img_04 from '../../assets/projects/nike/nike-txt2.png'
import img_05 from '../../assets/projects/nike/nike-txt3.png'
import img_06 from '../../assets/projects/nike/nike-txt4.png'
import img_07 from '../../assets/projects/nike/shoe_01.png'
import img_08 from '../../assets/projects/nike/nike-back.png'
import img_09 from '../../assets/projects/nike/nike-txt9.png'
import img_10 from '../../assets/projects/nike/nike2-back.png'
import img_11 from '../../assets/projects/nike/nike-back2.png'
import img_12 from '../../assets/projects/nike/nike-pany.png'
import img_13 from '../../assets/projects/nike/nike-txt5.png'
import img_14 from '../../assets/projects/nike/nike-txt6.png'
import img_15 from '../../assets/projects/nike/nike-txt7.png'
import img_16 from '../../assets/projects/nike/shoe_02.png'
import img_17 from '../../assets/projects/nike/nike-txt8.png'
import img_18 from '../../assets/projects/nike/nike3-pan.png'
import img_19 from '../../assets/projects/nike/nike-txt10.png'
import img_20 from '../../assets/projects/nike/shoe_03.png'
import img_21 from '../../assets/projects/nike/nike-pan4.png'
import img_22 from '../../assets/projects/nike/shoe_04.png'
import img_23 from '../../assets/projects/nike/nike-txt11.png'
import img_24 from '../../assets/projects/nike/nike-txt12.png'
import img_25 from '../../assets/projects/nike/nike-txt13.png'
import img_26 from '../../assets/projects/nike/nike-txt14.png'
import img_27 from '../../assets/projects/nike/nike-pan4mobile.png'

// import { LocomotiveScrollProvider } from "react-locomotive-scroll";

const ProjectDoneNike = () => {

    // const ref = useRef(null);

    // const options = {
    //   smooth: true,
    // } 

    return (
        <>
            {/* <LocomotiveScrollProvider options={options} containerRef={ref}>
                <main data-scroll-container ref={ref}> */}
                    <ScrollToTop />
                    <MainContainerNike>
                        <FirstContainerNike>
                            <HeadNike>
                                <NikeImg01>
                                    <img src={img_01} alt="/" />
                                </NikeImg01>
                                <NikeImg02>
                                    <img src={img_02} alt="/" />
                                </NikeImg02>
                                <NikeImg03>
                                    <img src={img_03} alt="/" />
                                </NikeImg03>
                            </HeadNike>
                            <HeroNike>
                                {/* <img className='shoe01' src={img_07} alt="/" /> */}
                                <OneSectionHeroNike>
                                    <img src={img_04} alt="/" />
                                </OneSectionHeroNike>
                                <TwoSectionHeroNike backgroundImage={img_08}>
                                    <img className='airmax' src={img_05} alt="/" />
                                    <img className='terrascape' src={img_06} alt="/" />
                                    <img className='shoe01' src={img_07} alt="/" />
                                </TwoSectionHeroNike>
                                <TreeSectionHeroNike>
                                </TreeSectionHeroNike>
                            </HeroNike>
                            <FooterNike>
                                <img src={img_11} alt="/" />
                            </FooterNike>
                        </FirstContainerNike>
                    </MainContainerNike>
                    <MainContainerNike>
                        <SecondContainerNike>
                            <img className='nike-pany' src={img_12} alt="/" />
                            <Head2Nike>
                                <img src={img_09} alt="/" />
                            </Head2Nike>
                            <Hero2Nike>
                                <OneSectionHero2Nike>
                                </OneSectionHero2Nike>
                                <TwoSectionHero2Nike backgroundImage={img_10}>
                                    <img className='shoe02' src={img_16} alt="/" />
                                    <div className='textContainer'>
                                        <div className='left'>
                                            <img src={img_14} alt="/" />
                                        </div>
                                        <div className='right'>
                                            <img className='right__1' src={img_13} alt="/" />
                                            <img className='right__2' src={img_15} alt="/" />
                                        </div>
                                    </div>
                                </TwoSectionHero2Nike>
                            </Hero2Nike>
                        </SecondContainerNike>
                    </MainContainerNike>
                    <MainContainerNike>
                        <ThirdContainerNike>
                            <Hero3Nike>
                                <TwoSectionHero3Nike backgroundImage={img_08}>
                                    <img className='pan' src={img_18} alt="/" />
                                    <img className='ramp' src={img_17} alt="/" />
                                    <img className='comfort' src={img_19} alt="/" />
                                    <img className='shoe03' src={img_20} alt="/" />
                                </TwoSectionHero3Nike>
                            </Hero3Nike>
                            <Footer3Nike>
                                <img src={img_11} alt="/" />
                            </Footer3Nike>
                        </ThirdContainerNike>
                    </MainContainerNike>
                    <MainContainerNike>
                        <FourthContainerNike>
                            <img className='nike-pan3' src={img_21} alt="/" />
                            <img className='nike-pan3mobile' src={img_27} alt="/" />
                            <Hero4Nike>
                                <OneSectionHero4Nike />
                                <TwoSectionHero4Nike backgroundImage={img_10}>
                                    <img className='shoe04' src={img_22} alt="/" />
                                    <div className='textContainer'>
                                        <div className='left'>
                                            <img src={img_24} alt="/" />
                                        </div>
                                        <div className='right'>
                                            <img className='right__1' src={img_25} alt="/" />
                                        </div>
                                        <div className='rightness'>
                                            <img className='right__2' src={img_26} alt="/" />
                                        </div>
                                    </div>
                                </TwoSectionHero4Nike>
                                <TreeSectionHero4Nike>
                                    <img src={img_23} alt="/" />
                                </TreeSectionHero4Nike>
                            </Hero4Nike>
                        </FourthContainerNike>
                        <HiddenFooter4>
                            <img className='right__2' src={img_26} alt="/" />
                        </HiddenFooter4>
                    </MainContainerNike>
                {/* </main> */}
            {/* </LocomotiveScrollProvider> */}
        </>
    )
}

export default ProjectDoneNike