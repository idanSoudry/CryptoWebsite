import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavItem, NavMenu,NavLinks, NavCrypto} from './ExchangeElements';
const EXGNavbar = ({toggle}) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/' smooth={true} spy={true} duration={500}>Crypto 21</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavCrypto to="/" smooth={true} spy={true} duration={500}>Home</NavCrypto>
                    </NavItem>
                    <NavItem>
                        <NavCrypto to="/bitcoin" smooth={true} spy={true} duration={500}>Bitcoin</NavCrypto>
                    </NavItem>
                    <NavItem>
                        <NavCrypto exact to="/eth" smooth={true} spy={true} duration={500}>Eth</NavCrypto>
                    </NavItem>
                    <NavItem>
                        <NavCrypto to="/ada" smooth={true} spy={true} duration={500}>Ada</NavCrypto>
                    </NavItem>
                    <NavItem>
                        <NavCrypto to="/polkadot" smooth={true} spy={true} duration={500}>Polkadot</NavCrypto>
                    </NavItem>

                </NavMenu>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default EXGNavbar
