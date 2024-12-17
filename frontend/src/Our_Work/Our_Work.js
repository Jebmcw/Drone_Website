import React from 'react';
import './Our_Work.css';

const Our_Work = () => {
  // Array of placeholder data for the work sections
  const workData = [
    {
      title: 'Project 1',
      description: 'Aerial drone footage showcasing beautiful landscapes and natural scenes.',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Placeholder video URL
    },
    {
      title: 'Project 2',
      description: 'Drone footage capturing urban environments and architecture.',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
    },
    {
      title: 'Project 3',
      description: 'Detailed drone shots used for real estate promotion and marketing.',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
      title: 'Project 4',
      description: 'High-quality drone footage for events and gatherings.',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
    },
    {
      title: 'Project 5',
      description: 'Professional drone cinematography for commercials and promotions.',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
  ];

  return (
    <div className="our-work-container">
      <h1 className="our-work-title">Our Work</h1>
      {workData.map((work, index) => (
        <div className="work-box" key={index}>
          {/* Video Section */}
          <div className="video-box">
            <video width="100%" height="100%" controls>
              <source src={work.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Description Section */}
          <div className="description-box">
            <h2>{work.title}</h2>
            <p>{work.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Our_Work;
