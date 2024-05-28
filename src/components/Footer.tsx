// import { AiOutlineInstagram } from "react-icons/ai"; 
// import { FaFacebookF } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";


function Footer () {
  return (
    <footer className="bg-lime-200 p-4 flex justify-center gap-4 text-lime-600">
      <a href="https://facebook.com">Facebook
        {/* <FaFacebookF size={20} className="text-gray-800"/> */}
      </a>
      <a href="https://twitter.com">Twitter
        {/* <FaXTwitter size={20} className="text-gray-800"/> */}
      </a>
      <a href="https://instagram.com">Instagram
        {/* <AiOutlineInstagram size={22} className="text-gray-800"/> */}
      </a>
    </footer>
  );
}

export default Footer;