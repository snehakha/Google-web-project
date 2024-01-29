import React from 'react';
import './App.css';
import asset79 from './assets/asset79.jpeg'
import asset80 from './assets/asset80.jpeg'

function App() {
  return (
    <div className="App">
        <div className="body">

            <p className='header'><u>Solutions implemented</u></p>

            <p className="intro">
                Till now many solutions were implemented regarding this issue.
                People now have understood the importance of the climate change issue
                and are now embracing new technology for a healthy planet for a healthy
                living.
            </p>

            <div className="information-section">
                <div className="sectionheading">
                    <p><u>Renewable Energy Transition</u></p>
                </div>
                <div className="sectiondata">
                    <p>
                        Many countries were increasing their reliance on 
                        renewable energy sources like solar, wind, hydro, and 
                        geothermal power. Investments in renewable 
                        technologies and the development of smart grids were 
                        becoming more common.
                    </p>
                </div>
            </div>

            <div className="information-section">
                <div className="sectionheading">
                    <p><u>Energy Efficiency Measures</u></p>
                </div>
                <div className="sectiondata">
                    <p>
                        Industries, businesses, and individuals were 
                        implementing energy-efficient technologies and practices 
                        to reduce overall energy consumption, lower greenhouse 
                        gas emissions, and decrease dependence on fossil fuels.
                        This include setting up of solar panels, using filters in factories
                        making provisions to make out fuel from discarded waste if possible. 
                    </p>
                </div>
            </div>

            <div className="information-section">
                <div className="sectionheading">
                    <p><u>Carbon Pricing</u></p>
                </div>
                <div className="sectiondata">
                    <p>
                        Some regions and countries were implementing carbon 
                        pricing mechanisms, such as carbon taxes or 
                        cap-and-trade systems, to incentivize businesses and 
                        individuals to reduce their carbon footprint.
                    </p>
                </div>
            </div>

            <div className="information-section">
                <div className="sectionheading">
                    <p><u>Reforestation and Afforestation Projects</u></p>
                </div>
                <div className="sectiondata">
                    <p>
                        Governments, NGOs, and private entities were involved 
                        in projects focused on planting trees, restoring degraded 
                        ecosystems, and promoting sustainable land-use practices 
                        to sequester carbon and enhance biodiversity. 
                    </p>
                </div>
            </div>

            <div className="information-section">
                <div className="sectionheading">
                    <p><u>Climate Resilience Building</u></p>
                </div>
                <div className="sectiondata">
                    <p>
                        Many regions were investing in climate resilience 
                        measures, including the construction of resilient 
                        infrastructure, early warning systems for extreme 
                        weather events, and community-based adaptation 
                        projects.
                    </p>
                </div>
            </div>

            <div className="information-section">
                <div className="sectionheading">
                    <p><u>International Cooperation and Climate Finance</u></p>
                </div>
                <div className="sectiondata">
                    <p>
                        Countries were collaborating on climate action through 
                        international forums, and developed nations were 
                        providing financial support to developing countries for 
                        climate mitigation and adaptation projects.
                    </p>
                </div>
            </div>

            <div class="footer">
                <img src={asset79} alt="carbonpricing"/>
                <img src={asset80} alt="greenbuilding"/>
                <button className='home-btn'><a href='https://rohammaiti.github.io/Earth_guardians/'>Back to home</a></button>
            </div>

        </div>
        
    </div>
  );
}

export default App;
