import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#080010] py-20 px-[4%] mt-0 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-8">
            <a href="#" className="text-text-gray text-sm font-bold hover:text-white transition-colors">About Hotstar</a>
            <a href="#" className="text-text-gray text-sm font-bold hover:text-white transition-colors">Terms Of Use</a>
            <a href="#" className="text-text-gray text-sm font-bold hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-text-gray text-sm font-bold hover:text-white transition-colors">FAQ</a>
            <a href="#" className="text-text-gray text-sm font-bold hover:text-white transition-colors">Feedback</a>
            <a href="#" className="text-text-gray text-sm font-bold hover:text-white transition-colors">Careers</a>
          </div>
          <p className="text-text-gray text-xs max-w-xl leading-loose">
            © 2025 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex gap-4 items-center">
            <h4 className="text-white font-black text-sm uppercase tracking-widest mr-2">Connect with us</h4>
            <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-brand-purple cursor-pointer transition-all">
              <FaFacebookF />
            </div>
            <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-brand-purple cursor-pointer transition-all">
              <FaTwitter />
            </div>
            <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-brand-purple cursor-pointer transition-all">
              <FaInstagram />
            </div>
            <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-brand-purple cursor-pointer transition-all">
              <FaYoutube />
            </div>
          </div>
          
          <div className="flex gap-4 items-center">
            <h4 className="text-white font-black text-sm uppercase tracking-widest mr-2">Hotstar App</h4>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
              alt="app store" 
              className="h-10 cursor-pointer rounded-lg hover:scale-105 transition-transform"
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
              alt="play store" 
              className="h-10 cursor-pointer rounded-lg hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
