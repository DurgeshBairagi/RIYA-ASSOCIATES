import { Analytics } from "@vercel/analytics/react"

import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { StrictMode, Suspense } from 'react'

import Loader from './Components/Loader.jsx'
import App from './App.jsx'
import './index.css'

console.log("Hi if you notice a bug please contact me max2002guillon@gmail.com")


const isMobile = () => {
    return ( ( window.innerWidth <= 1000 ) && ( window.innerHeight <= 800 ) );
  }

const root = ReactDOM.createRoot(document.querySelector('#root'))

const fovForMobile = 100
const fovForPc = 45

root.render(
    <StrictMode>
        <Canvas
            camera={{
            fov: isMobile() ? fovForMobile : fovForPc,
            near: 0.1,
            far: 200,
            position: [52, 7, 12],
        }}
        >
            <Suspense fallback={<Loader/>}>
                <App/>   
            </Suspense>

            {/*<Perf position="top-left" />*/}
        </Canvas>

        <Analytics/>
        <div style={{ display: "none" }}>
  <section aria-hidden="true">
    <h1>Riya Associates Advisors LLP</h1>
    <h2>We are a team of 200+ young and enthusiastic professionals, including Accountants, consultants, GST and income tax experts. Currently we are serving more than 5000 clients from corporate to proprietors, local businesses & individuals</h2>
    <h2>Experts in GST, Trust Registration</h2>
    <h2>Specialized in Trademark Filing.</h2>
  </section>
  <section aria-hidden="true">
    <h2>Skills and Expertise</h2>
    <ul>
      <li>Trademark Filing</li>
      <li>GST Registration</li>
      <li>Trust Registration</li>
      <li>ITR Filing</li>
      <li>Software Services</li>
    </ul>
  </section>
  <section aria-hidden="true">
    <p>
      Welcome to the Wolrd of Riya.
      We provide advisory for the two most important divisions of a business, which are business strategy and finance.
    </p>
  </section>
  <noscript>
    <p>
      We not only helps existing businesses to grow but also help in setting up new businesses in India from sharing profitable business ideas to company formation and financial planning. We have a corporate office in Kalbadevi, Mumbai with two branches; one in bhayander, Mumbai and another one is in Bali, Rajasthan.
    </p>
  </noscript>
</div>



    </StrictMode>

        
    
)