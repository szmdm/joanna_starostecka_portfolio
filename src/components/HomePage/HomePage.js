import React from 'react';
import HeroSection from '../HeroPage/Hero';
import Project from '../Project/Project';
import gilette_01 from "../../assets/projects/gilette/gillette_dlugie_strona_glowna1.png";
import cola_01 from "../../assets/projects/cola/cola_dlugie_strona_glowna1.png";
import schwartz_01 from "../../assets/projects/schwartz/schwartz_dlugie_strona_glowna1.png";
import sprite_01 from "../../assets/projects/sprite/sprite_dlugie_strona_glowna1.png";
import soft_01 from "../../assets/projects/soft/soft_dlugie_strona_glowna1.png";
import cola_stand_01 from "../../assets/projects/cola_stand/cola_dlugie_strona_glowna1.png";

const HomePage = () => {

    return (
        <>
            <HeroSection />
            <Project
                projectName={'Gillette'} 
                projectImg={gilette_01} 
            />
            <Project 
                projectName={'Coca Cola'} 
                projectImg={cola_01} 
            />
            <Project 
                projectName={'Schwartz'} 
                projectImg={schwartz_01} 
            />
            <Project 
                projectName={'Sprite'} 
                projectImg={sprite_01} 
            />
            <Project 
                projectName={'Soft'} 
                projectImg={soft_01} 
            />
            <Project 
                projectName={'Coca Cola stand'} 
                projectImg={cola_stand_01} 
            />
        </>
    )
}

export default HomePage