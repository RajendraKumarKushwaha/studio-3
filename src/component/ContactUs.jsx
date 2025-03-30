"use client";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactUs() {
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
    <section className="bg-[#C0984B] py-24">
      <div className="container px-4 mx-auto text-center mb-10">
        <h2 className="text-4xl heading font-bold">Have an Event?</h2>
        <p className="text-lg text-white para mt-2">
          We'd love to hear from you! Reach out to us for any inquiries.
        </p>
      </div>

      <div className="container px-4 mx-auto grid md:grid-cols-3 gap-8 text-center mb-12">
        <div className="flex flex-col items-center">
          <MapPin className="text-black w-10 heading h-10 mb-3" />
          <p className="text-lg text-white para font-semibold">123, Studio Street, City, Country</p>
        </div>
        <div className="flex flex-col items-center">
          <Phone className="text-black w-10 h-10 mb-3" />
          <p className="text-lg text-white para font-semibold">+123 456 7890</p>
        </div>
        <div className="flex flex-col items-center">
          <Mail className="text-black w-10 h-10 mb-3" />
          <p className="text-lg text-white para font-semibold">contact@studio.com</p>
        </div>
      </div>

      <div className="container px-4 mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white shadow-lg p-6 ">
          <h3 className="text-2xl font-bold mb-6 text-[#C0984B] heading text-center">Get In Touch</h3>
          <div className="space-y-4">
            <input type="text" name="name" placeholder="Your Name" className="w-full para text-black p-3 border rounded" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" className="w-full para p-3 border rounded" onChange={handleChange} required />
            <input type="text" name="phone" placeholder="Your Phone" className="w-full para p-3 border rounded" onChange={handleChange} required />
            <input type="text" name="subject" placeholder="Subject" className="w-full para p-3 border rounded" onChange={handleChange} required />
            <textarea name="message" rows="4" placeholder="Your Message" className="w-full para p-3 border rounded" onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="mt-6 w-full bg-[#C0984B] text-white py-3  hover:bg-[#a07938] transition">Send Message</button>
        </form>

        {/* Google Map */}
        <div className="w-full h-[450px]">
          <iframe
            className="w-full h-full "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093757!2d144.95373531550472!3d-37.81720974202185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4520d9e5d1%3A0x5d3cd47b569ba0e!2sPhotography%20Studio!5e0!3m2!1sen!2sus!4v1633069624563!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
