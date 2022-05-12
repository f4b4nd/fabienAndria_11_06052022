import whiteLogo from '../../assets/logo/kasa_white.png'
import redLogo from '../../assets/logo/kasa_red.png'

import { Container, Icon } from './styles/logo'

export default function Logo({children, ...restProps}) {
    return (
        <Container {...restProps} > K <Icon src={whiteLogo}/> sa </Container>
    )
}