
import Squiggle from './Squiggle.js'
import './Projects.css'
import maze from './maze.webp'
import plane from './plane.jpeg'
import portfolio from './nature.jpeg'
import mosaics from './Mosaics.png'
import link from './link.jpeg'
import { FaGithub } from 'react-icons/fa';

function languages() {
  return (
    <div className='program'>
      <Squiggle/>
      <div className='program-text'>
        <div className='card-container'>
          <Card
          imgSrc= {plane}
          title = "OpenFlights Data Analysis"
          description="An analysis upon Airports and Airplane routes (C++)"
          link="https://github.com/RitulSoni/Open-Flights-Data-Project"
          />
          <Card
          imgSrc= {maze}
          title = "Labryinth Solver"
          description="Generating mazes and solving them (C++)"
          link="https://github.com/kazshah23/Labryinth-Solver"
          />
          <Card
          imgSrc= {portfolio}
          title = "Portfolio "
          description="This Portfolio! (React)"
          link="https://github.com/kazshah23/React-Portfolio-Website"
          />
           <Card
          imgSrc= {mosaics}
          title = "Mosaic Maker"
          description="Creating my own Mosaics images (C++)"
          link="https://github.com/kazshah23/Mosaic-Maker"
          />
          <Card
          imgSrc= {link}
          title = "Linked List Discovery"
          description="Working with Applications of Linked Lists (C++)"
          link="https://github.com/kazshah23/Linked-List-Discovery"
          />
          
          

        </div>
      
      </div>
    </div>
  );
}

function Card({ imgSrc, title, description, link }) {
  return (
    <div className="card">
      <img src={imgSrc} alt={description} />
      <p className="bold">{title}</p>  
      <p>{description}</p>
      <a href={link}> <FaGithub/>   Github</a>
    </div>
  );
}

export default languages;
