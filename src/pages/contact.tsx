import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import { FaPhone, FaEnvelope, FaInstagram, FaFacebook, FaTiktok, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="mt-[2%]">
      <div className="text-center mb-12">
        <h1 className="text-[23px] sm:text-[35px] md:text-[40px] font-semibold font-arial leading-snug tracking-tight text-gray-900">
          Contact
        </h1>
        <div className="w-13 h-1 bg-yellow-500 mx-auto mt-3 rounded-full"></div>
      </div>

      <div className="flex flex-col lg:flex-row justify-evenly m-4">
        {/* Contact Form Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 mb-8 lg:mb-0">
          <div>
            <Label htmlFor="email">Name</Label>
            <Input
              id="name"
              type="text"
              className="bg-gray-100 h-11 border-none mt-4 focus:outline-none focus:ring-0 focus:border-transparent rounded-none"
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email"
              type="email"
              className="bg-gray-100 h-11 border-none mt-4 focus:outline-none focus:ring-0 focus:border-transparent rounded-none" />
          </div>
          <div>
            <Label htmlFor="email">Phone Number</Label>
            <Input id="email"
              type="number"
              className="bg-gray-100 h-11 border-none mt-4 focus:outline-none focus:ring-0 focus:border-transparent rounded-none" />
          </div>
          <div>
            <Label htmlFor="email">Message</Label>
            <textarea
              className="bg-gray-100 border-none mt-4 p-2 h-48 resize-none focus:outline-none focus:ring-0 focus:border-transparent rounded-none w-full"
            ></textarea>
          </div>
          <Button className="bg-black h-11 text-white rounded-none cursor-pointer">Submit</Button>
        </div>

        {/* Contact Information Section */}

        <div className="flex flex-col gap-6 w-full lg:w-1/3">
          <div className="text-gray-700">
            <div className="flex items-center gap-4 mt-4">
              <FaPhone className="text-xl text-gray-900 rotate-90" />
              <div>
                <p className="text-sm">+123 456 7890</p>
                <p className="text-sm">+987 654 3210</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <FaEnvelope className="text-2xl text-gray-900" />
              <p className="text-sm">contact@abimeljewelry.com</p>
            </div>
            <div className="flex gap-4 mt-6">
              <div className="w-8 h-8 bg-black flex items-center justify-center ">
                <FaInstagram className="text-white " />
              </div>
              <div className="w-8 h-8 bg-black flex items-center justify-center">
                <FaFacebook className="text-white" />
              </div>
              <div className="w-8 h-8 bg-black flex items-center justify-center ">
                <FaTiktok className="text-white" />
              </div>
              <div className="w-8 h-8 bg-black flex items-center justify-center ">
                <FaTwitter className="text-white" />
              </div>
            </div>
          </div>
          {/* Google Map Section */}
          <div className="w-full h-92 bg-gray-200 relative">
            <iframe
              className="absolute top-0 left-0 w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              src="https://maps.google.com/maps?q=abimel+jewelry&output=embed"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;