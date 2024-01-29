import React from 'react';
import { useState } from 'react';
import './App.css';
import asset31 from './assets/asset31.jpg'
import asset32 from './assets/asset32.jpg';
import asset33 from './assets/asset33.jpg';
import asset34 from './assets/asset34.jpg';
import asset35 from './assets/asset35.jpg';
import asset36 from './assets/asset36.jpg';
import asset37 from './assets/asset37.jpg';
import asset38 from './assets/asset38.jpg';
import asset39 from './assets/asset39.jpg';
import asset40 from './assets/asset40.jpg';
import asset41 from './assets/asset41.jpg';
import asset42 from './assets/asset42.jpg';
import asset43 from './assets/asset43.jpg';
import asset44 from './assets/asset44.jpg';
import asset45 from './assets/asset45.jpg';
import asset46 from './assets/asset46.jpg';
import asset47 from './assets/asset47.jpg';
import asset48 from './assets/asset48.jpg';
import asset49 from './assets/asset49.jpg';
import asset50 from './assets/asset50.jpg';
import asset51 from './assets/asset51.jpg';
import asset52 from './assets/asset52.jpg';
import asset53 from './assets/asset53.jpg';
import asset54 from './assets/asset54.jpg';
import asset55 from './assets/asset55.jpg';
import asset56 from './assets/asset56.jpg';
import asset57 from './assets/asset57.jpg';
import asset58 from './assets/asset58.jpg';
import asset59 from './assets/asset59.jpg';
import asset60 from './assets/asset60.jpg';
import asset61 from './assets/asset61.jpg';
import asset62 from './assets/asset62.jpg';
import asset63 from './assets/asset63.jpg';
import asset64 from './assets/asset64.jpg';
import asset65 from './assets/asset65.jpg';
import asset66 from './assets/asset66.jpg';
import asset67 from './assets/asset67.jpg';
import asset68 from './assets/asset68.jpg';
import asset69 from './assets/asset69.jpg';
import asset70 from './assets/asset70.jpg';



function App() {
  const images = [
    { url: asset31, text: 'Vatnajökull National Park, Iceland' },
    { url: asset32, text: 'Lucerne, Switzerland' },
    { url: asset33, text: 'Blue Ridge Parkway, North Carolina and Virginia' },
    { url: asset34, text: 'Pulau Tioman, Malaysia' },
    { url: asset35, text: 'Damaraland, Namibia' },
    { url: asset36, text: 'Cirque de Gavarnie, France' },
    { url: asset37, text: 'Shark Bay, Australia' },
    { url: asset38, text: 'Lofoten Islands, Norway' },
    { url: asset39, text: 'Los Cabos, Mexico' },
    { url: asset40, text: 'Dal Lake, India' },
    { url: asset41, text: 'Great Barrier Reef, Australia' },
    { url: asset42, text: 'Wulingyuan Scenic Area, China' },
    { url: asset43, text: 'Banff National Park, Canada' },
    { url: asset44, text: 'Wadi Rum Reserve, Jordan' },
    { url: asset45, text: 'Serengeti National Park, Tanzania' },
    { url: asset46, text: 'Fernando de Noronha, Brazil' },
    { url: asset47, text: 'The Algarve, Portugal' },
    { url: asset48, text: 'Mount Kilimanjaro, Tanzania' },
    { url: asset49, text: 'Mount Fuji, Japan' },
    { url: asset50, text: 'Li River, China' },
    { url: asset51, text: 'Iguazu Falls, Argentina' },
    { url: asset52, text: 'Mauna Loa(Hawaii)' },
    { url: asset53, text: 'Milford Sound, New Zealand' },
    { url: asset54, text: 'Venice(Italy)' },
    { url: asset55, text: 'Patagonia Argentina' },
    { url: asset56, text: 'SALAR DE UYUNI, BOLIVIA' },
    { url: asset57, text: 'Lake Como, Italy' },
    { url: asset58, text: 'Crater Lake National Park, Oregon' },
    { url: asset59, text: 'Volcanoes National Park, Rwanda' },
    { url: asset60, text: 'Blue Lagooon(Ice land)' },
    { url: asset61, text: 'MACHU PICCHU, PERU' },
    { url: asset62, text: 'ZHANGJIAJIE NATIONAL FOREST PARK, CHINA' },
    { url: asset63, text: 'Torres del Paine National Park, Chile' },
    { url: asset64, text: 'THE GRAND CANYON, USA' },
    { url: asset65, text: 'THE GREAT BARRIER REEF, AUSTRALIA' },
    { url: asset66, text: 'YELLOWSTONE NATIONAL PARK, USA' },
    { url: asset67, text: 'THE CLIFFS OF MOHER, IRELAND' },
    { url: asset68, text: 'PANJIN RED BEACH, CHINA' },
    { url: asset69, text: 'BALI, INDONESIA' },
    { url: asset70, text: 'THE GALAPAGOS ISLANDS, ECUADOR' },
  ];
  
  
      const imagesPerPage=5
      const imagesToShowInitially = 10;;
      const [visibleImages, setVisibleImages] = useState(images.slice(0, imagesToShowInitially));
      
      const showMoreImages = () => {
          const currentlyVisible = visibleImages.length;
          const nextBatch = images.slice(currentlyVisible, currentlyVisible + imagesPerPage);
          setVisibleImages((prevImages) => [...prevImages, ...nextBatch]);
      }

      return(
        <div className="body">
          <p className='header'>
            <u><h2>Welcome to our Earth Gallery</h2></u>
          </p>
          <p className="intro">
            Embark on a visual journey through our awe-inspiring Image Gallery
            showcasing the breathtaking beauty of our planet Earth. Immerse yourself in a 
            collection of stunning photographs capturing the diverse landscapes, vibrant ecosystems,
            and mesmerizing natural wonders that make our home truly extraordinary. From majestic
            mountains and serene oceans to lush forests and captivating wildlife, each image invites
            you to appreciate the intricate tapestry of Earth's beauty. Join us in celebrating the
            wonders of our planet and be inspired by the enchanting scenes that highlight the harmony
            and magnificence of nature."

          </p>
          <div className="gallery-container">
            {visibleImages.map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image.url} alt={`Image ${index + 1}`} className="gallery-image" />
                <p className="image-text">{image.text}</p>
              </div>
            ))}
          </div>
          {visibleImages.length < images.length && (
            <button onClick={showMoreImages} className="show-more-btn">
              Show More
            </button>
          )}

          <button className="home-btn"><a href='https://rohammaiti.github.io/Earth_guardians/'>Go back to homepage</a></button>
        </div>
        
  ) 
}

export default App;
