import { useState } from "react"

import { Container, Group, Header, Title, Body, Text, List, ItemList } from "./style"
import Chevron from "../chevron"


export default function Dropdown ({title, children, ...restProps}) {

    const [isActive, setIsActive] = useState(false)

    return (
        <Container className={'dropdown'} {...restProps} >

            <Header className={'dropdown__header'}>

                <Title className={'dropdown__title'}> {title} </Title>

                <Chevron 
                    className={isActive ? 'chevron-up' : 'chevron-down'} 
                    size={'15px'} 
                    onClick={() => setIsActive(!isActive)} 
                />

            </Header>

            <Body className={'dropdown__body'} isActive={isActive}>
                
                {children}

            </Body>

        </Container>
    )

}

Dropdown.Group = function ({children, ...restProps}) {
    return <Group {...restProps}> {children} </Group>
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
