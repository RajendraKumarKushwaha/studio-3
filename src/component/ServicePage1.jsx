import { FadeIn } from "@/ClientComponent/FadeIn";

const services = [
    { bgImage: "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/58.jpg", title: "Wedding Photography" },
    { bgImage: "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/7.jpg", title: "Pre-Wedding Shoots" },
    { bgImage: "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/9.jpg", title: "Candid Shoots" },
    { bgImage: "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/8.jpg", title: "Cinematic Shoot" },
    { bgImage: "/images/event.jpg", title: "Event Shoot" },
    { bgImage: "/images/drone.jpg", title: "Drone/LED Screen" }
  ];

export default function ServicesPage1() {
  return (
    <div className="text-[#f28b00] py-24">
      <FadeIn delay={0.2}>
        <p className="text-center text-black text-3xl font-bold mb-10 heading">Our Services</p>
        <h2 className="text-center text-[#C0984B] text-4xl font-bold mb-10 heading">
        Professional Photography for Every Special Occasion
        </h2>
      </FadeIn>

      <div className="container px-4 mx-auto mb-10">
        <FadeIn delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map(({ bgImage, title }, index) => (
              <div
                key={index}
                className="relative flex items-center justify-center text-center bg-cover bg-center h-[300px] shadow-lg"
                style={{ backgroundImage: `url(${bgImage})` }}
              >
                <div className="absolute inset-4 border border-gray-200 hover:border-white p-1 flex items-center justify-center">
                  <div className="w-full h-full border border-gray-200 hover:border-white flex items-center justify-center px-4 py-2 bg-opacity-50">
                    <h3 className="text-2xl font-semibold text-white">{title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
