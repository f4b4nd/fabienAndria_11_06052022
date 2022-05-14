import chevronLeft from '../../assets/icons/chevron-left.png'
import { Container, Image } from './style'

export default function Chevron ({...restProps}) {
    return (
        <Container {...restProps}>
            
            <Image src={chevronLeft} />

        </Container>
    )
}