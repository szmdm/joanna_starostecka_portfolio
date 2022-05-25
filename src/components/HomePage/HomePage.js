import React from 'react';
import HeroSection from '../HeroPage/Hero';
import Project from '../Project/Project';
import Cola_01 from "../../assets/Cola_01.jpg";

const HomePage = () => {

    return (
        <>
            <HeroSection />
            <Project 
                name={'CocaCola'} 
                projectImg={Cola_01} 
            />
            <Project 
                name={'Pepsi'} 
                projectImg={Cola_01} 
            />
        </>
    )
}

export default HomePage