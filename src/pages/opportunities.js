import React, { useEffect, useState } from "react";
import Layout from "../components/layout"
import { Helmet } from 'react-helmet'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Opportunities = () => {
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
	  
 <body className='opportunities start'  bgcolor="black" />
</Helmet>
	   
	 <section id="opportunities">
	<div id="opportunities-header">
		<h1>Right-brained or left, there’s a job for you here.</h1>
		<h3>WHICH ONE ARE YOU?</h3>
<a href="#positions" className="button">SKIP TO OPEN POSITIONS</a>
		</div>
	</section>
 	<section className="black-section">
	  <h1>{"We’re always looking for smart, passionate, and talented people to join our culture of collaboration and pride for the work that we do."}</h1></section>	
<section className="section3" ><div className="copy-holder"><h2>The coolest kids at the science fair</h2><p>{"We’re a team made up of smart go-getters, account wizards, and resourceful cohorts."}</p></div></section>
	<section className="section4"><div className="copy-holder"><h2>Let&#8217;s shake on it&mdash;The BGB Handshake is an agreement between supervisors and employees that promotes engagement and support of a mutual caring experience. And we live by it.</h2></div></section>
<section className="quotes">
	<img src="../images/left-arrow.svg" id="left" alt="Previous" onClick={() => setCarroselPage( (carroselPage!=0) ? carroselPage-1 : 4)}  /><div className="pages"><div className={`offset o${carroselPage}`}><div className="page"><h2>I love being a part of BGB because of the fierce intelligence of my colleagues... But it&#8217;s their incredible kindness and collaborative hearts that makes the magic happen.</h2><p>Lisa <span>Creative Operations</span></p></div>
	<div className="page p1"><h2>Big brains and wildly talented creatives. No egos. The camaraderie is like nothing I&#8217;ve experienced anywhere else.</h2><p>Christine <span>Medical</span></p></div>
	<div className="page p2"><h2>I love that I am surrounded by like-minded people passionate about science. I found "my people!" I&#8217;m part of a team that cares about me and where I am going. I have always felt supported, and in turn, that has allowed me to grow and support other, newer BGBers. It is a culture that wants to build everyone up.</h2><p>Diane <span>Copy</span></p></div>
	<div className="page p3"><h2>It sounds expected, but our secret sauce is the perfect marriage of science + creativity. Our teams are built with a special composition that brings a unique blend of talents, skills, and approaches. Amazingly, it always works to strengthen us all!</h2><p>Alissa <span>Client Services</span></p></div>
	<div className="page p4"><h2>BGB is a place where you&#8217;re a person, not a cog. We all share the same values. Your contribution is acknowledged and valued. Your ideas are respected and appreciated. We are consistently thoughtful, committed, encouraging, and fearless.</h2><p>Joe <span>Art</span></p></div></div>
	</div><img src="../images/right-arrow.svg" id="right" alt="Next"  onClick={() => setCarroselPage( (carroselPage<4) ? carroselPage+1 : 0)} />
	</section>
	  
    </Layout>
  )
}

export default Opportunities

export const Head = () => <title>BGBGroup | Opportunities</title>
