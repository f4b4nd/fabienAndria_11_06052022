import { Container, Inner, Image, LeftArrow, RightArrow } from "./styles/gallery"
import Chevron from "../chevron"

export default function Gallery({children, ...restProps}) {
    return (
        <Container {...restProps}>  
            <Inner> {children} </Inner>
        </Container>
    )
}

Gallery.Image = function GalleryImage({...restProps}) {
    return <Image {...restProps}/>
}

Gallery.LeftArrow = function GalleryLeftArrow({children, ...restProps}) {
    return (
        <LeftArrow {...restProps}> 
            <Chevron {...restProps} /> 
        </LeftArrow>
    )
}

Gallery.RightArrow = function GalleryRightArrow({children, ...restProps}) {
    return (
        <RightArrow {...restProps}> 
            <Chevron rotate={'180deg'} {...restProps}/> 
        </RightArrow>
    )
}