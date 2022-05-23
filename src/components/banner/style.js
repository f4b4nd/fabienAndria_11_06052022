import styled from 'styled-components'
import { BREAKPOINTS } from '../../constants'

export const Container = styled.div`
    height: 250px;
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
`

export const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`

export const Text = styled.span`
    color: white;
    font-size: 3.5em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    text-shadow: 0.1px 0.1px 0.1px black;

    @media screen and (max-width: ${BREAKPOINTS['sm-max-width']}) {
        font-size: 2.3em;
        top: 35%;
        left: 5%;
        transform: none;
    }
`