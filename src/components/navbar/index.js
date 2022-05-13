import { Container, Column, Link } from "./styles/navbar"

export default function Navbar ({children, ...restProps}) {
    return (
        <Container {...restProps} > {children}  </Container>
    )
}

Navbar.Column = function NavbarColumn ({children}) {
    return <Column> {children} </Column>
}

Navbar.Link = function NavbarLink ({children, ...restProps}) {
    return <Link {...restProps}> {children} </Link>
}