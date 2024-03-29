import styled from "styled-components";
import { mediaSize, mobileLMediaSize } from "../../variables/Mixins";

export const MainContainerNike = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: #FBF9FA;

    @media screen and (max-width:${mediaSize}) {
        flex-direction: column;
        }

`
// FIRST CONTAINER NIKE //

export const FirstContainerNike = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1280px;
`

export const HeadNike = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    padding: 0 100px 0 87px;    
    
    @media screen and (max-width:${mediaSize}) {
        padding: 0 0 0 35px;
        }
    
`
export const NikeImg01 = styled.div`
    display: flex;
    height: 188px;

    @media screen and (max-width:${mediaSize}) {
        height: 103px;

                img {
                    display: none;
            }
        }

`
export const NikeImg02 = styled.div`
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(0%, -50%);
    width: 256px;
    z-index: 10;

        img {
            width: 100%;
        }

    
    @media screen and (max-width:${mediaSize}) {
        width: 150px;
        left: 35px;
        }
`

export const NikeImg03 = styled.div`
    display: flex;
    position: absolute;
    right: 24px;
    height: 468px;

    @media screen and (max-width:${mediaSize}) {
                height: 149px;
            }

`
export const HeroNike = styled.div`
    display: flex;
    width: 100%;
    height: auto;

        /* .shoe01 {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 30;
        }  */
`
export const OneSectionHeroNike = styled.div`
    display: flex;
    align-items: center;
    width: 7%;
    margin-left: 87px;
    
    @media screen and (max-width:${mediaSize}) {
        margin-left: 7px;

                img {
                    height: 174px;
            }
        }


`
export const TwoSectionHeroNike = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 89%;
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    z-index: 20;
    /* box-shadow: 9px 9px 15px -9px rgba(66, 68, 90, 1); */

        .airmax {
            width: 369px;
            height: auto;
            margin: 52px 0 0 65px;

            @media screen and (max-width:${mediaSize}) {
                width: 140px;
                margin: 47px 0 0 17px;
            }
        }
        .terrascape {
            width: 542px;
            margin: 52px 0 79px 65px;

            @media screen and (max-width:${mediaSize}) {
                width: 165px;
                margin: 52px 0 20px 26px;
            }
        }
        .shoe01 {
            position: absolute;
            width: 100%;
            height: auto;
            left: 60px;

            @media screen and (max-width:${mediaSize}) {
                left: 20px;
            }
            @media screen and (max-width:${mobileLMediaSize}) {
                left: 20px;
                top: 60px;
            }
        }
`
export const TreeSectionHeroNike = styled.div`
    display: flex;
    width: 4%;
`
export const FooterNike = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    height: 50px;
    width: 100%;

    img {
        margin-left: 5%;
        width: 79%;

    }
`
// SECOND CONTAINER NIKE //


export const SecondContainerNike = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    align-items: center;
    width: 100%;
    max-width: 1280px;
    margin-top: 94px;

    @media screen and (max-width:${mediaSize}) {
        margin-top: 39px;    
    }

        .nike-pany {
            position: absolute;
            z-index: 0;
            top: 62px;
            left: 135px;

                @media screen and (max-width:${mediaSize}) {
                    width: 135px;  
                    top: 12px;
                    left: 15px;  
                }
        }
`

export const Head2Nike = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    top: -57px;
    width: 100%;
    padding: 0 111px 0 87px;

    @media screen and (max-width:${mediaSize}) {
        top: -30px;
        padding: 0 15px 0 50px;
            img {
                width: 180px;
            }
        }
    
`
export const Hero2Nike = styled.div`
    display: flex;
    width: 100%;
    height: 662px;

    @media screen and (max-width:${mediaSize}) {
            height: 309px;
        }
    @media screen and (max-width:${mobileLMediaSize}) {
            height: 240px;
        }
`

export const OneSectionHero2Nike = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    width: 7%;
    margin-left: 87px;
    z-index: 50;
    
        @media screen and (max-width:${mediaSize}) {
            margin-left: 7px;   
        }
            
        `

