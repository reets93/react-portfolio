import React from 'react';
import { useState, useEffect } from "react";


function Contact() { // using and referring to code from class on 2nd March 
   const [form, setForm] = useState({name: "", email:"", message:""})

   const handleInputChange = event => {
      const {name, value } = event.target
      setForm({ ...form, [name]: value });
   }

   const handleFormSubmit = event => {
      event.preventDefault();

      alert(`Thanks for submitting a contact request ${form.name}. We'll get back to you soon!`)

      setForm({
         name: "".
         email: "",
         message: ""
      })

   }

   return (
      
   ) 
}

export default Contact