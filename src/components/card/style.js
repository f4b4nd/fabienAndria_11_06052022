import styled from 'styled-components'
import { Link } from "react-router-dom"

import { COLORS, BREAKPOINTS } from '../../constants'


export const Group = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2.5em;

    background-color: ${COLORS.lightgrey};
    padding: 2em 1em;

    @media screen and (min-width: ${BREAKPOINTS['md-min-width']}) and (max-width: ${BREAKPOINTS['lg-max-width']}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: ${BREAKPOINTS['sm-max-width']}) {
        background-color: transparent;
        grid-template-columns: 1fr;
        padding: 0;
        grid-gap: 1.5em;
    }
`

export const Container = styled.article`
    position: relative;
    border-radius: 10px;
    background: ${COLORS.red};
    height: 350px;
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
    font-size: 1.8em;
    color: white;
    bottom: 5%;
    left: 10px;
    max-width: 45%;
    margin: 0;
    text-shadow: 1px 1px 1px black;
`