import { useState } from "react"

import Gallery from "../components/gallery"

export default function GalleryContainer ({images, alt}) {

    const [imageIndex, setImageIndex] = useState(0)

    const handleClickLeftArrow = () => {

        if (images.length <= 1) return

        const lastImageIndex = images.length - 1

        const previousImageIndex = imageIndex === 0 ? lastImageIndex : imageIndex - 1

        setImageIndex(previousImageIndex)
    
    }

    const handleClickRightArrow = () => {

        if (images.length <= 1) return

        const lastImageIndex = images.length - 1

        const nextImageIndex = imageIndex === lastImageIndex ? 0 : imageIndex + 1

        setImageIndex(nextImageIndex)
    
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