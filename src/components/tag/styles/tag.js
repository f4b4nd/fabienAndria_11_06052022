import styled from 'styled-components'
import { COLORS } from '../../../constants'

export const Container = styled.span`
    background-color: ${COLORS.red};
    color: white;
    border-radius: 5px;
    padding: 0.3em;
`

export const Group = styled.div`
    display: flex;
    column-gap: 10px;
`