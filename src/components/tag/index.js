import { Container, Group } from "./style"

export default function Tag({children}) {
    return <Container> {children} </Container>
}

Tag.Group = function TagGroup({children}) {
    return <Group> {children} </Group>
}