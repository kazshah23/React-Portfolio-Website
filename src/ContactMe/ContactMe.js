
import Squiggle from './Squiggle.js'
import { useForm, ValidationError } from '@formspree/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import resume from './resume.pdf'

import './ContactMe.css'

function ContactMe() {
  return (
    <div className='contactme'>
      <Squiggle/>
      <div className='contactme-text'>
        <ContactForm/>
      </div>
    </div>
  );
}

function ContactForm() {
  const [state, handleSubmit] = useForm("mvonozwe");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Send me a Message!
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder = "Your Email here"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder = "Your Message here"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
      <div className='links'>
        <a href="https://www.linkedin.com/in/kaz-shah-a57447231/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/kazshah23">
          <FaGithub />
        </a>
        <a href="mailto: kshah228@illinois.edu">
          <FaEnvelope />
        </a>
        <a href= {resume} download>Download my Resume</a>
      </div>
    </form>
  );
}

export default ContactMe;
