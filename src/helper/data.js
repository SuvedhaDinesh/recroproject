import {
  FaFacebook,
  FaTwitter,
  FaTelegram,
  FaWhatsapp,
  FaLinkedin
} from "react-icons/fa";

const linkMessage = `Please visit ${window.location.href}`;

export const AVAILABLE_ICONS = {
  whatsapp: {
    component: <FaWhatsapp style={{ color: "#25D366" }} />,
    link: `https://web.whatsapp.com?text=${linkMessage}`
  },
  facebook: {
    component: <FaFacebook style={{ color: "#3b5998" }} />,
    link: `https://facebook.com?text=${linkMessage}`
  },
  twitter: {
    component: <FaTwitter style={{ color: "#00acee" }} />,
    link: `https://twitter.com/intent/tweet?text=${linkMessage}`
  },
  telegram: {
    component: <FaTelegram style={{ color: "#0088cc" }} />,
    link: `https://telegram.com?text=${linkMessage}`
  },
  linkedin: {
    component: <FaLinkedin style={{ color: "#0077b5" }} />,
    link: `https://linkedin.com?text=${linkMessage}`
  }
};
