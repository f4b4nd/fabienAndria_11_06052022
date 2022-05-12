import Card from '../components/card'

export default function CardContainer ({cards}) {

    return (
        <Card.Group>
            {cards.map(item => (
                <Card> 
                    <Card.Title> {item.title} </Card.Title>
                </Card>
            ))}
        </Card.Group>
    )
}