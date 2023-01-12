
import Squiggle from './Squiggle.js'
import './Languages.css'
import react from './Images/React.png'
import cpp from './Images/c++.png'
import java from './Images/java.png'
import javascript from './Images/Javascript.png'
import r from './Images/R.png'
import python from './Images/python.png'

function languages() {
  return (
    <div className='languages'>
      <Squiggle/>
      <div className='languages-text'>
        <div className='languages-box'>
          <div className='circlebox'>
            <div className='circle circle1'> <img src = {cpp}></img></div>
            <div className='circle circle2'> <img src = {java}></img></div>
            <div className='circle circle3'> <img src = {react}></img></div>
          </div>
          <div className='squarebox'>
            <div className='square square1'>
              <br/>
              • Coursework Experience of over two semesters where I created over 16 projects
              <br/>
              <br />
              • Learned debugging tools such as GDB and Valgrind
              <br/>
              <br/>
              • Learned how to build various data-storage strucutres and understand the advantages and disadvantages of each 
              <br/>
              <br/>
              • Able to apply Computer System Features such as computation, memory, storage, pointers, and references
            </div>
            <div className='square square2'>
            <br /> 
            • Coursework Project of creating a full functioning Android app which sorted through all restaurants in the Urbana-Champaign area by different categories
            <br /> 
            <br /> 
            • Experience with debugging and troubleshooting Java code.
            <br /> 
            <br /> 
            • Knowledge of Java libraries and frameworks, such as the Java Standard Library and popular third-party libraries like Apache Commons and Google Guava.
            <br /> 
            <br /> 
            • Proficiency with Java syntax and data types.
            </div>
            <div className='square square3'>
            <br /> 
            • Created a full functioning personal website which incorporated advanced styling techniques such as Parallax, CSS Grids, Flexbox, and Animations.
              <br /> 
              <br /> 
              • Experience with React, Redux, and React Router, Props, and State 
              <br /> 
              <br /> 
              • Experience with React component-based coding, including the creation and customization of reusable components for use across multiple projects. 
              <br /> 
              <br /> 
              • Demonstrated ability to troubleshoot and debug issues related to React components
            </div>
          </div>
          
        </div>

        <div className='languages-box'>
          <div className='circlebox'>
            <div className='circle circle1'> <img src = {python}></img></div>
            <div className='circle circle2'> <img src = {r}></img></div>
            <div className='circle circle3'> <img src = {javascript}></img></div>
          </div>
          <div className='squarebox'>
            <div className='square square1'>
            <br /> 
            • Coursework experience in a course titled 'Probability and Statistics in Computer Science'
            <br /> 
            <br /> 
            • Basic understadning of language syntax and data types, as well as fundamental concepts such as control structures and object-oriented programming.
            <br /> 
            <br /> 
            • Able to write and debug code in a Python environment, and comfortable working with and interpreting large datasets
            
            </div>
            <div className='square square2'>
            <br /> 
            • Coursework Project in a 400 level economics course. Worked with datasets regarding the impact on free Uber rides and how it affects transportation in popular cities.
            <br /> 
            <br /> 
            • Worked with R libraries of dplyr, haven, and psych
            <br /> 
            <br /> 
            • Worked intensly with data cleaning and generating tables of summary statistics and statistical balance 
            <br /> 
            <br /> 
            • Performed regressions to understand the relationship between variables
            </div>
            <div className='square square3'>
            <br /> 
            • Worked with game development by programming a full functioning game similar to the popular game 'Jetpack Joyride' 
            <br /> 
            <br /> 
            • Proficiency in writing clean, scalable, and maintainable code
            <br /> 
            <br /> 
            • Strong understanding of core language concepts and advanced features such as asynchronous programming and functional programming
            <br /> 
            <br /> 
            • Experience with popular libraries and frameworks such as React, Angular, and Vue.js
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}

export default languages;
