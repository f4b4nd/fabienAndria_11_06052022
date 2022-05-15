import styled from 'styled-components'

import { BREAKPOINTS, COLORS } from '../../constants'

export const Container = styled.div`
    ${({width}) => width && `width : ${width}`};

    @media screen and (max-width: ${BREAKPOINTS['sm-max-width']}) {
        width: 100%;
    }

`

export const Group = styled.div`
    display: flex;
    ${({flexDirection}) => flexDirection && `flex-direction : ${flexDirection}`};
    gap: 1em;

    @media screen and (max-width: ${BREAKPOINTS['sm-max-width']}) {
        flex-direction: column;
    }
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5em;
    border-radius: 5px;
    background-color: ${COLORS.red};
    color: white;
`
export const Title = styled.span``

export const Body = styled.div`
    display: ${({isActive}) => isActive ? 'block' : 'none'};
    
    padding: 1.5em;
    color: ${COLORS.red};
    background-color: ${COLORS.lightgrey} ;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    font-size: 0.7em;

`

export const Text = styled.p`
    margin: 0;
`

export const List = styled.ul`
    margin: 0;
    padding: 0;
`

export const ItemList = styled.li`
    margin: 0;
`