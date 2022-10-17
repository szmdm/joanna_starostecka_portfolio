import React, {useEffect, useState } from 'react'
import styled from 'styled-components'
import TopImg from '../../assets/Chevron--up.png'
import { mediaSize } from '../../variables/Mixins'

const ToTopButton = ({props}) => {

    let scrollLimit = props

    const [toTopButton, setToTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > scrollLimit) {
                setToTopButton(true)
            }
            else {
                setToTopButton(false)
            }
        })
    },)

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

  return (
    <>
        {toTopButton && (
            <Button onClick={scrollUp}>
                <img src={TopImg} alt='go to top button' />
            </Button>
        )}
    </>
  )
}

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 50px;
    right: 50px;
    height: 40px;
    width: 32px;
    font-size: 50px;
    opacity: 0.4;
    cursor: pointer;

        img {
            display: block;
        }

        @media screen and (max-width: ${mediaSize}){
            bottom: 20px;
            right: 20px;
        }
`

export default ToTopButton;