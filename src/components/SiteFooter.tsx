import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Linkedin, Youtube } from "lucide-react";

import logo from "@/assets/logo.webp";

export const SiteFooter = () => {
  // Function to instantly scroll to the top when a link is clicked
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  return (
    <footer className="bg-navy-dark text-white/90">
      <div className="container-page py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        
        {/* Column 1: Logo, Mission Statement & Socials */}
        <div>
          <Link 
            to="/" 
            className="flex items-center gap-2.5 group"
            onClick={handleScrollToTop}
          >
            <img 
              src={logo} 
              alt="Mission to Seafarers Logo" 
              className="h-16 md:h-20 w-auto shrink-0 object-contain rounded-md group-hover:scale-105 transition-transform" 
            />
            <span className="flex flex-col leading-tight justify-center">
              <span className="text-[16px] md:text-[18px] font-extrabold text-white whitespace-nowrap">
                Mission to Seafarers
              </span>
              <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-coral-light mt-0.5 max-w-[180px]">
                Newfoundland and Labrador
              </span>
            </span>
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            Our mission is to serve seafarers with compassion, friendship, and vital support throughout their time in Newfoundland and Labrador
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4 mt-6">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-coral-light transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook-f</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-coral-light transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">Linkedin</span>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-coral-light transition-colors">
              <Youtube className="h-6 w-6" />
              <span className="sr-only">Youtube</span>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-sm font-extrabold uppercase tracking-wider text-coral-light mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {[
              ["Home", "/"],
              ["About us", "/about"],
              ["Support", "/support"],
              ["Get Involved", "/get-involved"],
              ["Contact us", "/contact"],
            ].map(([label, path]) => (
              <li key={path}>
                <Link 
                  to={path} 
                  className="hover:text-coral-light transition-colors"
                  onClick={handleScrollToTop}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Get in Touch (Location & Contact) */}
        <div>
          <h4 className="text-sm font-extrabold uppercase tracking-wider text-coral-light mb-4">Get in Touch</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-2.5">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-coral-light" />
              <span className="leading-relaxed">
                <span className="block font-semibold text-white mb-1">Location</span>
                687 Water Street, 2nd Floor<br />
                St. John’s, NL A1E 1B5
              </span>
            </li>
            <li className="flex gap-2.5">
              <Mail className="h-4 w-4 mt-0.5 shrink-0 text-coral-light" />
              <span>
                <span className="block font-semibold text-white mb-1">Email</span>
                <a href="mailto:Info@missiontoseafarersnl.ca" className="hover:text-coral-light transition-colors">
                  Info@missiontoseafarersnl.ca
                </a>
              </span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="h-4 w-4 mt-0.5 shrink-0 text-coral-light" />
              <span>
                <span className="block font-semibold text-white mb-1">Phone</span>
                <a href="tel:+15145010590" className="hover:text-coral-light transition-colors">
                  +1 514-501-0590
                </a>
              </span>
            </li>
          </ul>
        </div>

        {/* Column 4: Extra Block (Image Text & Org Name as provided) */}
        <div>
          <h4 className="text-sm font-extrabold uppercase tracking-wider text-coral-light mb-4">Mission To Seafarers Newfoundland and Labrador</h4>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-sm text-white/70 leading-relaxed">
             <p className="italic mb-4 text-xs">
               "Close-up of a hand holding a heart-shaped puzzle piece against a colorful background."
             </p>
             <Link 
               to="/contact" 
               onClick={handleScrollToTop}
               className="inline-block bg-coral-light text-navy-dark px-4 py-2 rounded-md font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors"
             >
               Get in Touch
             </Link>
          </div>
        </div>

      </div>

      {/* Footer Bottom: Copyright & Legal Links */}
      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Mission To Seafarers Newfoundland and Labrador. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-4 md:gap-6">
            <li>
              <Link to="/terms-conditions" onClick={handleScrollToTop} className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" onClick={handleScrollToTop} className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};