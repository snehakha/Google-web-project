import React from 'react';
import { useState } from 'react';
import './App.css';

import asset0 from './assets/asset0.png'
import asset1 from './assets/asset1.jpg'
import asset2 from './assets/asset2.jpeg'
import asset3 from './assets/asset3.jpeg'
import asset4 from './assets/asset4.jpeg'
import asset5 from './assets/asset5.png'
import asset6 from './assets/asset6.png'
import asset7 from './assets/asset7.png'
import asset8 from './assets/asset8.png'
import asset9 from './assets/asset9.png'
import asset85 from './assets/asset85.png'
import asset86 from './assets/asset86.png'
import asset87 from './assets/asset87.png'
import asset88 from './assets/asset88.png'
import asset89 from './assets/asset89.png'
import asset90 from './assets/asset90.png'
import asset91 from './assets/asset91.png'
import asset92 from './assets/asset92.png'
import videobckg from './assets/video.mp4'



function App() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const changeImage = (direction) => {
    const totalImages = 14;
    setCurrentIndex((prevIndex) => (prevIndex + direction + totalImages) % totalImages);
  };

  const handleClick1 = () => {
    const permissionGranted = window.confirm("Do you want to procced?");
    if (permissionGranted) {
      window.location.href = 'https://rohammaiti.github.io/Evidences/'
    }
    else {
      window.location.href = 'https://rohammaiti.github.io/Earth_guardians/'
    }
  }

  const handleClick2 = () => {
    const permissionGranted = window.confirm("Do you want to procced?");
    if (permissionGranted) {
      window.location.href = 'https://rohammaiti.github.io/weather-vs-climate/'
    }
    else {
      window.location.href = 'https://rohammaiti.github.io/Earth_guardians/'
    }
  }

  const handleClick3 = () => {
    const permissionGranted = window.confirm("Do you want to procced?");
    if (permissionGranted) {
      window.location.href = 'https://rohammaiti.github.io/changing-climate/'
    }
    else {
      window.location.href = 'https://rohammaiti.github.io/Earth_guardians/'
    }
  }

  const handleClick4 = () => {
    const permissionGranted = window.confirm("Do you want to procced?");
    if (permissionGranted) {
      window.location.href = 'https://rohammaiti.github.io/extreme-weather/'
    }
    else {
      window.location.href = 'https://rohammaiti.github.io/Earth_guardians/'
    }
  }

  const handleClick5 = () => {
    const permissionGranted = window.confirm("Do you want to procced?");
    if (permissionGranted) {
      window.location.href = 'https://rohammaiti.github.io/proposed-activity/'
    }
    else {
      window.location.href = 'https://rohammaiti.github.io/Earth_guardians/'
    }
  }

  const handleClick6 = () => {
    const permissionGranted = window.confirm("Do you want to procced?");
    if (permissionGranted) {
      window.location.href = 'https://rohammaiti.github.io/solutions-underway/'
    }
    else {
      window.location.href = 'https://rohammaiti.github.io/Earth_guardians/'
    }
  }

  const handleClick7 = () => {
    const permissionGranted = window.confirm("Do you want to procced?");
    if (permissionGranted) {
      window.location.href = 'https://rohammaiti.github.io/solutions-implemented/'
    }
    else {
      window.location.href = 'https://rohammaiti.github.io/Earth_guardians/'
    }
  }

  const handleClick8 = () => {
    const permissionGranted = window.confirm("Do you want to procced?");
    if (permissionGranted) {
      window.location.href = 'https://rohammaiti.github.io/ongoing-activities/'
    }
    else {
      window.location.href = 'https://rohammaiti.github.io/Earth_guardians/'
    }
  }

  const handleClick9 = () => {
    const permissionGranted = window.confirm("Do you want to procced?");
    if (permissionGranted) {
      window.location.href = 'https://rohammaiti.github.io/Gallery/'
    }
    else {
      window.location.href = 'https://rohammaiti.github.io/Earth_guardians/'
    }
  }

  const handleClick10 = () => {
    const permissionGranted = window.confirm("Do you want to procced?");
    if (permissionGranted) {
      window.location.href = 'https://rohammaiti.github.io/quiz/'
    }
    else {
      window.location.href = 'https://rohammaiti.github.io/Earth_guardians/'
    }
  }

  const handleClick11 = () => {
    const permissionGranted = window.confirm("Do you want to procced?");
    if (permissionGranted) {
      window.location.href = 'https://rohammaiti.github.io/videos/'
    }
    else {
      window.location.href = 'https://rohammaiti.github.io/Earth_guardians/'
    }
  }


  return (

    <div className="App">

      <div className="header" id='home'>
        <img srcset={asset1} alt="earth" className="rearth" />
        <h2><u>Welcome to Earth Guardians</u></h2>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="right"><a href="#facts"><button className="design">Facts</button></a></li>
            <li className="right"><a href="#solutions"><button className="design">Solutions</button></a></li>
            <li className="right"><a href="#explore"><button className="design">Explore</button></a></li>
          </ul>
        </nav>
      </div>

      <div className='data-cards'>

        <div class="box">
          <h2>Carbon dioxide</h2>
          <p>
            It is one of the most important greenhouse gases linked to global warming, but
            it is a minor component of Earth’s atmosphere (about 3 volumes in 10,000),
            formed in combustion of carbon-containing materials. But due to excessive
            use of fossil fuels, mining and other human activities have gave rise to
            the amount of CO2 level in the atmosphere.
          </p>

          <p class="data">↑ 420 parts per million</p>
        </div>

        <div class="box">
          <h2>Global Temperature</h2>
          <p>
            Global temperature trends are crucial in the study of climate change. Over
            the past century, Earth's average surface temperature has risen, primarily
            due to human activities such as the burning of fossil fuels, deforestation,
            and industrial processes. This warming trend is a key indicator of ongoing
            climate change.
          </p>

          <p class="data">↑ 1.1 °C</p>
        </div>

        <div class="box">
          <h2>Methane</h2>
          <p>
            Methane is responsible for around 30% of the rise in global temperatures since
            the Industrial Revolution, and rapid and sustained reductions in methane emissions
            are key to limiting near-term global warming and improving air quality.
          </p>

          <p class="data">↑ 192.36 parts per billion</p>
        </div>

        <div class="box">
          <h2>Sea Level</h2>
          <p>
            The rate of global sea level rise is accelerating: it has more than doubled from
            0.06 inches (1.4 millimeters) per year throughout most of the twentieth century
            to 0.14 inches (3.6 millimeters) per year from 2006–2015. In many locations along
            the U.S. coastline, the rate of local sea level rise is greater than the global
            average due to land processes like erosion, oil and groundwater pumping, and
            subsidence.
          </p>

          <p class="data">↑ 4 inches since 1993</p>
        </div>

        <div class="box">
          <h2>Ocean Warming</h2>
          <p>
            The ocean absorbs most of the excess heat from greenhouse gas emissions,
            leading to rising ocean temperatures. Increasing ocean temperatures affect
            marine species and ecosystems, causing coral bleaching and the loss of
            breeding grounds for marine fishes and mammals. Rising ocean temperatures
            also affect the benefits humans derive from the ocean; threatening food security.
          </p>

          <p class="data">↑ 345 zetta joules since 1955</p>
        </div>

        <div class="box">
          <h2>Artic Ice Extent</h2>
          <p>
            Arctic sea ice reaches its minimum extent  each September. September
            Arctic sea ice is now shrinking at a rate of 12.2% per decade, compared
            to its average extent during the period of 1981 to 2010. This graph shows
            the size of the Arctic sea ice each September since satellite observations
            started in 1979.
          </p>

          <p class="data">↓ 12.2 percent per decade since 1979</p>
        </div>


      </div>

      <div className="imagecontainer">
        <div className="slider">
          <img src={asset5} alt="CO2" style={{ display: currentIndex === 0 ? 'block' : 'none' }} />
          <img src={asset7} alt="Global Temperature" style={{ display: currentIndex === 1 ? 'block' : 'none' }} />
          <img src={asset6} alt="Methane" style={{ display: currentIndex === 2 ? 'block' : 'none' }} />
          <img src={asset8} alt="Sea Level" style={{ display: currentIndex === 3 ? 'block' : 'none' }} />
          <img src={asset9} alt="Ocean Warming" style={{ display: currentIndex === 4 ? 'block' : 'none' }} />
          <img src={asset0} alt="Arctic Ice" style={{ display: currentIndex === 5 ? 'block' : 'none' }} />
          <img src={asset85} alt="south-sudan-data" style={{ display: currentIndex === 6 ? 'block' : 'none' }} />
          <img src={asset86} alt="madagascar-data" style={{ display: currentIndex === 7 ? 'block' : 'none' }} />
          <img src={asset87} alt="pakistan-data" style={{ display: currentIndex === 8 ? 'block' : 'none' }} />
          <img src={asset88} alt="somalia-data" style={{ display: currentIndex === 9 ? 'block' : 'none' }} />
          <img src={asset89} alt="sudan-data" style={{ display: currentIndex === 10 ? 'block' : 'none' }} />
          <img src={asset90} alt="chad-data" style={{ display: currentIndex === 11 ? 'block' : 'none' }} />
          <img src={asset91} alt="africa-data" style={{ display: currentIndex === 12 ? 'block' : 'none' }} />
          <img src={asset92} alt="dry-corridor-data" style={{ display: currentIndex === 13 ? 'block' : 'none' }} />
        </div>
        <div className="navigation-buttons">
          <button className="arrow left" onClick={() => changeImage(-1)}>
            &#9665;
          </button>
          <button className="arrow right" onClick={() => changeImage(1)}>
            &#9655;
          </button>
        </div>
      </div>

      <div className="sections">

        <section id="facts">
          <p>Wecome to Facts section. In this section we discuss about the changing climate pattern, evidences and much more </p>
          <ul>
            <p>Select a topic</p>
            <li><a href='https://rohammaiti.github.io/Evidences/' target='_blank' rel='noopener noreferrer' onClick={handleClick1}>Evidences</a></li>
            <li><a href='https://rohammaiti.github.io/weather-vs-climate/' target='_blank' rel='noopener noreferrer' onClick={handleClick2}>What is weather and climate</a></li>
            <li><a href='https://rohammaiti.github.io/changing-climate/' target='_blank' rel='noopener noreferrer' onClick={handleClick3}>Changing climate</a></li>
            <li><a href='https://rohammaiti.github.io/extreme-weather/' target='_blank' rel='noopener noreferrer' onClick={handleClick4}>Effects and extreme weather</a></li>
          </ul>
          <img srcset={asset2} className="pic" alt="WeatherChange" />

          <hr />
        </section>

        <section id="solutions">
          <p>Wecome to the Solutions section. In this section we discuss about various solutions and actions that has been taken globally to combat the changing climate. </p>
          <ul>
            <p>Select a topic</p>
            <li><a href="https://rohammaiti.github.io/proposed-activity/" target='_blank' rel='noopener noreferrer' onClick={handleClick5}>Proposed activities for tackling climate change</a></li>
            <li><a href="https://rohammaiti.github.io/solutions-underway/" target='_blank' rel='noopener noreferrer' onClick={handleClick6}>Solutions underway</a></li>
            <li><a href="https://rohammaiti.github.io/solutions-implemented/" target='_blank' rel='noopener noreferrer' onClick={handleClick7}>Solutions implemented</a></li>
            <li><a href="https://rohammaiti.github.io/ongoing-activities/" target='_blank' rel='noopener noreferrer' onClick={handleClick8}>Ongoing activities</a></li>
          </ul>
          <img srcset={asset3} className="pic" alt="Solutions" />
          <hr />
        </section>

        <section id="explore">
          <p>Welcome to Explore section. In this section, we will get materials to teach younger generations about our planet through quizes, videos and images!</p>
          <ul>
            <p>Select a topic</p>
            <li><a href='https://rohammaiti.github.io/Gallery/' target='_blank' rel='noopener noreferrer' onClick={handleClick9}>Earth Gallery</a></li>
            <li><a href='https://rohammaiti.github.io/quiz/' target='_blank' rel='noopener noreferrer' onClick={handleClick10}>Quiz Section</a></li>
            <li><a href='https://rohammaiti.github.io/videos/' target='_blank' rel='noopener noreferrer' onClick={handleClick11}>Learning videos</a></li>
          </ul>
          <img srcset={asset4} className="pic" alt="Solutions" />

          <hr />
        </section>
      </div>

      <footer class='footer'>
        <video class='footer-video' autoPlay loop muted>
          <source src={videobckg} type='video/mp4'/>
        </video>

        <div class='text-overlay'>
          <div class='contacts'>
            <p>Contact us</p>
            <table>
              <tr>
                <td className='name'>Name</td>
                <td className='number'>Contact</td>
                <td className='email'>Email</td>
              </tr>
              <tr>
                <td class='name'>Roham Maiti</td>
                <td class='number'>8961821277</td>
                <td className='email'>maitiroham2003@gmail.com</td>
              </tr>
              <tr>
                  <td className='name'>Sneha Khan</td>
                  <td className='number'>8768656554</td>
                  <td className='email'>snehakhan4567@gmail.com</td>
                </tr>

                <tr>
                  <td className='name'>Anirban Das</td>
                  <td className='number'>6291796941</td>
                  <td className='email'>adas92372@gmail.com</td>
                </tr>

                <tr>
                  <td className='name'>Prapti Sarkar</td>
                  <td className='number'>6295265876</td>
                  <td className='email'>itsmeprapti123@gmail.com</td>
                </tr>
            </table>
          </div>
          
          <p class='form-para'>
            We request you to fill up this form for a quick survey-<br/>
            <a href='https://docs.google.com/forms/d/e/1FAIpQLSdFLHVRaEfAG_wnCBQv8jhsNtYPZYfPr5RyEt5My3xCqruAsg/viewform?usp=sf_link'>Form link</a>
          </p>

          <div class='header-buttons'>
            <ul>
              <li class="foot-list"><a href="#facts"><button class="design">Facts</button></a></li>
              <li class="foot-list"><a href="#solutions"><button class="design">Solutions</button></a></li>
              <li class="foot-list"><a href="#explore"><button class="design">Explore</button></a></li>
              <li class="foot-list"><a href="#home"><button class="design">Home</button></a></li>
            </ul>
          </div>
        </div>
      </footer>


    </div>



  );
}

export default App;
