import { Container, Name, Image, ImageContainer } from "./style"

export default function UserCard ({name, src}) {

    return (

        <Container className={'user-card'}>

            <Name> {name} </Name>

            <ImageContainer>

                <Image src={src} alt={name} />

            </ImageContainer>

        </Container>

    )

}

