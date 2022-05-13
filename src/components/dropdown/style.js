import styled from 'styled-components'

import { COLORS } from '../../constants'

export const Container = styled.div``

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
    
    padding: 1em;
    color: ${COLORS.red};
    background-color: ${COLORS.lightgrey} ;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`

export const Text = styled.p``

export const List = styled.ul``

export const ItemList = styled.li``