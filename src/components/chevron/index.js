import chevronLeft from '../../assets/icons/chevron-left.png'
import { Container, Image } from './style'

export default function ChevronLeft({size, rotate, ...restProps}) {
    return (
        <Container size={size} {...restProps}>
            
            <Image rotate={rotate} src={chevronLeft} />

        </Container>
    )
}