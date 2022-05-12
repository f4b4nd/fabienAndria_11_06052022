import whiteLogo from '../../assets/logo/kasa_white.png'
import redLogo from '../../assets/logo/kasa_red.png'

import { Container, Icon } from './styles/logo'

export default function Logo({color}) {
    return (
        <Container> 
            K <Icon src={color === 'red' ? redLogo : whiteLogo}/> sa 
        </Container>
    )
}