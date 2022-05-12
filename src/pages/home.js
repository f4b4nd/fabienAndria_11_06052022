import CardContainer from '../containers/card'
import HeaderContainer  from '../containers/header'
import FooterContainer from '../containers/footer'

import useContent from '../hooks/useContent'

export default function Home () {

    const { houses } = useContent('houses')

    return (
        <>  
            <HeaderContainer />
            <CardContainer cards={houses} />        
            <FooterContainer />
        </>
    )
}