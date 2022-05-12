import Footer from "../components/footer"
import Logo from "../components/logo"

export default function FooterContainer () {
    return (
        <Footer>

            <Footer.Column>

                <Logo href="#"/>

                <Footer.Copyright> © 2020 Kasa. All rights reserved </Footer.Copyright>

            </Footer.Column>

        </Footer>
    )
}