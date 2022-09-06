import React, {useEffect, useState } from 'react'
import styled from 'styled-components'

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
            <Button onClick={scrollUp}>^</Button>
        )}
    </>
  )
}

const Button = styled.button`
    position: fixed;
    bottom: 50px;
    right: 50px;
    height: 55px;
    width: 55px;
    font-size: 50px;
    border: 1px solid;
    background-color: grey;
    opacity: 0.5;
    cursor: pointer;
`

export default ToTopButton;