import React, { Component } from "react"
import Page from "./components/Page"
import SitemapHome from "./components/Sitemap"

class Sitemap extends Component {
  render() {
    return (
      <Page title="Site-map">
        <SitemapHome />
      </Page>
    )
  }
}

export default Sitemap
