import React from 'react';
import './App.css';
import asset29 from './assets/asset29.webp'
import asset30 from './assets/asset30.jpeg'

function App() {
  return (
    <div className="App">
      <div className="body"> 

            <p className='header'><u>Changing climate</u></p>

            <p className="para">
                Changes observed in Earth’s climate since the mid-20th century are driven by human activities, particularly
                fossil fuel burning, which increases heat-trapping greenhouse gas levels in Earth’s atmosphere, raising
                Earth’s average surface temperature. Natural processes, which have been overwhelmed by human activities,
                can also contribute to climate change, including internal variability (e.g., cyclical ocean patterns like El Niño,
                La Niña and the Pacific Decadal Oscillation) and external forcings (e.g., volcanic activity, changes in the Sun’s
                energy output, variations in Earth’s orbit).
            </p>

            <img className="data-image" srcSet={asset29} alt="temperature-data"/>

            <p className="para">
                Global warming is the long-term heating of Earth’s surface observed since the pre-industrial period
                (between 1850 and 1900) due to human activities, primarily fossil fuel burning, which increases heat-trapping
                greenhouse gas levels in Earth’s atmosphere. This term is not interchangeable with the term "climate change."
            </p>

            <p className="para">
                Since the pre-industrial period, human activities are estimated to have increased Earth’s global average temperature
                by about 1 degree Celsius (1.8 degrees Fahrenheit), a number that is currently increasing by more than 0.2 degrees
                Celsius (0.36 degrees Fahrenheit) per decade. The current warming trend is unequivocally the result of human activity
                since the 1950s and is proceeding at an unprecedented rate over millennia.
            </p>

            <img className="data-image" srcSet={asset30} alt="earth-warming"/>
        </div>
        <button className='home-btn'><a href='https://rohammaiti.github.io/Earth_guardians/'>Back to home</a></button>
    </div>
  );
}

export default App;
