import styled from 'styled-components'

import Logo from "../components/logo"
import Navbar  from "../components/navbar"
import * as ROUTES from '../constants/routes'


export default function Header () {

    const Container = styled.header``

    return (

        <Container> 

            <Navbar>

                <Navbar.Column>
                    <Logo to={ROUTES.HOME} color="red" />
                </Navbar.Column>

                <Navbar.Column>
                    <Navbar.Link to={ROUTES.HOME}> Accueil </Navbar.Link>
                    <Navbar.Link to="#"> A propos </Navbar.Link>
                </Navbar.Column>

             </Navbar>

        </Container>

    )

}