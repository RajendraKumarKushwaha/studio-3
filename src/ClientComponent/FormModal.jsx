'use client';

import { X } from "lucide-react";

export function FormModal({ open, setOpen }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
      <div className="bg-zinc-900 text-white rounded-xl shadow-xl w-full max-w-lg mx-4 p-8 relative">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-gray-300 hover:text-white"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-semibold mb-6 text-center text-pink-500">
          Send an Enquiry
        </h2>

        <form  className="bg-white shadow-lg p-8 rounded-lg w-full">
          <h3 className="text-2xl font-bold mb-6 text-[#C0984B] heading text-center">Get In Touch</h3>
          <div className="space-y-4">
            <input type="text" name="name" placeholder="Your Name" className="w-full para text-black p-3 border rounded"  required />
            <input type="email" name="email" placeholder="Your Email" className="w-full para p-3 border rounded"  required />
            <input type="text" name="phone" placeholder="Your Phone" className="w-full para p-3 border rounded" required />
            <input type="text" name="subject" placeholder="Subject" className="w-full para p-3 border rounded"  required />
            <textarea name="message" rows="4" placeholder="Your Message" className="w-full para p-3 border rounded"  required></textarea>
          </div>
          <button type="submit" className="mt-6 w-full bg-[#C0984B] text-white py-3 rounded hover:bg-[#a07938] transition">Send Message</button>
        </form>
      </div>
    </div>
  );
}
