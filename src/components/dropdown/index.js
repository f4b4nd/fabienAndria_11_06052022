import { useState } from "react"

import { Container, Header, Title, Body, Text } from "./style"
import ChevronLeft from "../chevron"


export default function Dropdown ({title, text}) {

    const [isActive, setIsActive] = useState(false)

    return (
        <Container >

            <Header  > 

                <Title> {title} </Title>

                <ChevronLeft 
                    rotate={isActive ? '90deg' : '-90deg'} 
                    size={'15px'} 
                    onClick={() => setIsActive(!isActive)} 
                />

            </Header>

            <Body isActive={isActive}> 

                <Text> {text} </Text>

            </Body>

        </Container>
    )

}