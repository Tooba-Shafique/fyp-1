import { FaInstagram, FaLinkedin, FaYoutube, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-sky-100 to-sky-300 py-12 text-black py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Left Section (Logo) */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl font-semibold">Cognicare</h2>
           
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-12 text-sm">
            <div>
              <h3 className="font-semibold mb-2">About Us</h3>
              <ul className="space-y-1 text-gray-800">
                <li><a href="#">Mission</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Newsletter</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Support</h3>
              <ul className="space-y-1 text-gray-800">
                <li><a href="#">Contact</a></li>
                <li><a href="#">Refund Policy</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Social</h3>
              <div className="flex space-x-3 text-xl">
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaLinkedin /></a>
                <a href="#"><FaYoutube /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-400 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-700">
          <p>Copyright © Cognicare</p>
          <p>Terms of Service</p>
          <a href="#" className="flex items-center">
            Back to top <FaArrowUp className="ml-1" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
