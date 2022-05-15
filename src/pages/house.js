import { useParams } from "react-router"
import useContent from '../hooks/useContent'


import HeaderContainer  from '../containers/header'
import FooterContainer from "../containers/footer"
import Carousel from "../components/carousel"
import HeroContainer from "../containers/hero"


export default function House () {

    const { id } = useParams()
    const house = useContent({filterDataID: id})

    return (

        <>

            <HeaderContainer />

            <main className="house">
                <Carousel
                    images={house.pictures || []}
                    alt={house.title}
                />

                <HeroContainer house={house} />
            </main>

            <FooterContainer />

        </>
    )
}