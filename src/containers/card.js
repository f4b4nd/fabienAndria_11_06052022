import Card from '../components/card'
import * as ROUTES from '../constants/routes'

export default function CardContainer ({cards}) {

    return (
        <Card.Group>

            {cards.map(house => (

                <Card key={house.id}> 

                    <Card.Link to={ROUTES.HOUSE + '/' + house.id}> 

                        <Card.Title> {house.title} </Card.Title>

                    </Card.Link>

                </Card>

            ))}

        </Card.Group>
    )
    
}