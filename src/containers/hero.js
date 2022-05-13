import Tag from "../components/tag"

export default function HeroContainer({house}) {

    const tags = house.tags || []

    return (
        <>  
            <Tag.Group>
                {tags.map(tag => <Tag key={tag}> {tag} </Tag>)}
            </Tag.Group>

            <p>  Title {house.title} </p>
            <p>  Description {house.description} </p>
            <p>  Location {house.location} </p>
            <p>  Rating {house.rating} </p>
        </>
    )
}