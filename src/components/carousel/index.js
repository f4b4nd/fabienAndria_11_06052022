import { useState } from "react"

import { Container, Inner, Image, LeftArrow, RightArrow, IndexIndicator } from "./style"
import Chevron from "../chevron"

export default function Carousel ({images, alt}) {

    const [imageIndex, setImageIndex] = useState(0)

    const handleClickLeftArrow = () => {

        if (images.length <= 1) return

        const lastIndex = images.length - 1
        const previousIndex = imageIndex === 0 ? lastIndex : imageIndex - 1
        setImageIndex(previousIndex)
    
    }

    const handleClickRightArrow = () => {

        if (images.length <= 1) return

        const lastIndex = images.length - 1
        const nextIndex = imageIndex === lastIndex ? 0 : imageIndex + 1
        setImageIndex(nextIndex)
    
    }

    return (
        <Container className={'carousel'}>

            <Inner> 

                {images.length > 1 && <Carousel.LeftArrow onClick={handleClickLeftArrow} size={'30px'} />}
                
                <Image src={images[imageIndex]} alt={alt} />
                
                <Carousel.IndexIndicator imageIndex={imageIndex} imagesCount={images.length}/>
                
                {images.length > 1 && <Carousel.RightArrow onClick={handleClickRightArrow} size={'30px'} />}

            </Inner>
            
        </Container>
    )

}


Carousel.LeftArrow = function ({...restProps}) {
    return (
        <LeftArrow {...restProps}> 
            <Chevron className={'chevron-left'} {...restProps} /> 
        </LeftArrow>
    )
}

Carousel.RightArrow = function ({...restProps}) {
    return (
        <RightArrow {...restProps}> 
            <Chevron className={'chevron-right'} {...restProps}/> 
        </RightArrow>
    )
}

Carousel.IndexIndicator = function ({imageIndex, imagesCount}) {

    const displayedIndex = imageIndex < imagesCount ? imageIndex + 1 : imagesCount

    return (
        <IndexIndicator> {displayedIndex} / {imagesCount} </IndexIndicator>
    )

}