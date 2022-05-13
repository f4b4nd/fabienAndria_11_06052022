import { Container, Column, Text } from "./style"

export default function Footer ({children, ...restProps}) {
    return (
        <Container {...restProps} > {children} </Container>
    )
}

Footer.Column = function FooterColumn({children, ...restProps}) {
    return <Column {...restProps} > {children} </Column>
}

Footer.Text = function FooterText({children}) {
    return <Text> {children} </Text>
}
