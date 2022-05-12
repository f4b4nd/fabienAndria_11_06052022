import Card from '../components/card'

export default function CardContainer ({cards}) {

    return (
        cards.map(item => (
            <Card> 
                <Card.Title> {item.title} </Card.Title>
            </Card>
        ))
    )
}