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
  flex-direction: ${(props) => props.flexDirection};

  @media screen and (max-width: ${mediaSize}) {
    /* width: auto; */
  }
`;

export const BCGOneContainer = styled.div`
  margin: 3rem 0.5rem 0 3rem;
  width: 100%;

  img {
   max-width: 100%;
   height: auto;
  }

  @media screen and (max-width: ${mediaSize}) {
    margin: 1.5rem 0.5rem 0.5rem 0.5rem;
  }
`;


export const BCGTwo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 100%;
  margin: ${(props) => props.margin};

  @media screen and (max-width: ${mediaSize}) {
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
  width: ${(props) => props.width};

  @media screen and (max-width: ${mediaSize}) {
    display: ${(props) => props.display};
    text-align: center;
    justify-content: center;
    width: ${(props) => props.mediaWidth};
    align-items: center;
  }
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
  position: ${(props) => props.position};

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
  height: ${(props) => props.height};

  @media screen and (max-width: ${mediaSize}) {
    display: block;
    text-align: center;
    align-items: center;
  }
`;

export const SmallerContainerGilette = styled.div`
  display: flex;
  align-items: ${(props) => props.alignItems};
  justify-content: flex-start;
  max-height: ${(props) => props.maxHeight};
  width: 100%;
  background: #DDDFE4;

  @media screen and (max-width: ${mediaSize}) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-height: none;
  }
`;

export const SCGOne = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 40%;
  margin: ${(props) => props.margin};

  @media screen and (max-width: ${mediaSize}) {
    margin: 0.6rem 1rem 0.6rem 1rem;
    width: auto;
    align-items: center;
  }
`;

export const SCGTwo = styled.div`
  
  z-index: 99;

  img {
    position: relative;
    width: 85%;
    max-height: auto;
  }

  @media screen and (max-width: ${mediaSize}) {
    margin-left: 70px;
    /* display: none; */
    position: static;
  }
`;

export const SCGThree = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin: 0.6rem 3rem 0.6rem 0rem;

  @media screen and (max-width: ${mediaSize}) {
    margin: 0.6rem 1rem 0.6rem 1rem;
    width: auto;

  }
`;

export const SCGImg = styled.div`
  display: flex;
  flex-direction: column;
  position: ${(props) => props.position};

  img {
    margin-bottom: 30px;
    max-width: 100%;
    height: auto;
  }

  @media screen and (max-width: ${mediaSize}) {
  align-items: center;
  }
`;

export const BGHeadDescription3 = styled.div`
  color: ${(props) => props.textcolor};
  font-family: futura-pt, sans-serif;
  font-weight: ${(props) => props.fontWeight};
  font-size: 2rem;
  position: ${(props) => props.position};
  margin-left: 10px;

  @media screen and (max-width: ${mediaSize}) {
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    position: relative;
    top: -130px;
  }
`;

export const ColorContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  height: auto;
  width: 65%;
  padding: 10px;

  @media screen and (max-width: ${mediaSize}) {
  width: 100%;
  flex-direction: row;
  align-items: center;

  }

`;

export const ColorBox = styled.div`
  width: 100%;
  height: 110px;
  background: ${(props) => props.backgroundColor};
  border-radius: 7px;
`

export const TextBox = styled.div`
  color: ${(props) => props.textcolor};
  font-family: futura-pt, sans-serif;
  font-size: 1.25rem;
  line-height: 29px;
  margin: 25px 0 25px 0;

  @media screen and (max-width: ${mediaSize}) {
    margin-left: 20px;
  }
`

export const InsideBiggerContainerGilette = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  background: #10141f;

  @media screen and (max-width: ${mediaSize}) {
    flex-direction: column;
  }
`;

export const IPadContainer = styled.div`
  z-index: 100;
  display: flex;
  justify-content: center;

img {
  position: relative;
  width: 85%;
  max-height: auto;
  top: -165px;

  @media screen and (max-width: ${mediaSize}) {
    position: static;
    margin-top: 30px;
  }
}

@media screen and (max-width: ${mediaSize}) {
  margin-left: 45px;
  top: 30px;
  /* display: none; */
}
`;
