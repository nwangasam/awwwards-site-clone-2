import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

import { createGlobalStyle, ThemeProvider } from "styled-components"
import { normalize } from "styled-normalize"

// components
import Header from "./header"
import CustomCursor from "./customCursor"
import Navigation from "./navigation"

const GlobalStyle = createGlobalStyle`
    ${normalize}
   * {
     text-decoration: none;
     cursor: none

   }

   html {
     box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
     font-size: 16px;
   }

   body {
     font-family: 'Segoe UI', sans-serif;
     background: ${props => props.theme.background};
     overscroll-behavior: none;
     overflow-x: hidden;
   }
`
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const darkTheme = {
    background: "#000",
    text: "#fff",
    red: "#ea291e",
  }
  const lightTheme = {
    background: "#fff",
    text: "#000",
    red: "#ea291e",
  }

  const dispatch = useGlobalDispatchContext()
  const { currentTheme, cursorStyles } = useGlobalStateContext()

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <CustomCursor toggleMenu={toggleMenu} />
      <Header
        onCursor={onCursor}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
      <Navigation toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} onCursor={onCursor} />
      <main>{children}</main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
