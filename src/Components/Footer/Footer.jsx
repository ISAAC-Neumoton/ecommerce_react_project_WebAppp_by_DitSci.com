import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-12">
      {/* Newsletter signup */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h4 className="text-xl font-semibold mb-2 text-white">
          Join our Newsletter
        </h4>
        <p className="mb-4">
          Get 10% off your first order and be the first to know about new arrivals!
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Your email address"
            className="w-2/3 md:w-1/3 px-4 py-2 rounded-l-md focus:outline-none text-gray-900"
          />
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 rounded-r-md">
            Subscribe
          </button>
        </div>
      </div>

      {/* Links and contact */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div>
          <h5 className="font-semibold text-white mb-4">Shop</h5>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Men
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Women
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Kids
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Sale
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold text-white mb-4">Customer Service</h5>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Shipping
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Track Order
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold text-white mb-4">Company</h5>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Press
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold text-white mb-4">Contact</h5>
          <p className="space-y-1">
            <span>123 Main Street, Anytown</span><br />
            <span>support@yourstore.com</span><br />
            <span>+1 (555) 123-4567</span>
          </p>
        </div>
      </div>

      {/* Social & payments */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between border-t border-gray-700 pt-6">
        {/* social icons */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
            <a key={i} href="#" className="hover:text-white">
              <Icon size={20} />
            </a>
          ))}
        </div>

        {/* payment logos (you’d swap in actual images) */}
        <div className="flex space-x-4">
          <img src="/images/visa.svg" alt="Visa" className="h-6" />
          <img src="/images/mastercard.svg" alt="Mastercard" className="h-6" />
          <img src="/images/paypal.svg" alt="PayPal" className="h-6" />
        </div>
      </div>

      {/* copyright */}
      <div className="text-center text-sm text-gray-500 mt-6">
        © {new Date().getFullYear()} YourStore, Inc. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer;