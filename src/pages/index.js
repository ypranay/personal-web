import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

function Index() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <Helmet>
        <title>Pranay Yadav</title>
      </Helmet>
      <div class = "bio-container">
        <p class = "name">PRANAY YADAV</p>
        <p>
          Currently an early-stage VC at {' '}
          <a
            href="https://www.accel.com"
            target="_blank"
            rel="noreferrer noopener"
          >
          Accel
          </a>{' '}
          . I look at Enterprise Software, DevTools, OSS and API businesses.
        </p>
        <p>Beyond the usual, I help portfolio companies with product and GTM.</p>
      </div>
    </main>
  );
}

export default Index;
