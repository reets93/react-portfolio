import React from 'react';
import { useState } from "react";
import './Contact.css'

function Contact() { // using and referring to code from class on 2nd March 
   const [form, setForm] = useState({ name: "", email: "", message: "" })

   const handleInputChange = event => {
      const { name, value } = event.target
      setForm({ ...form, [name]: value });
   }

   const handleFormSubmit = event => {
      event.preventDefault();

      alert(`Thanks for submitting a contact request ${form.name}. We'll get back to you soon!`)
      setForm({
         name: "",
         email: "",
         message: ""
      })

   }

   return (
      <section className="container">
         <h1 className="page-title"> Get in Touch </h1>
         <div className="row">
            <div className="col-6">
               <h4>Contact Me</h4>
               <h6>If you're interested in working together on a project, submit your contact details and I'll get back to you as soon as possible.</h6>
               <form className="form input-fields">
                  <input
                     value={form.name}
                     name="name"
                     onChange={handleInputChange}
                     type="text"
                     placeholder="Name"
                  />
                  <input
                     value={form.email}
                     name="email"
                     onChange={handleInputChange}
                     type="email"
                     placeholder="Email"
                  />
                  <input
                     value={form.message}
                     name="message"
                     onChange={handleInputChange}
                     type="paragraph"
                     placeholder="Write your message here"
                  />
                  <button className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
               </form>
            </div>

            <div className="col-6">
             <h4>Contact Details</h4>
             <a href="https://www.ritacarmencreative.com">Visit my website </a>
             <a href="mailto:hello@ritacarmencreative.com">hello@ritacarmencreative.com</a>

               <div className="socials">
                  <h4>Let's Connect</h4>
                  <h6>Connect with me on LinkedIn and GitHub to follow my work</h6>
                  <button className="btn btn-secondary" onClick={event => window.location.href = 'https://www.linkedin.com/in/ritafitchett/'}>LinkedIn</button>
                  <button className="btn btn-secondary" onClick={event => window.location.href = 'https://github.com/reets93'}>Github</button>
               </div>
            </div>
         </div>

      </section>
   )
}

export default Contact