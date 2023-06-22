import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'

import { Scroll, Timer } from 'phosphor-react'
import Logo from '../../assets/logo.svg'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt="logo" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
