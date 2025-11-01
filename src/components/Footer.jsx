import React from "react";
import { Link } from "react-router";
import logo from "/images/greennest-logo.png";
import { FaPinterest } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-base-100 text-base-content w-full">
      <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-4 p-8 md:p-10">
        <aside className="flex flex-col items-start gap-4 flex-1">
          <img src={logo} alt="GreenNest" className="w-[50px] h-auto" />
          <p className="text-lg md:text-base font-medium">
            <span className="text-xl font-bold">GreenNest</span>
            
            <br />
            Indoor plant care and store
          </p>
        </aside>

        <nav className="flex-1">
          <h6 className="font-bold text-lg mb-3">Explore</h6>
          <div className="flex flex-col gap-2">
            <Link to="/plants" className="hover:underline transition">Plants</Link>
            <Link to="/care-tips" className="hover:underline transition">Care Tips</Link>
            <Link to="/experts" className="hover:underline transition">Experts</Link>
            <Link to="/eco-decor" className="hover:underline transition">Eco Decor Ideas</Link>
          </div>
        </nav>

        <nav className="flex-1">
          <h6 className="font-bold text-lg mb-3">Company</h6>
          <div className="flex flex-col gap-2">
            <Link to="/about" className="hover:underline transition">About us</Link>
            <Link to="/contact" className="hover:underline transition">Contact</Link>
            <Link to="/careers" className="hover:underline transition">Careers</Link>
            <Link to="/press" className="hover:underline transition">Press kit</Link>
          </div>
        </nav>

        <nav className="flex-1">
          <h6 className="font-bold text-lg mb-3">Legal</h6>
          <div className="flex flex-col gap-2">
            <Link to="/terms" className="hover:underline transition">Terms of use</Link>
            <Link to="/privacy" className="hover:underline transition">Privacy policy</Link>
            <Link to="/cookies" className="hover:underline transition">Cookie policy</Link>
          </div>
        </nav>

        <nav className="flex-1">
          <h6 className="font-bold text-lg mb-3">Social</h6>
          <div className="flex gap-4">
            <a href="https://x.com/Bijoy00001" className="hover:opacity-80 transition" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a href="https://www.youtube.com/@bijoychandraroy" className="hover:opacity-80 transition" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a href="https://www.facebook.com/bijoychandraroy001/" className="hover:opacity-80 transition" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
            <a href="https://www.instagram.com/bijoy_chandra_roy/" target="_blank" className="hover:opacity-80 transition">
              <FaSquareInstagram size={24} />
            </a>
            <a href="https://www.pinterest.com/bijoychandraroyjr001" target="_blank" className="hover:opacity-80 transition">
              <FaPinterest size={24} />
            </a>
          </div>
        </nav>

        <div className="flex-1">
          <h6 className="font-bold text-lg mb-3">Newsletter</h6>
          <div className="flex flex-col gap-2">
            <label className="text-sm">Enter your email address</label>
            <div className="flex flex-col lg:flex-row gap-2">
              <input type="email" placeholder="username@site.com" className="input input-bordered flex-1 w-full py-2 placeholder-black" />
              <button className="btn btn-primary hover:bg-green-600 transition">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-8">
        <hr className="border-gray-400"/>
        <p className="pt-4">Copyright © 2025 GreenNest. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
