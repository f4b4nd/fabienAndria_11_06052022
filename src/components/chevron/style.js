import styled from 'styled-components'

export const Container = styled.div`
    height: ${({size}) => size || '50px'};
    width: ${({size}) => size || '50px'};
    cursor: pointer;

    &.chevron-up img {
        transform: rotate(90deg);
    }

    &.chevron-down img {
        transform: rotate(-90deg);
    }

    &.chevron-right img {
        transform: rotate(180deg);
    }

    &.chevron-left img {
        transform: none;
    }

`

export const Image = styled.img`
    height: 100%;
    width: 100%;
`