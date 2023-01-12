import React from 'react';
import './home.css'
import bird from './birdflying.gif'

function home() {
  return (
    <div className='homescreen'>
      <div className='border1'></div>
      <div className='border2'></div>
      <div className="lines-container" style={{ position: "absolute", top: 0, left: 0 }}>
            <div className="line" />
            <div className="line" />
            <div className="line" />
            <div className="line" />
            <div className="line" />
            <div className="line" />
            <div className="line" />
            <div className="line" />
            <div className="line" />
      </div>
      <div className="blob">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#FFE87C"
          d="M48.2,-68.9C58.5,-58.8,60.1,-39.5,62.5,-22.5C65,-5.6,68.2,8.8,67.1,24.7C65.9,40.7,60.5,58.2,48.6,65.3C36.7,72.4,18.3,69.1,-0.3,69.4C-18.9,69.8,-37.7,73.8,-53.5,68C-69.3,62.2,-82.1,46.5,-88.4,28.4C-94.7,10.3,-94.6,-10.2,-87,-26.7C-79.5,-43.2,-64.5,-55.6,-48.7,-63.9C-33,-72.2,-16.5,-76.3,1.2,-78C18.9,-79.7,37.9,-79,48.2,-68.9Z"
          transform="translate(100 100)"

        >
          <animate
            attributeName="d"
            dur="20000ms"
            repeatCount="indefinite"
            values="M42.9,-54.6C58,-48,74.5,-38.8,77.6,-26C80.6,-13.2,70.3,3.1,64,20.2C57.6,37.3,55.3,55,45.3,63.6C35.3,72.3,17.6,71.7,-0.6,72.6C-18.9,73.4,-37.7,75.7,-53.3,68.9C-68.8,62,-81,46.2,-83.6,29.2C-86.3,12.3,-79.5,-5.7,-72.6,-22.5C-65.6,-39.3,-58.4,-55,-46.3,-62.6C-34.2,-70.2,-17.1,-69.7,-1.6,-67.5C13.9,-65.3,27.7,-61.2,42.9,-54.6Z;
            M41.5,-61.2C51.4,-49.9,55.5,-34.6,60.7,-19.5C65.9,-4.4,72.4,10.6,71.2,25.8C69.9,41,61,56.4,47.9,68.2C34.7,80.1,17.4,88.6,2.5,85.2C-12.4,81.7,-24.8,66.5,-39.4,55.1C-54.1,43.7,-70.9,36.1,-76.2,23.8C-81.6,11.5,-75.4,-5.5,-69.1,-21.8C-62.9,-38.1,-56.6,-53.7,-45.1,-64.5C-33.6,-75.3,-16.8,-81.2,-0.5,-80.5C15.8,-79.8,31.6,-72.5,41.5,-61.2Z;
            M44.6,-62.5C57.5,-52.1,67.2,-38.6,72.4,-23.3C77.6,-8.1,78.3,8.8,74.1,24.8C69.8,40.7,60.6,55.7,47.5,68.1C34.3,80.4,17.1,90,-1.2,91.7C-19.6,93.4,-39.1,87.1,-50.4,74.1C-61.7,61.2,-64.7,41.6,-65.7,24.6C-66.7,7.6,-65.8,-6.7,-64,-23.4C-62.2,-40.2,-59.6,-59.2,-48.7,-70.2C-37.9,-81.2,-19,-84.1,-1.5,-82C15.9,-79.9,31.8,-72.8,44.6,-62.5Z;
            M50.7,-67.3C66.2,-58.6,79.6,-44.4,83.1,-28.3C86.7,-12.1,80.4,6,73.7,23.1C67,40.3,59.9,56.4,47.5,67.8C35.2,79.1,17.6,85.5,-0.9,86.8C-19.5,88.1,-39,84.3,-51.5,73C-64.1,61.8,-69.9,43.2,-70.3,26.4C-70.8,9.7,-66.1,-5.1,-61.3,-19.9C-56.5,-34.8,-51.6,-49.6,-41.4,-60C-31.2,-70.5,-15.6,-76.6,1,-78C17.6,-79.4,35.2,-76.1,50.7,-67.3Z;
            M41.5,-55.4C55.4,-47,69.4,-37.1,75.2,-23.4C81,-9.8,78.6,7.5,73.3,23.8C68,40.2,59.8,55.5,47.1,64.1C34.3,72.7,17.2,74.5,0.7,73.5C-15.7,72.5,-31.4,68.7,-46,60.7C-60.7,52.7,-74.3,40.6,-82,24.8C-89.7,8.9,-91.6,-10.7,-84.8,-26.3C-78.1,-41.9,-62.7,-53.5,-47.1,-61.3C-31.5,-69.1,-15.8,-73,-1,-71.7C13.8,-70.3,27.6,-63.7,41.5,-55.4Z;
            M45.9,-63C58.4,-54,66.9,-39.3,71.7,-23.5C76.6,-7.8,77.8,9,72.6,23.2C67.4,37.4,55.8,49.2,42.7,59.7C29.5,70.3,14.7,79.7,-0.4,80.2C-15.6,80.8,-31.1,72.5,-44.8,62.1C-58.5,51.7,-70.3,39.2,-77.1,23.7C-83.9,8.3,-85.7,-10.1,-81.5,-27.5C-77.2,-44.9,-66.9,-61.3,-52.3,-69.6C-37.7,-77.9,-18.8,-78.1,-1.1,-76.6C16.7,-75.1,33.3,-71.9,45.9,-63Z;
            M42.2,-56C56.8,-47.5,72.1,-38,76.4,-24.8C80.7,-11.6,74,5.1,66,18.9C58.1,32.7,48.8,43.5,37.6,54.5C26.3,65.5,13.2,76.7,-3,80.9C-19.2,85,-38.4,82.1,-52.4,72C-66.4,61.9,-75.2,44.6,-80.8,26.5C-86.4,8.3,-88.8,-10.6,-83.5,-27.2C-78.2,-43.8,-65.3,-58,-50.1,-66.2C-35,-74.5,-17.5,-76.8,-1.8,-74.3C13.8,-71.8,27.7,-64.4,42.2,-56Z;
            M45,-60.4C58.5,-52.2,69.7,-39.2,72.2,-25C74.7,-10.8,68.6,4.8,64.6,22.2C60.6,39.7,58.8,59,48.4,69.4C38,79.7,19,81.1,3.2,76.6C-12.6,72.2,-25.1,62.1,-37.4,52.3C-49.7,42.6,-61.7,33.3,-66.3,21.1C-70.9,8.9,-68.1,-6.2,-62.6,-19.4C-57,-32.7,-48.7,-44.1,-37.8,-53.2C-26.9,-62.2,-13.5,-68.8,1.2,-70.4C15.8,-72,31.5,-68.6,45,-60.4Z;
            
            M48.2,-68.9C58.5,-58.8,60.1,-39.5,62.5,-22.5C65,-5.6,68.2,8.8,67.1,24.7C65.9,40.7,60.5,58.2,48.6,65.3C36.7,72.4,18.3,69.1,-0.3,69.4C-18.9,69.8,-37.7,73.8,-53.5,68C-69.3,62.2,-82.1,46.5,-88.4,28.4C-94.7,10.3,-94.6,-10.2,-87,-26.7C-79.5,-43.2,-64.5,-55.6,-48.7,-63.9C-33,-72.2,-16.5,-76.3,1.2,-78C18.9,-79.7,37.9,-79,48.2,-68.9Z;
            ">
            
          </animate>
        
        </path>
        </svg>
      
      </div>
      <div className="blob blobglow">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#FFE87C"
          d="M48.2,-68.9C58.5,-58.8,60.1,-39.5,62.5,-22.5C65,-5.6,68.2,8.8,67.1,24.7C65.9,40.7,60.5,58.2,48.6,65.3C36.7,72.4,18.3,69.1,-0.3,69.4C-18.9,69.8,-37.7,73.8,-53.5,68C-69.3,62.2,-82.1,46.5,-88.4,28.4C-94.7,10.3,-94.6,-10.2,-87,-26.7C-79.5,-43.2,-64.5,-55.6,-48.7,-63.9C-33,-72.2,-16.5,-76.3,1.2,-78C18.9,-79.7,37.9,-79,48.2,-68.9Z"
          transform="translate(100 100)"

        >
          <animate
            attributeName="d"
            dur="20000ms"
            repeatCount="indefinite"
            values="M42.9,-54.6C58,-48,74.5,-38.8,77.6,-26C80.6,-13.2,70.3,3.1,64,20.2C57.6,37.3,55.3,55,45.3,63.6C35.3,72.3,17.6,71.7,-0.6,72.6C-18.9,73.4,-37.7,75.7,-53.3,68.9C-68.8,62,-81,46.2,-83.6,29.2C-86.3,12.3,-79.5,-5.7,-72.6,-22.5C-65.6,-39.3,-58.4,-55,-46.3,-62.6C-34.2,-70.2,-17.1,-69.7,-1.6,-67.5C13.9,-65.3,27.7,-61.2,42.9,-54.6Z;
            M41.5,-61.2C51.4,-49.9,55.5,-34.6,60.7,-19.5C65.9,-4.4,72.4,10.6,71.2,25.8C69.9,41,61,56.4,47.9,68.2C34.7,80.1,17.4,88.6,2.5,85.2C-12.4,81.7,-24.8,66.5,-39.4,55.1C-54.1,43.7,-70.9,36.1,-76.2,23.8C-81.6,11.5,-75.4,-5.5,-69.1,-21.8C-62.9,-38.1,-56.6,-53.7,-45.1,-64.5C-33.6,-75.3,-16.8,-81.2,-0.5,-80.5C15.8,-79.8,31.6,-72.5,41.5,-61.2Z;
            M44.6,-62.5C57.5,-52.1,67.2,-38.6,72.4,-23.3C77.6,-8.1,78.3,8.8,74.1,24.8C69.8,40.7,60.6,55.7,47.5,68.1C34.3,80.4,17.1,90,-1.2,91.7C-19.6,93.4,-39.1,87.1,-50.4,74.1C-61.7,61.2,-64.7,41.6,-65.7,24.6C-66.7,7.6,-65.8,-6.7,-64,-23.4C-62.2,-40.2,-59.6,-59.2,-48.7,-70.2C-37.9,-81.2,-19,-84.1,-1.5,-82C15.9,-79.9,31.8,-72.8,44.6,-62.5Z;
            M50.7,-67.3C66.2,-58.6,79.6,-44.4,83.1,-28.3C86.7,-12.1,80.4,6,73.7,23.1C67,40.3,59.9,56.4,47.5,67.8C35.2,79.1,17.6,85.5,-0.9,86.8C-19.5,88.1,-39,84.3,-51.5,73C-64.1,61.8,-69.9,43.2,-70.3,26.4C-70.8,9.7,-66.1,-5.1,-61.3,-19.9C-56.5,-34.8,-51.6,-49.6,-41.4,-60C-31.2,-70.5,-15.6,-76.6,1,-78C17.6,-79.4,35.2,-76.1,50.7,-67.3Z;
            M41.5,-55.4C55.4,-47,69.4,-37.1,75.2,-23.4C81,-9.8,78.6,7.5,73.3,23.8C68,40.2,59.8,55.5,47.1,64.1C34.3,72.7,17.2,74.5,0.7,73.5C-15.7,72.5,-31.4,68.7,-46,60.7C-60.7,52.7,-74.3,40.6,-82,24.8C-89.7,8.9,-91.6,-10.7,-84.8,-26.3C-78.1,-41.9,-62.7,-53.5,-47.1,-61.3C-31.5,-69.1,-15.8,-73,-1,-71.7C13.8,-70.3,27.6,-63.7,41.5,-55.4Z;
            M45.9,-63C58.4,-54,66.9,-39.3,71.7,-23.5C76.6,-7.8,77.8,9,72.6,23.2C67.4,37.4,55.8,49.2,42.7,59.7C29.5,70.3,14.7,79.7,-0.4,80.2C-15.6,80.8,-31.1,72.5,-44.8,62.1C-58.5,51.7,-70.3,39.2,-77.1,23.7C-83.9,8.3,-85.7,-10.1,-81.5,-27.5C-77.2,-44.9,-66.9,-61.3,-52.3,-69.6C-37.7,-77.9,-18.8,-78.1,-1.1,-76.6C16.7,-75.1,33.3,-71.9,45.9,-63Z;
            M42.2,-56C56.8,-47.5,72.1,-38,76.4,-24.8C80.7,-11.6,74,5.1,66,18.9C58.1,32.7,48.8,43.5,37.6,54.5C26.3,65.5,13.2,76.7,-3,80.9C-19.2,85,-38.4,82.1,-52.4,72C-66.4,61.9,-75.2,44.6,-80.8,26.5C-86.4,8.3,-88.8,-10.6,-83.5,-27.2C-78.2,-43.8,-65.3,-58,-50.1,-66.2C-35,-74.5,-17.5,-76.8,-1.8,-74.3C13.8,-71.8,27.7,-64.4,42.2,-56Z;
            M45,-60.4C58.5,-52.2,69.7,-39.2,72.2,-25C74.7,-10.8,68.6,4.8,64.6,22.2C60.6,39.7,58.8,59,48.4,69.4C38,79.7,19,81.1,3.2,76.6C-12.6,72.2,-25.1,62.1,-37.4,52.3C-49.7,42.6,-61.7,33.3,-66.3,21.1C-70.9,8.9,-68.1,-6.2,-62.6,-19.4C-57,-32.7,-48.7,-44.1,-37.8,-53.2C-26.9,-62.2,-13.5,-68.8,1.2,-70.4C15.8,-72,31.5,-68.6,45,-60.4Z;
            
            M48.2,-68.9C58.5,-58.8,60.1,-39.5,62.5,-22.5C65,-5.6,68.2,8.8,67.1,24.7C65.9,40.7,60.5,58.2,48.6,65.3C36.7,72.4,18.3,69.1,-0.3,69.4C-18.9,69.8,-37.7,73.8,-53.5,68C-69.3,62.2,-82.1,46.5,-88.4,28.4C-94.7,10.3,-94.6,-10.2,-87,-26.7C-79.5,-43.2,-64.5,-55.6,-48.7,-63.9C-33,-72.2,-16.5,-76.3,1.2,-78C18.9,-79.7,37.9,-79,48.2,-68.9Z;
            ">
            
          </animate>
        
        </path>
        </svg>
      </div>

      <div className='bird-container'>
      <img src={bird} alt="bird" className="bird bird1 " />
      <img src={bird} alt="bird" className="bird bird2 " />
      <img src={bird} alt="bird" className="bird bird3 " />
       </div>
      <h1 className='header1'>KAZMAIN SHAH</h1>
    </div>

  );
}
export default home;

 

    