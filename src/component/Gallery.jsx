// FlowGallerySSR (Server Component)

import FlowGalleryClient from "@/ClientComponent/PortfolioClient";


const images = [
  { src: "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/12.jpg", title: "Wedding Moments" },
  { src: "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/7.jpg", title: "Pre-Wedding Moments" },
  { src: "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/haldi/2.jpg", title: "Haldi Moments" },
  { src: "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/fashion/8.jpg", title: "Fashion Photography" },
  { src: "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/kids/1.jpg", title: "Kids Photography" },
  { src: "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/maternity/13.jpg", title: "Maternity Photography" },
];

export default function FlowGallerySSR() {
  return <FlowGalleryClient images={images} />;
}
