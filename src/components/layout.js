/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from 'react-helmet'


import Menu from "./menu"
/*import "../css/main.css" */


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

  return (
    <>
	  	  <Helmet>
<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
<link rel="preconnect" href="https://fonts.googleapis.com" /> 
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> 
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />  
</Helmet>
      <Menu />
	  {children}
	  <footer className="social"><h2>Get Social With Us</h2>
		<div id="footer-icons"><a href="https://www.facebook.com/profile.php?id=100028020386844"><img src={"/images/icon-facebook.svg"} /></a><a href="https://www.linkedin.com/company/bgb-group"><img src={"/images/icon-linkedin.svg"} /></a><a href="https://www.instagram.com/bgbgroup/"><img src={"/images/icon-insta.svg"} /></a><a href="https://www.tiktok.com/@bgbgroup" ><img src={"/images/icon-ticktok.svg"} /></a></div>
	</footer>
	<footer className="end-nav">
	  <div className="copyright">Copyright &copy; 2023 BGB Group. All rights reserved. </div><div className="links"><a href="./privacy/">Privacy Policy</a><span className="desktop"> | </span>
	  <a href="./terms-of-use/">Terms of Use</a><span className="desktop"> | </span> <a href="./press-releases/">Press Releases</a><span className="desktop"> | </span><a href="./contact/" >Contact</a></div></footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
