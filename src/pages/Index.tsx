import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  ArrowRight, Anchor, Heart, Users, Globe2, HandHeart,
  MapPin, Ship, Building2, Home as HomeIcon, ChevronRight,
  ChevronDown, Gift, HeartHandshake, Briefcase, Sparkles,
  Scale, Scissors, Package, Wifi, Coffee, MessageSquare
} from "lucide-react";

// Image imports for the Hero Section
import heroImg from "@/assets/SaintJohnport.jpg";
import skyline from "@/assets/labradoor-skyline.png";

// Background image imports
import waterImg from "@/assets/water1.jpg";
import seaImg from "@/assets/sea1.jpg";

const Index = () => {
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  return (
    <>
      {/* ─────────── HERO ─────────── */}
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat bg-white"
        style={{ backgroundImage: `url("${heroImg}")` }}
      >
        {/* Restored the original light overlay */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />

        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-coral/10 blur-3xl z-0" />
        <div className="absolute top-1/3 -left-20 h-72 w-72 rounded-full bg-navy/10 blur-3xl z-0" />

        <div className="container-page relative z-10 pt-12 pb-14 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Left Column: Text Content */}
            <div className="lg:col-span-7 animate-fade-in-up">

              <div className="relative inline-block mt-4 md:mt-0">
                <img
                  src={skyline}
                  alt="Skyline"
                  aria-hidden="true"
                  className="absolute bottom-[90%] -right-0 w-28 md:w-40 opacity-80 animate-float pointer-events-none z-0"
                  loading="lazy"
                />
                <span className="eyebrow bg-white/50 text-navy backdrop-blur inline-block px-2 py-1 rounded-md relative z-10">
                  Mission to Seafarers · Newfoundland and Labrador
                </span>
              </div>

              <h1 className="mt-5 text-[2.25rem] sm:text-5xl lg:text-[3.75rem] font-extrabold leading-[1.05] text-navy tracking-tight drop-shadow-sm">
                Here When Seafarers
                <br />
                <span className="relative inline-block text-coral whitespace-nowrap mt-2">
                  Come Ashore
                  <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" fill="none">
                    <path d="M2 7 Q50 1, 100 5 T198 4" stroke="hsl(var(--coral))" strokeWidth="3" strokeLinecap="round" fill="none" />
                  </svg>
                </span>
              </h1>

              <div className="mt-6 text-lg md:text-xl text-navy/90 leading-relaxed max-w-2xl font-medium space-y-5">
                <p>
                  After days, weeks, and sometimes months at sea, seafarers arrive in port with only a short window ashore.
                </p>
                <p>
                  Mission to Seafarers Newfoundland and Labrador is here during that window—with practical support, a welcoming place to step off the vessel, and people to speak with while they are ashore.
                </p>
                <p>
                  We are part of <a href="https://mtsc.ca/" target="_blank" rel="noopener noreferrer" className="text-coral hover:text-coral-light underline underline-offset-4 transition-colors font-bold">Mission to Seafarers Canada</a> and connected to a wider global network caring for seafarers in ports around the world.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 relative z-20">
                <Button asChild size="lg" variant="outline" className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold h-12 px-7">
                  <Link to="/contact">Contact the Station</Link>
                </Button>
                <Button onClick={() => setIsDonateOpen(true)} size="lg" className="bg-coral hover:bg-coral-light text-white font-bold shadow-warm hover:shadow-warm-hover h-12 px-7 cursor-pointer">
                  Donate <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-5 relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative rounded-2xl overflow-hidden shadow-soft aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
                <img
                  src={heroImg}
                  alt="Aerial view"
                  className="absolute inset-0 h-full w-full object-contain"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-navy-dark/60 via-navy/10 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-5 md:p-7">
                  <div className="rounded-xl bg-white/95 backdrop-blur p-4 md:p-5 shadow-card">
                    <p className="text-xs font-bold uppercase tracking-wider text-coral">Newfoundland and Labrador Station</p>
                    <p className="mt-1.5 text-sm md:text-base font-semibold text-navy leading-snug">
                      Welcoming crews who keep global trade moving.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* trust strip (restored original light theme) */}
        <div className="border-t border-border bg-white/80 backdrop-blur relative z-10">
          <div className="container-page mx-auto py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center justify-center">
            {[
              { n: "90%", l: "Transportation of the world’s goods and fuels" },
              { n: "74K", l: "Operating ships" },
              { n: "1.89 M", l: "Seafarers all over the world" },
              { n: "1856", l: "History dating back to" },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-2xl md:text-3xl font-extrabold text-navy">{s.n}</p>
                <p className="text-[10px] md:text-xs mt-1 font-bold uppercase tracking-widest text-text-mid">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ─────────── HOW WE HELP ─────────── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container-page">
          <div className="text-center max-w-3xl mx-auto">
            <span className="eyebrow mx-auto">How We Help</span>
            <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy leading-tight">
              How We Support the World’s Seafarers in Newfoundland and Labrador
            </h2>
            <p className="mt-5 text-base md:text-lg text-text-mid">
              As part of a 160+ year legacy, we offer practical, emotional and spiritual support to seafarers visiting Newfoundland and Labrador, helping ensure that no seafarer feels alone.
            </p>
          </div>

          <h3 className="mt-14 mb-6 text-2xl font-extrabold text-navy text-center">Featured Services</h3>

          <div className="grid md:grid-cols-2 gap-5 mb-14">
            {/* Using exact original card ui */}
            <div className="group rounded-2xl p-7 md:p-8 transition-all hover:-translate-y-1 flex flex-col items-start bg-warm-gray hover:shadow-card-hover">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-coral-pale mb-4">
                <Users className="h-6 w-6 text-coral" />
              </span>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-text-mid mb-1">At the Station</span>
              <h3 className="text-xl md:text-2xl font-extrabold leading-tight text-navy">
                Community Connection
              </h3>
              <p className="mt-3 mb-6 text-sm leading-relaxed flex-1 text-text-mid">
                Refreshments and a comfortable place to sit, pause and reconnect with loved ones in a welcoming station space.
              </p>
              <Button asChild className="bg-navy hover:bg-navy-light text-white font-bold h-12">
                <Link to="/contact">Come Visit Us at the Station</Link>
              </Button>
            </div>

            <div className="group rounded-2xl p-7 md:p-8 transition-all hover:-translate-y-1 flex flex-col items-start bg-warm-gray hover:shadow-card-hover">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-coral-pale mb-4">
                <Package className="h-6 w-6 text-coral" />
              </span>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-text-mid mb-1">Logistics</span>
              <h3 className="text-xl md:text-2xl font-extrabold leading-tight text-navy">
                Seafarers Parcel Pickup Service
              </h3>
              <p className="mt-3 mb-6 text-sm leading-relaxed flex-1 text-text-mid">
                Order essentials online and have them delivered securely to our station for pickup when your vessel arrives in port.
              </p>
              <Button
                asChild
                className="bg-navy hover:bg-navy-light text-white font-bold h-12"
              >
                <a
                  href="https://parcelservice.mtsc.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Send Your Parcel
                </a>
              </Button>
            </div>
          </div>

          <h3 className="mb-6 text-2xl font-extrabold text-navy text-center">How We Care for Seafarers</h3>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { i: Briefcase, title: "Practical Support" },
              { i: Heart, title: "Mental and Emotional Health" },
              { i: Sparkles, title: "Spiritual Care" },
              { i: Scale, title: "Advocacy and Rights" },
              { i: Users, title: "Community Connection" },
              { i: Scissors, title: "Haircuts and Wellness" },
              { i: Package, title: "Seafarers Parcel Pickup Service" },
              { i: MapPin, title: "Transportation and Local Guidance" },
              { i: Wifi, title: "Wi-Fi and Communication Tools" },
              { i: Coffee, title: "Refreshments and Hospitality" },
            ].map(({ i: Icon, title }) => (
              <div
                key={title}
                className="group rounded-2xl p-7 transition-all hover:-translate-y-1 flex flex-col items-start bg-warm-gray hover:shadow-card-hover"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-coral-pale">
                  <Icon className="h-6 w-6 text-coral" />
                </span>
                <h3 className="mt-5 text-lg font-extrabold leading-tight text-navy">
                  {title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── CONNECTED IN PURPOSE ─────────── */}
      <section className="py-20 bg-coral-pale/30 border-y border-border">
        <div className="container-page">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="mt-5 text-3xl md:text-4xl font-extrabold text-navy leading-tight">
              Local Presence. Connected in Purpose.
            </h2>
            <p className="mt-5 text-base md:text-lg text-text-mid leading-relaxed">
              Mission to Seafarers Newfoundland and Labrador is part of a connected network of care.
            </p>
          </div>

          {/* Using exact original ui from the volunteer/donate cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

            <a href="https://www.missiontoseafarers.org/" target="_blank" rel="noopener noreferrer" className="block rounded-3xl bg-white/95 backdrop-blur p-8 md:p-10 shadow-card hover:shadow-card-hover transition-all border-2 border-coral/15 flex flex-col justify-between">
              <div>
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-coral-pale text-coral">
                  <Globe2 className="h-6 w-6" />
                </span>
                <p className="mt-5 text-[11px] font-extrabold uppercase tracking-widest text-coral">Global Network</p>
                <h3 className="mt-2 text-2xl md:text-3xl font-extrabold text-navy leading-tight">
                  The Mission to Seafarers
                </h3>
                <p className="mt-3 mb-4 text-base text-text-mid leading-relaxed">
                  Connected globally across more than 200 ports.
                </p>
              </div>
              <div className="mt-4 font-bold text-coral flex items-center group-hover:text-coral-light">
                Visit Website <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </a>

            <a href="https://mtsc.ca/" target="_blank" rel="noopener noreferrer" className="block rounded-3xl bg-white/95 backdrop-blur p-8 md:p-10 shadow-card hover:shadow-card-hover transition-all border-2 border-coral/15 flex flex-col justify-between">
              <div>
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-coral-pale text-coral">
                  <Building2 className="h-6 w-6" />
                </span>
                <p className="mt-5 text-[11px] font-extrabold uppercase tracking-widest text-coral">National Body</p>
                <h3 className="mt-2 text-2xl md:text-3xl font-extrabold text-navy leading-tight">
                  Mission to Seafarers Canada
                </h3>
                <p className="mt-3 mb-4 text-base text-text-mid leading-relaxed">
                  Mission to Seafarers Canada provides the national leadership, fund development, partnerships and support that strengthen stations across the country.
                </p>
              </div>
              <div className="mt-4 font-bold text-coral flex items-center group-hover:text-coral-light">
                Visit Website <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* ─────────── SUPPORT LOCALLY. CARE GLOBALLY. ─────────── */}
      <section className="py-20 md:py-24 bg-warm-gray">
        <div className="container-page">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy leading-tight">
              Support Locally. Care Globally.
            </h2>
            <p className="mt-5 text-base md:text-lg text-text-mid">
              Whether you volunteer, donate, attend an event or simply help us welcome a seafarer, you become part of a connected network of care reaching from Newfoundland and Labrador to ports around the world.
            </p>
          </div>

          <div className="mt-12 text-center max-w-2xl mx-auto flex justify-center">
            <Button asChild size="lg" className="bg-navy hover:bg-navy-light text-white font-bold h-12">
              <Link to="/get-involved">Get Involved <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ─────────── GET INVOLVED & DONATE SECTION ─────────── */}
      <section
        className="relative py-20 md:py-24 bg-cover bg-center bg-no-repeat bg-warm-gray"
        style={{ backgroundImage: `url("${waterImg}")` }}
      >
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />

        <div className="container-page relative z-10">

          <div className="grid md:grid-cols-2 gap-6">
            {/* Part One: Get Involved (Using original ui) */}
            <div className="rounded-3xl bg-white/95 backdrop-blur p-8 md:p-10 shadow-card hover:shadow-card-hover transition-all border-2 border-coral/15 flex flex-col justify-between">
              <div>
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-coral-pale text-coral">
                  <HeartHandshake className="h-6 w-6" />
                </span>
                <p className="mt-5 text-[11px] font-extrabold uppercase tracking-widest text-coral">Get Involved</p>
                <h3 className="mt-2 text-2xl md:text-3xl font-extrabold text-navy leading-tight">
                  Help Us Welcome Seafarers to Newfoundland and Labrador
                </h3>
                <p className="mt-3 mb-4 text-base text-text-mid leading-relaxed">
                  There are many ways to support our station and the seafarers we serve. You can:
                </p>
                <ul className="list-disc pl-5 mb-8 text-base text-text-mid leading-relaxed space-y-1">
                  <li>Volunteer at the station or during local events</li>
                  <li>Donate snacks, refreshments, gift cards, furniture or supplies</li>
                  <li>Support haircut and wellness services for seafarers</li>
                  <li>Help furnish and maintain a welcoming station space</li>
                  <li>Support a local project or event</li>
                  <li>Become a community or business partner</li>
                </ul>
                <p className="mb-8 text-sm italic text-navy/70 leading-relaxed font-medium">
                  Local volunteers, supporters and community partners help make Mission to Seafarers Newfoundland and Labrador possible.
                </p>
              </div>

              <Button asChild size="lg" className="w-full bg-coral hover:bg-coral-light text-white font-bold shadow-warm h-12">
                <Link to="/contact">Contact the Newfoundland and Labrador Station</Link>
              </Button>
            </div>

            {/* Part Two: Donate (Using original ui) */}
            <div className="rounded-3xl bg-gradient-hero text-white p-8 md:p-10 shadow-soft relative overflow-hidden flex flex-col justify-between">
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-coral/30 blur-3xl" />
              <div className="relative flex-1">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/15 text-coral-light">
                  <Gift className="h-6 w-6" />
                </span>
                <p className="mt-5 text-[11px] font-extrabold uppercase tracking-widest text-coral-light">Donate</p>
                <h3 className="mt-2 text-2xl md:text-3xl font-extrabold !text-white leading-tight">
                  Help Care for Seafarers
                </h3>
                <p className="mt-3 mb-4 text-base text-white/90 leading-relaxed">
                  Every gift helps us provide hospitality, transportation, Wi-Fi, refreshments and a welcoming place for seafarers visiting Newfoundland and Labrador.
                </p>
                <p className="font-bold text-white mb-2">You can:</p>
                <ul className="list-disc pl-5 mb-8 text-base text-white/90 leading-relaxed space-y-1">
                  <li>Become a monthly donor</li>
                  <li>Make a one-time gift</li>
                  <li>Support Mission to Seafarers Newfoundland and Labrador through Mission to Seafarers Canada</li>
                </ul>
                <p className="mb-8 text-sm italic text-white/80 leading-relaxed font-medium">
                  National donations and partnerships help strengthen the work of Mission to Seafarers Canada across the country. Donations are processed through Mission to Seafarers Canada in support of the Newfoundland and Labrador station and the wider Mission across Canada.
                </p>
              </div>
              <div className="relative mt-8">
                <Button onClick={() => setIsDonateOpen(true)} size="lg" className="w-full bg-coral hover:bg-coral-light text-white font-bold shadow-warm h-12 px-2 text-sm sm:text-base cursor-pointer">
                  Donate Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────── MODAL: DONATION WIDGET ─────────── */}
      <Dialog open={isDonateOpen} onOpenChange={setIsDonateOpen}>
        <DialogContent className="max-w-5xl h-[95vh] p-0 overflow-hidden flex flex-col">
          <DialogHeader className="p-[6px] pb-3 shrink-0 border-b">
            <DialogTitle className="flex items-center gap-3 text-xl font-extrabold text-navy">
              <Gift className="h-5 w-5 text-coral" />
              Secure Donation Form
            </DialogTitle>
          </DialogHeader>
          <div className="flex-1 overflow-hidden p-2">
            <div className="w-full h-full bg-white rounded-lg border border-border overflow-hidden">
              <iframe
                src="https://www.canadahelps.org/en/dn/73316"
                title="CanadaHelps Secure Donation Form"
                className="w-full h-full border-none block bg-transparent"
                allow="payment"
              ></iframe>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Index;