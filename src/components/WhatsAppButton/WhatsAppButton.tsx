import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "918000932933";
  const message = "Hello! I'm interested in your services.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 z-50 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppButton;
