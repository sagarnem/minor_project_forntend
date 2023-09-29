import React, { useState, useEffect } from 'react';
import './index.css';

const sliderContent = [
  {
    title: 'Secure file storage',
    description:
      'Store your files in a highly secure environment with advanced encryption technology.',
  },
  {
    title: 'Access Control',
    description:
      'Control who can access your files and folders with fine-grained permissions and management.',
  },
  {
    title: 'Collaboration',
    description:
      'Collaborate with your team by sharing files, commenting, and tracking changes in real-time.',
  },
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % sliderContent.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slider-container">
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(${-activeIndex * 100}%)` }}
      >
        {sliderContent.map((slide, index) => (
          <div className="slider" key={index}>
            <div><h1>{slide.title}</h1><br /></div>
            <div><p>{slide.description}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
