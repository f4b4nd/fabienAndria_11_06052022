import whiteLogo from '../../assets/logo/kasa_white.png'
import redLogo from '../../assets/logo/kasa_red.png'

import { Container, StyledLink, Icon } from './styles/logo'

export default function Logo({color, to, ...restProps}) {
    return (
        <Container> 
            <StyledLink color={color} to={to} > 
                K <Icon src={color === 'red' ? redLogo : whiteLogo}/> sa  
            </StyledLink>     
        </Container>
    )
}
