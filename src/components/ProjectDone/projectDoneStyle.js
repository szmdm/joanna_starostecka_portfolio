import styled from 'styled-components'
import { mediaSize } from "../../variables/Mixins"

export const BiggerContainerGilette = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc( 100vh + 300px);
    width: 100%;
    background: #10141f;
    /* background: #fff;    */



`

export const BCGOne = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    
    .BCGOneContainer {
        margin-left: 50px;
        
    }

        .img {
         max-width: 100%;
         max-height: 100%;
        }
        
        
    
`

export const BCGTwo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;

    .BCGTwoContainer {
        
    }

        .BCGTwoHead {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            span {
                color: #fff;
                font-family: futura-pt, sans-serif;
                font-style: normal;
                font-weight: 800;
                text-transform: uppercase;
                font-size: 28px;
            }
        
        }
            
        .BCGTwoContent {
           color: #fff;
        }
        
        
    
`

    



export const SmallerContainerGilette = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: calc(100vh + 300px);
width: 100%;
background: #10141f;



`

export const SCGOne = styled.div`
display: flex;
align-items: center;
justify-content: center;

`

export const SCGTwo = styled.div`
display: flex;
align-items: center;
justify-content: center;

`