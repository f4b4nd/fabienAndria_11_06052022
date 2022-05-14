import blackLogo from '../../assets/logo/kasa_black.png'
import redLogo from '../../assets/logo/kasa_red.png'

import { Container, StyledLink, Icon } from './style'

export default function Logo({color, to}) {
    return (
        <Container> 
            <StyledLink to={to} > 
                <Icon src={color === 'red' ? redLogo : blackLogo}/>
            </StyledLink>     
        </Container>
    )
}
