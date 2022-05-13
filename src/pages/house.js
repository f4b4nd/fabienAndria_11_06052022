import { useParams } from "react-router"
import useContent from '../hooks/useContent'

import HeaderContainer  from '../containers/header'
import FooterContainer from "../containers/footer"

export default function House () {

    const { id } = useParams()
    const { houses } = useContent('houses')

    const house = houses.find(house => house.id === id) || {}

    return (
        <>
            <HeaderContainer />
            <p>  Title {house.title} </p>
            <p>  Description {house.description} </p>
            <p>  Location {house.location} </p>
            <p>  Rating {house.rating} </p>
            <FooterContainer />
        </>
    )
}