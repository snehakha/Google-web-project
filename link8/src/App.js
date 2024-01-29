import React from 'react';
import './App.css';
import asset81 from './assets/asset81.jpeg'
import asset82 from './assets/asset82.jpeg'
import asset83 from './assets/asset83.jpeg'
import asset84 from './assets/asset84.jpeg'

function App() {
  return (
    <div className="App">
        <div className="body">

            <p className='header'><u>Ongoing activities</u></p>

            <p className="intro">
                There are many ongoing activities on this challenge like
                international agreements of newer policies and technologies.
                It also includes investing heavily on research purpose and
                maintaining of current schemes and technology on climate change.
                Actions are also being taken up by people at local and community
                level to keep their area clean and contribute as much as they can.
                We will see some of the activities that are going now.
            </p>

            <div className="information-section">
                <div className="sectionheading">
                    <p><u>National Climate Action Plans</u></p>
                </div>
                <div className="sectiondata">
                    <p>
                        Many countries were updating and implementing their 
                        Nationally Determined Contributions (NDCs) under the 
                        Paris Agreement, outlining their commitments to 
                        reducing greenhouse gas emissions and adapting to 
                        climate change.
                    </p>
                </div>
            </div>

            <div className="information-section">
                <div className="sectionheading">
                    <p><u>Renewable Energy Expansion</u></p>
                </div>
                <div className="sectiondata">
                    <p>
                        Countries continued to invest in and deploy renewable 
                        energy technologies, such as solar and wind power, to 
                        transition away from fossil fuels and reduce carbon 
                        emissions.
                    </p>
                </div>
            </div>

            <div className="information-section">
                <div className="sectionheading">
                    <p><u>Carbon Neutrality Pledges</u></p>
                </div>
                <div className="sectiondata">
                    <p>
                        Several countries and companies made commitments to 
                        achieve carbon neutrality by a certain date, often 
                        through a combination of emissions reductions, 
                        renewable energy adoption, and offsetting measures.
                    </p>
                </div>
            </div>

            <div className="information-section">
                <div className="sectionheading">
                    <p><u>Nature-Based Solutions</u></p>
                </div>
                <div className="sectiondata">
                    <p>
                        Ongoing efforts focused on nature-based solutions, 
                        including reforestation, afforestation, and sustainable 
                        land management practices, to sequester carbon and 
                        protect biodiversity. 
                    </p>
                </div>
            </div>

            <div className="information-section">
                <div className="sectionheading">
                    <p><u>Youth and Civil Society Activism</u></p>
                </div>
                <div className="sectiondata">
                    <p>
                    Climate activists, particularly youth-led movements, 
                    continued to raise awareness about the urgency of 
                    climate action through protests, advocacy, and 
                    education.
                    </p>
                </div>
            </div>

            <div className="information-section">
                <div className="sectionheading">
                    <p><u>Emission Reduction Regulations</u></p>
                </div>
                <div className="sectiondata">
                    <p>
                        Governments were introducing and strengthening 
                        regulations to limit emissions from various sectors, 
                        including transportation, industry, and energy 
                        production.
                    </p>
                </div>
            </div>

            <div class="imagecontainer">
                <img src={asset81} alt="solarpanel-windmill"/>
                <img src={asset82} alt="carbon-neutral"/>
                <img src={asset83} alt="group-participation"/>
                <img src={asset84} alt="nature-based-solution"/>
            </div>

        </div>
        <button className='home-btn'><a href='https://rohammaiti.github.io/Earth_guardians/'>Back to home</a></button>
    </div>
  );
}

export default App;
