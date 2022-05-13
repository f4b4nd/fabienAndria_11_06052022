import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { COLORS } from '../../../constants'

export const Container = styled.div`
    font-size: 1.5em;
`
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({color}) => color === 'red' ? COLORS.red : 'white'};
`

export const Icon = styled.img`
    width: 50px;
    height: 50px;
`
