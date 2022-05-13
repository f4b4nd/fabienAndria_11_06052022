import { Container, Column, Text } from "./style"

export default function Footer ({children}) {
    return (
        <Container> {children} </Container>
    )
}

Footer.Column = function ({children}) {
    return <Column> {children} </Column>
}

Footer.Text = function ({children}) {
    return <Text> {children} </Text>
}
