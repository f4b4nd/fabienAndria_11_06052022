import { Container, Inner, Image, LeftArrow, RightArrow } from "./styles/gallery"

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
    return <LeftArrow {...restProps}> {children} </LeftArrow>
}

Gallery.RightArrow = function GalleryRightArrow({children, ...restProps}) {
    return <RightArrow {...restProps}> {children} </RightArrow>
}