import { Container, Inner, Image, LeftArrow, RightArrow } from "./style"
import Chevron from "../chevron"

export default function Gallery({children}) {
    return (
        <Container>  
            <Inner> {children} </Inner>
        </Container>
    )
}

Gallery.Image = function ({...restProps}) {
    return <Image {...restProps}/>
}

Gallery.LeftArrow = function ({...restProps}) {
    return (
        <LeftArrow {...restProps}> 
            <Chevron className={'chevron-left'} {...restProps} /> 
        </LeftArrow>
    )
}

Gallery.RightArrow = function ({...restProps}) {
    return (
        <RightArrow {...restProps}> 
            <Chevron className={'chevron-right'} {...restProps}/> 
        </RightArrow>
    )
}