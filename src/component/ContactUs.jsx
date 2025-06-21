import { Mail, MapPin, Phone } from "lucide-react";
import { FadeIn } from "@/ClientComponent/FadeIn";
import ContactForm from "@/ClientComponent/ContactForm";

export default async function ContactUs() {
  return (
    <section className="bg-[#C0984B] py-24">
      <div className="container px-4 mx-auto text-center mb-10">
        <FadeIn delay={0.2}>
          <p className="text-center text-black text-3xl font-bold mb-10 heading">Have an Event?</p>
          <h2 className="text-center text-2xl md:text-3xl tracking-wider  mb-10 text-white heading">
            We'd love to hear from you! Reach out to us for any inquiries.
          </h2>
        </FadeIn>
      </div>

      <div className="container px-4 mx-auto grid md:grid-cols-3 gap-8 text-center mb-12">
        <div className="flex flex-col items-center">
          <MapPin className="text-black w-10 heading h-10 mb-3" />
          <p className="text-lg text-white para ">123, Studio Street, City, Country</p>
        </div>
        <div className="flex flex-col items-center">
          <Phone className="text-black w-10 h-10 mb-3" />
          <p className="text-lg text-white para ">+123 456 7890</p>
        </div>
        <div className="flex flex-col items-center">
          <Mail className="text-black w-10 h-10 mb-3" />
          <p className="text-lg text-white para">contact@studio.com</p>
        </div>
      </div>

      <div className="container px-4 mx-auto grid md:grid-cols-2 gap-10 items-start">
        <ContactForm />
        <div className="w-full h-[450px]">
          <iframe
            className="w-full h-full "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.6481355693036!2d81.28429671032292!3d24.532254978053817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39845b006310d08d%3A0x766fa01d53bee47c!2sTechYard%20Web%20Solutions!5e0!3m2!1sen!2sin!4v1750491292064!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
        </div>
      </div>
    </section>
  );
}
