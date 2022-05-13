import { Group, Container, StyledLink, Title } from "./style"

export default function Card({children, ...restProps}) {
    return (
        <Container {...restProps}> {children} </Container>
    )
}

Card.Group = function ({children}) {
    return <Group> {children} </Group>
}

Card.Link = function ({children, ...restProps}) {
    return <StyledLink {...restProps}> {children} </StyledLink>
}

Card.Title = function ({children}) {
    return <Title> {children} </Title>
}