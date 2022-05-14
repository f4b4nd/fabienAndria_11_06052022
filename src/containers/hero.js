import Dropdown from "../components/dropdown"
import Tag from "../components/tag"

export default function HeroContainer({house}) {

    const tags = house.tags || []
    const equipments = house.equipments || []

    return (
        <>  
            <Tag.Group>
                {tags.map(tag => <Tag key={tag}> {tag} </Tag>)}
            </Tag.Group>

            <Dropdown.Group>

                <Dropdown title="Description" width={'50%'} >
                    <Dropdown.TextContent> {house.description} </Dropdown.TextContent>
                </Dropdown>
                
                <Dropdown title="Equipements" width={'50%'} >
                    <Dropdown.ListContent>
                        {equipments.map(equipment => (
                            <Dropdown.ItemList key={equipment}> {equipment} </Dropdown.ItemList>
                        ))}
                    </Dropdown.ListContent>
                </Dropdown>

            </Dropdown.Group>

            <p>  Title {house.title} </p>
            <p>  Description {house.description} </p>
            <p>  Location {house.location} </p>
            <p>  Rating {house.rating} </p>
        </>
    )
}