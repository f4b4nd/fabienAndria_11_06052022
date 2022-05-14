import { Group, Container, StyledLink, Image, Title } from "./style"

export default function Card({children, ...restProps}) {
    return (
        <Container className={'card'} {...restProps}> {children} </Container>
    )
}

Card.Group = function ({children}) {
    return <Group> {children} </Group>
}

Card.Link = function ({children, ...restProps}) {
    return <StyledLink {...restProps}> {children} </StyledLink>
}

Card.Image = function ({...restProps}) {
    return <Image {...restProps} />
}

Card.Title = function ({children}) {
    return <Title className={'card__title'}> {children} </Title>
}