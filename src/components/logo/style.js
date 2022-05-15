import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BREAKPOINTS } from '../../constants'

export const Container = styled.div``

export const StyledLink = styled(Link)`
    text-decoration: none;
`

export const Icon = styled.img`
    width: 140px;

    @media screen and (max-width: ${BREAKPOINTS['sm-max-width']}) {
        max-width: 100px;
    }
`
