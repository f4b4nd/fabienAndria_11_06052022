import Gallery from "../components/gallery"

export default function GalleryContainer ({images, alt}) {
    return (
        
        <Gallery> 
            {images.map(imageURL => (
                <Gallery.Image 
                    key={imageURL} 
                    src={imageURL}
                    alt={alt}
                />
            ))}
        </Gallery>
    )
}