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
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-soft" : "bg-white/80 backdrop-blur"
      }`}
    >
      {/* 
        Responsive Container: Adjusts heights dynamically. 
        h-16 for mobile, h-20 for tablet, h-24 for laptop, up to h-28 on massive screens.
      */}
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8 flex h-16 sm:h-20 lg:h-24 2xl:h-28 items-center justify-between gap-3 lg:gap-4">
        
        {/* Logo Area */}
        <Link to="/" className="flex items-center gap-2 md:gap-3 group shrink-0 min-w-0">
          <img
            src={logo}
            alt="Mission to Seafarers Logo"
            className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 2xl:h-24 w-auto shrink-0 object-contain rounded-md group-hover:scale-105 transition-transform"
          />
          <span className="flex flex-col leading-none justify-center min-w-0">
            <span className="text-[13px] sm:text-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] font-extrabold text-navy truncate md:whitespace-nowrap">
              Mission to Seafarers
            </span>
            <span className="text-[8px] sm:text-[10px] lg:text-[9px] xl:text-[11px] 2xl:text-[13px] font-bold uppercase tracking-[0.12em] sm:tracking-[0.18em] text-coral mt-0.5 truncate md:whitespace-nowrap">
              Newfoundland and Labrador
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-2">
          {nav.map((n) =>
            n.subItems ? (
              <div key={n.to} className="relative group">
                <NavLink
                  to={n.to}
                  className={({ isActive }) =>
                    `flex items-center gap-1 px-1.5 xl:px-3 py-2 text-[12px] xl:text-[14px] 2xl:text-base font-semibold whitespace-nowrap rounded-md transition-colors ${
                      isActive || location.pathname.includes(n.to)
                        ? "text-coral"
                        : "text-navy hover:text-coral"
                    }`
                  }
                >
                  {n.label}
                  <ChevronDown className="w-3.5 h-3.5 xl:w-4 xl:h-4 transition-transform group-hover:rotate-180" />
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
                          `block px-3 py-2 text-sm font-medium rounded-md transition-colors whitespace-normal ${
                            isActive
                              ? "bg-coral-pale text-coral"
                              : "text-text-mid hover:text-navy hover:bg-warm-gray"
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
                  `px-1.5 xl:px-3 py-2 text-[12px] xl:text-[14px] 2xl:text-base font-semibold whitespace-nowrap rounded-md transition-colors ${
                    isActive ? "text-coral" : "text-navy hover:text-coral"
                  }`
                }
              >
                {n.label}
              </NavLink>
            )
          )}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
          {/* Seafarer Parcel Pickup Service Button */}
          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-border bg-warm-gray text-navy hover:bg-navy hover:text-white font-bold whitespace-nowrap text-[11px] xl:text-sm px-2.5 xl:px-4"
          >
            <a
              href="https://parcelservice.mtsc.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Package className="w-3.5 h-3.5 xl:w-4 xl:h-4 mr-1.5 hidden xl:block" />
              {/* Expands to full text ONLY on xl screens and above */}
              <span className="hidden xl:inline">Seafarer Parcel Pickup Service</span>
              <span className="xl:hidden">Parcel Pickup</span>
            </a>
          </Button>

          {/* Large Orange Donate Button */}
          <Button
            onClick={() => setDonateDialogOpen(true)}
            size="lg"
            className="bg-coral hover:bg-coral-light text-white font-bold shadow-warm hover:shadow-warm-hover px-4 xl:px-6 text-sm xl:text-base whitespace-nowrap cursor-pointer"
          >
            Donate
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-1.5 sm:p-2 rounded-md text-navy hover:bg-warm-gray shrink-0"
        >
          {open ? <X className="h-6 w-6 sm:h-7 sm:w-7" /> : <Menu className="h-6 w-6 sm:h-7 sm:w-7" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {open && (
        <div className="absolute top-full left-0 w-full lg:hidden border-b border-border bg-white shadow-xl animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="max-h-[calc(100dvh-4rem)] sm:max-h-[calc(100dvh-5rem)] overflow-y-auto px-4 py-4 sm:px-6 flex flex-col gap-2">
            {nav.map((n) => (
              <div key={n.to} className="flex flex-col">
                {n.subItems ? (
                  <>
                    <button
                      onClick={() => toggleMobileAccordion(n.label)}
                      className={`px-3 py-3 text-base sm:text-lg font-semibold rounded-md flex items-center justify-between w-full text-left transition-colors ${
                        location.pathname.includes(n.to)
                          ? "bg-coral-pale text-coral"
                          : "text-navy hover:bg-warm-gray"
                      }`}
                    >
                      {n.label}
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          mobileExpanded === n.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        mobileExpanded === n.label ? "max-h-[400px] opacity-100 mt-1" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="flex flex-col gap-1 pl-4 border-l-2 border-warm-gray ml-3 mb-2">
                        {n.subItems.map((sub) => (
                          <NavLink
                            key={sub.to}
                            to={sub.to}
                            end={sub.to === "/newsletter"}
                            className={({ isActive }) =>
                              `px-3 py-2.5 text-sm sm:text-base font-medium rounded-md transition-colors ${
                                isActive
                                  ? "text-coral font-bold bg-coral-pale/50"
                                  : "text-text-mid hover:text-navy hover:bg-warm-gray"
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
                      `px-3 py-3 text-base sm:text-lg font-semibold rounded-md transition-colors ${
                        isActive ? "bg-coral-pale text-coral" : "text-navy hover:bg-warm-gray"
                      }`
                    }
                  >
                    {n.label}
                  </NavLink>
                )}
              </div>
            ))}

            {/* Mobile CTAs */}
            <div className="flex flex-col gap-3 pt-4 border-t border-border mt-2 pb-4">
              <Button
                asChild
                variant="outline"
                className="border-2 border-border bg-warm-gray text-navy font-bold w-full justify-start h-12 text-sm sm:text-base whitespace-normal text-left"
              >
                <a href="https://parcelservice.mtsc.ca/" target="_blank" rel="noopener noreferrer">
                  <Package className="w-5 h-5 mr-2 shrink-0" />
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
        {/* Adjusted Dialog Content for native mobile viewing */}
        <DialogContent className="w-[95vw] sm:w-full max-w-5xl h-[90dvh] sm:h-[95vh] p-0 overflow-hidden flex flex-col rounded-xl">
          <DialogHeader className="p-3 sm:p-4 pb-2 sm:pb-3 shrink-0 border-b">
            <DialogTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl font-extrabold text-navy">
              <Gift className="h-5 w-5 text-coral shrink-0" />
              Secure Donation Form
            </DialogTitle>
          </DialogHeader>
          <div className="flex-1 overflow-hidden p-1 sm:p-2 bg-muted/20">
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