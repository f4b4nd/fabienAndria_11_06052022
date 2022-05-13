import { Container, Column, StyledLink } from "./style"

export default function Navbar ({children}) {
    return (
        <Container> {children}  </Container>
    )
}

Navbar.Column = function ({children}) {
    return <Column> {children} </Column>
}

Navbar.Link = function ({children, to, ...restProps}) {
    return <StyledLink to={to} {...restProps}> {children} </StyledLink>
}