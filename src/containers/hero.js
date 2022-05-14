import Dropdown from "../components/dropdown"
import Tag from "../components/tag"
import Star from "../components/star"
import UserCard from "../components/usercard"

export default function HeroContainer({house}) {

    const tags = house.tags || []
    const equipments = house.equipments || []

    return (
        <>  
            <div className="group">

                <div className="col">

                    <h1 className='title'> {house.title} </h1>
                    <h2 className="location"> {house.location} </h2>

                    <Tag.Group>
                        {tags.map(tag => <Tag key={tag}> {tag} </Tag>)}
                    </Tag.Group>

                </div>

                <div className="col">

                    <UserCard name={house.host?.name || ''} src={house.host?.picture || ''} />

                    <Star.Group>
                        <Star.Items rating={house.rating} />
                    </Star.Group>

                </div>

            </div>

            <Dropdown.Group className="dropdowns">

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

        </>
    )
}