export const TwoSectionHero2Nike = styled.div`
    display: flex;
    align-items: center;
    width: 93%;
    margin-left: 87px;
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    align-items: flex-end;

    
        @media screen and (max-width:${mediaSize}) {
            margin-left: 7px;   
        }

        .shoe02 {
                position: absolute;
                width: 83%;
                top: 88px;
                left: 212px;

                @media screen and (max-width:${mediaSize}) {
                    width: 89%;
                    top: 50px;
                    left: 18px;  
                }
            }
        .textContainer {
            display: flex;
            justify-content: space-between;
            align-content: center;
            width: 100%;
            
            .left {
                display: flex;
                align-items: flex-end;
                padding: 0 0 68px 20px;
                width: 50%;

                    @media screen and (max-width:${mediaSize}) {
                        padding: 0 0 18px 17px;
                    }

                    img {
                        width: 273px;
                        height: auto;

                        @media screen and (max-width:${mediaSize}) {
                            width: 135px;    
                        }
                    }
            }
            .right {
                display: flex;
                align-content: center;
                justify-content: center;
                align-items: flex-end;
                flex-direction: column;
                gap: 23px;
                margin: 0 116px 68px 0;
                width: 50%;
                
                @media screen and (max-width:${mediaSize}) {
                    margin: 0 17px 18px 0;
                    }

                .right__1 {
                        width: 295px;
                        height: auto;

                        @media screen and (max-width:${mediaSize}) {
                            width: 135px;    
                        }
                    }
            }
                .right__2 {
                        width: 95px;
                        height: auto;

                        @media screen and (max-width:${mediaSize}) {
                            display: none;   
                        }
                    }
            }
`

// THIRD CONTAINER NIKE //


export const ThirdContainerNike = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1280px;
    margin-top: 35px;

    @media screen and (max-width:${mediaSize}) {
        margin-top: 50px;
        }
`

export const Head3Nike = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    padding: 0 100px 0 87px;    
    
    @media screen and (max-width:${mediaSize}) {
        padding: 0 0 0 35px;
        }
    
`
export const Nike3Img01 = styled.div`
    display: flex;
    height: 188px;

    @media screen and (max-width:${mediaSize}) {
        height: 70px;

                img {
                    display: none;
            }
        }

`
export const Nike3Img02 = styled.div`
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(0%, -50%);
    width: 256px;
    z-index: 10;

        img {
            width: 100%;
        }

    
    @media screen and (max-width:${mediaSize}) {
        width: 150px;
        left: 35px;
        }
`

export const Nike3Img03 = styled.div`
    display: flex;
    position: absolute;
    right: 24px;
    height: 468px;
    z-index: 30;

    @media screen and (max-width:${mediaSize}) {
                height: 149px;

            }

`
export const Hero3Nike = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    padding-left: 125px;
    padding-right: 50px;

    @media screen and (max-width:${mediaSize}) {
                padding-right: 0px;
                padding-left: 7px;
            }
`
export const TwoSectionHero3Nike = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 95%;
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    z-index: 20;
    /* box-shadow: 9px 9px 15px -9px rgba(66, 68, 90, 1); */

    @media screen and (max-width:${mediaSize}) {
                width: 100%;
            }

        .pan {
            position: absolute;
            right: -101px;
            top: -25px;
            z-index: 0;   

                @media screen and (max-width:${mediaSize}) {
                    width: 97px;
                    height: auto;
                    top: -45px;
                    right: 12px;
                }
        }

        .ramp {
            width: 369px;
            height: auto;
            margin: 12px 0 0 130px;
            z-index: 10;

            @media screen and (max-width:${mediaSize}) {
                width: 109px;
                margin: -12px 0 0 30px;
            }
        }
        .comfort {
            width: 542px;
            margin: 322px 0 79px 130px;

            @media screen and (max-width:${mediaSize}) {
                width: 165px;
                margin: 130px 0 20px 26px;
            }
        }
        .shoe03 {
            position: absolute;
            width: 83%;
            height: auto;
            left: 240px;
            top: 95px;

            @media screen and (max-width:${mediaSize}) {
                left: 100px;
                top: -50px;
                width: 82%;
            }
            @media screen and (max-width:${mobileLMediaSize}) {
                left: 30px;
                top: 15px;
                width: 79%;
            }
        }
`
export const TreeSectionHero3Nike = styled.div`
    display: flex;
    width: 4%;
`
export const Footer3Nike = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    height: 50px;
    width: 100%;

    img {
        margin-left: 5%;
        width: 79%;
        height: auto;

            @media screen and (max-width:${mediaSize}) {
                width: 50%;
                margin-left: 0%;
            }
            @media screen and (max-width:${mobileLMediaSize}) {
                width: 50%;
            }
    }
