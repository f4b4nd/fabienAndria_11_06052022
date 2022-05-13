import { Group, Container, StyledLink, Title } from "./style"

export default function Card({children, ...restProps}) {
    return (
        <Container {...restProps}> {children} </Container>
    )
}

Card.Group = function CardGroup ({children}) {
    return <Group> {children} </Group>
}

Card.Link = function CardStyledLink ({children, ...restProps}) {
    return <StyledLink {...restProps}> {children} </StyledLink>
}

Card.Title = function CardTitle ({children}) {
    return <Title> {children} </Title>
}