import styled from 'styled-components'
import { BREAKPOINTS } from '../../constants'

export const Container = styled.div`
    display: flex;
    justify-content: center;
`

export const Inner = styled.div`
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 20px;
    position: relative;

    @media screen and (max-width: ${BREAKPOINTS['sm-max-width']}) {
        height: 300px;
    }
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
`

export const LeftArrow = styled.div`
    position: absolute;
    top: 50%;
    left: 1%;
    transform: translateY(-50%);

`

export const RightArrow = styled.div`
    position: absolute;
    top: 50%;
    right: 1%;
    transform: translateY(-50%);
`

export const IndexIndicator = styled.span`
    position: absolute;
    bottom: 1%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.2em;
    color: white;
`