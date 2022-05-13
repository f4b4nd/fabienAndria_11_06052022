import { Container, Inner, Image, LeftArrow, RightArrow } from "./style"
import ChevronLeft from "../chevron"

export default function Gallery({children}) {
    return (
        <Container>  
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
            <ChevronLeft {...restProps} /> 
        </LeftArrow>
    )
}

Gallery.RightArrow = function GalleryRightArrow({children, ...restProps}) {
    return (
        <RightArrow {...restProps}> 
            <ChevronLeft rotate={'180deg'} {...restProps}/> 
        </RightArrow>
    )
}