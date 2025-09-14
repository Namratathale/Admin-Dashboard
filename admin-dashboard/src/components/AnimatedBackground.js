import React from 'react';

const AnimatedBackground = () => {
  // Array of shape configurations for variety
  const shapes = [
    // Google Blue shapes
    { left: '10%', width: '120px', height: '120px', animationDelay: '2s', animationDuration: '35s', color: 'rgba(66, 133, 244, 0.4)' },
    { left: '85%', width: '150px', height: '150px', animationDelay: '7s', animationDuration: '32s', color: 'rgba(66, 133, 244, 0.5)' },

    // Google Red shapes
    { left: '5%', width: '150px', height: '150px', animationDelay: '0s', animationDuration: '28s', color: 'rgba(219, 68, 55, 0.4)' },
    { left: '90%', width: '100px', height: '100px', animationDelay: '4s', animationDuration: '40s', color: 'rgba(219, 68, 55, 0.3)' },

    // Google Green shapes
    { left: '20%', width: '130px', height: '130px', animationDelay: '1s', animationDuration: '30s', color: 'rgba(15, 157, 88, 0.4)' },
    { left: '70%', width: '160px', height: '160px', animationDelay: '12s', animationDuration: '38s', color: 'rgba(15, 157, 88, 0.5)' },
    
    // Google Yellow shapes
    { left: '40%', width: '140px', height: '140px', animationDelay: '5s', animationDuration: '36s', color: 'rgba(244, 180, 0, 0.4)' },
    { left: '60%', width: '110px', height: '110px', animationDelay: '9s', animationDuration: '33s', color: 'rgba(244, 180, 0, 0.5)' },
  ];

  return (
    <div className="background-shapes" aria-hidden="true">
      {shapes.map((shape, index) => (
        <div
          key={index}
          className="shape"
          style={{
            left: shape.left,
            width: shape.width,
            height: shape.height,
            animationDelay: shape.animationDelay,
            animationDuration: shape.animationDuration,
            backgroundColor: shape.color,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
