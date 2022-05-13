import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
`

export const Inner = styled.div`
    max-width: 90vw;
    max-height: 250px;
    height: 250px;
    overflow: hidden;
    border-radius: 20px;
    position: relative;
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
`

export const LeftArrow = styled.div`
    height: 50px;
    width: 50px;
    position: absolute;
    top: 100px;
    left: 10px;
    
    border: 1px solid black;
`

export const RightArrow = styled.div`
    height: 50px;
    width: 50px;
    position: absolute;
    top: 100px;
    right: 10px;

    border: 1px solid black;
`