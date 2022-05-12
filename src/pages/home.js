import Card from '../components/card'
import HeaderContainer  from '../containers/header'
import FooterContainer from '../containers/footer'


export default function Home () {
    return (
        <>  
            <HeaderContainer />
            <p> 
                home 
            </p>
            <Card>
                <Card.Title> je suis un titre </Card.Title>
            </Card>
            <FooterContainer />
        </>
    )
}