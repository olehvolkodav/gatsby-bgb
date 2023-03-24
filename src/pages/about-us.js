import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import { Helmet } from 'react-helmet';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AboutUs = () => {
  useEffect(() => {
    /*Javascript here
   Note: this will have all the greensock animations
   */
  }, []);

  return (
    <Layout>
      <Helmet>
        <link type="text/css" rel="stylesheet" href="../css/main.css" />

        <body className="about-us start" bgcolor="black" />
      </Helmet>

      <section id="about-us">
        <div id="about-us-header">
          <h1>
            In 2005, two young entrepreneurs set out to build the agency of the
            future.
          </h1>
          <p className="desktop">
            Greg and Brendon saw the healthcare landscape becoming vastly more
            complex, where scientific accumen and creative innovation would need
            to seamlessly merge to create compelling, credible brand stories.
          </p>
          <p className="desktop">
            To bring the concept to fruition, they wanted to foster a team
            culture that would bring a passion for exploring transformational
            science, encourage curiosity, inspire creativity, and instill the
            value of collaboration and teamwork.
          </p>
        </div>
      </section>
      <section className="mobile">
        <p>
          Greg and Brendon saw the healthcare landscape becoming vastly more
          complex; where scientific accumen and creative innovation would need
          to seamlessly merge to create compelling, credible brand stories.
        </p>
        <p>
          To bring the concept to fruition, they wanted to foster a team culture
          that would bring a passion for exploring transformational science,
          encourage curiosity, inspire creativity and instill the value of
          collaboration and teamwork.
        </p>
      </section>
      <section className="section2">
        <h2>
          To change behaviors, to drive conversation, and to drive brands, we
          let science lead.
        </h2>
      </section>
      <section className="video-background">
        <video src="../video/looping-eye.webm" autoPlay muted loop></video>
        <div className="copy-holder">
          <h2>
            <strong>SMARTCreative</strong>&reg;&mdash;We deliver market-moving
            insights, brand-building content, captivating creative, and stellar
            execution that ultimately drives results.{' '}
          </h2>
        </div>
      </section>
      <section className="large-bios">
        <h1>Our Founders</h1>
        <div className="flex">
          <div className="bio">
            <img src="../images/bio-greg@2x.webp" onClick="bioOverlay(0)" />
            <h2>Gregory Passaretti</h2>
            <small>FOUNDING PARTNER</small>
            <div className="buttons">
              <a
                href="https://www.linkedin.com/in/gregory-passaretti-3b8285/"
                className="button"
                target="_blank"
              >
                <img src="../images/linked-in-thin.svg" height="20" />
              </a>
              <span className="button" onClick="bioOverlay(0)">
                + BIO
              </span>
            </div>
          </div>

          <div className="bio">
            <img src="../images/bio-brendon@2x.webp" onClick="bioOverlay(1)" />
            <h2>
              Brendon Phalen <span>MD</span>
            </h2>
            <small>FOUNDING PARTNER</small>
            <div className="buttons">
              <a
                href="https://www.linkedin.com/in/brendon-phalen-64ba246/"
                className="button"
                target="_blank"
              >
                <img src="../images/linked-in-thin.svg" height="20" />
              </a>
              <span className="button" onClick="bioOverlay(1)">
                + BIO
              </span>
            </div>
          </div>
        </div>
      </section>
      <img src="../images/group-photo@2x.webp" width="100%" />
      <h3>
        Our industry veterans bring diverse expertise and passion to the work we
        do, unified by our core values. Our teams feel encouraged, empowered,
        and inspired.{' '}
      </h3>
      <section className="all-bios">
        <h1>Leadership Team</h1>
        <div className="flex"></div>
      </section>

      <section className="videos">
        <div className="video-holder">
          <iframe
            src="https://player.vimeo.com/video/776380725?h=811924a59e"
            width="810"
            height="540"
            allow="autoplay; fullscreen"
            border="0"
          ></iframe>
        </div>
        <div className="video-controls">
          <div className="video-btn-title selected" data-href="776380725">
            A Place to BGB Yourself
          </div>
          <div className="video-btn-title " data-href="571702853">
            Welcome Back Boomerangs!
          </div>
          <div className="video-btn-title" data-href="777383049">
            It's Gonna Be May
          </div>
          <div className="video-btn-title" data-href="396040587">
            Employee Appreciation Day 2020
          </div>
          <div className="video-btn-title" data-href="782955359">
            2022 Holiday Card
          </div>
          <div className="video-btn-title" data-href="659711602">
            2021 Holiday Card
          </div>
          <div className="video-btn-title" data-href="494142110">
            2020 Holiday Card
          </div>
          <div className="video-btn-title" data-href="380080643">
            2019 Holiday Card
          </div>
          <div className="video-btn-title" data-href="306465673">
            2018 Holiday Card
          </div>
          <div className="video-btn-title" data-href="247557457">
            2017 Holiday Card
          </div>
          <div className="video-btn-title" data-href="196747116">
            2016 Drunk Science
          </div>
          <div className="video-btn-title" data-href="196746295">
            2016 Holiday Card
          </div>
          <div className="video-btn-title" data-href="149089945">
            2015 Holiday Card
          </div>
          <div className="video-btn-title" data-href="175392132">
            2015 Holiday Card Bloopers
          </div>
          <div className="video-btn-title" data-href="175401678">
            Super Bowl 50 Spot &mdash; &#8220;Envy&#8221;
          </div>
          <div className="video-btn-title" data-href="175395441">
            10th Anniversary Video
          </div>
          <div className="video-btn-title" data-href="175397221">
            2014 Holiday Card
          </div>
          <div className="video-btn-title" data-href="175400194">
            2013 Holiday Card
          </div>
        </div>
      </section>

      <section className="ac noflex  container shorter">
        <h1>Want to know us better?</h1>
        <div className="end-boxes">
          <a href="../contact">
            <div className="end-box bg1">
              <h3>How we merge creativity and science.</h3>
              <span className="button">REACH OUT</span>
            </div>
          </a>
          <a href="../oportunities">
            <div className="end-box bg2">
              <h3>What it's like to work for us.</h3>
              <span className="button">JOIN US</span>
            </div>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;

export const Head = () => <title>BGBGroup | Opportunities</title>;
