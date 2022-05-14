import CardContainer from '../containers/card'
import HeaderContainer  from '../containers/header'
import FooterContainer from '../containers/footer'
import Banner from '../components/banner'

import useContent from '../hooks/useContent'
import Image from '../assets/images/landscape-rock.png'

export default function Home () {

    const { houses } = useContent('houses')

    return (
        <>  
            <HeaderContainer />

            <Banner src={Image} alt={'banner image'}> 
                
                <Banner.Text> Chez vous, partout et ailleurs </Banner.Text>

            </Banner>

            <CardContainer cards={houses} />

            <FooterContainer />
        </>
    )
}