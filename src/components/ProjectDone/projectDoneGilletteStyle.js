import styled from "styled-components";
import { mediaSize } from "../../variables/Mixins";

export const ProjectContainer = styled.div`
  display: flex;
  max-width: 1280px;
  height: auto;
  align-items: ${(props) => props.alignItems};
  justify-content: center;
  flex-direction: ${(props) => props.flexDirection};
  width: 100%;

  @media screen and (max-width: ${mediaSize}) {
    flex-direction: column;
    align-items: center;
  }
`

export const BiggerContainerGilette = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  background: #10141f;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;

  @media screen and (max-width: ${mediaSize}) {
    flex-direction: column;
  }
`;

export const BCGOne = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
  flex-direction: ${(props) => props.flexDirection};

  @media screen and (max-width: ${mediaSize}) {
    width: 90%;    
    margin-left: 35px;
  }
`;

export const BCGOneContainer = styled.div`
  margin: 3rem 4.5rem 0 1rem;
  width: 100%;

  img {
   max-width: 100%;
   height: auto;
   position: relative;
   left: 65px;

   @media screen and (max-width: ${mediaSize}) {
    left: 0;
  }
  }

  @media screen and (max-width: ${mediaSize}) {
    margin: 1.5rem 0.5rem 0.5rem 0.5rem;
  }
`;


export const BCGTwo = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  margin: ${(props) => props.margin};

  @media screen and (max-width: ${mediaSize}) {
    align-items: center;
    margin: 5px 0 50px 0;
  }
`;

export const BCGTwoColorTitle = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  width: 60%;
  margin: ${(props) => props.margin};

  @media screen and (max-width: ${mediaSize}) {
    margin: 10px 2.5rem 10px 2.5rem;
  }
`;

export const BGHead = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  height: 30%;
  margin: ${(props) => props.margin};
  /* width: ${(props) => props.width}; */

  @media screen and (max-width: ${mediaSize}) {
    display: ${(props) => props.display};
    justify-content: left;
    width: ${(props) => props.mediaWidth};
    align-items: left;
  }
`;
export const BGHeadFidelity = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  height: 30%;
  width: 380px;
  position: relative;
  bottom: 240px;
  left: -110px;
  min-height: 560px;

  @media screen and (max-width: ${mediaSize}) {
    display: ${(props) => props.display};
    text-align: center;
    justify-content: center;
    width: ${(props) => props.mediaWidth};
    align-items: center;
    bottom: 0px;
    left: 0px;
    min-height: 200px;
  }
`;

export const BGHeadDescription1 = styled.span`
  color: ${(props) => props.textcolor};
  font-family: "FuturaStd-Bold";
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
  font-family: "FuturaStd-Medium";
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  position: ${(props) => props.position};
  line-height: 1.8rem;
  margin: ${(props) => props.margin};
  width: 400px;
  

  @media screen and (max-width: ${mediaSize}) {
    text-align: left;
    width: 300px;
  }
`;

export const BGTitle = styled.div`
  color: ${(props) => props.textcolor};
  font-family: "FuturaStd-Bold";
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 3rem;
  max-width: 435px;
  line-height: 4rem;
  margin: ${(props) => props.margin};

  @media screen and (max-width: ${mediaSize}) {
    font-size: clamp(1.875rem, 2vw, 2.5rem);
    line-height: 2.4rem;
    margin-top: 60px;
  }
`;

export const BGContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-top: 80px;
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};

  @media screen and (max-width: ${mediaSize}) {
    margin: 20px 0 15px 35px;
  }
`;

export const SmallerContainerGilette = styled.div`
  display: flex;
  align-items: ${(props) => props.alignItems};
  justify-content: center;
  max-height: ${(props) => props.maxHeight};
  min-height: ${(props) => props.minHeight};
  width: 100%;
  background: #DDDFE4;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;

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
  margin: ${(props) => props.margin};

  @media screen and (max-width: ${mediaSize}) {
    margin: 0.6rem 1rem 0.6rem 1rem;
    width: auto;
    align-items: center;
  }
`;

export const SCGTwo = styled.div`
  
  z-index: 99;
  margin-left: 30px;

  img {
    position: relative;
    width: 85%;
    max-height: auto; 
    left: 50px;

    @media screen and (max-width: ${mediaSize}) {
    left: 0;
  }
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
  margin: 0.6rem 3rem 0.6rem 7rem;

  @media screen and (max-width: ${mediaSize}) {
    margin: 0.6rem 1rem 0.6rem 1rem;
    width: auto;

  }
`;

export const SCGImg = styled.div`
  display: flex;
  flex-direction: column;
  position: ${(props) => props.position};
  width: 100%;
  align-items: flex-start;

  img {
    margin-bottom: 30px;
    max-width: 100%;
    height: auto;
  }

  @media screen and (max-width: ${mediaSize}) {
    margin-top: 20px;

  .iconsImg {
    width: 200px;
  }

  .logoImg {
    width: 154px;
  }
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
  width: 100%;
  height: auto;
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
    width: 100px;
  }
`

export const InsideBiggerContainerGilette = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    flex-wrap: wrap;
    margin: 50px 0 80px 0;
    max-width: 940px;
    gap: 25px;

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
  right: -66px;

  @media screen and (max-width: ${mediaSize}) {
    position: static;
    margin-top: 30px;
  }
}

@media screen and (max-width: ${mediaSize}) {
  margin-left: 45px;
  top: 30px;
}
`;

export const BCGTwoColor = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin: ${(props) => props.margin};
  width: 382px;

  @media screen and (max-width: ${mediaSize}) {
    align-items: center;
    margin: 0;
    width: 200px;
  }
`;
