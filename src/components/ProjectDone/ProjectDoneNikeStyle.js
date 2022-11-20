import styled from "styled-components";
import { laptop, mediaSize, mobileLMediaSize } from "../../variables/Mixins";

export const MainContainerNike = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: #FBF9FA;
`
// FIRST CONTAINER NIKE //

export const FirstContainerNike= styled.div`
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
    
`
export const NikeImg01 = styled.div`
    display: flex;
    height: 188px;

`
export const NikeImg02 = styled.div`
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(0%, -50%);
    height: 42px;
    z-index: 10;
`

export const NikeImg03 = styled.div`
    display: flex;
    position: absolute;
    right: 24px;
    height: 468px;

`
export const HeroNike = styled.div`
    display: flex;
    width: 100%;
    height: 650px;
`
export const OneSectionHeroNike = styled.div`
    display: flex;
    align-items: center;
    width: 7%;
    margin-left: 87px;

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
            margin: 52px 0 0 65px;
        }
        .terrascape {
            width: 542px;
            margin: 52px 0 0 65px;
        }
        .shoe01 {
            position: absolute;
            left: 66px;
            width: 1055px;
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
`
// SECOND CONTAINER NIKE //


export const SecondContainerNike= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    align-items: center;
    width: 100%;
    max-width: 1280px;
    margin-top: 94px;

        .nike-pany {
            position: absolute;
            z-index: 20;
            top: 62px;
            left: 135px;
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
    
`
export const Hero2Nike = styled.div`
    display: flex;
    width: 100%;
    height: 662px;
`

export const OneSectionHero2Nike = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    width: 7%;
    margin-left: 87px;
    z-index: 50;

        .shoe2 {
            position: absolute;
            top: 92px;
            left: 118px;
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

        .textContainer {
            display: flex;
            justify-content: space-between;
            align-content: center;
            width: 100%;
            
            .left {
                display: flex;
                align-items: flex-end;
                padding: 0 0 68px 20px;
            }
            .right {
                display: flex;
                align-content: center;
                justify-content: center;
                align-items: flex-end;
                flex-direction: column;
                gap: 23px;
                margin: 0 116px 68px 0;
            }
        }

`


