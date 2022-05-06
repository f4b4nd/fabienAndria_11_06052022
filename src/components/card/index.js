import { Container, Title } from "./styles/card"

export default function Card({children, ...restProps}) {
    return (
        <Container {...restProps}> {children} </Container>
    )
}

Card.Title = function CardTitle({children, ...restProps}) {
    return <Title {...restProps}> {children} </Title>
}