import whiteLogo from '../../assets/logo/kasa_white.png'
import redLogo from '../../assets/logo/kasa_red.png'

import { Container, Link, Icon } from './styles/logo'

export default function Logo({color, ...restProps}) {
    return (
        <Container> 
            <Link color={color} {...restProps} > 
                K <Icon src={color === 'red' ? redLogo : whiteLogo}/> sa  
            </Link>     
        </Container>
    )
}
