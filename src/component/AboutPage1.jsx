import { FadeIn } from '@/ClientComponent/FadeIn';
import Image from 'next/image';

export default function AboutSection() {
    return (
        <div className="text-white bg-[#C0984B] py-24">

            <section className="flex flex-col items-center text-center">
                {/* Heading Animation */}
                <FadeIn delay={0.2}>
                    <p className="text-center text-black text-3xl font-bold mb-10 heading">About Us</p>
                    <h2 className="text-center text-white text-4xl font-bold mb-10 heading">
                        Crafting Timeless Memories Through Our Lens
                    </h2>
                </FadeIn>

                {/* Parent Flex Container (Half-Half Layout) */}
                <div className="container flex flex-col md:flex-row items-center sm:items-start px-4 z-10 gap-12">

                    {/* Image Section */}
                    <div className="w-full md:w-1/2">
                        <FadeIn delay={0.4}>
                            <Image
                                src="/images/11.jpg"
                                alt="Photography Studio"
                                width={500}
                                height={500}
                                className="h-[350px] md:h-[500px] object-cover object-top"
                            />
                        </FadeIn>
                    </div>

                    {/* Text Content Section */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <FadeIn delay={0.6}>
                            <h3 className="text-4xl mb-6 drop-shadow-lg">
                                <div className="text-white py-4">
                                    <span className="text-white heading text-4xl md:text-5xl">
                                        The reasons why you should choose our Studio
                                    </span>
                                </div>
                            </h3>
                            <p className="text-lg text-white leading-relaxed para">
                                At our studio, we don’t just capture images—we capture emotions, moments, and memories
                                that last a lifetime. With a passion for storytelling, we transform your special
                                occasions into timeless visuals, filled with warmth and authenticity.
                            </p>
                            <p className="mt-4 text-lg text-white leading-relaxed para">
                                Whether it's a grand wedding, a dreamy pre-wedding shoot, or a personalized portfolio,
                                we bring creativity, expertise, and a keen eye for detail to every frame. Let’s create
                                something extraordinary together!
                            </p>
                        </FadeIn>
                    </div>

                </div>
            </section>
        </div>
    );
}
