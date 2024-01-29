import React from 'react';
import asset10 from './assets/asset10.jpeg'
import asset11 from './assets/asset11.avif'
import asset12 from './assets/asset12.png'
import asset13 from './assets/asset13.jpeg'
import asset14 from './assets/asset14.jpeg'
import asset15 from './assets/asset15.jpeg'
import asset16 from './assets/asset16.png'
import asset17 from './assets/asset17.png'
import asset18 from './assets/asset18.png'
import asset19 from './assets/asset19.jpg'
import asset20 from './assets/asset20.jpeg'
import asset21 from './assets/asset21.jpeg'
import asset22 from './assets/asset22.png'
import asset23 from './assets/asset23.jpeg'
import asset24 from './assets/asset24.png'
import asset25 from './assets/asset25.jpeg'
import asset26 from './assets/asset26.jpeg'
import asset27 from './assets/asset27.jpg'
import './App.css';

function App() {
  return (
      <div className='app'>
        <div className='documentheading' id='top'>
          <u>Evidences to prove that our climate is changing</u>
        </div>

        <div class="header">
          <a href='#melting-ice'><button className="topic-button" id="meltingIceButton">Melting Ice in Poles</button></a>
          <a href='#global-tempaerature'><button className="topic-button" id="temperatureButton">Rise in Global Temperature</button></a>
          <a href='#weather-change'><button className="topic-button" id="weatherChangeButton">Change in Weather</button></a>
          <a href='#cyclones'><button className="topic-button" id="cyclonesButton">Frequent Cyclones & Typhoons</button></a>
          <a href='#forest-fire'><button className="topic-button" id="forestFiresButton">Increasing Forest Fires</button></a>
          <a href='#Shifts in ecosystem'><button className="topic-button" id="ecosystemButton">Shifts in Ecosystem</button></a>
        </div>

        <div class="box-container">
          <div className='box'>
            <table className="image-table">
              <tr>
                <td className="image-cell"><img srcSet={asset10} alt="melting-polar-ice"/></td>
                <td className="image-cell"><img srcSet={asset11} alt="global-temperature"/></td>
                <td className="image-cell"><img srcSet={asset12} alt="weather-change"/></td>
                <td className="image-cell"><img srcSet={asset13} alt="cyclones"/></td>
                <td className="image-cell"><img srcSet={asset14} alt="forest-fire"/></td>
                <td className="image-cell"><img srcSet={asset15} alt="ecosystem"/></td>
              </tr>
            </table>
          </div>
        </div>

        <section className='dataportion' id='melting-ice'>
          <div className='intro'>
            <p><u>Melting ice in Poles and Glaciers</u></p>
          </div>

          <div className='para-image'>
            <p>
              The Greenland and Antarctic
              ice sheets have
              decreased in mass. Data
              from NASA's Gravity
              Recovery and Climate
              Experiment show
              Greenland lost an
              average of 279 billion
              tons of ice per year
              between 1993 and 2019,
              while Antarctica lost
              about 148 billion tons of ice per year. Even the
              glaciers in the
              Himalayas, Alps and
              Alaska are melting at a
              dangerous rate.
            </p>
            <img className="side-pic" srcSet={asset17} alt="glacier"/>
          </div>
          <img className='graph' srcSet={asset16} alt="graph"/>
        </section>
        
        <section className='dataportion' id='global-tempaerature'>
          <div className='intro'>
            <p><u>Rise in global temperature</u></p>
          </div>

          <div className='para-image'>
            <p>
              The planet's average
              surface temperature has
              risen about 2 degrees
              Fahrenheit (1 degrees Celsius)
              since the late 19th
              century, a change
              driven largely by
              increased carbon
              dioxide emissions into
              the atmosphere and
              other human activities.
              Most of the warming
              occurred in the past 40
              years, with the seven
              most recent years being
              the warmest. The years
              2016 and 2020 are tied
              for the warmest year on record.
            </p>
            <img className="side-pic" srcSet={asset19} alt="global-warming"/>
          </div>
          <img className='graph' srcSet={asset18} alt="graph"/>
        </section>

        <section className='dataportion' id='weather-change'>
          <div className='intro'>
            <p><u>Change in weather patterns</u></p>
          </div>

          <div className='para-image'>
            <p>
              The climate and weather
              is changing at a very
              faster rate than earlier.
              Forest fire, droughts,
              flooding are all the
              examples that the
              climate of our panet has
              changed a lot in this last
              few decades. The change
              in climate has also given
              rise to many unusual
              events also like water
              scarcity, lack of food
              availability etc.
            </p>
            <img className="side-pic" srcSet={asset20} alt="global-warming"/>
          </div>
          <img className='graph' srcSet={asset21} alt="graph"/>
        </section>

        <section className='dataportion' id='cyclones'>
          <div className='intro'>
            <p><u>Frequent occuring of cyclones and typhoons</u></p>
          </div>

          <div className='para-image'>
            <p>
              In last few years
              we have seen that the
              number of cyclones have
              increased globally.
              Starting from Oceans to
              seas they are causing
              disaster everywhere.
              Recently we have got to
              know that the number
              of deadly cyclones are
              increasing in the
              Arabian Sea which once
              upon a time had
              cyclones rarely. Even in
              the times when we
              expect the cyclones are
              least like;y to happen, it
              is occuring. All this can
              be attributed to the
              global climate change.
              Due to this huge amount
              of loss are being
              suffered by the people
              living in costal areas.
              Economic activities are
              getting disrupted. More
              cyclones can be found
              occuring in the tropical
              countries where the
              temperature remains high.
            </p>
            <img className="side-pic" srcSet={asset23} alt="cyclones"/>
          </div>
          <img className='graph' srcSet={asset22} alt="graph"/>
        </section>

        <section className='dataportion' id='forest-fire'>
          <div className='intro'>
            <p><u>Increase cases of forest fires.</u></p>
          </div>

          <div className='para-image'>
            <p>
              Globally, fire weather
              seasons have
              lengthened. Drought
              remains the dominant
              driver of fire emissions,
              but recently there has
              been increased fire
              activity in some tropical
              and temperate regions
              due to warmer
              temperatures that
              increase vegetation
              flammability. The
              northern boreal zone
              (Earth's northernmost
              forests) near the Arctic
              is also experiencing
              larger and more
              frequent fires, and this
              may increase under a
              warmer climate.
            </p>
            <img className="side-pic" srcSet={asset25} alt="forest-fire"/>
          </div>
          <img className='graph' srcSet={asset24} alt="graph"/>
        </section>

        <section className='dataportion' id='Shifts in ecosystem'>
          <div className='intro'>
            <p><u>Shifts in ecosystem</u></p>
          </div>

          <div className='para-image'>
            <p>
              Due to change in global
              climate, there is an
              abrupt change in the
              ecological balance.
              Climate change can alter
              where species live, how
              they interact, and the
              timing of biological events,
              which could fundamentally
              transform current ecosystems
              and food webs.
              Climate change can overwhelm
              the capacity of ecosystems
              to mitigate extreme events.
              It can also induce rise and
              spread of invasive species,
              soil erosion and many
              such effects.
            </p>
            <img className="side-pic" srcSet={asset26} alt="ecosystem"/>
          </div>
          <img className='graph' srcSet={asset27} alt="graph"/>
        </section>

        <footer>
          <button className='footerbutton'> <a href='#top'>Back to top</a></button>
          <button className='footerbutton'><a href='https://rohammaiti.github.io/Earth_guardians/'>Back to home page</a></button>
          <button className='footerbutton'><a href='#melting-ice'>Melting Ice in Poles</a></button>
          <button className='footerbutton'><a href='#global-tempaerature'>Rise in Global Temperature</a></button>
          <button className='footerbutton'><a href='#weather-change'>Change in Weather</a></button>
          <button className='footerbutton'><a href='#cyclones'>Frequent Cyclones & Typhoons</a></button>
          <button className='footerbutton'><a href='#forest-fire'>Increasing Forest Fires</a></button>
          <button className='footerbutton'><a href='#Shifts in ecosystem'>Shifts in Ecosystem</a></button>
        </footer>

      </div>
  );
}

export default App;
