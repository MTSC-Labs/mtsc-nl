import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import {
  Ship, Home, Heart, MapPin, HeartHandshake, Phone, Globe, CheckCircle2, X, ExternalLink
} from "lucide-react";

import lounge from "@/assets/Algoma-Bear-Visit-21.avif";
import heroBg from "@/assets/SeasurferSupport.avif"; 

// ==========================================
// FORM COMPONENTS
// ==========================================

interface FormProps {
  onClose: () => void;
}

const ShipVisitForm = ({ onClose }: FormProps) => {
  const [form, setForm] = useState({ 
    firstName: "", lastName: "", role: "", shipName: "", portLocation: "", 
    arrivalDate: "", crewCount: "", supportInterests: [] as string[], 
    supportOther: "", preferredDateTime: "", contactMethod: "" 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const supportOptions = [
    'Friendly visit and conversation', 
    'Practical assistance (e.g., SIM cards, transport info)', 
    'Spiritual support / prayer',
    'Welfare needs (e.g., supplies, contact family)', 
    'Other'
  ];

  const handleCheckboxChange = (interest: string) => {
    setForm(prev => ({
      ...prev,
      supportInterests: prev.supportInterests.includes(interest)
        ? prev.supportInterests.filter(i => i !== interest)
        : [...prev.supportInterests, interest]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfok1ZXI3M88lnpid0RW8o_3FKyKkJnzVMt8MqgJmFBN87wzA/formResponse";
    const formData = new URLSearchParams();

    // Standard text inputs must always send their keys
    formData.append("entry.594071822", form.firstName);
    formData.append("entry.1077362527", form.lastName);
    formData.append("entry.1920683143", form.role);
    formData.append("entry.1633043583", form.shipName);
    formData.append("entry.1078866099", form.portLocation);
    formData.append("entry.1052638757", form.arrivalDate);
    formData.append("entry.1220835606", form.crewCount);

    form.supportInterests.forEach(interest => {
      if (interest === 'Other') {
        formData.append("entry.1345349579", "__other_option__");
        formData.append("entry.1345349579.other_option_response", form.supportOther);
      } else {
        formData.append("entry.1345349579", interest);
      }
    });

    // Google forms STRICTLY rejects empty string values for Date fields. 
    // We only append this key if the user actually selected a date.
    if (form.preferredDateTime) {
      formData.append("entry.402214578", form.preferredDateTime);
    }
    
    formData.append("entry.59853682", form.contactMethod);

    try {
      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });
      
      toast({ title: "Ship Visit Requested", description: "Thank you for reaching out! Our team will connect with you soon." });
      setForm({ firstName: "", lastName: "", role: "", shipName: "", portLocation: "", arrivalDate: "", crewCount: "", supportInterests: [], supportOther: "", preferredDateTime: "", contactMethod: "" });
      onClose();
    } catch (error) {
      toast({ title: "Submission Error", description: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-warm-gray p-6 md:p-8 shadow-card space-y-5 animate-in fade-in slide-in-from-bottom-4 relative">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Ship className="h-6 w-6 text-coral" />
          <h3 className="text-xl font-extrabold text-navy">Ship visit</h3>
        </div>
        <button type="button" onClick={onClose} className="text-gray-400 hover:text-coral transition-colors" aria-label="Close form">
          <X className="h-6 w-6" />
        </button>
      </div>
      <p className="text-sm text-text-mid mt-1">Connecting Seafarers with Support in Newfoundland and Labrador</p>
      
      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <div className="sm:col-span-2 mt-2"><Label className="font-bold text-navy">Name *</Label></div>
        <div><Label>First name</Label><Input required value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} className="mt-1.5 bg-white" /></div>
        <div><Label>Last name</Label><Input required value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} className="mt-1.5 bg-white" /></div>
        
        <div className="sm:col-span-2"><Label>Role/Position Onboard * <span className="text-xs font-normal text-text-mid">(e.g., Captain, Crew Member, Agent)</span></Label><Input required value={form.role} onChange={e => setForm({ ...form, role: e.target.value })} className="mt-1.5 bg-white" /></div>
        <div className="sm:col-span-2"><Label>Ship Name / Vessel *</Label><Input required value={form.shipName} onChange={e => setForm({ ...form, shipName: e.target.value })} className="mt-1.5 bg-white" /></div>
        <div className="sm:col-span-2"><Label>Port / Berth Location *</Label><Input required value={form.portLocation} onChange={e => setForm({ ...form, portLocation: e.target.value })} className="mt-1.5 bg-white" /></div>
        
        <div><Label>Estimated Date of Arrival *</Label><Input type="date" required value={form.arrivalDate} onChange={e => setForm({ ...form, arrivalDate: e.target.value })} className="mt-1.5 bg-white" /></div>
        <div><Label>Number of Crew Members Onboard</Label><Input type="number" value={form.crewCount} onChange={e => setForm({ ...form, crewCount: e.target.value })} className="mt-1.5 bg-white" /></div>

        <div className="sm:col-span-2 mt-2">
          <Label className="mb-3 block font-bold text-navy">What kind of support are you hoping for? (Select all that apply)</Label>
          <div className="grid sm:grid-cols-2 gap-3">
            {supportOptions.map((interest) => (
              <label key={interest} className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-white transition-colors border border-transparent hover:border-border">
                <input type="checkbox" checked={form.supportInterests.includes(interest)} onChange={() => handleCheckboxChange(interest)} className="w-4 h-4 text-coral border-gray-300 rounded focus:ring-coral" />
                <span className="text-sm text-navy font-medium">{interest}</span>
              </label>
            ))}
          </div>
          {form.supportInterests.includes('Other') && (
            <Input className="mt-3 bg-white" placeholder="Other (Please specify)" value={form.supportOther} onChange={e => setForm({...form, supportOther: e.target.value})} />
          )}
        </div>

        {/* Changed to type="date" below because Google Forms strictly expects a valid YYYY-MM-DD for this field */}
        <div><Label>Preferred Date/Time for Visit</Label><Input type="date" value={form.preferredDateTime} onChange={e => setForm({ ...form, preferredDateTime: e.target.value })} className="mt-1.5 bg-white" /></div>
        <div><Label>Best Way To Reach You (Email/phone)</Label><Input value={form.contactMethod} onChange={e => setForm({ ...form, contactMethod: e.target.value })} placeholder="Email or Phone number here" className="mt-1.5 bg-white" /></div>
      </div>
      
      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-coral hover:bg-coral-light text-white font-bold h-12 mt-4">
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
};

const SeafarersCentreForm = ({ onClose }: FormProps) => {
  const [form, setForm] = useState({ 
    firstName: "", lastName: "", email: "", shipName: "", visitDate: "", 
    visitorCount: "", services: [] as string[], servicesOther: "", transportAssistance: "" 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = [
    'Free Wi-Fi & Phone Charging', 'Lounge with Snacks & Drinks', 
    'Local Information & Support', 'Friendly Conversation / Assistance', 'Other'
  ];

  const handleServiceChange = (service: string) => {
    setForm(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSecH3r9gEfMk9aP7qq-p5zyPqLarGHD3TpTgydxSaV_Vemmlg/formResponse";
    const formData = new URLSearchParams();

    formData.append("entry.1424198996", form.firstName);
    formData.append("entry.289806566", form.lastName);
    formData.append("entry.161040312", form.email);
    formData.append("entry.1028552249", form.shipName);
    formData.append("entry.1334600406", form.visitDate);
    formData.append("entry.1425073945", form.visitorCount);

    form.services.forEach(service => {
      if (service === 'Other' && form.servicesOther) {
        formData.append("entry.854101858", "__other_option__");
        formData.append("entry.854101858.other_option_response", form.servicesOther);
      } else {
        formData.append("entry.854101858", service);
      }
    });

    formData.append("entry.457678180", form.transportAssistance);

    try {
      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });
      
      toast({ title: "Visit Planned", description: "We look forward to welcoming you to the Seafarers' Centre!" });
      setForm({ firstName: "", lastName: "", email: "", shipName: "", visitDate: "", visitorCount: "", services: [], servicesOther: "", transportAssistance: "" });
      onClose();
    } catch (error) {
      toast({ title: "Submission Error", description: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-warm-gray p-6 md:p-8 shadow-card space-y-5 animate-in fade-in slide-in-from-bottom-4 relative">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Home className="h-6 w-6 text-coral" />
          <h3 className="text-xl font-extrabold text-navy">Seafarers’ Centre ship visit form</h3>
        </div>
        <button type="button" onClick={onClose} className="text-gray-400 hover:text-coral transition-colors" aria-label="Close form">
          <X className="h-6 w-6" />
        </button>
      </div>
      <p className="text-sm text-text-mid mt-1">A Welcoming Haven for Rest and Connection.</p>
      
      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <div className="sm:col-span-2 mt-2"><Label className="font-bold text-navy">Name *</Label></div>
        <div><Label>First name</Label><Input required value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} className="mt-1.5 bg-white" /></div>
        <div><Label>Last name</Label><Input required value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} className="mt-1.5 bg-white" /></div>
        
        <div><Label>Email *</Label><Input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="mt-1.5 bg-white" /></div>
        <div><Label>Ship Name / Vessel *</Label><Input required value={form.shipName} onChange={e => setForm({ ...form, shipName: e.target.value })} className="mt-1.5 bg-white" /></div>
        
        <div><Label>Estimated Date of Visit</Label><Input type="date" value={form.visitDate} onChange={e => setForm({ ...form, visitDate: e.target.value })} className="mt-1.5 bg-white" /></div>
        <div><Label>Estimated Number of Visitors</Label><Input type="number" value={form.visitorCount} onChange={e => setForm({ ...form, visitorCount: e.target.value })} className="mt-1.5 bg-white" /></div>

        <div className="sm:col-span-2 mt-2">
          <Label className="mb-3 block font-bold text-navy">Services You’re Interested In (Select all that apply)</Label>
          <div className="grid sm:grid-cols-2 gap-3">
            {serviceOptions.map((service) => (
              <label key={service} className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-white transition-colors border border-transparent hover:border-border">
                <input type="checkbox" checked={form.services.includes(service)} onChange={() => handleServiceChange(service)} className="w-4 h-4 text-coral border-gray-300 rounded focus:ring-coral" />
                <span className="text-sm text-navy font-medium">{service}</span>
              </label>
            ))}
          </div>
          {form.services.includes('Other') && (
            <Input className="mt-3 bg-white" placeholder="Other (Please specify)" value={form.servicesOther} onChange={e => setForm({...form, servicesOther: e.target.value})} />
          )}
        </div>

        <div className="sm:col-span-2">
          <Label className="font-bold text-navy">Would you like transportation assistance to the Centre?</Label>
          <select value={form.transportAssistance} onChange={e => setForm({ ...form, transportAssistance: e.target.value })} className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring mt-1.5">
            <option value="" disabled>Select...</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>
      
      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-coral hover:bg-coral-light text-white font-bold h-12 mt-4">
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
};

// ==========================================
// MAIN COMPONENT
// ==========================================

const Support = () => {
  const [activeForm, setActiveForm] = useState<string | null>(null);
  const formContainerRef = useRef<HTMLDivElement>(null);

  const quickAccessCards = [
    { id: 'visit', icon: Ship, title: "Ship Visits", desc: "Connect Us Today" },
    { id: 'centre', icon: Home, title: "Seafarers’ Centre", desc: "Come visit us" },
    { id: 'mental', icon: HeartHandshake, title: "Mental Health Support", desc: "Reach Out for Support", isLink: true, isExternal: false, link: "/about" },
    { id: 'explore', icon: Globe, title: "Explore NL", desc: "An Adventure Awaits", isLink: true, isExternal: true, link: "https://www.newfoundlandlabrador.com/" }
  ];

  const handleCloseForm = () => setActiveForm(null);

  const renderActiveForm = () => {
    switch (activeForm) {
      case 'visit': return <ShipVisitForm onClose={handleCloseForm} />;
      case 'centre': return <SeafarersCentreForm onClose={handleCloseForm} />;
      default: return null;
    }
  };

  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-navy min-h-[45vh] flex items-center justify-center border-b border-navy-dark">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Seafarer Support Background" 
            className="w-full h-full object-cover object-center opacity-40 mix-blend-overlay" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy/60 to-transparent" />
        </div>
        
        <div className="container-page relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coral/20 text-coral-light text-xs font-extrabold uppercase tracking-widest border border-coral/30">
              <Ship className="w-4 h-4 text-coral-light" /> For Seafarers
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Anchored in Care, Visits, Support, Resources, Adventure and Connection
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed font-medium">
            It is our mission to visit every ship that arrives at the ports of Newfoundland and Labrador
          </p>
        </div>
      </section>

      {/* 2. Quick Access */}
      <section id="quick-access" className="py-20 bg-white scroll-mt-10">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy">How Can We Support You Today?</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {quickAccessCards.map((card) => {
              if (card.isLink && card.isExternal) {
                return (
                  <a
                    key={card.id}
                    href={card.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-6 rounded-2xl border text-left transition-all hover:shadow-card hover:-translate-y-1 flex flex-col items-start border-border bg-white cursor-pointer group"
                  >
                    <div className="flex w-full items-start justify-between">
                      <card.icon className="h-10 w-10 mb-4 text-navy" />
                      <ExternalLink className="h-5 w-5 text-text-mid opacity-50 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="font-bold text-navy text-lg mb-2">{card.title}</h3>
                    <p className="text-sm text-text-mid font-medium">{card.desc}</p>
                  </a>
                );
              }

              if (card.isLink && !card.isExternal) {
                return (
                  <Link
                    key={card.id}
                    to={card.link || "#"}
                    className="p-6 rounded-2xl border text-left transition-all hover:shadow-card hover:-translate-y-1 flex flex-col items-start border-border bg-white cursor-pointer group"
                  >
                    <div className="flex w-full items-start justify-between">
                      <card.icon className="h-10 w-10 mb-4 text-navy" />
                    </div>
                    <h3 className="font-bold text-navy text-lg mb-2">{card.title}</h3>
                    <p className="text-sm text-text-mid font-medium">{card.desc}</p>
                  </Link>
                );
              }
              
              return (
                <button
                  key={card.id}
                  onClick={() => {
                    setActiveForm(card.id);
                    setTimeout(() => {
                      formContainerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }, 100);
                  }}
                  className={`p-6 rounded-2xl border text-left transition-all hover:shadow-card hover:-translate-y-1 flex flex-col items-start ${activeForm === card.id ? "border-coral bg-coral-pale ring-1 ring-coral" : "border-border bg-white"
                    }`}
                >
                  <card.icon className={`h-10 w-10 mb-4 ${activeForm === card.id ? "text-coral" : "text-navy"}`} />
                  <h3 className="font-bold text-navy text-lg mb-2">{card.title}</h3>
                  <p className="text-sm text-text-mid font-medium">{card.desc}</p>
                </button>
              );
            })}
          </div>

          <div ref={formContainerRef} className="max-w-3xl mx-auto scroll-mt-20">
            {renderActiveForm()}
          </div>
        </div>
      </section>

      {/* 3. Seafarers' Centre */}
      <section className="py-20 bg-warm-gray">
        <div className="container-page grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="rounded-3xl overflow-hidden shadow-soft aspect-[5/4]">
            <img src={lounge} alt="Seafarers lounge" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight">
              Seafarers’ Centre
            </h2>
            <p className="mt-2 text-xl font-bold text-coral">A Welcoming Haven for Rest and Connection</p>
            <p className="mt-5 text-lg text-text-mid font-medium leading-relaxed">
              Our Seafarers’ Centre is a safe, welcoming space designed to help seafarers relax, recharge, and connect with loved ones. When you come ashore, you can access a variety of services, including
            </p>
            <ul className="mt-6 space-y-4">
              {[
                "Free Wi-Fi and phone charging",
                "Comfortable lounge with snacks and drinks",
                "Friendly volunteers available to assist",
                "Local info and support resources on hand"
              ].map((t) => (
                <li key={t} className="flex gap-4 items-center">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-coral/10 text-coral">
                    <CheckCircle2 className="h-5 w-5" />
                  </span>
                  <span className="text-navy font-bold text-lg">{t}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-8 bg-coral hover:bg-coral-light text-white font-bold h-12 px-8" onClick={() => { setActiveForm('centre'); document.getElementById('quick-access')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Come visit us
            </Button>
          </div>
        </div>
      </section>

      {/* 4. Ship Visits */}
      <section className="py-20 bg-white text-center border-b border-warm-gray">
        <div className="container-page max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">Ship Visits</h2>
          <p className="text-coral font-bold mt-3 text-xl">Connecting Seafarers with Support in Newfoundland and Labrador</p>
          <p className="mt-8 text-lg text-text-mid font-medium leading-relaxed text-left md:text-center">
            At Mission to Seafarers Newfoundland and Labrador, we are committed to visiting every ship that arrives at our ports. Seafarers often face long voyages with limited access to support during their time in port. Our ship visits provide a vital connection by offering a friendly face, a listening ear, and practical assistance. These visits bridge the gap between life at sea and the world ashore, reminding seafarers that they are seen, valued, and cared for.
          </p>
          <p className="mt-8 text-lg font-bold text-navy flex items-center justify-center gap-2 bg-warm-gray py-4 px-6 rounded-full inline-flex">
            If you would like to learn more about our ship visit program or request a visit to your vessel, we would be happy to connect with you.
          </p>
          <div className="mt-8">
            <Button className="bg-coral hover:bg-coral-light text-white font-bold h-12 px-10" onClick={() => { setActiveForm('visit'); document.getElementById('quick-access')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Connect Us Today
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Mental Health & Crisis Resources */}
      <section className="py-20 bg-navy text-white">
        <div className="container-page text-center">
          <h2 className="text-3xl text-white md:text-4xl font-extrabold mb-4">Mental Health & Crisis Resources</h2>
          <p className="text-coral-light font-bold text-xl mb-12">Your Well-being is Our Priority</p>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 text-left max-w-4xl mx-auto shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <HeartHandshake className="w-48 h-48" />
            </div>
            
            <p className="text-lg font-medium text-white/90 relative z-10 mb-8 leading-relaxed">
              Life at sea can be stressful, and our Mental Health & Crisis Resources provide confidential emotional and mental health support to seafarers in need:
            </p>

            <ul className="space-y-6 text-lg font-medium text-white/90 relative z-10 mb-10">
              <li className="flex items-start gap-4">
                <Heart className="h-7 w-7 text-coral shrink-0" />
                <span>Pastoral care and emotional support from our trained team</span>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="h-7 w-7 text-coral shrink-0" />
                <span>Referrals to local mental health services and global seafarer support partners</span>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="h-7 w-7 text-coral shrink-0" />
                <span>Emergency crisis resources available 24/7</span>
              </li>
            </ul>

            <div className="mt-8 bg-white rounded-2xl p-6 md:p-8 flex flex-col items-center text-center relative z-10 shadow-lg">
              <h4 className="text-2xl font-bold text-navy mb-4">
                You do not have to face challenges alone support is always available when you need it most.
              </h4>
              <Link to="/about" className="inline-flex items-center justify-center gap-2 bg-coral hover:bg-coral-light text-white px-8 py-4 rounded-full transition-colors font-bold text-lg w-full sm:w-auto mt-4">
                Reach Out for Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Explore NL */}
      <section className="py-20 bg-white">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy">Explore Newfoundland & Labrador</h2>
            <p className="text-coral font-bold mt-3 text-xl mb-6">An Adventure Awaits</p>
            <p className="text-lg text-text-mid font-medium leading-relaxed mb-8">
              Newfoundland and Labrador offer unforgettable natural beauty, historic towns, and warm local hospitality. When you have time ashore, take the opportunity to explore our rugged coastlines, scenic landscapes, and vibrant culture.
            </p>
            <a href="https://www.newfoundlandlabrador.com/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white px-8 py-4 rounded-full transition-colors font-bold text-lg">
              Explore Now
            </a>
          </div>
          <div className="aspect-square md:aspect-video lg:aspect-square bg-warm-gray rounded-3xl shadow-soft flex items-center justify-center overflow-hidden border-4 border-white">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.250901896602!2d-52.69271455!3d47.601810799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0ca148b3fca06f%3A0xbca2e587c54ade57!2sSt.%20John&#39;s%2C%20NL%20A1A%205N8%2C%20Canada!5e0!3m2!1sen!2sin!4v1780888530650!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Support;