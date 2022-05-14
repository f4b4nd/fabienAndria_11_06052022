import styled from 'styled-components'
import { COLORS } from '../../constants'

export const Container = styled.span`
    background-color: ${COLORS.red};
    color: white;
    border-radius: 8px;
    font-size: 0.7em;
    padding: 0.2em 0.4em;
`

export const Group = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
`