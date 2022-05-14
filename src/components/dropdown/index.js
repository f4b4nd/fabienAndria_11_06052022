import { useState } from "react"

import { Container, Header, Title, Body, Text, List, ItemList } from "./style"
import Chevron from "../chevron"


export default function Dropdown ({title, children}) {

    const [isActive, setIsActive] = useState(false)

    return (
        <Container>

            <Header> 

                <Title> {title} </Title>

                <Chevron 
                    className={isActive ? 'chevron-up' : 'chevron-down'} 
                    size={'15px'} 
                    onClick={() => setIsActive(!isActive)} 
                />

            </Header>

            <Body isActive={isActive}>
                
                {children}

            </Body>

        </Container>
    )

}


Dropdown.TextContent = function ({children}) {
    return <Text> {children} </Text>
}

Dropdown.ListContent = function ({children}) {
    return <List> {children} </List>
}

Dropdown.ItemList = function ({children}) {
    return <ItemList> {children} </ItemList>
}