`

// FOURTH CONTAINER NIKE //


export const FourthContainerNike = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    align-items: center;
    width: 100%;
    max-width: 1280px;
    margin-top: 94px;

    @media screen and (max-width:${mediaSize}) {
        margin-top: 39px;    
    }

        .nike-pan3 {
            position: absolute;
            z-index: 0;
            top: -117px;
            left: 125px;

                @media screen and (max-width:${mediaSize}) {
                    display: none;
                    width: 106px;  
                    top: 12px;
                    left: 15px;  
                }
        }
        .nike-pan3mobile {
            display: none;
            position: absolute;
            z-index: 0;
            top: -117px;
            left: 125px;

                @media screen and (max-width:${mediaSize}) {
                    display: block;
                    width: 106px;  
                    top: 12px;
                    left: 15px;  
                }
        }
`

export const Head4Nike = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    top: -57px;
    width: 100%;
    padding: 0 111px 0 87px;

    @media screen and (max-width:${mediaSize}) {
        top: -30px;
        padding: 0 15px 0 50px;
            img {
                width: 180px;
            }
        }
    
`
export const Hero4Nike = styled.div`
    display: flex;
    width: 100%;
    height: 662px;

    @media screen and (max-width:${mediaSize}) {
            height: 309px;
        }
    @media screen and (max-width:${mobileLMediaSize}) {
            height: 240px;
        }
`

export const OneSectionHero4Nike = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    width: 2%;
    margin-left: 135px;
    z-index: 50;
    
        @media screen and (max-width:${mediaSize}) {
            margin-left: 7px;   
        }
            
        `

export const TwoSectionHero4Nike = styled.div`
    display: flex;
    align-items: center;
    width: 85%;
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    align-items: flex-end;

    
        @media screen and (max-width:${mediaSize}) {
            width: 95%;  
        }

        .shoe04 {
                position: absolute;
                width: 70.6%;
                top: -30px;
                left: 228px;

                @media screen and (max-width:${mediaSize}) {
                    width: 89%;
                    top: 50px;
                    left: 18px;  
                }
            }
        .textContainer {
            display: flex;
            justify-content: space-between;
            align-content: center;
            flex-direction: column;
            width: 100%;
            
            .left {
                display: flex;
                align-items: flex-end;
                padding: 0 0 0 81px;
                width: 100%;

                    @media screen and (max-width:${mediaSize}) {
                        padding: 0 0 18px 17px;
                    }

                    img {
                        width: 493px;
                        height: auto;

                        @media screen and (max-width:${mediaSize}) {
                            width: 135px;    
                        }
                    }
            }
            .right {
                display: flex;
                justify-content: center;
                align-items: flex-start;
                flex-direction: column;
                margin: 37px 0px 0px 78px;
                width: 100%;
                
                @media screen and (max-width:${mediaSize}) {
                    margin: 0 17px 18px 17px;
                    }

                .right__1 {
                        width: 542px;
                        height: auto;

                        @media screen and (max-width:${mediaSize}) {
                            width: 135px;    
                        }
                    }
            }

            }

            .rightness {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                gap: 23px;
                margin-top: 29px;
                width: 100%;
                
                @media screen and (max-width:${mediaSize}) {
                    margin: 0 17px 18px 0;
                    display: none;
                    }

                .right__2 {
                        width: 372px;
                        height: auto;

                        @media screen and (max-width:${mediaSize}) {
                            display: none;   
                        }
                    }

            }
`
export const TreeSectionHero4Nike = styled.div`
    position: absolute;
    top: 31px;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 8%;
    z-index: 50;
    
        @media screen and (max-width:${mediaSize}) {
            margin-left: 7px; 
                img {
                    height: 124.5px;
                }  
        }
            
        `

export const HiddenFooter4 = styled.div`
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 13px;

    @media screen and (max-width:${mediaSize}) {
           display: flex;
            img {
                width: 133.5px;
            }
        }
`