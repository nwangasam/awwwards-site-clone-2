import React from "react"
import Layout from "../components/layout"

// Component
import HomeBanner from "../components/homepage/homeBanner"
import HomeContent from "../components/homepage/homeContent"
import HomeFeatured from "../components/homepage/homeFeatured"
import HomeAbout from "../components/homepage/homeAbout"

// Context
import { useGlobalDispatchContext } from "../context/globalContext"
import { useGlobalStateContext } from "../context/globalContext"

const IndexPage = props => {
  const dispatch = useGlobalDispatchContext()
  const { cursorStyles } = useGlobalStateContext()

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }
  return (
    <Layout>
      <HomeBanner onCursor={onCursor} />
      <HomeContent />
      <HomeFeatured onCursor={onCursor} />
      <HomeAbout />
    </Layout>
  )
}

export default IndexPage
