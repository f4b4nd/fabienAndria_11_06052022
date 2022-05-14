import { Container, Image, Text } from './style.js'

export default function Banner ({src, alt, children}) {

    return (
        <Container className={'banner'}>

            <Image src={src} alt={alt} />

            {children}

        </Container>
    )
}

Banner.Text = function ({children}) {
    return <Text> {children} </Text>
}