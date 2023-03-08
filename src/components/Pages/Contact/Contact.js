import React from 'react';
import { useState } from "react";
import './Contact.css'
// import 'bootstrap/dist/css/bootstrap.min.css';


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
      <div>
         <h1> Get in Touch </h1>
<div className="container">         
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

<div className="socials">
   <h4>Let's Connect</h4>
   <h6>Connect with me on LinkedIn and GitHub to follow my work</h6>
   <button class="btn btn-secondary social-btn" onClick={event =>  window.location.href='https://www.linkedin.com/in/ritafitchett/'} className="btn btn-secondary">LinkedIn</button>
   <button class="btn btn-secondary social-btn" onClick={event =>  window.location.href='https://github.com/reets93'} className="btn btn-secondary">Github</button>

</div>
      </div>
   )
}

export default Contact