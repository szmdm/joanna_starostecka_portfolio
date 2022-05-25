import React from 'react';
import { HeroContainer, HeroContent, WelcomeContent, OpenTitle, OpenText, OpenContact, ProjectsTitle, } from './heroStyle';

const HeroSection = () => {

   

    return (
        <HeroContainer>
            <HeroContent>
                <WelcomeContent>
                    <OpenTitle>Welcome</OpenTitle>
                    <OpenText>I'm glad you are here.<br/>I hope you will enjoy your time.</OpenText>
                    <OpenContact>contact me: starostecka@design.com</OpenContact>
                </WelcomeContent>
                <ProjectsTitle>Projects</ProjectsTitle>
            </HeroContent>
        </HeroContainer>
    ) 
}

export default HeroSection