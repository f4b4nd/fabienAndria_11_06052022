import { useParams } from "react-router"
import useContent from '../hooks/useContent'

import HeaderContainer  from '../containers/header'
import FooterContainer from "../containers/footer"
import GalleryContainer from "../containers/gallery"
import HeroContainer from "../containers/hero"

export default function House () {

    const { id } = useParams()
    const { houses } = useContent('houses')

    const house = houses.find(house => house.id === id) || {}

    return (
        <>
            <HeaderContainer />

            <GalleryContainer 
                images={house.pictures || []}
                alt={house.title}
            />

            <HeroContainer house={house} />

            <FooterContainer />
        </>
    )
}