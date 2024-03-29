import React, { useEffect } from 'react';
import HeroSection from '../HeroPage/Hero';
import Project from '../Project/Project';
import gilette_01 from "../../assets/projects/gilette/gillette_dlugie_strona_glowna1.png";
import cola_01 from "../../assets/projects/cola/cola_dlugie_strona_glowna1.png";
import soft_01 from "../../assets/projects/soft/soft_dlugie_strona_glowna1.png";
import dobro_01 from "../../assets/projects/dobro/ceramika_dlugie_strona_glowna.png";
import nike_01 from "../../assets/projects/nike/nike_01.png";
import { useLocation } from 'react-router-dom';


const HomePage = () => {

    const location = useLocation();

    useEffect(() => {
        
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem) {
                elem.scrollIntoView({behavior: "smooth"})
            }
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        }
    }, [location]);


    return (
        <>
            <HeroSection />
            <div id="gillette"></div>
            <Project
                projectName={'Gillette'}
                projectImg={gilette_01}
            />
            <div id="cocacola"></div>
            <Project
                projectName={'CocaCola'}
                projectImg={cola_01}
            />
            <div id="schwartz"></div>
            <Project
                projectName={'CeramicStudio'}
                projectImg={dobro_01}
            />
            <div id="soft"></div>
            <Project
                projectName={'Soft'}
                projectImg={soft_01}
            />
            <div id="nike"></div>
            <Project
                projectName={'Nike'}
                projectImg={nike_01}
            />
            
        </>
    )
}

export default HomePage