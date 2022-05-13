import chevronLeft from '../../assets/icons/chevron-left.png'
import { Container, Image } from './style'

export default function ChevronLeft({size, rotate}) {
    return (
        <Container size={size} >
            
            <Image rotate={rotate} src={chevronLeft} />

        </Container>
    )
}