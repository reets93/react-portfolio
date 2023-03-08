import React from 'react';
import { useState, useEffect } from "react";
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
<form className="form">
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
   type="text"
   placeholder="Write your message here"
   />
   <button className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
</form>
      </div>
   )
}

export default Contact