import Footer from "../components/footer"
import Logo from "../components/logo"
import * as ROUTES from '../constants/routes'

export default function FooterContainer () {
    return (
        <Footer>

            <Footer.Column>

                <Logo to={ROUTES.HOME}/>

                <Footer.Text> © 2020 Kasa. All rights reserved </Footer.Text>

            </Footer.Column>

        </Footer>
    )
}