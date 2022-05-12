import { Group, Container, Title } from "./styles/card"

export default function Card({children, ...restProps}) {
    return (
        <Container {...restProps}> {children} </Container>
    )
}

Card.Group = function CardGroup({children, ...restProps}) {
    return (
        <Group {...restProps}> {children} </Group>
    )
}

Card.Title = function CardTitle({children, ...restProps}) {
    return <Title {...restProps}> {children} </Title>
}