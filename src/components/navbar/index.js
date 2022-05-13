import { Container, Column, StyledLink } from "./styles/navbar"

export default function Navbar ({children, ...restProps}) {
    return (
        <Container {...restProps} > {children}  </Container>
    )
}

Navbar.Column = function NavbarColumn ({children}) {
    return <Column> {children} </Column>
}

Navbar.Link = function NavbarLink ({children, to, ...restProps}) {
    return <StyledLink to={to} {...restProps}> {children} </StyledLink>
}