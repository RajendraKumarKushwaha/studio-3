"use client"
import { useState } from "react";
import Masonry from "react-masonry-css";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const galleryData = [
    {
        title: "Wedding Photography", images: [
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/10.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/12.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/17.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/20.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/5.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/55.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/49.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/43.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/46.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/40.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/42.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/44.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/54.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/58.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/59.jpg"
        ]
    },
    {
        title: "Pre-Wedding Photography", images: [
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/7.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/8.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/9.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/51.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/52.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/48.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/49.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/50.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/4.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/19.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/20.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/16.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/17.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/18.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/11.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/13.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/12.jpg"
        ]
    },
    {
        title: "Haldi Photography", images: [
            'https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/haldi/2.jpg',
            'https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/haldi/3.jpg',
            'https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/haldi/4.jpg',
            'https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/haldi/5.jpg',
            'https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/haldi/6.jpg',
            'https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/haldi/7.jpg',
            'https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/haldi/8.jpg',
            'https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/haldi/9.jpg',
            'https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/haldi/10.jpg'
        ]
    },
    {
        title: "Fashion Photography", images: [
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/fashion/1.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/fashion/2.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/fashion/5.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/fashion/8.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/fashion/3.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/fashion/4.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/fashion/6.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/fashion/7.jpg"
        ]
    },
    {
        title: "Maternity Photography", images: [
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/maternity/13.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/maternity/15.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/maternity/16.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/maternity/17.jpg"
        ]
    },
    {
        title: "Kids Photography", images: [
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/kids/1.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/kids/4.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/kids/2.jpg",
            "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/kids/5.jpg"
        ]
    }
];

export default function MasonryGallery() {
    const [activeCategory, setActiveCategory] = useState(galleryData[0].title);
    const [lightbox, setLightbox] = useState({ isOpen: false, index: 0 });

    const selectedGallery = galleryData.find((cat) => cat.title === activeCategory);

    return (
        <div className="bg-white">
        <div className="container mx-auto  px-4 py-24">
            <p className="text-center text-black text-3xl font-bold mb-10 heading">Gallery</p>
            <h2 className="text-center text-4xl font-bold mb-10 text-[#C0984B] heading">
                Cherished Moments
            </h2>
            <div className="flex gap-4 justify-center mb-6 flex-wrap">
                {galleryData.map((category) => (
                    <button
                        key={category.title}
                        className={`px-4 py-2  text-[#C0984B] heading cursor-pointer transition-all ${activeCategory === category.title ? "bg-[#C0984B] heading text-white" : "border border-[#C0984B] "
                            }`}
                        onClick={() => setActiveCategory(category.title)}
                    >
                        {category.title}
                    </button>
                ))}
            </div>
            <Masonry
                breakpointCols={{ default: 3, 1024: 3, 640: 2 }}
                className="flex gap-2"
                columnClassName="masonry-column"
            >
                {selectedGallery.images.map((src, idx) => (
                    <div key={idx} className="mb-2 overflow-hidden border  cursor-pointer" onClick={() => setLightbox({ isOpen: true, index: idx })}>
                        <Image src={src} alt="Gallery Image" width={400} height={300} className="w-full h-auto object-cover" />
                        
                    </div>

                ))}
            </Masonry>
            {lightbox.isOpen && (
                <div className="fixed top-18 inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
                    <button className="absolute  top-4 right-6 text-white text-3xl" onClick={() => setLightbox({ isOpen: false, index: 0 })}>
                        <X size={32} />
                    </button>
                    <button className="absolute cursor-pointer left-4 text-white text-3xl" disabled={lightbox.index === 0} onClick={() => setLightbox({ isOpen: true, index: lightbox.index - 1 })}>
                        <ChevronLeft size={40} />
                    </button>
                    <Image src={selectedGallery.images[lightbox.index]} alt="Fullscreen Image" width={800} height={600} className="max-w-[90vw] max-h-[90vh] object-contain" />
                    <button className="absolute cursor-pointer right-4 text-white text-3xl" disabled={lightbox.index === selectedGallery.images.length - 1} onClick={() => setLightbox({ isOpen: true, index: lightbox.index + 1 })}>
                        <ChevronRight size={40} />
                    </button>
                </div>
            )}
        </div>
        </div>
    );
}