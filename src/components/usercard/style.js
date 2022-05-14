import styled from 'styled-components'

import { COLORS } from '../../constants'

export const Container = styled.div`
    display: flex;
`

export const Name = styled.span`
    color: ${COLORS.red}
`

export const Image = styled.img`
    height: 100%;
    width: 100%;
`

export const ImageContainer = styled.div`
    height: 40px;
    width: 40px;
    overflow: hidden;
    border-radius: 50%;
`