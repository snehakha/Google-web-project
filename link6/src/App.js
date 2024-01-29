import React from 'react';
import './App.css';
import asset75 from './assets/asset75.jpeg'
import asset76 from './assets/asset76.jpeg'
import asset77 from './assets/asset77.jpeg'
import asset78 from './assets/asset78.jpeg'

function App() {
  return (
    <div className="App">
      <div className="body">

            <p className='header'><u>Solutions underway for tackling climate changes</u></p>

            <p className="intro">
                As per latest updates till now, there 
                were various global efforts and initiatives underway to 
                address climate change. However, the specific details and 
                progress may have evolved since then. Here are some key 
                solutions and initiatives that were taken.
            </p>

            <div className="information-section">
                <div className="sectionheading">
                    <p><u>International Agreements</u></p>
                </div>
                <div className="sectiondata">
                    <p>
                        The Paris Agreement: Adopted in 2015, this international 
                        accord aims to limit global temperature rise to well below 
                        2 degrees Celsius above pre-industrial levels. Countries 
                        pledged to reduce their greenhouse gas emissions and 
                        regularly report on their progress.
                    </p>
                </div>
            </div>

            <div className="information-section">
                <div className="sectionheading">
                    <p><u>Renewable Energy Transition</u></p>
                </div>
                <div className="sectiondata">
                    <p>
                        Increased investment in and adoption of renewable 
                        energy sources, such as solar, wind, hydro, and 
                        geothermal power, to replace fossil fuels and reduce 
                        carbon emissions.
                    </p>
                </div>
            </div>

            <div className="information-section">
                <div className="sectionheading">
                    <p><u>Energy Efficiency</u></p>
                </div>
                <div className="sectiondata">
                    <p>
                        Implementation of energy-efficient technologies and 
                        practices in industries, transportation, and buildings to 
                        reduce overall energy consumption and lower emissions.
                    </p>
                </div>
            </div>

            <div className="information-section">
                <div className="sectionheading">
                    <p><u>Reforestation and Afforestation</u></p>
                </div>
                <div className="sectiondata">
                    <p>
                        Projects focused on planting trees and restoring forests 
                        to absorb CO2 from the atmosphere and enhance 
                        biodiversity.
                    </p>
                </div>
            </div>

            <div className="information-section">
                <div className="sectionheading">
                    <p><u>Carbon Capture and Storage (CCS)</u></p>
                </div>
                <div className="sectiondata">
                    <p>
                        Development and deployment of technologies to capture 
                        carbon dioxide emissions from industrial processes and 
                        power plants, followed by transportation and storage 
                        underground to prevent it from entering the atmosphere.
                    </p>
                </div>
            </div>

            <div className="information-section">
                <div className="sectionheading">
                    <p><u>Climate Finance</u></p>
                </div>
                <div className="sectiondata">
                    <p>
                        Mobilizing financial resources to support developing 
                        countries in their efforts to mitigate and adapt to climate 
                        change. This includes funds pledged by developed 
                        nations to assist developing nations in their climate 
                        actions.
                    </p>
                </div>
            </div>

            <div className="footer">
            <img srcSet={asset75} />
            <img srcSet={asset76} />
            <img srcSet={asset77} />
            <img srcSet={asset78} />
            <button className='home-btn'><a href='https://rohammaiti.github.io/Earth_guardians/'>Back to home</a></button>
            </div>

        </div>
    </div>
  );
}

export default App;
