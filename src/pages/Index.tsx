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
  ChevronDown, Gift, HeartHandshake
} from "lucide-react";

// Image imports for the Hero Section
import heroImg from "@/assets/hero-port-toronto.jpg";
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
        style={{ backgroundImage: `url("${seaImg}")` }}
      >
        {/* Lowered opacity to 60% so the sea image clearly shows through */}
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
                  className="absolute bottom-[90%] -right-10 w-28 md:w-40 opacity-80 animate-float pointer-events-none z-0"
                  loading="lazy"
                />
                <span className="eyebrow bg-white/50 backdrop-blur inline-block px-2 py-1 rounded-md relative z-10">
                  Mission to Seafarers · Newfoundland and Labrador
                </span>
              </div>

              <h1 className="mt-5 text-[2.25rem] sm:text-5xl lg:text-[3.75rem] font-extrabold leading-[1.05] text-navy tracking-tight drop-shadow-sm">
                Anchored in Care, Rooted in {" "}
                <span className="relative inline-block text-coral whitespace-nowrap">
                  Newfoundland
                  <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" fill="none">
                    <path d="M2 7 Q50 1, 100 5 T198 4" stroke="hsl(var(--coral))" strokeWidth="3" strokeLinecap="round" fill="none" />
                  </svg>
                </span>
                {" "}and Labrador
              </h1>
              <p className="mt-6 text-lg md:text-xl text-navy/90 leading-relaxed max-w-2xl font-medium">
                <strong className="text-navy font-bold text-xl md:text-2xl block mb-6 drop-shadow-sm">
                  Did you know that 90% of the world’s goods are transported by sea?
                </strong>
              </p>
              <div className="mt-8 flex flex-wrap gap-4 relative z-20">
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
                  className="absolute inset-0 h-full w-full object-cover"
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

        {/* trust strip */}
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
            <span className="eyebrow mx-auto">Our Services</span>
            <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy leading-tight">
              What we provide to Seafarer Newfoundland and Labrador
            </h2>
            <p className="mt-5 text-base md:text-lg text-text-mid">
              Whether it’s a cup of coffee, a phone call home, or someone who listens, we’re here to say: you are not alone.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {[
              {
                i: HeartHandshake,
                title: "Welfare service",
                body: "We provide seafarer welfare services that are practical, personal, and compassionate. From ship visits and crisis support irrespective of your faith, background or time in port.",
              },
              {
                i: MapPin,
                title: "Transportation Services",
                body: "Transportation service for personal shopping and community connection.",
              },
              {
                i: Users,
                title: "Inclusive Environment",
                body: "We create a safe, welcoming space for seafarers from all walks of life.",
              }
            ].map(({ i: Icon, title, body }) => (
              <div
                key={title}
                className="group rounded-2xl p-7 md:p-8 transition-all hover:-translate-y-1 flex flex-col items-start bg-warm-gray hover:shadow-card-hover"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-coral-pale">
                  <Icon className="h-6 w-6 text-coral" />
                </span>
                <h3 className="mt-5 text-xl md:text-2xl font-extrabold leading-tight text-navy">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed flex-1 text-text-mid">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── THE SILENT HEROES ─────────── */}
      <section className="py-20 bg-coral-pale/30 border-y border-border">
        <div className="container-page">
          <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
            <div className="flex-1">
              <span className="eyebrow">The Silent Heroes of Global Trades</span>
              <h2 className="mt-5 text-3xl md:text-4xl font-extrabold text-navy leading-tight">
                The Silent Heroes of Global Trades
              </h2>
              <p className="mt-5 text-base md:text-lg text-text-mid leading-relaxed">
                Behind every shipment is a crew of dedicated seafarers, men and women from across the globe who spend months at sea, working long hours under demanding conditions. These maritime workers are essential to the global economy, yet they are among the most overlooked and vulnerable. Many face mental health challenges, social isolation, and lack of basic support when docked in foreign ports.
              </p>
              <p className="mt-4 text-base md:text-lg text-text-mid leading-relaxed">
                Here in Newfoundland and Labrador, our ports welcome an average of 84 vessels each month, bringing seafarers to our shores, often with few connections, limited mobility, and minimal resources during their brief time on land.
              </p>
              <p className="mt-5 text-lg font-bold text-navy leading-relaxed">
                That’s where MTS Canada – Newfoundland and Labrador Station comes in.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button onClick={() => setIsDonateOpen(true)} size="lg" className="bg-coral hover:bg-coral-light text-white font-bold shadow-warm h-12 cursor-pointer">
                  Donate <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="hidden md:flex w-full md:w-4/12 justify-center">
              <div className="grid h-48 w-48 place-items-center rounded-full bg-white shadow-soft border-4 border-coral/10">
                <Ship className="h-20 w-20 text-coral" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── STRUCTURE DIAGRAM ─────────── */}
      <section className="py-20 md:py-24 bg-warm-gray">
        <div className="container-page">
          <div className="text-center max-w-3xl mx-auto">
            <span className="eyebrow mx-auto">Commitment to care</span>
            <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy leading-tight">
              At the heart of the Newfoundland and Labrador Seafarers' Centre is a commitment to care
            </h2>
            <p className="mt-5 text-base md:text-lg text-text-mid">
              We are part of the larger Mission to Seafarers Canada and the global Mission to Seafarers network, but our work is deeply rooted in the needs and communities of Newfoundland and Labrador’s ports.
            </p>
          </div>

          <div className="mt-14 max-w-5xl mx-auto">
            <div className="rounded-[2rem] sm:rounded-[2.5rem] bg-navy-dark p-3 sm:p-5 md:p-8 shadow-xl text-white transition-all border border-navy/50">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-2 px-2 sm:px-2">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/10 text-coral border border-white/5 shadow-inner">
                  <Globe2 className="h-6 w-6" />
                </span>
                <div className="flex-1">
                   <div className="inline-block bg-white/10 backdrop-blur px-3 py-1 rounded-full mb-2 border border-white/5">
                     <p className="text-[10px] font-extrabold uppercase tracking-widest text-coral-light">Global Network</p>
                   </div>
                   <h3 className="text-xl md:text-2xl font-extrabold text-white">The Mission to Seafarers</h3>
                </div>
              </div>

              <div className="w-full flex justify-center -mb-3 mt-4 relative z-10">
                <div className="grid h-8 w-8 place-items-center rounded-full bg-navy-dark border-[3px] border-navy shadow-sm">
                  <ChevronDown className="h-4 w-4 text-white/50" />
                </div>
              </div>

              <div className="rounded-[1.75rem] sm:rounded-[2rem] bg-navy p-3 sm:p-5 md:p-8 shadow-inner border border-white/5 transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

                <div className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-2 px-2 sm:px-2">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/10 text-coral-light border border-white/5">
                    <Building2 className="h-6 w-6" />
                  </span>
                  <div className="flex-1">
                     <div className="inline-block bg-white/10 backdrop-blur px-3 py-1 rounded-full mb-2 border border-white/5">
                       <p className="text-[10px] font-extrabold uppercase tracking-widest text-coral-light">National Body</p>
                     </div>
                     <h3 className="text-xl md:text-2xl font-extrabold text-white">Mission to Seafarers Canada</h3>
                  </div>
                </div>

                <div className="w-full flex justify-center -mb-3 mt-4 relative z-10">
                  <div className="grid h-8 w-8 place-items-center rounded-full bg-navy border-[3px] border-white shadow-sm">
                    <ChevronDown className="h-4 w-4 text-white/70" />
                  </div>
                </div>

                <div className="rounded-2xl sm:rounded-[1.5rem] bg-gradient-coral p-5 sm:p-7 md:p-10 shadow-[0_10px_40px_-10px_rgba(240,90,74,0.5)] text-white relative overflow-hidden group transition-all">
                  <div className="absolute top-1/2 left-1/2 w-full aspect-square bg-white/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-pulse-slow" />
                  
                  <div className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-coral shadow-lg">
                      <HomeIcon className="h-7 w-7" />
                    </span>
                    <div className="flex-1">
                        <div className="inline-block bg-white/20 backdrop-blur px-3 py-1 rounded-full mb-2 border border-white/20 shadow-sm">
                          <p className="text-[10px] font-extrabold uppercase tracking-widest text-white">Local Base</p>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-white">Newfoundland and Labrador Station</h3>
                        <p className="mt-3 text-sm md:text-base text-white/95 max-w-3xl leading-relaxed font-medium">
                          Our Mission: To welcome and support seafarers visiting Newfoundland and Labrador by providing a safe, inclusive space where they can rest, connect with loved ones, and access practical support and pastoral care, no matter their faith, background, or time in port.
                        </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center max-w-2xl mx-auto flex justify-center">
            <Button asChild size="lg" className="bg-navy hover:bg-navy-light text-white font-bold h-12">
              <Link to="/about">Introduction to the Mission to seafarers <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ─────────── DONATE / VOLUNTEER FOOTER BAND ─────────── */}
      <section 
        className="relative py-20 md:py-24 bg-cover bg-center bg-no-repeat bg-warm-gray"
        style={{ backgroundImage: `url("${waterImg}")` }}
      >
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />
        
        <div className="container-page relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="eyebrow mx-auto bg-white/50 backdrop-blur px-2 py-1 rounded-md">Join Our Community</span>
            <h2 className="mt-5 text-2xl md:text-3xl lg:text-4xl font-extrabold text-navy leading-tight drop-shadow-sm">
              Join us in supporting the seafarers who keep the world moving
            </h2>
            <p className="mt-3 text-lg text-navy font-medium max-w-2xl mx-auto">
              Seafarers keep global trade moving we’re here to support them with compassion, care, and community connection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Volunteer — local */}
            <div className="rounded-3xl bg-white/95 backdrop-blur p-8 md:p-10 shadow-card hover:shadow-card-hover transition-all border-2 border-coral/15 flex flex-col justify-between">
              <div>
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-coral-pale text-coral">
                  <Users className="h-6 w-6" />
                </span>
                <p className="mt-5 text-[11px] font-extrabold uppercase tracking-widest text-coral">Be Part Of Us</p>
                <h3 className="mt-2 text-2xl md:text-3xl font-extrabold text-navy leading-tight">
                  Volunteer or partner with us to make a difference.
                </h3>
                <p className="mt-3 mb-8 text-base text-text-mid leading-relaxed">
                  Join Our Community: Learn how you can support and connect with seafarers today.
                </p>
              </div>

              <Button asChild size="lg" className="w-full bg-coral hover:bg-coral-light text-white font-bold shadow-warm h-12">
                <Link to="/get-involved/">Join Our Community <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>

            {/* Donate — national */}
            <div className="rounded-3xl bg-gradient-hero text-white p-8 md:p-10 shadow-soft relative overflow-hidden flex flex-col justify-between">
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-coral/30 blur-3xl" />
              <div className="relative flex-1">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/15 text-coral-light">
                  <Heart className="h-6 w-6" />
                </span>
                <p className="mt-5 text-[11px] font-extrabold uppercase tracking-widest text-coral-light">Support The Seafarers</p>
                <h3 className="mt-2 text-2xl md:text-3xl font-extrabold !text-white leading-tight">
                  Every act of kindness reaches the heart of someone far from home.
                </h3>
              </div>
              <div className="relative mt-8">
                <Button onClick={() => setIsDonateOpen(true)} size="lg" className="w-full bg-coral hover:bg-coral-light text-white font-bold shadow-warm h-12 px-2 text-sm sm:text-base cursor-pointer">
                  Support Seafarers Today <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center max-w-3xl mx-auto bg-white/90 backdrop-blur p-8 md:p-10 rounded-3xl shadow-sm border border-border">
            <h3 className="text-xl md:text-2xl font-extrabold text-navy">Ready to welcome seafarers to our shores?</h3>
            <p className="mt-3 text-text-mid">Support our station in providing a warm welcome to seafarers arriving in Newfoundland and Labrador</p>
            <Button onClick={() => setIsDonateOpen(true)} variant="outline" className="mt-6 border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold h-12 px-8 cursor-pointer">
              Donate <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
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