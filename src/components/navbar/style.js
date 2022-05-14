import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { COLORS } from '../../constants'

export const Container = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    column-gap: 0.5em;
`

export const StyledLink = styled(Link)`
    color: ${COLORS.red};
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`
