
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className=" mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Environmental Message */}
        <div className="text-gray-600 text-sm">
          Our paper is sourced from FSC-certified mills. We plant enough trees to more than double our paper usage.
        </div>

        {/* Company Links */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-3">
              <li><a href="/about" className="text-gray-600 hover:text-gray-900">About us</a></li>
              <li><a href="/partner" className="text-gray-600 hover:text-gray-900">Partner program</a></li>
              <li><a href="/career" className="text-gray-600 hover:text-gray-900">Career</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-gray-900">Contact us</a></li>
              <li><a href="/privacy" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">RESOURCES</h3>
            <ul className="space-y-3">
              <li><a href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
              <li><a href="/reviews" className="text-gray-600 hover:text-gray-900">Reviews</a></li>
              <li><a href="/academy" className="text-gray-600 hover:text-gray-900">Direct Mail Academy</a></li>
              <li><a href="/stories" className="text-gray-600 hover:text-gray-900">Success stories</a></li>
              <li><a href="/terms" className="text-gray-600 hover:text-gray-900">Terms & conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-right">
          <h3 className="text-gray-900 font-semibold mb-4">CONTACT</h3>
          <a href="mailto:support@postpilot.com" className="text-gray-600 hover:text-gray-900">
            support@postpilot.com
          </a>
          <div className="mt-3 text-gray-600">
            Printed with <Heart className="w-4 h-4 inline text-red-500 mx-1" /> at our facility in South Carolina.
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 flex flex-col md:flex-row justify-between items-center border-t pt-8">
        <div className="flex items-center space-x-2">
          {/* Logo */}
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm text-gray-600">© 2024 Todos los derechos reservados</span>
        </div>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <button className="bg-pink-600 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded shadow-md">
            Login
          </button>

          <button className="bg-pink-600 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded shadow-md">

            Try it for free
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;