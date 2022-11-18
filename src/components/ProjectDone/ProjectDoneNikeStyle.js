import styled from "styled-components";
import { laptop, mediaSize, mobileLMediaSize } from "../../variables/Mixins";

export const MainContainerNike = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: #FBF9FA;
`
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
    width: 88%;
    background-color: #fffffa;
    z-index: 20;
    box-shadow: 9px 9px 15px -9px rgba(66, 68, 90, 1);

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
    width: 5%;
`
export const FooterNike = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    height: 50px;
    width: 100%;
`