import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

//styled components
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { normalize } from "styled-normalize"

// Components
import Header from "./header"

const GlobalStyle = createGlobalStyle`
    ${normalize}
    *{
      text-decoration:none;
      /*cursor: none*/
    }

    html{
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      font-size: 16px;
    }

    body{
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      background: ${props => props.theme.background};
      color: ${props => props.theme.text};
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
    secondaryColor: " #ea291e",
  }

  const lightTheme = {
    background: "#fff",
    text: "#000",
    secondaryColor: " #ea291e",
  }

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout