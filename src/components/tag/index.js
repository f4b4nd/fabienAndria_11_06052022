import { Container, Group } from "./style"

export default function Tag({children}) {
    return <Container> {children} </Container>
}

Tag.Group = function ({children}) {
    return <Group> {children} </Group>
}