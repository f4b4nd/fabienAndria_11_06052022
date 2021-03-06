import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { BREAKPOINTS, COLORS } from '../../constants'

export const Container = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    column-gap: 1em;
`

export const StyledLink = styled(Link)`
    color: ${COLORS.red};
    text-decoration: none;
    font-size: 1.5em;

    &:hover {
        text-decoration: underline;
    }
    @media screen and (max-width: ${BREAKPOINTS['sm-max-width']}) {
        text-transform: uppercase ;
        font-size: 1.3em;
    }
`
