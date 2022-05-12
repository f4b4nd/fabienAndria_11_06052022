import styled from 'styled-components'
import { COLORS } from '../../../constants/colors'
import { BREAKPOINTS } from '../../../constants/breakpoints'

export const Group = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    row-gap: 1em;
    background-color: ${COLORS.lightgrey};
    padding: 1em;

    @media screen and (max-width: ${BREAKPOINTS['sm-max-width']}) {
        background-color: none;
    }
`

export const Container = styled.article`
    flex-basis: 30%;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background: ${COLORS.red};
    height: 200px;

    @media screen and (max-width: ${BREAKPOINTS['sm-max-width']}) {
        flex-basis: 100%;
    }
`

export const Title = styled.p`
    font-size: 1.5em;
`