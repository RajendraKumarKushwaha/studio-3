import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white para py-12 pt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-xl text-[#C0984B]  heading mb-4">Studio name</h2>
            <p className="text-black-300">We craft stunning websites that drive results. Let&apos;s build something amazing together.</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h2 className="text-xl text-[#C0984B] heading mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-[#C0984B]">About Us</Link></li>
              <li><Link href="/services" className="hover:text-[#C0984B]">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-[#C0984B]">Portfolio</Link></li>
              <li><Link href="/contact-us" className="hover:text-[#C0984B]">Contact</Link></li>
            </ul>
          </div>
          
          {/* Contact Section */}
          <div>
            <h2 className="text-xl text-[#C0984B] heading mb-4">Contact Us</h2>
            <p className="text-black-300">Email: info@techyardweb.com</p>
            <p className="text-black-300">Phone: +91 91796 44717</p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-[#C0984B] hover:text-[#C0984B]"><FaFacebookF /></Link>
              <Link href="#" className="text-[#C0984B] hover:text-[#C0984B]"><FaTwitter /></Link>
              <Link href="#" className="text-[#C0984B] hover:text-[#C0984B]"><FaInstagram /></Link>
              <Link href="#" className="text-[#C0984B] hover:text-[#C0984B]"><FaLinkedinIn /></Link>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-black-300">© {new Date().getFullYear()} <span className="text-[#C0984B]">TechYard Web Solutions</span>. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
