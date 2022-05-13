import { useState } from "react"

import { Container, Header, Title, Body, Text } from "./style"
import ChevronLeft from "../chevron"


export default function Dropdown ({children}) {

    const [isActive, setIsActive] = useState(false)

    const onClick = (isActive => {setIsActive(!isActive); console.log('cli')})

    return (
        <Container opened={isActive} onClick={onClick} >     
            {children}
        </Container>
    )

}

Dropdown.Header = function ({onClick, children}) {
    
    return (
        <Header> 
            <Title> {children} </Title>
            <ChevronLeft rotate={'-90deg'} size={'15px'} onClick={onClick} />
        </Header>
    )
}

Dropdown.Body = function ({children}) {
    return (
        <Body> 
            <Text> {children} </Text> 
        </Body>
    )
}
