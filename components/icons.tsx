// Imagens
import slogan from "@/public/img/slogan.png"

// Next
import Image from "next/image";

// Bibliotecas
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export const Logo = () => (
  <main className="w-full flex py-2 items-center justify-center text-center space-x-3">
    <Image
      priority
      src={slogan}
      alt="Slogan"
      className="w-8 sm:w-12"
    />
    <div className="w-full ">
      <p className="font-bold text-white text-[20px]">PortecSafe</p>
    </div>
  </main>
);

export const FacebookIcon = ({ size = 24, ...props }) => (
  <FaFacebook size={size} color="#1877F2" {...props} />
);

export const InstagramIcon = ({ size = 24, ...props }) => (
  <FaInstagram size={size} color="#E4405F" {...props} />
);

export const WhatsappIcon = ({ size = 24, ...props }) => (
  <FaWhatsapp size={size} color="#25D366" {...props} />
);

