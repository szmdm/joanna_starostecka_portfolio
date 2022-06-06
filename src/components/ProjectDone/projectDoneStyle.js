import styled from "styled-components";
import { mediaSize } from "../../variables/Mixins";

export const BiggerContainerGilette = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh + 300px);
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
    margin-left: 50px;
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
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 50%;
  height: 100%;
  padding-left: 20px;

  @media screen and (max-width: ${mediaSize}) {
    width: auto;
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
  color: #fff;
  font-family: futura-pt, sans-serif;
  font-style: normal;
  font-weight: 800;
  text-transform: uppercase;
  font-size: clamp(1rem, 1.75rem, 2.5rem);
`;
export const BGHeadDescription2 = styled.span`
  color: #fff;
  font-family: futura-pt, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 1.25rem;

  @media screen and (max-width: ${mediaSize}) {
    font-size: clamp(1rem, 2vw, 2rem);
  }
`;
export const BGTitle = styled.p`
  color: #fff;
  font-family: futura-pt, sans-serif;
  font-style: normal;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 3rem;
  max-width: 435px;

  @media screen and (max-width: ${mediaSize}) {
    font-size: clamp(1.5rem, 3vw, 3.5rem);
  }
`;
export const BGContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
  line-height: 1.6;
`;

export const SmallerContainerGilette = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh + 300px);
  width: 100%;
  background: #10141f;
`;

export const SCGOne = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SCGTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
