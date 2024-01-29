import React from 'react';
import './App.css';
import asset71 from './assets/asset71.png'
import asset72 from './assets/asset72.png'
import asset73 from './assets/asset73.jpeg'
import asset74 from './assets/asset74.jpeg'

function App() {
  return (
    <div className="App">

      <p className='header'><u>Proposed activities for climate change</u></p>

      <p className="intro">
        Due to extreme effects of climate change, the governments of various nations decided to tackle this challenge along with
        the global body, United Nations so that the coming generations don't have to face the consequences of the changing climate 
        which is becoming deadlier day by day. The solutions include the proposed solutions at global level which are taken up
        by the countries to tackle this challenge.
      </p>

      <div className="information-section">
                <div className="sectionheading">
                    <p><u>Shift to renewable energy</u></p>
                </div>
                <div className="sectiondata">
                    <p>
                        The United Nations identified a six-sector solution to 
                        climate change, focusing on actions that can be taken by 
                        the energy, industry, agriculture, transportation, 
                        nature-based solutions, and urban planning. If all of these 
                        actions are completed, the UN Environment Programme 
                        estimates we could reduce global carbon emissions by 29 
                        to 32 gigatonnes, thereby limiting the global 
                        temperature rise to 1.5º C. 
                        One key element of this plan is shifting to renewable 
                        energy sources, both at home and at work. “We have the 
                        necessary technology to make this reduction by shifting 
                        to renewable energy and using less energy,” the UNEP 
                        writes of our personal energy consumption (generally, 
                        fossil fuels power our homes, keeping the lights on, our 
                        rooms warm, and Netflix streaming). But the energy 
                        usage of the industrial sector also plays a key role: 
                        Addressing issues like methane leaks and switching at 
                        large scale to passive or renewable energy-based heating 
                        and cooling systems could reduce industrial carbon 
                        emissions by 7.3 gigatonnes every year.
                    </p>
                </div>
          </div>

          <div className="information-section">
                <div className="sectionheading">
                    <p><u>Halt deforestation and commit to rebuilding damaged ecosystems</u></p>
                </div>
                <div className="sectiondata">
                    <p>
                        The rapid deforestation of the Earth, especially over the 
                        last 60 years, has contributed to climate change, creating 
                        “heat islands” out of land that would normally be 
                        protected by trees and other flora from overheating. 
                        Simply put this to stop. There are actions each of us 
                        can take as individuals to help halt this—going paperless 
                        and buying recycled paper products, planting trees or 
                        supporting organizations that do this (like Concern), and 
                        recycling. 
                        But change has to happen at a larger scale here. Illegal 
                        logging happens everywhere. 
                        Last year, world leaders committed to halting this and 
                        other harmful practices by 2030 as part of COP26. You 
                        can help by holding your own elected leaders to account.
                    </p>
                </div>
          </div>

          <div className="information-section">
                <div className="sectionheading">
                    <p><u>Subsidize low-carbon alternatives for urban planning</u></p>
                </div>
                <div className="sectiondata">
                    <p>
                        In tandem with low-carbon alternatives for public 
                        transportation, governments need to commit to similar 
                        measures with our growing cities. New buildings mean a 
                        new opportunity to reward green design methods that 
                        help to decrease the strain on urban resources, whether 
                        they’re apartments or entertainment venues. By 2030, many
                        nations have kept a target to erradicate the use of fossil fuels
                        in transportation sector and replace it with electric powered 
                        vehicles. We can also encourage the use of solar panels to generate
                        electricity. In this way neither the carbon emission is reduced but 
                        also the strain on resources is also lowered to some extent.
                    </p>
                </div>
          </div>
            
          <div className="information-section">
                <div className="sectionheading">
                    <p><u>Invest in disaster risk reduction (DRR)</u></p>
                </div>
                <div className="sectiondata">
                    <p>
                        Disaster Risk Reduction (otherwise known as DRR) 
                        protects the lives and livelihoods of communities and 
                        individuals who are most vulnerable to disasters or 
                        emergencies. Whether the crisis is caused by nature or 
                        humans (or a combination of both), DRR limits its 
                        negative impact on those who stand to lose the most. 
                        We can’t undo much of climate change’s impact so far, 
                        but we can help the communities who are hit hardest by 
                        these impacts to prepare for and respond to these 
                        emergencies once they strike. For example in case of 
                        cyclones, the costal areas get flooded due to which the
                        livelihoods of the fishermen and other small business is
                        damaged severly.Similarly during droughts, the livelihoods
                        of the famrer gets affected. Governments should take necessary
                        measures to tackle with these affected people.
                    </p>
                </div>
          </div>

          <div className="information-section">
                <div className="sectionheading">
                    <p><u>Guarantee these changes in the long-term via policy reform</u></p>
                </div>
                <div className="sectiondata">
                    <p>
                        Few of the solutions listed above are not sustainable 
                        without policy reform. You can help by encouraging your 
                        elected officials to consider the above points, and to 
                        support bills that incorporate one or more of these 
                        solutions to climate change, many of which are currently 
                        being written and shared at the local and national levels. 
                        Smart climate policy will prioritize people over 
                        corporations, consider the framework of climate justice — 
                        including land and water rights of indigenous peoples 
                        and rural communities, address the intersectional effects 
                        of climate change on hunger, poverty, and gender 
                        equality, and enforce regulatory frameworks and 
                        standards that commit people and institutions to 
                        honoring these new standards. Bold and aggressive 
                        action must be taken if we’re to reach the goal of not 
                        exceeding 1.5º C and mitigating the current effects of 
                        climate change by 2030. But it’s not a lost cause yet. It’s 
                        on all of us to now support those actions that are needed 
                        most.
                    </p>
                </div>
        </div>

        <div className='footer'>
          <img srcSet={asset71} />
          <img srcSet={asset72} />
          <img srcSet={asset73} />
          <img srcSet={asset74} />
          <button className='home-btn'><a href='https://rohammaiti.github.io/Earth_guardians/'>Back to home</a></button>
        </div>

    </div>
  );
}

export default App;
