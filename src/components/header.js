import React, { useEffect } from "react"
import { Link } from "gatsby"

// styled components
import { HeaderNav, Logo, Menu } from "../styles/headerStyles"
import { Container, Flex } from "../styles/globalStyles"

import { useGlobalStateContext } from "../context/globalContext"
import { useGlobalDispatchContext } from "../context/globalContext"

const Header = ({ onCursor, toggleMenu, setToggleMenu }) => {
  const dispatch = useGlobalDispatchContext()
  const { currentTheme } = useGlobalStateContext()

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      dispatch({ type: "TOGGLE_THEME", theme: "light" })
    } else {
      dispatch({ type: "TOGGLE_THEME", theme: "dark" })
    }
  }

  useEffect(() => {
    window.localStorage.setItem("theme", currentTheme)
  }, [currentTheme])

  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }}
      transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <Container>
        <Flex spaceBetween noHeight>
          <Logo
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            <Link to="/">FURR</Link>
            <span
              onClick={toggleTheme}
              onMouseEnter={() => onCursor("pointer")}
              onMouseLeave={onCursor}
            ></span>
            <Link to="/">W</Link>
          </Logo>
          <Menu onClick={() => setToggleMenu(!toggleMenu)}>
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

export default Header
