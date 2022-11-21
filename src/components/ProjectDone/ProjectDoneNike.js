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

const ProjectDoneNike = () => {
    return (
        <>
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
        </>
    )
}

export default ProjectDoneNike