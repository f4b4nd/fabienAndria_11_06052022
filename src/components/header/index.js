import { Container } from "./styles/header"
import Logo from "../logo"
import Navbar  from "../navbar"
import * as ROUTES from '../../constants/routes'

export default function Header () {
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