import styled from "styled-components";
import { mediaSize, mobileLMediaSize } from "../../variables/Mixins";

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
export const ProjectContainerLandingpage = styled.div`
  display: flex;
  max-width: 980px;
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

export const ProjectContainerTypo = styled.div`
  display: flex;
  max-width: 980px;
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

export const ProjectContainer2 = styled.div`
  display: flex;
  max-width: 980px;
  height: auto;
  align-items: ${(props) => props.alignItems};
  justify-content: center;
  flex-direction: ${(props) => props.flexDirection};
  width: 100%;

  @media screen and (max-width: ${mediaSize}) {
    flex-direction: column-reverse;
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
  justify-content: flex-start;
  width: ${(props) => props.width};
  flex-direction: ${(props) => props.flexDirection};

  @media screen and (max-width: ${mediaSize}) {
    width: 90%;    
    margin-left: 35px;
  }
`;

export const BCGOneContainer = styled.div`
  padding: 2rem;

  img {
   max-width: 100%;
   height: auto;
  }

   @media screen and (max-width: ${mediaSize}) {
    padding: 20px;
  }

  @media screen and (max-width: ${mediaSize}) {
  }
`;


export const BCGTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: ${(props) => props.margin};
  padding: 0 10px 0 20px;
  width: 100%;

  @media screen and (max-width: ${mediaSize}) {
    align-items: center;
    margin: 60px 0px 35px 0px;
  }
`;

export const BCGTwoLandingpage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: ${(props) => props.margin};
  width: 42%;

  @media screen and (max-width: ${mediaSize}) {
    align-items: center;
    width: 100%;
    padding: 0 10px 0 20px;
    gap: 20px;
    margin: 0px 0px 35px 0px;
  }
`;

export const BCGTwoUser = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  margin: ${(props) => props.margin};
  padding: 0 10px 0 20px;

  @media screen and (max-width: ${mediaSize}) {
    align-items: center;
    margin: 60px 0px 35px 0px;
  }
`;

export const BCGTwoColorTitle = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  width: 75%;
  margin: ${(props) => props.margin};

  @media screen and (max-width: ${mediaSize}) {
    width: 100%;
    align-items: center;
    padding: 0 10px 0 20px;
  }
`;

export const BGHead = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};

  @media screen and (max-width: ${mediaSize}) {
    display: ${(props) => props.display};
    justify-content: center;
    width: ${(props) => props.mediaWidth};
    align-items: flex-start;
    padding: 0 10px 0 20px;
  }
`;

export const BGHeadLandingpage = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  margin: ${(props) => props.margin};
  max-width: 490px;
  width: ${(props) => props.width};

  @media screen and (max-width: ${mediaSize}) {
    display: ${(props) => props.display};
    justify-content: center;
    width: ${(props) => props.mediaWidth};
    align-items: flex-start;
  }
`;
export const BGHeadFidelity = styled.div`
  /* position: relative;
  left: 150px; */
  width: 400px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;

  @media screen and (max-width: ${mediaSize}) {
    position: inherit;
    display: flex;
    justify-content: center;
    width: ${(props) => props.mediaWidth};
    align-items: left;
    padding: 0 10px 0 20px;
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
  

  @media screen and (max-width: ${mediaSize}) {
    text-align: left;
    width: ${(props) => props.mediaWidth};
  }
`;

export const BGTitle = styled.div`
  color: ${(props) => props.textcolor};
  font-family: "FuturaStd-Bold";
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 3rem;
  max-width: ${(props) => props.maxWidth};
  line-height: 4rem;
  margin: ${(props) => props.margin};

  @media screen and (max-width: ${mediaSize}) {
    font-size: clamp(1.875rem, 2vw, 2.5rem);
    line-height: 2.4rem;
    margin: ${(props) => props.marginMobile};
    width: ${(props) => props.widthMobile};
  }

  @media screen and (max-width: ${mobileLMediaSize}) {
    width: ${(props) => props.widthMobile};
  }
`;

export const BGContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};

  @media screen and (max-width: ${mediaSize}) {
    margin: ${(props) => props.marginMobile};
    width: ${(props) => props.widthMobile};
    max-width: 490px;
    padding: ${(props) => props.paddingMobile};
  }
`;

export const BGContentUser = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};

  @media screen and (max-width: ${mediaSize}) {
    margin: ${(props) => props.marginMobile};
    width: ${(props) => props.widthMobile};
    max-width: 490px;
    padding: ${(props) => props.paddingMobile};
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
  max-width: 400px;
  width: 50%;

  @media screen and (max-width: ${mediaSize}) {
    align-items: center;
    margin: ${(props) => props.marginMobile};
    width: 100%;
  }
`;

export const SCGTypo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin: ${(props) => props.margin};
  width: 50%;

  @media screen and (max-width: ${mediaSize}) {
    align-items: center;
    margin: ${(props) => props.marginMobile};
    width: 100%;
  }
`;

export const SCGFidelity = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin: ${(props) => props.margin};
  max-width: 980px;
  width: 100%;

  @media screen and (max-width: ${mediaSize}) {
    align-items: center;
    margin: ${(props) => props.marginMobile};
    width: 100%;
  }
`;

export const SCGTwo = styled.div`
  
  z-index: 99;
  margin-left: 30px;

  img {
    position: relative;
    width: 95%;
    max-height: auto; 
    left: 50px;

    @media screen and (max-width: ${mediaSize}) {
    left: 0;
  }
  }

  @media screen and (max-width: ${mediaSize}) {
    margin-left: 40px;
    /* display: none; */
    position: static;
  }
`;

export const SCGThree = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 50%;

  @media screen and (max-width: ${mediaSize}) {
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

export const BGHeadDescription4 = styled.div`
  display: none;
  color: ${(props) => props.textcolor};
  font-family: "FuturaStd-Book";
  font-style: normal;
  font-size: 1.25rem;
  position: ${(props) => props.position};
  line-height: 1.8rem;
  margin: ${(props) => props.margin};
  width: 400px;
  

  @media screen and (max-width: ${mediaSize}) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 20px 0 0 0;
  }
`;

export const ColorContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
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
    margin-left: 0px;
  }
`

export const InsideBiggerContainerGilette = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    flex-wrap: wrap;
    margin: 50px 0 80px 0;
    max-width: 980px;
    width: 100%;

  @media screen and (max-width: ${mediaSize}) {
    flex-direction: column;
  }
`;

export const IPadContainer = styled.div`
  z-index: 100;
  display: flex;
  justify-content: center;
  max-width: 1280px;
  width: 100%;
  padding: 0 50px 0 0;

img {
  position: relative;
  width: 85%;
  max-height: auto;
  top: -165px;
  right: -66px;

  @media screen and (max-width: ${mediaSize}) {
    margin-top: 30px;
    top: -100px;
    right: 0px;
    padding: 0 0 0 0;
  }
}

@media screen and (max-width: ${mediaSize}) {
  margin-left: 0x;
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
    width: 260px;
  }
`;
