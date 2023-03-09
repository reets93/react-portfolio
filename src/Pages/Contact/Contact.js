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
      <section className="container contact">
         <h1 className="page-title"> Get in Touch </h1>
         <p>If you're interested in working together on a project, submit your contact details and I'll get back to you as soon as possible.
            You can contact me directly on <a href="mailto:hello@ritacarmencreative.com">hello@ritacarmencreative.com</a> or via my <a href="https://www.ritacarmencreative.com">website</a></p>
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
            <textarea
               value={form.message}
               name="message"
               onChange={handleInputChange}
               type="text-field"
               placeholder="Write your message here"
            />
            <button className="btn btn-primary contact-submit" onClick={handleFormSubmit}>Submit</button>
         </form>

      </section>

   )
}

export default Contact