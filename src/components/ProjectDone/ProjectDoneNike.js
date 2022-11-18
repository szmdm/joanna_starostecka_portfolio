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
                        <OneSectionHeroNike>
                            <img src={img_04} alt="/" />                            
                        </OneSectionHeroNike>
                        <TwoSectionHeroNike>
                            <img className='airmax' src={img_05} alt="/" />                            
                            <img className='terrascape' src={img_06} alt="/" /> 
                            <img className='shoe01' src={img_07} alt="/" /> 
                        </TwoSectionHeroNike>
                        <TreeSectionHeroNike>
                        </TreeSectionHeroNike>
                    </HeroNike>
                    <FooterNike>
                            <img src={img_08} alt="/" /> 
                    </FooterNike>
                </FirstContainerNike>
            </MainContainerNike>
        </>
    )
}

export default ProjectDoneNike