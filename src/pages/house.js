import { useParams } from "react-router"

import useContent from '../hooks/useContent'

export default function House () {

    const { id } = useParams()
    const { houses } = useContent('houses')

    const house = houses.find(house => house.id === id) || {}

    return (
        <>
            <p>  Title {house.title} </p>
            <p>  Description {house.description} </p>
            <p>  Location {house.location} </p>
            <p>  Rating {house.rating} </p>
        </>
    )
}