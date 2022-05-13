import { useState } from "react"

import Gallery from "../components/gallery"

export default function GalleryContainer ({images, alt}) {

    const [imageIndex, setImageIndex] = useState(0)

    const handleClickLeftArrow = () => {

        if (images.length <= 1) return

        if (imageIndex === 0) {
            const lastImageIndex = images.length - 1
            setImageIndex(lastImageIndex)
            return
        }

        setImageIndex(imageIndex - 1)
    
    }

    const handleClickRightArrow = () => {

        if (images.length <= 1) return

        const lastImageIndex = images.length - 1

        if (imageIndex === lastImageIndex) {
            setImageIndex(0)
            return
        }

        setImageIndex(imageIndex + 1)
    
    }


    return (
        
        <Gallery> 
            <Gallery.LeftArrow onClick={handleClickLeftArrow} />
            
            <Gallery.Image 
                src={images[imageIndex]}
                alt={alt}
            />
            
            <Gallery.RightArrow onClick={handleClickRightArrow} />

        </Gallery>
    )
}