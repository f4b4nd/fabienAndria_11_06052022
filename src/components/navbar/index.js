import { Container, Column, StyledLink } from "./style"

export default function Navbar ({children}) {
    return (
        <Container> {children}  </Container>
    )
}

Navbar.Column = function NavbarColumn ({children}) {
    return <Column> {children} </Column>
}

Navbar.Link = function NavbarLink ({children, to, ...restProps}) {
    return <StyledLink to={to} {...restProps}> {children} </StyledLink>
}