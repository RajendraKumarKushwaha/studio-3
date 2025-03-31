import { FadeIn } from "@/ClientComponent/FadeIn";
import Image from "next/image";

const teamMembers = [
    {
        name: "Alex Smith",
        role: "Founder & Lead Photographer",
        img: "https://www.mrfstudio.com/style/images/art/santhosh.jpg",
        description: "With over 10 years of experience, Alex brings creativity and passion to every photoshoot."
    },
    {
        name: "Sophia Lee",
        role: "Creative Director",
        img: "https://www.mrfstudio.com/style/images/art/yogesh.jpg",
        description: "Sophia ensures every project reflects artistic excellence and storytelling."
    },
    {
        name: "Daniel Brown",
        role: "Senior Photographer",
        img: "https://www.mrfstudio.com/style/images/art/madhu.jpg",
        description: "Specializing in wedding and event photography, Daniel captures emotions beautifully."
    }
];

export default function AboutDetails() {
    return (
        <section className="w-full bg-[#C0984B] text-white py-24">
            <FadeIn delay={0.2}>
                <p className="text-center text-black text-3xl font-bold mb-10 heading">About Us</p>
                <h2 className="text-center text-white text-2xl md:text-4xl font-bold mb-10 heading">
                    Crafting Timeless Memories Through Our Lens
                </h2>
            </FadeIn>

            <div className="container  mx-auto flex flex-col md:flex-row items-center sm:items-start px-4 z-10 gap-10">
                {/* About Image */}
                <div className="w-full md:w-1/2 flex-1">
                    <FadeIn delay={0.4}>
                        <Image
                            src="/images/11.jpg"
                            alt="Photography Studio"
                            width={500}
                            height={500}
                            className="h-[350px] md:h-[500px] object-cover object-top w-full"
                        />
                    </FadeIn>
                </div>

                {/* About Content */}
                <div className="w-full md:w-1/2 flex-1 space-y-6">
                    <FadeIn delay={0}>
                        <h2 className="text-2xl md:text-4xl heading font-bold leading-tight">
                            Capturing Your Most <span className="text-white">Cherished Moments</span>
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <p className="text-white text-lg para leading-relaxed">
                            At our studio, photography is more than just a profession—it’s a passion. We specialize in turning your most cherished moments into timeless visuals.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <p className="text-white para text-lg">
                            From wedding celebrations to artistic portraits, our approach blends creativity with technical mastery. Every frame tells a story, and we ensure yours is beautifully captured.
                        </p>
                    </FadeIn>
                </div>
            </div>


            {/* Team Section */}
            <div className="container px-4 mx-auto mt-20">
                <FadeIn delay={0.2}>
                    <h2 className="text-center text-black text-3xl font-bold mb-10 heading">Meet Our Team</h2>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-10 text-center">
                    {teamMembers.map((member, index) => (
                        <FadeIn key={index} delay={index * 0.2}>
                            <div className="bg-white text-black  p-6 shadow-lg">
                                <div className="w-full h-60 relative mb-4">
                                    <Image
                                        src={member.img}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-xl text-[#C0984B] heading font-bold">{member.name}</h3>
                                <p className="text-sm text-gray-600">{member.role}</p>
                                <p className="mt-3 para text-gray-800">{member.description}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>

            {/* Call to Action */}
            <FadeIn delay={0.4}>
                <div className="text-center mt-16">
                    <a
                        href="/portfolio"
                        className="inline-block bg-white text-[#C0984B] px-6 py-3 font-bold hover:bg-gray-100 transition"
                    >
                        View Our Portfolio
                    </a>
                </div>
            </FadeIn>
        </section>
    );
}