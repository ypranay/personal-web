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
        Currently an early-stage SaaS investor at
        <a
          href="https://www.accel.com"
          target="_blank"
          rel="noreferrer noopener"
        >
        Accel
        </a>{' '}
        . I am passionate about enterprise and open-source software, developer tools and API-first businesses.
      </p>
      <br />
      <h2>The date according to Node.js (TypeScript) is:</h2>
      <p>{date ? date : 'Loading date...'}</p>
      </div>
    </main>
  );
}

export default Index;
