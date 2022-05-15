import styled from 'styled-components'

import { COLORS } from '../../constants'

export const Container = styled.div`
    display: flex;
    align-items: center;
    column-gap: 1em;
`

export const Name = styled.span`
    color: ${COLORS.red};
    font-size: 1.4em;
`

export const Image = styled.img`
    height: 100%;
    width: 100%;
`

export const ImageContainer = styled.div`
    height: 70px;
    width: 70px;
    overflow: hidden;
    border-radius: 50%;
`