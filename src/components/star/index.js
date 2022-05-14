import { Container, Group, Image } from "./style"
import RedStar from '../../assets/icons/star-red.png'
import GreyStar from '../../assets/icons/star-grey.png'

export default function Star ({isColored}) {
    return (
        <Container className={'star ' + (isColored ? 'star-full' : 'star-empty')}>
            <Image src={isColored  === true ? RedStar : GreyStar} alt='star' />
        </Container>
    )
}

Star.Group = function ({children, ...restProps}) {
    return <Group {...restProps} > {children} </Group>
}

Star.Items = function ({rating}) {

    const maxRating = 5
    
    return (
        [...new Array(maxRating)].map((_, idx) => (
            <Star
                key={idx} 
                isColored={idx < parseInt(rating) ? true : false}
            />
        ))
    )

}