import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';
import Scramble from 'react-scramble';

function Index() {
  return (
    <main>
      <Helmet>
        <title>Pranay Yadav</title>
      </Helmet>
    <div class="text">
    <h1>
    <Scramble
        autoStart
        text="I'm Pranay"
        speed = "medium"
        steps={[
          {
            roll: 20,
            action: '+',
            type: 'all',
          },
          {
            roll: 20,
            action: '-',
            type: 'forward',
          },
        ]}
    />
    </h1>
    <p>Currently, an early-stage SaaS investor at <a href="https://www.accel.com" target="_blank" rel="noreferrer noopener">Accel</a>.
    </p>
    <p>I look at Enterprise Software, DevTools, OSS and API businesses. Beyond the usual, I also help portfolio companies with product and GTM.</p>
    <p>
      Every 2 weeks, I host an AMA for founders on product strategy, GTM and fundraising <a href="https://www.accel.com" target="_blank" rel="noreferrer noopener">here</a>.
    </p>

    <p>
      Recently, I organized a <a href="https://local.saastock.com/events/details/saastock-bangalore-presents-from-indus-valley-to-silicon-valley/#/" target="_blank" rel="noreferrer noopener">SaaStock Local event</a> for founders looking to build cross-border SaaS companies from India.
    </p>

    <p>
      I hold a Bachelor’s and Master's degree in Computer Science from <a href="http://www.iitkgp.ac.in/" target="_blank" rel="noreferrer noopener">IIT Kharagpur</a>. My specialization lies in NLP and computational psycholinguistics.</p>

    <p>
      Prior to Accel, I've been a Public Health Consultant during my time at <a href="https://www.clintonhealthaccess.org/" target="_blank" rel="noreferrer noopener">Clinton Health Access Initiative</a>, a Quant building pricing models for credit derivatives during my time at <a href="https://www.nomuraholdings.com" target="_blank" rel="noreferrer noopener">Nomura</a> and a technical co-founder of a community-buying platform during college.
    </p>

    <p>
      Let’s get in touch! Follow me on <a href="https://twitter.com/ypranay19" target="_blank" rel="noreferrer noopener">Twitter</a>, <a href="https://www.linkedin.com/in/ypranay/" target="_blank" rel="noreferrer noopener">LinkedIn</a>, <a href="https://github.com/ypranay" target="_blank" rel="noreferrer noopener">GitHub</a> or send me an <a href="mailto:pyadav@accel.com" target="_blank" rel="noreferrer noopener">email</a>.
    </p>
  </div>
  </main>
  );
}

export default Index;
