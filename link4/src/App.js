import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="body">

            <p className='header'>
              <u>Climate change and extreme weather</u>
            </p>

            <p className="intro">
                As the climate changes, the frequency and intensity of extreme weather events are increasing.
            </p>

            <div className="takeaways">
                <ul style={{listStyleType: 'square'}}>
                    Takeaways
                    <li>Due increase in warming, glaciers are melting resulting in flash floods in low lying areas.</li>
                    <li>Increased cases of droughts for longer time periods.</li>
                    <li>Increase in number of cyclones and typhoons occuring globally.</li>
                    <li>Rapid spread of wildfires.</li>
                    <li>Prolonged heat wave in summer seasons.</li>
                </ul>
            </div>

            <div className="information-section">
                <p>
                    Scientists use a combination of <a href="https://climatekids.nasa.gov/climate-model/"> climate models </a>
                    and land, air, sea, and space-based observations to research how extreme weather events change over time.
                    First, scientists examine historical records to determine the frequency and intensity of past events.
                    Many of these long-term records date back to the 1950s, though some start in the 1800s. Then scientists
                    use climate models to see if the number or strength of these events is changing, or will change, due to
                    increasing greenhouse gases when compared to what has happened historically.
                </p>
            </div>

            <div className="information-section">
                <p>
                    Human actions since the Industrial Revolution, primarily the burning of fossil fuels, have caused
                    greenhouse gases to rapidly rise in the atmosphere. As carbon dioxide, methane, and other gases
                    increase, they act as a blanket, trapping heat and warming the planet. In response, Earth’s air
                    and ocean temperatures warm. This warming affects the water cycle, shifts weather patterns, and
                    melts land ice — all impacts that can make extreme weather worse. Not only this, the increase in
                    temperature throughout the globe has resulted in increased number of cyclones and typhoons which are 
                    causing massive destruction and loss of life. Similarly, forest fires are increasing in the forest of 
                    Europe, Australia, South America and elsewhere causing destruction to flora and fauna.
                </p>
            </div>
        </div>
        <button className='home-btn'><a href='https://rohammaiti.github.io/Earth_guardians/'>Back to home</a></button>
    </div>
  );
}

export default App;
