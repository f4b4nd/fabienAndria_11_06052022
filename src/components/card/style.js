import styled from 'styled-components'
import { Link } from "react-router-dom"

import { COLORS, BREAKPOINTS } from '../../constants'


export const Group = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1em;

    background-color: ${COLORS.lightgrey};
    padding: 2em 1em;

    @media screen and (min-width: ${BREAKPOINTS['md-min-width']}) and (max-width: ${BREAKPOINTS['md-max-width']}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: ${BREAKPOINTS['sm-max-width']}) {
        background-color: transparent;
        grid-template-columns: 1fr;
    }
`

export const Container = styled.article`
    position: relative;
    border-radius: 10px;
    background: ${COLORS.red};
    height: 300px;
    overflow: hidden;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`

export const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`

export const Title = styled.p`
    position: absolute;
    font-size: 1.3em;
    color: white;
    bottom: 1%;
    left: 10px;
    max-width: 45%;
`