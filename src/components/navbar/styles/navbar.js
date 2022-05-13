import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { COLORS } from '../../../constants'

export const Container = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div``

export const StyledLink = styled(Link)`
    color: ${COLORS.red}
`
