import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import { Helmet } from 'react-helmet';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useBrowser from '../hooks/useBrowser';

const Capibilities = () => {
  const [scrolled, setScrolled] = useState(false);

  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [menuSet1, setMenuSet1] = useState(false);
  const [menuSet2, setMenuSet2] = useState(false);
  const [menuSet3, setMenuSet3] = useState(false);
  const [menuSet4, setMenuSet4] = useState(false);
  const [percentDone, setPercentDone] = useState({ percent: 0 });
  const isBrowser = useBrowser();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    setLastScrollPos(0);
    // window.addEventListener('scroll', menuPosition);
    //   window.addEventListener('scroll', subMenuSelectedState);

    let tl = gsap.timeline();

    const capBackgrounds = document.querySelectorAll('.capes img');

    const section1Tween = gsap.to(capBackgrounds[0], {
      scale: 2,
      transformOrigin: '50% 50%',
      duration: 60,
    });
    const section2Tween = gsap.to(capBackgrounds[1], {
      scale: 2,
      transformOrigin: '50% 50%',
      duration: 60,
    });
    const section3Tween = gsap.to(capBackgrounds[2], {
      scale: 2,
      transformOrigin: '50% 50%',
      duration: 60,
    });
    const section4Tween = gsap.to(capBackgrounds[3], {
      scale: 2,
      transformOrigin: '50% 50%',
      duration: 60,
    });
    const circleChart = gsap.to(percentDone, {
      percent: 100,
      duration: 1,
      onUpdate: updatePercent,
    });

    ScrollTrigger.create({
      trigger: '#animationWindow',
      scrub: true,
      animation: circleChart,
    });

    ScrollTrigger.create({
      trigger: '#HEALTHCARE-ADVERTISING',
      scrub: false,
      animation: section1Tween,
    });

    ScrollTrigger.create({
      trigger: '#MEDICAL-COMMUNICATIONS',
      scrub: false,
      animation: section2Tween,
    });

    ScrollTrigger.create({
      trigger: '#STRATEGIC-CONSULTING',
      scrub: false,
      animation: section3Tween,
    });

    ScrollTrigger.create({
      trigger: '#MARKET-ACCESS',
      scrub: false,
      animation: section4Tween,
    });

    gsap.to('.pipeline video', {
      duration: 0,
      scrollTrigger: {
        trigger: '#pipeline',
        scrub: 0.5,
        pin: '.pipeline video',
        start: 'top top',
        end: 'bottom-=200vh',
        onEnter: () => {
          const video = document.getElementById('video');
          if (!video) return;
          video.play();
        },
      },
    });

    gsap.to('.capabilities-menu', {
      onEnter: () => {},
      duration: 0,
      scrollTrigger: {
        trigger: '#st',
        scrub: 0.5,
        pin: '.capabilities-menu',
        start: 'top',
        pinSpacing: false,
      },
    });

    function updatePercent() {
      if (document.querySelector('#animationWindow') === undefined) {
        return;
      }
      let anim = document.querySelector('#animationWindow');

      if (!anim) return;
      anim.seek(Math.round(percentDone.percent) + '%');
    }

    function triggerDesktopAnimation() {
      tl.play();
    }

    function isInViewport(element) {
      if (!isBrowser) return;

      const rect = element.getBoundingClientRect();
      return (
        rect.top >= -10 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function toggleSelected(str) {
      document.getElementById(str).className =
        document.getElementById(str).className === 'capes'
          ? 'capes selected'
          : 'capes';

      console.log(str + 'section has updated');
    }

    let lastSelectedItem = 99;

    function subMenuSelectedState() {
      let targets = [
        'HEALTHCARE-ADVERTISING',
        'MEDICAL-COMMUNICATIONS',
        'STRATEGIC-CONSULTING',
        'MARKET-ACCESS',
      ];
      let newSelectedItem;

      for (let i = 0; i < targets.length; i++) {
        document.querySelectorAll('.capabilities-menu a')[i].className =
          isInViewport(document.getElementById(targets[i])) ? 'selected ' : '';
      }
    }

    function menuPosition() {
      if (!isBrowser) return;

      if (scrolled === false && window.scrollY > 100) {
        setScrolled(true);
        document.getElementById('nav').className = 'scrolled';
      } else {
        if (window.scrollY < 100) {
          setScrolled(false);
          document.getElementById('nav').className = '';
        }
      }
    }
  }, []);

  return (
    <Layout>
      <Helmet>
        <link type="text/css" rel="stylesheet" href="../css/main.css" />

        <body className="capibilities" bgcolor="black" />
      </Helmet>
      <section className="capibilities-header">
        <h1>
          Extensive capabilities.<span className="gap"> </span>Uniquely
          delivered.
        </h1>
      </section>
      <section id="st">
        <section className="capabilities-menu">
          <a href="#HEALTHCARE-ADVERTISING">HEALTHCARE ADVERTISING</a>
          <a href="#MEDICAL-COMMUNICATIONS">MEDICAL COMMUNICATIONS</a>
          <a href="#STRATEGIC-CONSULTING">STRATEGIC CONSULTING</a>
          <a href="#MARKET-ACCESS">MARKET ACCESS &amp; PAYER MARKETING</a>
        </section>

        <section
          className={`capes ${menuSet1 ? 'selected' : ''}`}
          id="HEALTHCARE-ADVERTISING"
        >
          <div className="main">
            <img
              src="../images/capibilities-section1.webp"
              alt=""
              width="100%"
            />
          </div>
          <div className="copy-holder">
            <h2>
              We develop high-impact campaigns for HCPs, patients, caregivers,
              advocacy groups, and policy makers that deliver results.{' '}
            </h2>
            <span className="button" onClick={() => setMenuSet1(true)}>
              HEALTHCARE ADVERTISING
            </span>
          </div>
          <div className="list">
            <div>
              <p>Logo, branding &amp; visual identity</p>
            </div>
            <div>
              <p>Positioning &amp; Brand ID</p>
            </div>
            <div>
              <p>Patient/HCP Journey</p>
            </div>
            <div>
              <p>Launch Strategy</p>
            </div>
            <div>
              <p>Unbranded &amp; branded messaging</p>
            </div>
            <div>
              <p>Disease awareness &amp; unbranded creative campaign</p>
            </div>
            <div>
              <p>Branded creative campaigns</p>
            </div>
            <div>
              <p>Corporate &amp; franchise campaigns</p>
            </div>
            <div>
              <p>Congress booths/experience</p>
            </div>
            <div>
              <p>Promotional symposia</p>
            </div>
            <div>
              <p>Sales training &amp; POAs</p>
            </div>
            <div>
              <p>Multichannel execution &amp; web/digital</p>
            </div>
          </div>
        </section>

        <section
          className={`capes ${menuSet2 ? 'selected' : ''}`}
          id="MEDICAL-COMMUNICATIONS"
        >
          <div className="main">
            <img
              src="../images/capibilities-section2.webp"
              alt=""
              width="100%"
            />
          </div>
          <div className="copy-holder">
            <h2>
              With deep understanding of disease states and data, we speak
              science fluently...and persuasively.{' '}
            </h2>
            <span className="button" onClick={() => setMenuSet2(true)}>
              MEDICAL COMMUNICATIONS
            </span>
          </div>
          <div className="list">
            <div>
              <p>Scientific storytelling</p>
            </div>
            <div>
              <p>Medical communications strategy</p>
            </div>
            <div>
              <p>MOD/MOA content &amp; animation</p>
            </div>
            <div>
              <p>Scientific lexicon, platform &amp; narrative</p>
            </div>
            <div>
              <p>Field medical resources</p>
            </div>
            <div>
              <p>Disease education campaigns</p>
            </div>
            <div>
              <p>TL engagement, working groups, advisory boards</p>
            </div>
            <div>
              <p>Symposia presentations</p>
            </div>
            <div>
              <p>Speaker program content &amp; execution</p>
            </div>
            <div>
              <p>Modular content</p>
            </div>
            <div>
              <p>Clinical practices resources</p>
            </div>
            <div>
              <p>Omnichannel content delivery</p>
            </div>
          </div>
        </section>

        <section
          className={`capes ${menuSet3 ? 'selected' : ''}`}
          id="STRATEGIC-CONSULTING"
        >
          <div className="main">
            <img
              src="../images/capibilities-section3.webp"
              alt=""
              width="100%"
            />
          </div>
          <div className="copy-holder">
            <h2>
              Our specialized healthcare consultancy group supports research and
              identifies strategies with real-world, real-time impact.{' '}
            </h2>
            <span className="button" onClick={() => setMenuSet3(true)}>
              STRATEGIC CONSULTING
            </span>
          </div>
          <div className="list">
            <div>
              <p>Clinical opportunity assessment</p>
            </div>
            <div>
              <p>Pipeline prioritization</p>
            </div>
            <div>
              <p>Evidence generation requirements</p>
            </div>
            <div>
              <p>Landscape analysis</p>
            </div>
            <div>
              <p>Market-shaping strategy</p>
            </div>
            <div>
              <p>Emerging technology assessments</p>
            </div>
            <div>
              <p>Asset evaluation &amp; positioning</p>
            </div>
            <div>
              <p>TPP development</p>
            </div>
            <div>
              <p>Lifecycle optimization planning</p>
            </div>
            <div>
              <p>Competitive intelligence and audits</p>
            </div>
            <div>
              <p>Persona development</p>
            </div>
            <div>
              <p>Omnichannel marketing strategy</p>
            </div>
          </div>
        </section>

        <section
          className={`capes ${menuSet4 ? 'selected' : ''}`}
          id="MARKET-ACCESS"
        >
          <div className="main">
            <img
              src="../images/capibilities-section4.webp"
              alt=""
              width="100%"
            />
          </div>
          <div className="copy-holder">
            <h2>
              Optimizing brand success supported by savvy market access and
              payer strategy expertise. That's our value proposition.{' '}
            </h2>
            <span className="button" onClick={() => setMenuSet4(true)}>
              MARKET ACCESS &amp; <br className="mobile" />
              PAYER MARKETING
            </span>
          </div>
          <div className="list">
            <div>
              <p>Market access scenario planning &amp; strategy</p>
            </div>
            <div>
              <p>Value story messaging &amp; presentations</p>
            </div>
            <div>
              <p>Gap analysis &amp; data generation</p>
            </div>
            <div>
              <p>Budget impact &amp; practice impact modeling</p>
            </div>
            <div>
              <p>Cost-effectiveness &amp; offset assessment</p>
            </div>
            <div>
              <p>AMCP &amp; global value dossiers</p>
            </div>
            <div>
              <p>Insight mining &amp; engagement</p>
            </div>
            <div>
              <p>Access training &amp; pull-through communications</p>
            </div>
          </div>
        </section>
      </section>
      <section className="section7">
        <div className="copy-holder">
          <h2>
            We bring your brand from molecule to market, maintaining its value
            throughout the product lifecycle.{' '}
          </h2>
        </div>
      </section>

      <section className="pipeline" id="pipeline">
        <video
          onLoad={() => ScrollTrigger.refresh()}
          src="../video/cell.webm"
          type="video/webm"
          muted
          id="video"
        ></video>
        <img
          src="../images/pipeline.webp"
          style={{ width: '50%', margin: '100px auto 0' }}
          className="mobile"
        />
        <div className="page1">
          <h2>Pipeline</h2>
          <p>
            Supporting investigational molecules by exploring the science, the
            unmet needs, and the commercialization plan.
          </p>
        </div>
        <img
          src="../images/prelaunch.webp"
          style={{ width: '50%', margin: '100px auto 0' }}
          className="mobile"
        />
        <div className="page2">
          <h2>Pre-Launch</h2>
          <p>
            Developing the strategy, branding, and communication platform that
            delivers a compelling rationale for the adoption of new therapies.
          </p>
        </div>
        <img
          src="../images/launch.webp"
          style={{ width: '50%', margin: '100px auto 0' }}
          className="mobile"
        />
        <div className="page3">
          <h2>Launch</h2>
          <p>
            Executing launch with "wow" creative and engaging content that
            promotes clinical understanding for rapid uptake.
          </p>
        </div>
        <img
          src="../images/maturity.webp"
          style={{ width: '50%', margin: '100px auto 0' }}
          className="mobile"
        />
        <div className="page4">
          <h2>Maturity</h2>
          <p>
            Maximizing impact with cost-effective, broad-reaching communication
            strategies to maintain brand equity.
          </p>
        </div>
      </section>
      <section className="spacer long"></section>
      <section className="divisions">
        <div className="icons">
          <lottie-player
            id="animationWindow"
            src="../bodymovin/data.json"
            background="transparent"
            speed="1"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className="text">
          <h2>
            One Group
            <br />
            Integrated Divisions
          </h2>
          <p>
            With one of the largest strategic and creative services teams, we
            deliver market-building content, captivating creative, stellar
            execution, and exceptional experiences for each client's unique
            needs.
          </p>
        </div>
      </section>
      <section className="spacer desktoponly"></section>
    </Layout>
  );
};

export default Capibilities;

export const Head = () => <title>BGBGroup | Capibilities</title>;
