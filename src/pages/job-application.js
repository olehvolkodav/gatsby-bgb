import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';

export default function JobApplication() {
  return (
    <Layout>
      <Helmet>
        <link type="text/css" rel="stylesheet" href="../css/main.css" />

        <body className="capibilities" bgcolor="black" />
      </Helmet>
      <div className="headerImage">
        <img
          src="../images/interior1_cf.jpg"
          width="100%"
          height="auto"
          className="header-bg"
        />
        <div className="headerText">
          <h1>
            Associate Account Supervisor/Account Supervisor - Medical
            Communications
          </h1>
          <h4>Account</h4>
        </div>
      </div>
      <div id="grnhse_app">
        <iframe
          id="grnhse_iframe"
          width="100%"
          frameborder="0"
          scrolling="no"
          allow="geolocation"
          onload="window.scrollTo(0,0)"
          title="Greenhouse Job Board"
          src="https://boards.greenhouse.io/embed/job_app?for=bgbgroup&token=4711816&b=https%3A%2F%2Fbgbgroup.com%2FjobApplication.html"
          height="4217"
        ></iframe>
      </div>
    </Layout>
  );
}
