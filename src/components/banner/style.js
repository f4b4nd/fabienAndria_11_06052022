import styled from 'styled-components'

export const Container = styled.div`
    height: 250px;
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
`

export const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`

export const Text = styled.span`
    color: white;
    font-size: 1.8em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`