import React from 'react';
import HeroSection from './Hero';
import Project from './Project';
import Cola_01 from "./assets/Cola_01.jpg";

export const HomePage = () => {

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
