"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-lg p-6">
      <h3 className="text-2xl font-bold mb-6 text-[#C0984B] heading text-center">Get In Touch</h3>
      <div className="space-y-4">
        <input type="text" name="name" placeholder="Your Name" className="w-full para text-black p-3 border rounded" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" className="w-full para p-3 border rounded" onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Your Phone" className="w-full para p-3 border rounded" onChange={handleChange} required />
        <input type="text" name="subject" placeholder="Subject" className="w-full para p-3 border rounded" onChange={handleChange} required />
        <textarea name="message" rows="4" placeholder="Your Message" className="w-full para p-3 border rounded" onChange={handleChange} required></textarea>
      </div>
      <button type="submit" className="mt-6 w-full bg-[#C0984B] text-white py-3 hover:bg-[#a07938] transition">Send Message</button>
    </form>
  );
}
