import styled from 'styled-components'
import { COLORS } from '../../../constants/colors'

export const Container = styled.article`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background: ${COLORS.red};
`

export const Title = styled.p`
    font-size: 24px;
`