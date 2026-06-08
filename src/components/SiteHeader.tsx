import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Menu, X, ChevronDown, Package, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import logo from "@/assets/logo.webp";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/support", label: "Seafarer Support" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/contact", label: "Contact" },
  // { to: "/events", label: "Events" },
];

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [donateDialogOpen, setDonateDialogOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu and reset accordion when route changes
  useEffect(() => {
    setOpen(false);
    setMobileExpanded(null);
  }, [location.pathname]);

  // Handle clicking outside of the header to close the mobile dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpen(false);
        setMobileExpanded(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMobileAccordion = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-soft" : "bg-white/80 backdrop-blur"
        }`}
    >
      {/* 
        UPDATED CONTAINER: 
        Replaced `container-page` with a custom wide container (`max-w-[1600px]`) 
        to ensure all buttons and nav items have enough room to sit on one line.
      */}
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8 flex h-20 items-center justify-between md:h-24 lg:h-28 gap-4">

        {/* Logo - Ensures text doesn't wrap using whitespace-nowrap */}
        {/* Logo - Ensures text doesn't wrap using whitespace-nowrap */}
        <Link to="/" className="flex items-center gap-2 lg:gap-3 group shrink-0">
          <img
            src={logo}
            alt="Mission to Seafarers Logo"
            className="h-20 md:h-20 lg:h-24 w-auto shrink-0 object-contain rounded-md group-hover:scale-105 transition-transform"
          />
          <span className="flex flex-col leading-none justify-center">
            <span className="text-[16px] lg:text-[15px] xl:text-[18px] font-extrabold text-navy whitespace-nowrap">Mission to Seafarers</span>
            <span className="text-[12px] lg:text-[11px] xl:text-[13px] font-bold uppercase tracking-[0.18em] text-coral mt-0.5 whitespace-nowrap">Newfoundland and Labrador</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-2">
          {nav.map((n) => (
            n.subItems ? (
              <div key={n.to} className="relative group">
                <NavLink
                  to={n.to}
                  className={({ isActive }) =>
                    `flex items-center gap-1 px-2 xl:px-3 py-2 text-[13px] xl:text-[15px] 2xl:text-base font-semibold whitespace-nowrap rounded-md transition-colors ${isActive || location.pathname.includes(n.to) ? "text-coral" : "text-navy hover:text-coral"
                    }`
                  }
                >
                  {n.label}
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </NavLink>

                {/* Desktop Dropdown Menu */}
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="w-56 bg-white rounded-xl shadow-card border border-border p-2 flex flex-col gap-1">
                    {n.subItems.map((sub) => (
                      <NavLink
                        key={sub.to}
                        to={sub.to}
                        end={sub.to === "/newsletter"}
                        className={({ isActive }) =>
                          `block px-3 py-2 text-sm font-medium rounded-md transition-colors whitespace-normal ${isActive ? "bg-coral-pale text-coral" : "text-text-mid hover:text-navy hover:bg-warm-gray"
                          }`
                        }
                      >
                        {sub.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  `px-2 xl:px-3 py-2 text-[13px] xl:text-[15px] 2xl:text-base font-semibold whitespace-nowrap rounded-md transition-colors ${isActive ? "text-coral" : "text-navy hover:text-coral"
                  }`
                }
              >
                {n.label}
              </NavLink>
            )
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
          {/* Seafarer Parcel Pickup Service Button */}
          <Button asChild variant="outline" size="sm" className="border-border bg-warm-gray text-navy hover:bg-navy hover:text-white font-bold whitespace-nowrap text-xs xl:text-sm px-3 xl:px-4">
            <a href="https://parcelservice.mtsc.ca/" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Package className="w-4 h-4 mr-1.5 hidden 2xl:block" />
              {/* Expands to full text ONLY on massive screens (2xl), otherwise stays short to save line space */}
              <span className="hidden 2xl:inline">Seafarer Parcel Pickup Service</span>
              <span className="2xl:hidden">Parcel Pickup</span>
            </a>
          </Button>

         

          {/* Large Orange Donate Button */}
          <Button
            onClick={() => setDonateDialogOpen(true)}
            size="lg"
            className="bg-coral hover:bg-coral-light text-white font-bold shadow-warm hover:shadow-warm-hover px-5 xl:px-6 text-sm xl:text-base whitespace-nowrap cursor-pointer"
          >
            Donate
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 rounded-md text-navy hover:bg-warm-gray shrink-0"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {open && (
        <div className="lg:hidden border-t border-border bg-white animate-in fade-in slide-in-from-top-4 duration-300 shadow-xl">
          <div className="container-page py-4 flex flex-col gap-2 max-h-[85vh] overflow-y-auto">
            {nav.map((n) => (
              <div key={n.to} className="flex flex-col">
                {n.subItems ? (
                  <>
                    <button
                      onClick={() => toggleMobileAccordion(n.label)}
                      className={`px-3 py-3 text-base font-semibold rounded-md flex items-center justify-between w-full text-left transition-colors ${location.pathname.includes(n.to) ? "bg-coral-pale text-coral" : "text-navy hover:bg-warm-gray"
                        }`}
                    >
                      {n.label}
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${mobileExpanded === n.label ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileExpanded === n.label ? "max-h-[400px] opacity-100 mt-1" : "max-h-0 opacity-0"
                        }`}
                    >
                      <div className="flex flex-col gap-1 pl-4 border-l-2 border-warm-gray ml-3 mb-2">
                        {n.subItems.map((sub) => (
                          <NavLink
                            key={sub.to}
                            to={sub.to}
                            end={sub.to === "/newsletter"}
                            className={({ isActive }) =>
                              `px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${isActive ? "text-coral font-bold bg-coral-pale/50" : "text-text-mid hover:text-navy hover:bg-warm-gray"
                              }`
                            }
                          >
                            {sub.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={n.to}
                    end={n.to === "/"}
                    className={({ isActive }) =>
                      `px-3 py-3 text-base font-semibold rounded-md transition-colors ${isActive ? "bg-coral-pale text-coral" : "text-navy hover:bg-warm-gray"
                      }`
                    }
                  >
                    {n.label}
                  </NavLink>
                )}
              </div>
            ))}

            {/* Mobile CTAs */}
            <div className="flex flex-col gap-3 pt-4 border-t border-border mt-2">
              <Button asChild variant="outline" className="border-2 border-border bg-warm-gray text-navy font-bold w-full justify-start h-12">
                <a href="https://parcelservice.mtsc.ca/" target="_blank" rel="noopener noreferrer">
                  <Package className="w-5 h-5 mr-2" />
                  Seafarer Parcel Pickup Service
                </a>
              </Button>
              
              <Button
                onClick={() => {
                  setDonateDialogOpen(true);
                  setOpen(false);
                }}
                className="bg-coral hover:bg-coral-light text-white font-extrabold w-full text-lg h-14"
              >
                Donate
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Donate Dialog Popup */}
      <Dialog open={donateDialogOpen} onOpenChange={setDonateDialogOpen}>
        <DialogContent className="max-w-5xl h-[95vh] p-0 overflow-hidden flex flex-col">
          <DialogHeader className="p-4 pb-3 shrink-0 border-b">
            <DialogTitle className="flex items-center gap-3 text-xl font-extrabold text-navy">
              <Gift className="h-5 w-5 text-coral" />
              Secure Donation Form
            </DialogTitle>
          </DialogHeader>
          <div className="flex-1 overflow-hidden p-2">
            <div className="w-full h-full bg-white rounded-lg border border-border overflow-hidden">
              <iframe
                src="https://www.canadahelps.org/en/dn/145961"
                title="CanadaHelps Secure Donation Form"
                className="w-full h-full border-none block bg-transparent"
                allow="payment"
              ></iframe>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
};