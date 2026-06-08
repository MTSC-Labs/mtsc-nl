import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import {
  Heart, Briefcase, Users, DollarSign, HandHeart, CheckCircle2, X, Gift, Mail
} from "lucide-react";

// Image import for the Hero Background & Maritime Design
import getInvolvedBg from "@/assets/GetInvoled.avif";
import maritimeImage from "@/assets/GTimagemaritime.jpg";

// ==========================================
// FORM COMPONENTS
// ==========================================

interface FormProps {
  onClose: () => void;
}

const CorporateSponsorForm = ({ onClose }: FormProps) => {
  const [form, setForm] = useState({ 
    orgName: "", firstName: "", lastName: "", email: "", phone: "", 
    address: "", city: "", interests: [] as string[], level: "", 
    whyPartner: "", howHeard: "", howHeardOther: "" 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const interestOptions = [
    'Financial Sponsorship', 
    'In-Kind Donation (products/services)', 
    'Volunteering as a Corporate Team',
    'Hosting Fundraising Events', 
    'Other'
  ];

  const levelOptions = [
    'Anchor Sponsor ($25,000+)',
    'Lighthouse Sponsor ($10,000–$24,999)',
    'Compass Sponsor ($5,000–$9,999)',
    'Crew Sponsor ($1,000–$4,999)',
    'Not Sure Yet'
  ];

  const heardOptions = [
    'Word of Mouth', 'Social Media', 'News/Media', 'Referred by Employee/Volunteer', 'Other'
  ];

  const handleCheckboxChange = (interest: string) => {
    setForm(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock API submission since actual Google Form endpoints for these new fields are unknown
    setTimeout(() => {
      toast({ title: "Inquiry Submitted", description: "Thank you for reaching out! Our partnerships team will be in touch soon." });
      onClose();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="relative rounded-2xl bg-white p-6 md:p-8 shadow-card space-y-5 animate-in fade-in slide-in-from-bottom-4">
      <button type="button" onClick={onClose} className="absolute top-6 right-6 text-text-mid hover:text-navy transition-colors"><X size={24} /></button>

      <div className="flex items-center gap-2 mb-2 pr-8">
        <Briefcase className="h-6 w-6 text-coral" />
        <h3 className="text-2xl font-extrabold text-navy">Become a Corporate Sponsor</h3>
      </div>
      <p className="text-sm text-text-mid mb-4">
        Partner with us for lasting impact. Fill out the inquiry form below.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2"><Label>Organization Name *</Label><Input required value={form.orgName} onChange={e => setForm({ ...form, orgName: e.target.value })} className="mt-1.5 bg-warm-gray" /></div>
        
        <div className="sm:col-span-2 mt-2"><Label className="font-bold text-navy">Contact Person Full Name *</Label></div>
        <div><Label>First Name *</Label><Input required value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} className="mt-1.5 bg-warm-gray" /></div>
        <div><Label>Last Name *</Label><Input required value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} className="mt-1.5 bg-warm-gray" /></div>
        
        <div><Label>Email Address *</Label><Input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="mt-1.5 bg-warm-gray" /></div>
        <div><Label>Phone Number</Label><Input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="mt-1.5 bg-warm-gray" /></div>
        
        <div><Label>Organization Other Address</Label><Input value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} className="mt-1.5 bg-warm-gray" /></div>
        <div><Label>City/Province</Label><Input value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} className="mt-1.5 bg-warm-gray" /></div>

        <div className="sm:col-span-2 mt-2">
          <Label className="mb-3 block font-bold text-navy">I’m Interested In (Select all that apply)</Label>
          <div className="grid sm:grid-cols-2 gap-3">
            {interestOptions.map((interest) => (
              <label key={interest} className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-warm-gray transition-colors border border-transparent hover:border-border">
                <input type="checkbox" checked={form.interests.includes(interest)} onChange={() => handleCheckboxChange(interest)} className="w-4 h-4 text-coral border-gray-300 rounded focus:ring-coral" />
                <span className="text-sm text-navy font-medium">{interest}</span>
              </label>
            ))}
          </div>
          {form.interests.includes('Other') && (
            <Input className="mt-3 bg-warm-gray" placeholder="Other (Please specify)" />
          )}
        </div>

        <div className="sm:col-span-2">
          <Label className="font-bold text-navy">Preferred Sponsorship Level (if known)</Label>
          <select value={form.level} onChange={e => setForm({ ...form, level: e.target.value })} className="flex h-10 w-full rounded-md border border-input bg-warm-gray px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring mt-1.5">
            <option value="" disabled>Select a level...</option>
            {levelOptions.map(level => <option key={level} value={level}>{level}</option>)}
          </select>
        </div>

        <div className="sm:col-span-2"><Label>Tell Us Why You're Interested in Partnering with Us</Label><Textarea rows={3} value={form.whyPartner} onChange={e => setForm({ ...form, whyPartner: e.target.value })} className="mt-1.5 bg-warm-gray" /></div>

        <div className="sm:col-span-2">
          <Label className="font-bold text-navy">How Did You Hear About Us?</Label>
          <select value={form.howHeard} onChange={e => setForm({ ...form, howHeard: e.target.value })} className="flex h-10 w-full rounded-md border border-input bg-warm-gray px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring mt-1.5">
            <option value="" disabled>Select an option...</option>
            {heardOptions.map(option => <option key={option} value={option}>{option}</option>)}
          </select>
          {form.howHeard === 'Other' && (
            <Input className="mt-3 bg-warm-gray" placeholder="Other (Please specify)" value={form.howHeardOther} onChange={e => setForm({...form, howHeardOther: e.target.value})} />
          )}
        </div>
      </div>
      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-coral hover:bg-coral-light text-white font-bold h-12">
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
};

const VolunteerForm = ({ onClose }: FormProps) => {
  const [form, setForm] = useState({ 
    firstName: "", lastName: "", email: "", phone: "", city: "", 
    interests: [] as string[], interestsOther: "", availability: [] as string[], availabilityOther: "", 
    hasLicense: "", experience: "", whyVolunteer: "" 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const interestOptions = [
    'Ship Visits', 'Driving/Transportation Assistance', 
    'Centre-Based Support (Hospitality, Admin, Cleaning)', 
    'Event Support', 'Fundraising & Outreach', 'Other (Please specify)'
  ];

  const availabilityOptions = ['Weekdays', 'Weekends', 'Flexible', 'Other (Please specify)'];

  const handleInterestChange = (interest: string) => {
    setForm(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleAvailabilityChange = (avail: string) => {
    setForm(prev => ({
      ...prev,
      availability: prev.availability.includes(avail)
        ? prev.availability.filter(a => a !== avail)
        : [...prev.availability, avail]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock API submission
    setTimeout(() => {
      toast({ title: "Volunteer Request Sent", description: "Thank you for your interest! We will contact you soon." });
      onClose();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="relative rounded-2xl bg-white p-6 md:p-8 shadow-card space-y-5 animate-in fade-in slide-in-from-bottom-4">
      <button type="button" onClick={onClose} className="absolute top-6 right-6 text-text-mid hover:text-navy transition-colors"><X size={24} /></button>

      <div className="flex items-center gap-2 mb-2 pr-8">
        <Users className="h-6 w-6 text-coral" />
        <h3 className="text-2xl font-extrabold text-navy">Volunteer with Us</h3>
      </div>
      <p className="text-sm text-text-mid mb-4">
        Be a part of something meaningful. Volunteers are the heart and soul of our mission.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2 mt-2"><Label className="font-bold text-navy">Name *</Label></div>
        <div><Label>First name</Label><Input required value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} className="mt-1.5 bg-warm-gray" /></div>
        <div><Label>Last name</Label><Input required value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} className="mt-1.5 bg-warm-gray" /></div>
        
        <div><Label>Email *</Label><Input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="mt-1.5 bg-warm-gray" /></div>
        <div><Label>Phone number</Label><Input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="mt-1.5 bg-warm-gray" /></div>
        
        <div className="sm:col-span-2"><Label>City/Town</Label><Input value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} className="mt-1.5 bg-warm-gray" /></div>

        <div className="sm:col-span-2 mt-2">
          <Label className="mb-3 block font-bold text-navy">I’m Interested In (Select all that apply)</Label>
          <div className="grid sm:grid-cols-2 gap-3">
            {interestOptions.map((interest) => (
              <label key={interest} className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-warm-gray transition-colors border border-transparent hover:border-border">
                <input type="checkbox" checked={form.interests.includes(interest)} onChange={() => handleInterestChange(interest)} className="w-4 h-4 text-coral border-gray-300 rounded focus:ring-coral" />
                <span className="text-sm text-navy font-medium">{interest}</span>
              </label>
            ))}
          </div>
          {form.interests.includes('Other (Please specify)') && (
            <Input className="mt-3 bg-warm-gray" placeholder="Other (Specify here)" value={form.interestsOther} onChange={e => setForm({...form, interestsOther: e.target.value})} />
          )}
        </div>

        <div className="sm:col-span-2 mt-2">
          <Label className="mb-3 block font-bold text-navy">Availability</Label>
          <div className="grid sm:grid-cols-2 gap-3">
            {availabilityOptions.map((avail) => (
              <label key={avail} className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-warm-gray transition-colors border border-transparent hover:border-border">
                <input type="checkbox" checked={form.availability.includes(avail)} onChange={() => handleAvailabilityChange(avail)} className="w-4 h-4 text-coral border-gray-300 rounded focus:ring-coral" />
                <span className="text-sm text-navy font-medium">{avail}</span>
              </label>
            ))}
          </div>
          {form.availability.includes('Other (Please specify)') && (
            <Input className="mt-3 bg-warm-gray" placeholder="Availability (other)" value={form.availabilityOther} onChange={e => setForm({...form, availabilityOther: e.target.value})} />
          )}
        </div>

        <div className="sm:col-span-2">
          <Label className="font-bold text-navy">Do you have a valid driver’s license?</Label>
          <select value={form.hasLicense} onChange={e => setForm({ ...form, hasLicense: e.target.value })} className="flex h-10 w-full rounded-md border border-input bg-warm-gray px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring mt-1.5">
            <option value="" disabled>Select...</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="sm:col-span-2"><Label>Any relevant experience or certifications?</Label><Textarea rows={3} value={form.experience} onChange={e => setForm({ ...form, experience: e.target.value })} className="mt-1.5 bg-warm-gray" /></div>
        <div className="sm:col-span-2"><Label>Why do you want to volunteer with us?</Label><Textarea rows={3} value={form.whyVolunteer} onChange={e => setForm({ ...form, whyVolunteer: e.target.value })} className="mt-1.5 bg-warm-gray" /></div>
      </div>
      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-coral hover:bg-coral-light text-white font-bold h-12">
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
};

// ==========================================
// MAIN COMPONENT
// ==========================================

const GetInvolved = () => {
  const [activeForm, setActiveForm] = useState<string | null>(null);
  const [isDonateActive, setIsDonateActive] = useState(false);
  const formContainerRef = useRef<HTMLDivElement>(null);

  // Helper to trigger donation form and scroll
  const handleDonateClick = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsDonateActive(true);
    setTimeout(() => scrollToSection('donation-form'), 100);
  };

  // Close the active non-donation forms if clicked outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeForm && formContainerRef.current && !formContainerRef.current.contains(event.target as Node)) {
        if (!(event.target as Element).closest('.form-trigger-btn')) {
          setActiveForm(null);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeForm]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky headers
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const actionCards = [
    { id: 'volunteer', icon: Users, title: "Volunteer", desc: "Share your time & skills", isExternal: false },
    { id: 'partner', icon: Briefcase, title: "Become a Corporate Sponsor", desc: "Corporate & community support", isExternal: false },
    { id: 'ecard', icon: Mail, title: "Send a Seafarer a Card", desc: "Words of encouragement", isExternal: true, link: "https://www.canadahelps.org/en/donate/ecard-donation/" },
  ];

  const renderActiveForm = () => {
    switch (activeForm) {
      case 'partner': return <CorporateSponsorForm onClose={() => setActiveForm(null)} />;
      case 'volunteer': return <VolunteerForm onClose={() => setActiveForm(null)} />;
      default: return null;
    }
  };

  return (
    <>
      {/* ─────────── HERO SECTION ─────────── */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-navy min-h-[45vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={getInvolvedBg} 
            alt="Get Involved Background" 
            className="w-full h-full object-cover object-center opacity-40 mix-blend-overlay" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy/60 to-transparent" />
        </div>
        
        <div className="container-page relative z-10 text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coral/20 text-coral-light text-xs font-extrabold uppercase tracking-widest mb-6 border border-coral/30">
            Get Involved
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Get involved with us Newfoundland and Labrador
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed font-medium">
            We have over 1.89 million seafarers all over the world
          </p>
        </div>
      </section>

      {/* Intro Context Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-page max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6">
            Get Involved: Support the seafarers who support the world.
          </h2>
          <p className="text-lg text-text-mid leading-relaxed font-medium">
            At Mission to Seafarers Canada, we believe in the power of community and compassion. Seafarers are the unsung heroes of global trade, but their lives at sea are often filled with isolation, hardship, and long stretches away from home. By getting involved with our mission, you help provide the care, comfort, and connection these hardworking individuals need.
          </p>
          <p className="text-lg text-text-mid leading-relaxed font-medium mt-4">
            There are many ways you can make a real difference. Whether you choose to donate, volunteer, or send a message of encouragement, your involvement directly impacts the lives of seafarers who pass through our ports. Here’s how you can join us in supporting seafarers.
          </p>
        </div>
      </section>

      {/* Financial Donations Section */}
      <section id="donate" className="py-20 md:py-28 bg-warm-gray border-t border-border overflow-hidden">
        <div className="container-page">
          <div className={`grid gap-12 items-start transition-all duration-500 ${isDonateActive ? 'lg:grid-cols-12 lg:gap-16' : 'max-w-4xl mx-auto'}`}>

            {/* Left Content Context */}
            <div className={`${isDonateActive ? 'lg:col-span-5' : 'lg:col-span-12'} space-y-8`}>
              <div className={`${!isDonateActive && 'text-center max-w-2xl mx-auto'}`}>
                <span className={`eyebrow flex items-center gap-2 mb-3 ${!isDonateActive && 'justify-center'}`}><DollarSign className="w-5 h-5" /> Donate</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">Help Us Provide Critical Support to Seafarers.</h2>
                <p className="text-lg text-text-mid leading-relaxed">
                  Your donation directly funds the services that seafarers depend on. From ship visits and pastoral care to mental health support and Seafarers’ Centers, your contribution ensures that we can continue to provide vital resources for seafarers who often face isolation and mental health challenges during their long journeys.
                </p>
              </div>

              <div className={`grid gap-6 ${!isDonateActive ? 'sm:grid-cols-2' : 'grid-cols-1'}`}>
                <div className="bg-white rounded-2xl p-6 md:p-8 border border-border relative overflow-hidden flex flex-col shadow-soft">
                  <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none"><Heart size={80} /></div>
                  <h3 className="text-xl font-extrabold text-navy mb-3">Monthly Donors</h3>
                  <p className="text-sm text-text-mid mb-5 flex-grow">
                    By becoming a monthly donor, you help us plan for consistent care and sustainable support for seafarers. Your regular contributions allow us to expand our services and ensure that every seafarer receives the support they deserve.
                  </p>
                  <p className="text-coral font-bold text-sm mb-6">Your generosity makes a world of difference.</p>
                  <Button onClick={handleDonateClick} className="w-full bg-coral hover:bg-coral-light text-white font-bold mt-auto h-12">
                    Donate Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Side - CanadaHelps Iframe Form (Only renders when active) */}
            {isDonateActive && (
              <div id="donation-form" className="lg:col-span-7 bg-white p-4 md:p-6 rounded-2xl border border-border shadow-card lg:sticky lg:top-24 animate-in slide-in-from-right-8 fade-in duration-500 scroll-mt-24">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <Gift className="text-coral h-6 w-6" />
                    <h3 className="font-extrabold text-navy text-xl sm:text-2xl">Secure Donation Form</h3>
                  </div>
                  <button onClick={() => setIsDonateActive(false)} className="text-text-mid hover:text-navy transition-colors p-2" aria-label="Close Donation Form">
                    <X size={24} />
                  </button>
                </div>
                <div className="w-full bg-white rounded-xl border border-border overflow-hidden shadow-inner h-[750px] sm:h-[750px] md:h-[740px]">
                  <iframe
                    src="https://www.canadahelps.org/en/dn/73316"
                    title="CanadaHelps Secure Donation Form"
                    className="w-full h-full border-none block bg-transparent"
                    scrolling="auto"
                    allow="payment"
                  ></iframe>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* Interactive Forms / Ways to Help Section */}
      <section id="ways-to-help" className="relative py-20 md:py-28 scroll-mt-24 overflow-hidden">
        
        {/* Background Image Added to this Section with Navy Blue Overlay */}
        <div className="absolute inset-0 z-0 ">
          <img 
            src={maritimeImage} 
            alt="Ways to help background" 
            className="w-full h-full object-cover object-center " 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy/90" />
        </div>

        <div className="container-page relative z-10">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-coral-light text-xs font-extrabold uppercase tracking-widest mb-4 border border-coral/30">
              Ways to Get Involved
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Choose How You Would Like to Support</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
            {actionCards.map((card) => {
              if (card.isExternal) {
                return (
                  <a
                    key={card.id}
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 rounded-xl border text-center transition-all hover:shadow-card hover:-translate-y-1 border-coral/90 bg-coral text-white block"
                  >
                    <card.icon className="h-10 w-10 mx-auto mb-4 text-white" />
                    <h3 className="font-bold mb-2 text-lg text-white">{card.title}</h3>
                    <p className="text-sm text-white/90">{card.desc}</p>
                  </a>
                );
              }
              return (
                <button
                  key={card.id}
                  type="button"
                  onClick={() => {
                    setActiveForm(activeForm === card.id ? null : card.id);
                    if (activeForm !== card.id) {
                      setTimeout(() => scrollToSection('ways-to-help-forms'), 100);
                    }
                  }}
                  className={`form-trigger-btn p-6 rounded-xl border text-center transition-all hover:shadow-card hover:-translate-y-1 ${
                    activeForm === card.id 
                      ? "border-coral bg-coral-pale shadow-md" 
                      : "border-coral/90 bg-coral text-white"
                  }`}
                >
                  <card.icon className={`h-10 w-10 mx-auto mb-4 ${activeForm === card.id ? "text-coral" : "text-white"}`} />
                  <h3 className={`font-bold mb-2 text-lg ${activeForm === card.id ? "text-navy" : "text-white"}`}>{card.title}</h3>
                  <p className={`text-sm ${activeForm === card.id ? "text-text-mid" : "text-white/90"}`}>{card.desc}</p>
                </button>
              );
            })}
          </div>

          <div id="ways-to-help-forms" className="max-w-3xl mx-auto scroll-mt-32" ref={formContainerRef}>
            {renderActiveForm()}
          </div>
        </div>
      </section>

      {/* Details Sections (Hidden when forms are active) */}
      <section className={`py-16 md:py-24 bg-white border-t border-border transition-all duration-300 ${activeForm ? 'opacity-50 pointer-events-none hidden' : 'opacity-100 block'}`}>
        <div className="container-page grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Left Column */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-extrabold text-navy mb-4 flex items-center gap-2"><Heart className="text-coral" /> Why Get Involved?</h3>
              <p className="text-text-mid mb-4 leading-relaxed font-medium">Seafarers are vital to the global economy, but their work often leaves them isolated, stressed, and away from their families for months. By getting involved with Mission to Seafarers Canada, you provide the support and connection that seafarers desperately need.</p>
              <ul className="list-disc list-inside text-sm text-navy font-medium space-y-2 mb-6 ml-2">
                <li><strong className="text-navy">Ship visits:</strong> To offer emotional and practical support</li>
                <li><strong className="text-navy">Seafarers’ Centres:</strong> for a safe, welcoming place to rest, recharge, and reconnect</li>
                <li><strong className="text-navy">Mental health resources:</strong> Benefits include making a global impact and supporting seafarers across multiple regions.</li>
              </ul>
              <p className="text-text-mid leading-relaxed font-medium mb-4">Your support, whether through volunteering, donating, or sponsoring, helps us continue providing care, comfort, and connection to those who keep global trade moving.<br/><br/>Together, we can create a community of care, showing seafarers they are never alone.</p>
              <p className="font-bold text-coral text-lg mb-6">Join us today and make a difference!</p>
              <Button asChild variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white h-12 px-8">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>

            <div className="bg-warm-gray p-8 rounded-3xl border border-border">
              <h3 className="text-2xl font-extrabold text-navy mb-4 flex items-center gap-2"><Users className="text-coral" /> Volunteer Roles</h3>
              <p className="text-text-mid mb-4">Volunteers are the heart and soul of Mission to Seafarers Canada. Roles Include:</p>
              <ul className="list-disc list-inside text-sm text-navy font-medium space-y-3 mb-6 ml-2">
                <li><strong className="text-navy">Ship Visitor:</strong> Bring warmth and comfort to seafarers aboard ships, offering support, supplies, and a friendly face.</li>
                <li><strong className="text-navy">Center Host:</strong> Welcome seafarers at our Seafarers’ Centres, helping them access resources, connect with loved ones, and find a moment of respite.</li>
                <li><strong className="text-navy">Personal Shopper:</strong> Assist seafarers with shopping for essentials, from toiletries to SIM cards, ensuring they have what they need during their time ashore.</li>
                <li><strong className="text-navy">Event Helper:</strong> Support the organization of fundraising and awareness events that help sustain our mission.</li>
                <li><strong className="text-navy">Communications or Admin Support:</strong> Contribute to outreach efforts, event coordination, and daily operations through administrative or communications support.</li>
              </ul>
              <Button type="button" onClick={() => { setActiveForm('volunteer'); scrollToSection('ways-to-help'); }} variant="outline" className="border-coral text-coral hover:bg-coral hover:text-white h-12 px-8 form-trigger-btn">
                Become a Volunteer
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-extrabold text-navy mb-4 flex items-center gap-2"><Briefcase className="text-coral" /> Become a Corporate Sponsor</h3>
              <p className="text-text-mid mb-4 font-medium leading-relaxed">Your business can play a critical role in supporting the well-being of seafarers around the world. Partnering with Mission to Seafarers Canada as a corporate sponsor creates a lasting impact and helps expand our reach. Corporate sponsorship helps us improve services for visiting crews and raise awareness about the challenges seafarers face.</p>
              
              <h4 className="text-lg font-bold text-navy mt-6 mb-3">Sponsorship Tiers Include:</h4>
              <ul className="list-disc list-inside text-sm text-navy font-medium space-y-2 mb-6 ml-2">
                <li><strong className="text-navy">Port Partner:</strong> Support vital services at specific ports</li>
                <li><strong className="text-navy">Crew Care Champion:</strong> Support vital services at specific ports</li>
                <li><strong className="text-navy">Global Maritime Ally:</strong> Benefits include: Make a global impact, supporting seafarers across multiple regions.</li>
              </ul>

              <h4 className="text-lg font-bold text-navy mt-6 mb-3">Corporate Sponsorship Benefits Include:</h4>
              <ul className="list-disc list-inside text-sm text-navy font-medium space-y-2 mb-8 ml-2">
                <li>Recognition on our website, at events, and in our communications</li>
                <li>Employee Engagement Opportunities, including volunteer days, team-building activities, and care-package drives</li>
                <li>Customized Partnership Visibility to showcase your brand’s support for seafarers and the maritime industry</li>
              </ul>

              <Button type="button" onClick={() => { setActiveForm('partner'); scrollToSection('ways-to-help'); }} variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white h-12 px-8 form-trigger-btn">
                Contact Us to Become a Sponsor
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* Send an ECard Section */}
      <section className="py-20 md:py-24 bg-warm-gray border-t border-border">
        <div className="container-page max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="eyebrow flex justify-center items-center gap-2 mb-4"><Mail className="w-5 h-5 text-coral" /> Send a Card</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6">Send a Seafarer a Card</h2>
            <p className="text-lg text-text-mid leading-relaxed font-medium max-w-3xl mx-auto">
              Send a handwritten or digital card with words of encouragement, holiday wishes, or simple thanks. Brighten a seafarer’s day with a message of hope and encouragement! Your message will be printed and displayed at our Seafarers’ Centres for visiting crew members to read and feel supported.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-8 border border-border shadow-sm text-center">
              <h4 className="text-xl font-extrabold text-navy mb-3">Step 1: Choose Your eCard Design</h4>
              <p className="text-sm text-text-mid font-medium">Select from our beautiful collection of seafarer-themed eCards.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-border shadow-sm text-center">
              <h4 className="text-xl font-extrabold text-navy mb-3">Step 2: Select a Charity</h4>
              <p className="text-sm text-text-mid font-medium">Search and select “Mission to Seafarers Canada” as your charity of choice. (This step may be required by the donation platform to complete your submission.)</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-border shadow-sm text-center">
              <h4 className="text-xl font-extrabold text-navy mb-3">Step 3: Add Your Message and Optional Donation</h4>
              <p className="text-sm text-text-mid font-medium">Write a thoughtful message or prayer for the seafarers. Add a donation if you’d like to support our mission—your gift helps provide meals, mental health support, and more.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 border border-border shadow-soft text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-extrabold text-navy mb-4">Once submitted, we will:</h3>
            <ul className="text-lg text-text-mid font-medium space-y-2 mb-8 list-none">
              <li>📄 Print your eCard and message.</li>
              <li>📌 Display it at one of our Seafarers’ Centers.</li>
              <li>🤝 Share your support with the visiting crew who may be far from home.</li>
            </ul>
            <p className="text-xl font-bold text-coral mb-8">💙 Thank you for sending kindness across the sea.<br/>Every word matters.</p>
            
            <Button asChild size="lg" className="bg-coral hover:bg-coral-light text-white font-bold h-14 px-10 text-lg shadow-warm">
              <a href="https://www.canadahelps.org/en/donate/ecard-donation/" target="_blank" rel="noopener noreferrer">Send Ecard</a>
            </Button>
          </div>
        </div>
      </section>
     
      {/* Final Call to Action */}
      <section className="py-20 bg-coral text-white text-center">
        <div className="container-page max-w-4xl mx-auto">
          <Heart className="mx-auto h-12 w-12 text-white/90 mb-6" />
          <h2 className="text-3xl md:text-4xl font-extrabold !text-white mb-6">Thank You for Supporting Our Seafarers</h2>
          <p className="text-lg text-white/90 mb-4 max-w-3xl mx-auto font-medium leading-relaxed">
            Your compassion helps bring comfort, connection, and care to the men and women who keep our global economy moving. Because of supporters like you, seafarers arriving at our ports feel seen, valued, and welcomed, no matter how far from home they are.
          </p>
          <p className="text-xl font-bold text-white mb-10 max-w-3xl mx-auto">
            Let’s continue to build a community of kindness across the oceans.<br/>Thank you for being part of the journey.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 px-4 sm:px-0">
            <Button size="lg" onClick={handleDonateClick} className="w-full sm:w-auto bg-white hover:bg-gray-100 text-coral font-bold h-14 px-8">
              Donate Now
            </Button>

            <Button size="lg" variant="outline" type="button" onClick={() => { setActiveForm('volunteer'); scrollToSection('ways-to-help'); }} className="w-full sm:w-auto form-trigger-btn border-2 border-white text-white hover:bg-white hover:text-navy bg-transparent font-bold h-14 px-6">
              Become a Volunteer
            </Button>

            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-navy bg-transparent font-bold h-14 px-6">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetInvolved;