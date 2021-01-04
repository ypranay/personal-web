import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';
import TypeIt from "typeit-react";
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
    <p>
    <TypeIt
        options={{
          speed: 50,
          cursor: false,
          waitUntilVisible: true
        }}>
      Currently, an early-stage SaaS investor at <a href="https://www.accel.com" target="_blank">Accel</a>.
      </TypeIt>
    </p>
    <p>
    <TypeIt
        options={{
          speed: 50,
          cursor: false,
          startDelay: 3000,
          waitUntilVisible: true
        }}>
      I look at Enterprise Software, DevTools, OSS and API businesses.
      </TypeIt>
    </p>
    <p>Beyond the usual, I also help portfolio companies with product and GTM.</p>
    <p>
      Every 2 weeks I host an AMA for founders on product strategy, GTM and fundraising 
      <a href="https://www.accel.com" target="_blank">here</a>.
    </p>

    <p>
      Recently, I organized a <a href="https://local.saastock.com/events/details/saastock-bangalore-presents-from-indus-valley-to-silicon-valley/#/" target="_blank">SaaStock Local event</a> for founders looking to build cross-border SaaS companies from India.
    </p>

    <p>
      I hold a Bachelor’s and Master's degree in Computer Science from <a href="http://www.iitkgp.ac.in/" target="_blank">IIT Kharagpur</a>, where I also researched on NLP and computational psycholinguistics.</p>

    <p>
      Prior to Accel, I've been a public health consultant to the Government of India during my time at <a href="https://www.clintonhealthaccess.org/" target="_blank">Clinton Health Access Initiative</a>, a quant building pricing models for credit derivatives during my time at <a href="https://www.nomuraholdings.com/services/wholesale/gm.html" target="_blank">Nomura</a>, and a technical co-founder of a community-buying focused e-commerce platform during college.
    </p>

    <p>
      Let’s get in touch! Follow me on <a href="https://twitter.com/ypranay19" target="_blank">Twitter</a>, <a href="https://www.linkedin.com/in/ypranay/" target="_blank">LinkedIn</a>, <a href="https://github.com/ypranay" target="_blank">GitHub</a> or send me an <a href="mailto:pyadav@accel.com">email</a>.
    </p>
  </div>
  </main>
  );
}

export default Index;
