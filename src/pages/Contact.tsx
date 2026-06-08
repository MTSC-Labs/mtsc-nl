import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send, Globe2, Facebook, Linkedin, Youtube } from "lucide-react";

// Using the About image as a temporary placeholder background 
// since you mentioned you don't have a specific Contact image yet.
import contactBg from "@/assets/contact-banner.jpg"; 

const interests = [
  "Seafarer support",
  "Volunteering",
  "Donating goods or services",
  "Local partnership",
  "Media inquiry",
  "Other",
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // This handles the iframe finishing its load (meaning Google received the data)
  const handleIframeLoad = () => {
    if (isSubmitting) {
      toast({
        title: "Thank You",
        description: "Your inquiry has been successfully sent. We will be in touch with you shortly.",
      });
      setIsSubmitting(false); // Reset submitting state
      if (formRef.current) {
        formRef.current.reset(); // Clear the form fields safely
      }
    }
  };

  return (
    <>
      {/* Hero Section - Matched to Navy Style */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-navy min-h-[45vh] flex items-center justify-center border-b border-navy-dark">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src={contactBg} 
            alt="Contact Background Placeholder" 
            className="w-full h-full object-cover object-center opacity-40 mix-blend-overlay" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy/60 to-transparent" />
        </div>
        
        {/* Hero Content */}
        <div className="container-page relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coral/20 text-coral-light text-xs font-extrabold uppercase tracking-widest border border-coral/30">
              <Mail className="w-4 h-4 text-coral-light" /> Contact Us
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            We want to hear from you!
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed font-medium">
            Whether it’s by email, social media, or LinkedIn — we want to hear from you!
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-page grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact info */}
          <div className="lg:col-span-5 space-y-5">
            <div className="rounded-2xl bg-gradient-hero text-white p-7 md:p-8 shadow-soft">
              <h2 className="text-2xl font-extrabold !text-white">Newfoundland and Labrador Station</h2>
              <p className="mt-2 text-white/85 text-sm">Need to contact our Newfoundland and Labrador station directly?</p>

              <ul className="mt-7 space-y-4 text-sm">
                <li className="flex gap-3.5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/15">
                    <MapPin className="h-4 w-4 text-coral-light" />
                  </span>
                  <span>
                    <span className="block text-white/60 text-[11px] uppercase font-bold tracking-widest">Address</span>
                    687 Water Street, 2nd Floor St.John's, NL A1E 1B5
                  </span>
                </li>
                <li className="flex gap-3.5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/15">
                    <MapPin className="h-4 w-4 text-coral-light" />
                  </span>
                  <span>
                    <span className="block text-white/60 text-[11px] uppercase font-bold tracking-widest">Visit Us / Mail</span>
                    P.O. Box 1432 Stn C. St Johns NL A1C 5N8
                  </span>
                </li>
                <li className="flex gap-3.5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/15">
                    <Mail className="h-4 w-4 text-coral-light" />
                  </span>
                  <span>
                    <span className="block text-white/60 text-[11px] uppercase font-bold tracking-widest">Email</span>
                    <a href="mailto:info@missiontoseafarersnl.ca" className="text-white hover:text-coral-light transition-colors underline">
                      info@missiontoseafarersnl.ca
                    </a>
                  </span>
                </li>
                <li className="flex gap-3.5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/15">
                    <Phone className="h-4 w-4 text-coral-light" />
                  </span>
                  <span>
                    <span className="block text-white/60 text-[11px] uppercase font-bold tracking-widest">Phone</span>
                    <a href="tel:+15145010590" className="text-white hover:text-coral-light transition-colors underline">
                      +1 514-501-0590
                    </a>
                  </span>
                </li>
                <li className="flex gap-3.5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/15">
                    <Clock className="h-4 w-4 text-coral-light" />
                  </span>
                  <span>
                    <span className="block text-white/60 text-[11px] uppercase font-bold tracking-widest">Hours</span>
                    Mon-Fri 9:00AM - 5:00PM
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-warm-gray p-2 overflow-hidden h-72 shadow-inner">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2690.244206463253!2d-52.69266400000001!3d47.601941000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0ca148b3fca06f%3A0xbca2e587c54ade57!2sSt.%20John&#39;s%2C%20NL%20A1A%205N8%2C%20Canada!5e0!3m2!1sen!2sus!4v1780885325679!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Form wrapper */}
          <div className="lg:col-span-7 rounded-2xl bg-warm-gray p-6 md:p-8 shadow-card space-y-5">
            <div className="flex items-center gap-2 mb-2">
              <Send className="h-6 w-6 text-coral" />
              <h2 className="text-xl md:text-3xl font-extrabold text-navy">Contact us</h2>
            </div>
            
            <p className="text-gray-600 font-medium leading-relaxed pb-4 border-b border-gray-200">
              Have questions about our services? Want to get involved or support our mission? We’re here to connect. We look forward to connecting with you!
            </p>

            {/* Hidden iframe triggers handleIframeLoad when Google Form finishes processing */}
            <iframe 
              name="hidden_iframe" 
              id="hidden_iframe" 
              style={{ display: 'none' }}
              onLoad={handleIframeLoad}
            ></iframe>

            <form 
              ref={formRef}
              className="space-y-5" 
              action="https://docs.google.com/forms/d/e/1FAIpQLSdDRLf8Fjde4Y-q1oUmoa_5JAbmAFp5TeG0RV3qjyVL3Aabhg/formResponse" 
              method="POST" 
              target="hidden_iframe"
              onSubmit={() => setIsSubmitting(true)}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="cname">Name *</Label>
                  <Input 
                    id="cname" 
                    name="entry.2050372848" 
                    required 
                    className="mt-1.5 bg-white text-navy font-medium" 
                  />
                </div>
                <div>
                  <Label htmlFor="cemail">Email *</Label>
                  <Input 
                    id="cemail" 
                    type="email" 
                    name="entry.608487628" 
                    required 
                    className="mt-1.5 bg-white text-navy font-medium" 
                  />
                </div>
                <div>
                  <Label htmlFor="cphone">Phone</Label>
                  <Input 
                    id="cphone" 
                    type="tel" 
                    name="entry.278774456" 
                    className="mt-1.5 bg-white text-navy font-medium" 
                  />
                </div>
                <div>
                  <Label htmlFor="cinterest">I am interested in... *</Label>
                  <select
                    id="cinterest"
                    name="entry.1990273286"
                    required
                    defaultValue=""
                    className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm font-medium text-navy"
                  >
                    <option value="" disabled>Select an option...</option>
                    {interests.map((i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="cmessage">Message *</Label>
                  <Textarea 
                    id="cmessage" 
                    name="entry.1454859148" 
                    required 
                    rows={5} 
                    className="mt-1.5 bg-white text-navy font-medium resize-none" 
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                disabled={isSubmitting}
                className="w-full bg-coral hover:bg-coral-light text-white font-bold shadow-warm h-12"
              >
                {isSubmitting ? "Sending..." : "Submit Inquiry"} <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
          
        </div>
      </section>

      {/* Global Ports Section */}
      <section className="py-20 bg-white border-t border-border">
        <div className="container-page max-w-4xl mx-auto text-center">
          <Globe2 className="w-12 h-12 text-coral mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">Our ports and Seafarers Centers</h2>
          <p className="text-lg text-text-mid mb-8 font-medium leading-relaxed max-w-2xl mx-auto">
            For information on the ports we serve or to reach a local Seafarers’ Centre, please visit our global port directory.
          </p>
          <Button asChild size="lg" className="bg-coral hover:bg-coral-light text-white font-bold h-14 px-8 text-lg shadow-warm">
            <a href="https://www.missiontoseafarers.org/our-ports" target="_blank" rel="noopener noreferrer">
              Global port directory
            </a>
          </Button>
        </div>
      </section>

      {/* Follow Us Section */}
     
    </>
  );
};

export default Contact;