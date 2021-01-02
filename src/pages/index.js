import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

function Index() {
  return (
    <main>
      <Helmet>
        <title>Pranay Yadav</title>
      </Helmet>
        <h1>Pranay Yadav</h1>
        <p>Currently an early-stage VC at <a href="https://www.accel.com" rel="noopener noreferrer" target="_blank">Accel</a>. I look at Enterprise Software, DevTools, OSS and API businesses. Beyond the usual, I help portfolio companies with product and GTM.</p>
        <nav>
        <h2>Get in touch</h2>
        <div><p><a href="mailto:pyadav@accel.com">Get in touch</a> with me over email here.</p></div>
        </nav>
    </main>
  );
}

export default Index;
