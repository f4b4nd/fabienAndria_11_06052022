import { Group, Container, StyledLink, Title } from "./styles/card"

export default function Card({children, ...restProps}) {
    return (
        <Container {...restProps}> {children} </Container>
    )
}

Card.Group = function CardGroup ({children, ...restProps}) {
    return <Group {...restProps}> {children} </Group>
}

Card.Link = function CardStyledLink ({children, ...restProps}) {
    return <StyledLink {...restProps}> {children} </StyledLink>
}

Card.Title = function CardTitle ({children, ...restProps}) {
    return <Title {...restProps}> {children} </Title>
}