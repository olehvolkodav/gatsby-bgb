import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import { Helmet } from 'react-helmet';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const IndexPage = () => {
  let scrolled = false;
  let menuOpen = false;
  let lastScrollPos = 0;
  let tl = gsap.timeline();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    lastScrollPos = window.scrollY;
    initAnimation();
    window.addEventListener('resize', resizeHomepage);
    window.addEventListener('scroll', menuPosition);

    document
      .getElementById('home-video')
      .addEventListener('play', triggerDesktopAnimation);

    function triggerDesktopAnimation() {
      tl.play();
    }

    function initAnimation() {
      var homeAdjustment;
      if (window.innerWidth >= 668) {
        homeAdjustment = Math.round((window.innerWidth / 1920) * 100) / 100;
        document.getElementById('home-holder').style.transform =
          'scale(' + homeAdjustment + ')';

        tl.to('#ht_0027_w', { opacity: 1, duration: 0.25, delay: 0 });
        tl.to('#ht_0027_w', { opacity: 0, duration: 0.25 });
        tl.to('#ht_0023_E2', { opacity: 1, duration: 0.25, delay: -0.25 });
        tl.to('#ht_0018_N', { opacity: 1, duration: 0.25, delay: -0.25 });
        tl.to('#ht_0023_E2', { opacity: 0, duration: 0.25 });
        tl.to('#ht_0018_N', { opacity: 0, duration: 0.25 });
        tl.to('#ht_0005_M', { opacity: 1, duration: 0.25, delay: -0.35 });
        tl.to('#ht_0009_V', { opacity: 1, duration: 0.25, delay: -0.45 });
        tl.to('#ht_0005_M', { opacity: 0, duration: 0.25 });
        tl.to('#ht_0009_V', { opacity: 0, duration: 0.25 });
        tl.to('#ht_0021_C', { opacity: 1, duration: 0.25, delay: -0.35 });
        tl.to('#ht_0007_T', { opacity: 1, duration: 0.25, delay: -0.45 });
        tl.to('#ht_0021_C', { opacity: 0, duration: 0.25 });
        tl.to('#ht_0007_T', { opacity: 0, duration: 0.25 });
        tl.to('#ht_0020_i', { opacity: 1, duration: 0.25, delay: -0.35 });
        tl.to('#ht_0014_R', { opacity: 1, duration: 0.25, delay: -0.45 });
        tl.to('#ht_0020_i', { opacity: 0, duration: 0.25 });
        tl.to('#ht_0014_R', { opacity: 0, duration: 0.25 });
        tl.to('#ht_0002_T', { opacity: 1, duration: 0.25, delay: -0.65 });
        tl.to('#ht_0022_S', { opacity: 1, duration: 0.25, delay: -0.15 });
        tl.to('#ht_0002_T', { opacity: 0, duration: 0.25 });
        tl.to('#ht_0022_S', { opacity: 0, duration: 0.25 });
        tl.to('#ht_0028_WHERE-SCIENCE---CREATIVITY-MEET', {
          opacity: 1,
          duration: 1,
          delay: -0.5,
        });
      } else {
        homeAdjustment = Math.round((window.innerWidth / 430) * 100) / 100;
        document.getElementById('home-mobile').style.transform =
          'scale(' + homeAdjustment + ')';

        tl.to('#mh_0027', { opacity: 1, duration: 0.25, delay: 0 });
        tl.to('#mh_0027', { opacity: 0, duration: 0.25 });

        tl.to('#mh_0023', { opacity: 1, duration: 0.25, delay: -0.25 });
        tl.to('#mh_0018', { opacity: 1, duration: 0.25, delay: -0.25 });

        tl.to('#mh_0023', { opacity: 0, duration: 0.25 });
        tl.to('#mh_0018', { opacity: 0, duration: 0.25 });

        tl.to('#mh_0005', { opacity: 1, duration: 0.25, delay: -0.35 });
        tl.to('#mh_0009', { opacity: 1, duration: 0.25, delay: -0.45 });

        tl.to('#mh_0005', { opacity: 0, duration: 0.25 });
        tl.to('#mh_0009', { opacity: 0, duration: 0.25 });

        tl.to('#mh_0021', { opacity: 1, duration: 0.25, delay: -0.35 });
        tl.to('#mh_0007', { opacity: 1, duration: 0.25, delay: -0.45 });

        tl.to('#mh_0021', { opacity: 0, duration: 0.25 });
        tl.to('#mh_0007', { opacity: 0, duration: 0.25 });

        tl.to('#mh_0020', { opacity: 1, duration: 0.25, delay: -0.35 });
        tl.to('#mh_0014', { opacity: 1, duration: 0.25, delay: -0.45 });

        tl.to('#mh_0020', { opacity: 0, duration: 0.25 });

        tl.to('#mh_0014', { opacity: 0, duration: 0.25 });

        tl.to('#mh_0002', { opacity: 1, duration: 0.25, delay: -0.65 });
        tl.to('#mh_0022', { opacity: 1, duration: 0.25, delay: -0.15 });

        tl.to('#mh_0002', { opacity: 0, duration: 0.25 });
        tl.to('#mh_0022', { opacity: 0, duration: 0.25 });

        tl.to('#mobile-header-WHERE-SCIENCE-CREATIVITY-MEET', {
          opacity: 1,
          duration: 1,
          delay: -0.5,
        });
      }
    }

    // function toggleMenu() {
    // 	menuOpen = !menuOpen;
    // 	document.getElementById("nav").className = (menuOpen) ? "open" : "";
    // }

    function menuPosition() {
      if ((scrolled == false) & (window.scrollY > 100)) {
        scrolled = true;
        document.getElementById('nav').className = 'scrolled';
      } else {
        if (window.scrollY < 100) {
          scrolled = false;
          document.getElementById('nav').className = '';
        }
      }
    }

    function resizeHomepage() {
      let homeAdjustment;
      if (window.innerWidth >= 668) {
        homeAdjustment = Math.round((window.innerWidth / 1920) * 100) / 100;
        document.getElementById(
          'home-holder'
        ).style.transform = `scale(${homeAdjustment})`;
      } else {
        homeAdjustment = Math.round((window.innerWidth / 430) * 100) / 100;
        document.getElementById(
          'home-mobile'
        ).style.transform = `scale(${homeAdjustment})`;
      }
    }

    let slides1 = gsap.timeline({ repeat: 1, repeatDelay: 3, yoyo: true });
    if (window.innerWidth >= 668) {
      slides1.to(document.querySelectorAll(`#section2 .desktop img`)[2], {
        left: '-100%',
        duration: 1,
        delay: 1,
        ease: 'inout',
      });
      slides1.to(document.querySelectorAll(`#section2 .desktop img`)[1], {
        left: '-100%',
        duration: 1,
        delay: 1,
        ease: 'inout',
      });

      slides1.to(
        document.querySelectorAll(`#section3 .desktop img`)[2],
        { left: '100%', duration: 1, delay: 3, ease: 'inout' },
        '-=6'
      );
      slides1.to(
        document.querySelectorAll(`#section3 .desktop img`)[1],
        { left: '100%', duration: 1, delay: 3, ease: 'inout' },
        '-=4'
      );
    } else {
      slides1.to(document.querySelectorAll(`#section2 .mobile img`)[2], {
        left: '-100%',
        duration: 1,
        delay: 1,
        ease: 'inout',
      });
      slides1.to(document.querySelectorAll(`#section2 .mobile img`)[1], {
        left: '-100%',
        duration: 1,
        delay: 1,
        ease: 'inout',
      });

      slides1.to(
        document.querySelectorAll(`#section3 .mobile img`)[2],
        { left: '100%', duration: 1, delay: 3, ease: 'inout' },
        '-=6'
      );
      slides1.to(
        document.querySelectorAll(`#section3 .mobile img`)[1],
        { left: '100%', duration: 1, delay: 3, ease: 'inout' },
        '-=4'
      );
    }

    ScrollTrigger.create({
      trigger: '#section2',
      scrub: false,
      animation: slides1,
    });

    let tl2 = gsap.timeline();
    tl2
      .to('.plus', {
        scale: 200,
        duration: 0.5,
        ease: 'none',
      })
      .to('.plus', {
        opacity: 0,
        duration: 0.5,
        ease: 'none',
      });

    let instaTL = gsap.timeline();
    instaTL.from(
      document.querySelectorAll(`.insta-feed img:nth-of-type(odd)`),
      { y: '-100px', duration: 1, delay: 0.1, ease: 'inout' }
    );
    instaTL.from(
      document.querySelectorAll(`.insta-feed  img:nth-of-type(even)`),
      { y: '100px', duration: 1, ease: 'inout' },
      '-=1'
    );

    ScrollTrigger.create({
      trigger: '#insta-feed',
      scrub: false,
      animation: instaTL,
    });

    ScrollTrigger.create({
      trigger: '#home',
      start: 'top top',
      end: '220vw',
      scrub: 0.2,
      animation: tl2,
    });
  }, []);

  return (
    <Layout>
      <Helmet>
        <link type="text/css" rel="stylesheet" href="css/main.css" />
        <body class="home" bgcolor="black" />
      </Helmet>

      <div id="home">
        <div id="home-header">
          <div className="desktop">
            <video
              src="video/BULB-Animation.webm"
              width="100%"
              muted
              autoPlay
              id="home-video"
            ></video>
            <div id="home-holder">
              <img
                alt=""
                id="ht_0028_WHERE-SCIENCE---CREATIVITY-MEET"
                style={{
                  width: '1241px',
                  height: '36px',
                  position: 'absolute',
                  top: '25px',
                  left: '350px',
                  opacity: '0',
                }}
                src="images/ht_0028_WHERE-SCIENCE---CREATIVITY-MEET.webp"
              />
              <img
                alt=""
                id="ht_0027_w"
                onLoad={() => ScrollTrigger.refresh()}
                style={{
                  width: '59px',
                  height: '51px',
                  position: 'absolute',
                  top: '17px',
                  left: '342px',
                  opacity: '0',
                }}
                src="images/ht_0027_w.webp"
              />
              <img
                alt=""
                id="ht_0026_H"
                style={{
                  width: '45px',
                  height: '51px',
                  position: 'absolute',
                  top: '17px',
                  left: '402px',
                  opacity: '0',
                }}
                src="images/ht_0026_H.webp"
              />
              <img
                alt=""
                id="ht_0025_E"
                style={{
                  width: '44px',
                  height: '51px',
                  position: 'absolute',
                  top: '17px',
                  left: '448px',
                  opacity: '0',
                }}
                src="images/ht_0025_E.webp"
              />
              <img
                alt=""
                id="ht_0024_R"
                style={{
                  width: '45px',
                  height: '51px',
                  position: 'absolute',
                  top: '17px',
                  left: '493px',
                  opacity: '0',
                }}
                src="images/ht_0024_R.webp"
              />
              <img
                alt=""
                id="ht_0023_E2"
                style={{
                  width: '41px',
                  height: '51px',
                  position: 'absolute',
                  top: '17px',
                  left: '539px',
                  opacity: '0',
                }}
                src="images/ht_0023_E2.webp"
              />
              <img
                alt=""
                id="ht_0022_S"
                style={{
                  width: '44px',
                  height: '52px',
                  position: 'absolute',
                  top: '17px',
                  left: '603px',
                  opacity: '0',
                }}
                src="images/ht_0022_S.webp"
              />
              <img
                alt=""
                id="ht_0021_C"
                style={{
                  width: '45px',
                  height: '52px',
                  position: 'absolute',
                  top: '17px',
                  left: '647px',
                  opacity: '0',
                }}
                src="images/ht_0021_C.webp"
              />
              <img
                alt=""
                id="ht_0020_i"
                style={{
                  width: '23px',
                  height: '51px',
                  position: 'absolute',
                  top: '17px',
                  left: '695px',
                  opacity: '0',
                }}
                src="images/ht_0020_i.webp"
              />
              <img
                alt=""
                id="ht_0019_E"
                style={{
                  width: '43px',
                  height: '51px',
                  position: 'absolute',
                  top: '17px',
                  left: '720px',
                  opacity: '0',
                }}
                src="images/ht_0019_E.webp"
              />
              <img
                alt=""
                id="ht_0018_N"
                style={{
                  width: '45px',
                  height: '51px',
                  position: 'absolute',
                  top: '17px',
                  left: '763px',
                  opacity: '0',
                }}
                src="images/ht_0018_N.webp"
              />
              <img
                alt=""
                id="ht_0017_C"
                style={{
                  width: '45px',
                  height: '52px',
                  position: 'absolute',
                  top: '17px',
                  left: '811px',
                  opacity: '0',
                }}
                src="images/ht_0017_C.webp"
              />
              <img
                alt=""
                id="ht_0016_E"
                style={{
                  width: '43px',
                  height: '51px',
                  position: 'absolute',
                  top: '17px',
                  left: '857px',
                  opacity: '0',
                }}
                src="images/ht_0016_E.webp"
              />
              <img
                alt=""
                id="ht_0015_C"
                style={{
                  width: '52px',
                  height: '52px',
                  position: 'absolute',
                  top: '17px',
                  left: '996px',
                  opacity: '0',
                }}
                src="images/ht_0015_C.webp"
              />
              <img
                alt=""
                id="ht_0014_R"
                style={{
                  width: '52px',
                  height: '51px',
                  position: 'absolute',
                  top: '17px',
                  left: '1042px',
                  opacity: '0',
                }}
                src="images/ht_0014_R.webp"
              />
              <img
                alt=""
                id="ht_0013_E"
                style={{
                  width: '42px',
                  height: '51px',
                  position: 'absolute',
                  top: '17px',
                  left: '1090px',
                  opacity: '0',
                }}
                src="images/ht_0013_E.webp"
              />
              <img
                alt=""
                id="ht_0012_A"
                style={{
                  width: '67px',
                  height: '51px',
                  position: 'absolute',
                  top: '17px',
                  left: '1124px',
                  opacity: '0',
                }}
                src="images/ht_0012_A.webp"
              />
              <img
                alt=""
                id="ht_0011_T"
                style={{
                  width: '49px',
                  height: '51px',
                  position: 'absolute',
                  top: '17px',
                  left: '1172px',
                  opacity: '0',
                }}
                src="images/ht_0011_T.webp"
              />
              <img
                alt=""
                id="ht_0010_I"
                style={{
                  width: '23px',
                  height: '51px',
                  position: 'absolute',
                  top: '17px',
                  left: '1215px',
                  opacity: '0',
                }}
                src="images/ht_0010_I.webp"
              />
              <img
                alt=""
                id="ht_0009_V"
                style={{
                  width: '51px',
                  height: '51px',
                  position: 'absolute',
                  top: '17px',
                  left: '1238px',
                  opacity: '0',
                }}
                src="images/ht_0009_V.webp"
              />
              <img
                alt=""
                id="ht_0008_I"
                style={{
                  width: '23px',
                  height: '51px',
                  position: 'absolute',
                  top: '17px',
                  left: '1282px',
                  opacity: '0',
                }}
                src="images/ht_0008_I.webp"
              />
              <img
                alt=""
                id="ht_0007_T"
                style={{
                  width: '43px',
                  height: '51px',
                  position: 'absolute',
                  top: '17px',
                  left: '1305px',
                  opacity: '0',
                }}
                src="images/ht_0007_T.webp"
              />
              <img
                alt=""
                id="ht_0006_Y"
                style={{
                  width: '53px',
                  height: '51px',
                  position: 'absolute',
                  top: '17px',
                  left: '1340px',
                  opacity: '0',
                }}
                src="images/ht_0006_Y.webp"
              />
              <img
                alt=""
                id="ht_0005_M"
                style={{
                  width: '60px',
                  height: '51px',
                  position: 'absolute',
                  top: '17px',
                  left: '1416px',
                  opacity: '0',
                }}
                src="images/ht_0005_M.webp"
              />
              <img
                alt=""
                id="ht_0004_E"
                style={{
                  width: '55px',
                  height: '51px',
                  position: 'absolute',
                  top: '17px',
                  left: '1461px',
                  opacity: '0',
                }}
                src="images/ht_0004_E.webp"
              />
              <img
                alt=""
                id="ht_0003_E"
                style={{
                  width: '55px',
                  height: '51px',
                  position: 'absolute',
                  top: '17px',
                  left: '1504px',
                  opacity: '0',
                }}
                src="images/ht_0003_E.webp"
              />
              <img
                alt=""
                id="ht_0002_T"
                style={{
                  width: '51px',
                  height: '51px',
                  position: 'absolute',
                  top: '17px',
                  left: '1548px',
                  opacity: '0',
                }}
                src="images/ht_0002_T.webp"
              />
              <img
                alt=""
                id="ht_0001_plus"
                className="plus"
                style={{
                  width: '52px',
                  height: '52px',
                  position: 'absolute',
                  top: '17px',
                  left: '926px',
                  opacity: '1',
                }}
                src="images/ht_0001_plus.webp"
              />
            </div>
          </div>
          <div className="mobile" id="home-mobile">
            <div id="mobile-header_Background"></div>
            <div id="mobile-header-WHERE-SCIENCE-CREATIVITY-MEET"></div>
            <div id="mh_0027"></div>
            <div id="mh_0026"></div>
            <div id="mh_0025"></div>
            <div id="mh_0024"></div>
            <div id="mh_0023"></div>
            <div id="mh_0022"></div>
            <div id="mh_0021"></div>
            <div id="mh_0020"></div>
            <div id="mh_0019"></div>
            <div id="mh_0018"></div>
            <div id="mh_0017"></div>
            <div id="mh_0016"></div>
            <div id="mh_0015"></div>
            <div id="mh_0014"></div>
            <div id="mh_0013"></div>
            <div id="mh_0012"></div>
            <div id="mh_0011"></div>
            <div id="mh_0010"></div>
            <div id="mh_0009"></div>
            <div id="mh_0008"></div>
            <div id="mh_0007"></div>
            <div id="mh_0006"></div>
            <div id="mh_0005"></div>
            <div id="mh_0004"></div>
            <div id="mh_0003"></div>
            <div id="mh_0002"></div>
            <div id="mh_0001_plus" className="plus"></div>
          </div>
        </div>
        <div className="home-spacer"></div>
        <div className="home-spacer"></div>
        <div className="home-headline-holder">
          <div id="home-text">
            <h1>
              Our purpose is to uniquely translate transformative science.
            </h1>

            <h1>
              {"We don't prioritize between science and creativity"}
              <br />
              We have an unmatched ability to marry the two while honoring both
              exceptionally.
            </h1>
          </div>
        </div>
      </div>
      <section className=" home-image-carosel" id="section2">
        <div className="mobile">
          <img src="images/medical-carousel-m3.webp" alt="" />
          <img src="images/medical-carousel-m2.webp" alt="" />
          <img src="images/medical-carousel-m1.webp" alt="" />
        </div>
        <div className="desktop">
          <img src="images/medical-carousel-d3.webp" alt="" />
          <img src="images/medical-carousel-d2.webp" alt="" />
          <img src="images/medical-carousel-d1.webp" alt="" />
        </div>
        <div className="copy-holder">
          <h2>A Superior Medical Team</h2>
          <p>
            Meet the most qualified talent in the industry. Our medical and
            strategy experts are integrated into every team to ensure the ideal
            blend of clinical, academic, and industry experience.{' '}
          </p>
        </div>
      </section>
      <section className=" home-image-carosel" id="section3">
        <div className="mobile">
          <img src="images/creative-carousel-m3.webp" alt="" />
          <img src="images/creative-carousel-m2.webp" alt="" />
          <img src="images/creative-carousel-m1.webp" alt="" />
        </div>
        <div className="desktop">
          <img src="images/creative-carousel-d3.webp" alt="" />
          <img src="images/creative-carousel-d2.webp" alt="" />
          <img src="images/creative-carousel-d1.webp" alt="" />
        </div>
        <div className="copy-holder">
          <h2>Stand-Out Creatives</h2>
          <p>
            We believe that science is a gateway to creativity, and that
            creativity is the key to great science. Our storytellers are
            handpicked and thrive when dreaming up differentiated ideas and
            execution.
          </p>
        </div>
      </section>
      <section className="ac noflex video-background shorter">
        <video
          src="video/multicolor-liquid-flow.webm"
          width="100%"
          muted
          autoPlay
        ></video>
        <h1>Want to know more?</h1>
        <div className="end-boxes">
          <a href="./contact/">
            <div className="end-box ">
              <span className="button">Reach out</span>
            </div>
          </a>
          <a href="./oportunities/">
            <div className="end-box ">
              <span className="button">JOIN US</span>
            </div>
          </a>
        </div>
      </section>
      <br />
      <br />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
