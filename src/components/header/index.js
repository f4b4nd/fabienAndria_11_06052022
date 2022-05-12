import { Container } from "./styles/header"
import Logo from "../logo"
import Navbar  from "../navbar"

export default function Header () {
    return (
        <Container> 

            <Navbar>

                <Navbar.Column>
                    <Logo href="#" color="red" />
                </Navbar.Column>

                <Navbar.Column>
                    <Navbar.Link href="#"> Accueil </Navbar.Link>
                    <Navbar.Link href="#"> A propos </Navbar.Link>
                </Navbar.Column>

             </Navbar>

        </Container>
    )
}