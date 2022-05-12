import { Container, Column, Copyright } from "./styles/footer"

export default function Footer ({children, ...restProps}) {
    return (
        <Container {...restProps} > {children} </Container>
    )
}

Footer.Column = function FooterColumn({children, ...restProps}) {
    return (
        <Column {...restProps} > {children} </Column>
    )
}

Footer.Copyright = function FooterCopyright({children}) {
    return (
        <Copyright> {children} </Copyright>
    )
}
