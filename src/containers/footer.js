import Footer from "../components/footer"
import Logo from "../components/logo"

export function FooterContainer () {
    return (
        <Footer>

            <Footer.Column>

                <Logo/>

                <Footer.Copyright> © 2020 Kasa. All rights reserved </Footer.Copyright>

            </Footer.Column>

        </Footer>
    )
}