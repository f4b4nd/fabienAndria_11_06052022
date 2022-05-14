import { useState } from "react"

import Gallery from "../components/gallery"

export default function GalleryContainer ({images, alt}) {

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
        
        <Gallery>

            <Gallery.LeftArrow onClick={handleClickLeftArrow} size={'30px'} />
            
            <Gallery.Image 
                src={images[imageIndex]}
                alt={alt}
            />
            
            <Gallery.RightArrow onClick={handleClickRightArrow} size={'30px'} />

        </Gallery>
    )
}