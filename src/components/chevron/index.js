import chevron from '../../assets/icons/chevron-white.png'
import { Container, Image } from './styles/chevron'

export default function Chevron({size, rotate}) {
    return (
        <Container size={size} >
            
            <Image rotate={rotate} src={chevron} />

        </Container>
    )
}