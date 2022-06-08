import styled from "styled-components";
import { mediaSize } from "../../variables/Mixins";

export const BiggerContainerGilette = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  /* height: calc(100vh + 300px); */
  width: 100%;
  background: #10141f;
  /* background: #fff;    */

  @media screen and (max-width: ${mediaSize}) {
    flex-direction: column;
  }
`;

export const BCGOne = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;

  .BCGOneContainer {
    margin: 3rem 0.5rem 0 1.5rem;
    height: 50%;
  }
  img {
    max-width: 100%;
    height: auto;
  }

  @media screen and (max-width: ${mediaSize}) {
    width: auto;
  }
`;

export const BCGTwo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 100%;
  margin: 100px 0 100px 0;

  @media screen and (max-width: ${mediaSize}) {
    width: auto;
    align-items: center;
    margin: 10px 0 3rem 0;
  }
`;

export const BGHead = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  height: 30%;
`;

export const BGHeadDescription1 = styled.span`
  color: ${(props) => props.textcolor};
  font-family: futura-pt, sans-serif;
  font-style: normal;
  font-weight: 800;
  text-transform: uppercase;
  font-size: clamp(1rem, 1.75rem, 2.5rem);

  @media screen and (max-width: ${mediaSize}) {
    font-size: clamp(1rem, 2vw, 2rem);
  }
`;

export const BGHeadDescription2 = styled.div`
  color: ${(props) => props.textcolor};
  font-family: futura-pt, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 1.25rem;

  @media screen and (max-width: ${mediaSize}) {
    font-size: clamp(1rem, 2.5vw, 2rem);
  }
`;

export const BGTitle = styled.div`
  color: ${(props) => props.textcolor};
  font-family: futura-pt, sans-serif;
  font-style: normal;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 3rem;
  max-width: 435px;

  @media screen and (max-width: ${mediaSize}) {
    font-size: clamp(1.5rem, 2vw, 2.5rem);
  }
`;

export const BGContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
  line-height: 1.6;

  @media screen and (max-width: ${mediaSize}) {
    display: block;
    text-align: center;
  }
`;

export const SmallerContainerGilette = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 500px;
  width: 100%;
  background: #fff;

  @media screen and (max-width: ${mediaSize}) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const SCGOne = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 40%;
  margin: 10px 50px 10px 10px;

  @media screen and (max-width: ${mediaSize}) {
  
  }
`;

export const SCGTwo = styled.div`
  
  /* top: -400px; */
  z-index: 99;

  img {
    position: relative;
    width: 85%;
    max-height: auto;
  }
`;

export const SCGImg = styled.div`
  display: flex;
  flex-direction: column;

  img {
    margin-bottom: 30px;
  }
`