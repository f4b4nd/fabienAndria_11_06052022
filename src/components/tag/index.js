import { Container, Group } from "./styles/tag"

export default function Tag({children}) {
    return <Container> {children} </Container>
}

Tag.Group = function TagGroup({children}) {
    return <Group> {children} </Group>
}