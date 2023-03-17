import React, { useEffect, useState } from "react";
import Layout from "../components/layout"
import { Helmet } from 'react-helmet'

const Connect = () => {
  const [carroselPage, setCarroselPage] = useState(0);

  useEffect(() => {
   /*Javascript here
   Note: this will have all the greensock animations
   */
	      }, []);
	
  return (
    <Layout>
	  <Helmet>
	   <link
  type="text/css"
  rel="stylesheet"
  href="../css/main.css"/>
	  
 <body className='contact start'  bgcolor="black" />
</Helmet>
	   
	<section className="contact-form"><video src="../video/contact-background.webm" type="video/webm" muted autoPlay loop width="100%"></video>
		<div className="form-area"><div className="left"><h1>Get in touch with us</h1><p>We would love to discuss how our capabilities align with your specific business needs.</p><img src="../images/large-arrow.svg" /></div><div className="right"><form>
			<div><label>Name</label><input type="text" id="" name="" /></div>
			<div><label>Email</label><input type="text" id="" name="" /></div>
			<div><label>Subject</label><input type="text" id="" name="" /></div>
			<div className="textarea"><label>Message</label><textarea  id="" name=""></textarea></div>
			<input type="submit" value="Send"/>
			</form>
			</div></div>
	</section>
	  
    </Layout>
  )
}

export default Connect

export const Head = () => <title>BGBGroup | Conncet</title>
