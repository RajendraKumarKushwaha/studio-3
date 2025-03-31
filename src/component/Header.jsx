"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { EnquiryButton } from "@/ClientComponent/EnquiryButton"
import { Home, Info, Camera, Briefcase, Image, Mail } from "lucide-react";


export default function HeaderPage1() {
    const pathname = usePathname()
    const isHome = pathname === "/"

    const [isOpen, setIsOpen] = useState(false)
    const [isGalleryOpen, setIsGalleryOpen] = useState(false)

    return (
        <header className={`w-full fixed top-0 left-0 z-1000 transition-all duration-300 
            ${isHome ? "bg-transparent text-white para" : "bg-white para text-black shadow-md "}`}>

            <div className={`container mx-auto flex items-center justify-between px-4 py-4 
                ${isHome ? "text-white" : "text-black"}`}>

                {/* Logo */}
                <h1 className={`text-2xl font-bold 
                    ${isHome ? "text-white" : "text-black"}`}>
                    📸 StudioName
                </h1>

                {/* Desktop Nav */}
                <div className="hidden lg:flex flex-1 justify-center gap-6 relative">
                    <Link href="/">Home</Link>
                    <Link href="/about-us">About Us</Link>
                    <Link href="/portfolio">Portfolio</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/gallery">Gallery</Link>

                    <Link href="/contact-us">Contact</Link>
                    <a
                        href="https://g.page/r/CQ_S4e81XFoMEAI/review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" transition"
                    >
                        Rate Us
                    </a>
                </div>

                {/* Desktop CTA Button */}
                <div className="hidden lg:flex">

                    <Link href="contact-us"><button className="px-4 text-white cursor-pointer bg-[#C0984B] py-2 text-bold transition">Enquiry Now</button></Link>

                </div>

                {/* Mobile Hamburger */}
                <button
                    className={`lg:hidden ${isHome ? "text-white" : "text-black"}`}
                    onClick={() => setIsOpen(true)}
                    aria-label="Open Menu"
                >
                    <Menu size={28} />
                </button>
            </div>

            {/* Slide-In Mobile Menu */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex items-center justify-between px-4 py-4 border-b">
                    <img src="https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/hero/logo.png" className="w-24" alt="logo" />
                    <button onClick={() => setIsOpen(false)} aria-label="Close Menu" className="text-[#C0984B]">
                        <X size={24} />
                    </button>
                </div>
                <nav className="flex flex-col gap-4 px-6 py-6 bg-white text-black">
                    <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                        <Home size={20} className="text-[#C0984B]"/> Home
                    </Link>
                    <Link href="/about-us" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                        <Info size={20} className="text-[#C0984B]"/> About Us
                    </Link>
                    <Link href="/portfolio" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                        <Camera size={20} className="text-[#C0984B]"/> Portfolio
                    </Link>
                    <Link href="/services" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                        <Briefcase size={20} className="text-[#C0984B]"/> Services
                    </Link>
                    <Link href="/gallery" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                        <Image size={20} className="text-[#C0984B]"/> Gallery
                    </Link>
                    <Link href="/contact-us" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                        <Mail size={20} className="text-[#C0984B]"/> Contact
                    </Link>
                </nav>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </header>
    )
}
