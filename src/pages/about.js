import HeaderContainer  from '../containers/header'
import FooterContainer from '../containers/footer'
import Banner from '../components/banner'
import Dropdown from '../components/dropdown'

import Image from '../assets/images/landscape-mountain.png'

export default function About () {

    return (
        <>  
            <HeaderContainer />

            <Banner src={Image} alt={'banner image'} /> 
            
            <Dropdown.Group flexDirection={'column'} >

                <Dropdown title={'Fiabilité'} width={'100%'}> 
                    <Dropdown.TextContent>
                        Les annonces postées sur Kasa garantissent une fiabilité totale. 
                        Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
                     </Dropdown.TextContent>
                </Dropdown>

                <Dropdown title={'Respect'} width={'100%'}> 
                    <Dropdown.TextContent> 
                        La bienveillance fait partie des valeurs fondatrices de Kasa. 
                        Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                    </Dropdown.TextContent>
                </Dropdown>

                <Dropdown title={'Service'} width={'100%'}> 
                    <Dropdown.TextContent> 
                        Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
                        N'hésitez pas à nous contacter si vous avez la moindre question.
                    </Dropdown.TextContent>
                </Dropdown>

                <Dropdown title={'Sécurité'} width={'100%'}> 
                    <Dropdown.TextContent> 
                        La sécurité est la priorité de Kasa. 
                        Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. 
                        En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
                        Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                    </Dropdown.TextContent>
                </Dropdown>

            </Dropdown.Group>

            <FooterContainer />
        </>
    )
}