import styled from 'styled-components'

export const Container = styled.div`
    height: ${({size}) => size || '50px'};
    width: ${({size}) => size || '50px'};
    cursor: pointer;
`

export const Image = styled.img`
    height: 100%;
    width: 100%;
    ${({rotate}) => rotate && `transform: rotate(${rotate})`};
`