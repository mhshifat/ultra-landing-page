import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtnLink,
  NavIcon,
  NavItem,
  NavItemBtn,
  NavLink,
  NavLogo,
  NavMenu,
} from "./styles/Navbar";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  useEffect(() => {
    showButton();
  }, []);

  const handleClick = () => {
    setClick((click) => !click);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);
  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={() => {}}>
            <NavIcon />
            ULTRA
          </NavLogo>

          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <NavMenu click={click} onClick={handleClick}>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/">Services</NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/">Products</NavLink>
            </NavItem>

            <NavItemBtn>
              {button ? (
                <NavBtnLink to="/">
                  <Button primary>SIGN UP</Button>
                </NavBtnLink>
              ) : (
                <NavBtnLink to="/">
                  <Button fontBig primary>
                    SIGN UP
                  </Button>
                </NavBtnLink>
              )}
            </NavItemBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
