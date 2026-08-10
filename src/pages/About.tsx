import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Navigation, 
  HeartPulse, 
  Smartphone, 
  Globe2, 
  HandHeart, 
  MapPin, 
  Sparkles,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

// Hero Image - Port of St. John's
import aboutImg from "@/assets/SaintJohnport.jpg";

// Images - History Timeline
import historyImg1 from "@/assets/image (5).png";
import historyImg2 from "@/assets/image (3).png";
import historyImg3 from "@/assets/image (4).png";

// Images - Team
import judithMainImg from "@/assets/Toronto Station Chaplin And manager-Rev.Judith Alltree.png";
import aliciaImg from "@/assets/Alicia Hamming Navarrete.jpg";
import danImg from "@/assets/Pastor Dan Phannenhour- Hamilton Station Chapalin-.jpg";

// PDFs
import globalImpactPdf from "@/assets/pdf/FULLY-Signed-2023-Trustees-Annual-Report-and-Accnts.pdf";
import regionalImpactPdf from "@/assets/pdf/FULLY-Signed-2023-Trustees-Annual-Report-and-Accnts.pdf";

// New local gallery photos
import slide1 from "@/assets/Newphotos/WhatsApp Image 2026-07-07 at 10.16.16 AM.jpeg";
import slide2 from "@/assets/Newphotos/WhatsApp Image 2026-07-07 at 10.16.17 AM (1).jpeg";
import slide3 from "@/assets/Newphotos/WhatsApp Image 2026-07-07 at 10.16.17 AM (2).jpeg";
import slide4 from "@/assets/Newphotos/WhatsApp Image 2026-07-07 at 10.16.17 AM (3).jpeg";
import slide5 from "@/assets/Newphotos/WhatsApp Image 2026-07-07 at 10.16.17 AM (4).jpeg";
import slide6 from "@/assets/Newphotos/WhatsApp Image 2026-07-07 at 10.16.17 AM (5).jpeg";
import slide7 from "@/assets/Newphotos/WhatsApp Image 2026-07-07 at 10.16.17 AM (6).jpeg";
import slide8 from "@/assets/Newphotos/WhatsApp Image 2026-07-07 at 10.16.17 AM.jpeg";
import slide9 from "@/assets/Newphotos/WhatsApp Image 2026-07-07 at 10.16.18 AM (1).jpeg";
import slide10 from "@/assets/Newphotos/WhatsApp Image 2026-07-07 at 10.16.18 AM (2).jpeg";
import slide11 from "@/assets/Newphotos/WhatsApp Image 2026-07-07 at 10.16.18 AM (3).jpeg";
import slide12 from "@/assets/Newphotos/WhatsApp Image 2026-07-07 at 10.16.18 AM (4).jpeg";
import slide13 from "@/assets/Newphotos/WhatsApp Image 2026-07-07 at 10.16.18 AM (5).jpeg";
import slide14 from "@/assets/Newphotos/WhatsApp Image 2026-07-07 at 10.16.18 AM (6).jpeg";
import slide15 from "@/assets/Newphotos/WhatsApp Image 2026-07-07 at 10.16.18 AM (7).jpeg";
import slide16 from "@/assets/Newphotos/WhatsApp Image 2026-07-07 at 10.16.18 AM (8).jpeg";
import slide17 from "@/assets/Newphotos/WhatsApp Image 2026-07-07 at 10.16.17 AM.jpeg";
import slide18 from "@/assets/Newphotos/WhatsApp Image 2026-07-07 at 10.16.19 AM.jpeg";
import slide19 from "@/assets/Newphotos/WhatsApp Image 2026-07-07 at 10.16.16 AM (1).jpeg";
import slide20 from "@/assets/Newphotos/WhatsApp Image 2026-07-07 at 10.16.16 AM (2).jpeg";
import slide21 from "@/assets/Newphotos/WhatsApp Image 2026-07-07 at 10.16.16 AM (3).jpeg";
import slide22 from "@/assets/Newphotos/WhatsApp Image 2026-07-07 at 10.16.16 AM (4).jpeg";

const newPhotos = [
  slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10,
  slide11, slide12, slide13, slide14, slide15, slide16, slide17, slide18, slide19, slide20,
  slide21, slide22
];

const historyBlocks = [
  {
    era: "Late 19th Century",
    title: "Early Maritime Ministries in Newfoundland and Labrador",
    content: (
      <>
        <p>During this period, seafarers visiting Newfoundland and Labrador received pastoral care from various religious organizations. For example, the Moravian Church established mission stations along the Labrador coast, providing spiritual guidance and support to local communities and visiting seafarers.</p>
      </>
    ),
    img: historyImg3,
  },
  {
    era: "1892",
    title: "Grenfell Mission Founded",
    content: (
      <>
        <p>British medical missionary Sir Wilfred Grenfell founded the Grenfell Mission in 1892, initially as a branch of The Royal National Mission to Deep Sea Fishermen. The mission provided medical and social services to fishermen and coastal communities in northern Newfoundland and Labrador.</p>
      </>
    ),
    img: historyImg2,
  },
  {
    era: "Early to Mid-20th Century",
    title: "Seafarers’ Welfare in St. John’s",
    content: (
      <>
        <p>During this period, various organizations provided support to seafarers in St. John’s. The King George V Seamen’s Institute on Water Street served as a hub for seafarers, offering accommodation, recreational facilities, and spiritual services. Both Catholic and Anglican charities were active in ministering to the needs of seafarers visiting the port.</p>
      </>
    ),
    img: historyImg1,
  },
  {
    era: "2021–2025",
    title: "Renewed Focus on Seafarers’ Welfare",
    content: (
      <>
        <p>Beginning in the early 2020s, renewed efforts emerged to reestablish formal welfare services for seafarers in Newfoundland and Labrador. A pivotal moment came in September 2023, when the Fisheries and Marine Institute of Memorial University hosted a seminar that brought together stakeholders from across the province and country. This led to the formation of a Port Welfare Committee in St. John’s to coordinate and advocate for improved services.</p>
        <p className="mt-4">Building on this momentum, a master’s thesis completed in 2024 at Memorial University assessed the needs of seafarers in the region, confirming the urgent demand for a reliable, safe, and sustainable welfare facility. As of 2025, work is actively underway to formally establish The Mission to Seafarers Newfoundland and Labrador.</p>
      </>
    ),
    img: historyImg3, 
  }
];

const teamMembers = [
  {
    name: "Morgane Sheppard",
    role: "Station Manager",
    img: aliciaImg,
    bio: (
      <>
        <p>
          Morgane is dedicated to supporting seafarers and ensuring their time in Newfoundland and Labrador is as welcoming and comfortable as possible. As Station Manager of the Seafarers Centre, she works daily to provide visiting seafarers with access to essential services, resources, and support. She holds a Master’s degree in Maritime Studies with a focus on safety and the human element, and brings both academic knowledge and practical experience in maritime safety, health, and welfare.
        </p>
        <p className="mt-4">
          Fluent in English and French, Morgane values building strong relationships with maritime organizations, local partners, and seafarers. Her previous experience includes internships and project work with the International Maritime Organization (IMO) and the United Nations Conference on Trade and Development (UNCTAD).
        </p>
      </>
    )
  },
  {
    name: "Captain Christopher Hearn",
    role: "Director, Centre for Marine Simulation",
    img: danImg,
    bio: (
      <>
        <p>
          Member of the Nautical Institute (MNI), Captain Christopher Hearn began his career after graduating from the Marine Institute’s Nautical Science Program in 1994. He quickly moved his way through the marine ranks and certification to Master Mariner and obtained command of several types of vessels in the deep sea and subsea sectors.
        </p>
        <p className="mt-4">
          Captain Hearn returned to the Marine Institute in 2008 as the Director of the Centre for Marine Simulation. The Centre is the largest and most comprehensive marine simulation facility in North America. He has maintained an active role in the advancement of the maritime industry, assisting government agencies with development of competency strategies for on-ship operations.
        </p>
      </>
    )
  },
  {
    name: "REV. JUDITH ALLTREE",
    role: "Board Director / Mentor",
    img: judithMainImg,
    bio: (
      <>
        <p>
          Rev. Judith Alltree’s life and careers have all involved working with people from different countries and cultures. After 9 years in parish ministry, Judith joined the Mission to Seafarers in 2012 as Executive Director for MtS Toronto. In 2019, she was appointed Regional Director for Mission to Seafarers Canada, serving 10 port cities and 12 MtS stations.
        </p>
        <p className="mt-4">
          One of her biggest projects was to investigate the possibility of opening a Mission centre in the Port of St. John’s, Newfoundland and Labrador. As a result of a 2023 meeting, Rev. Alltree founded a Port Welfare Committee. Rev. Alltree continues to support the PWC as ex-officio and mentor, having recently received the North American Maritime Ministry Association Distinguished Service award.
        </p>
      </>
    )
  }
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setVisibleItems(4);
      } else if (window.innerWidth >= 1024) {
        setVisibleItems(3);
      } else if (window.innerWidth >= 768) {
        setVisibleItems(2);
      } else {
        setVisibleItems(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, newPhotos.length - visibleItems);
  const nextSlide = () => setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));

  return (
    <>
      {/* ─────────── HERO SECTION (Toronto Style) ─────────── */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-navy-dark min-h-[45vh] flex items-center justify-center border-b border-navy-dark">
        <div className="absolute inset-0 z-0">
          <img 
            src={aboutImg} 
            alt="Port of St. John's" 
            className="w-full h-full object-cover object-center opacity-60 mix-blend-overlay" 
          />
          {/* Dark overlay to ensure text is readable */}
          <div className="absolute inset-0 bg-navy-dark/75 backdrop-blur-[2px]" />
        </div>
        
        <div className="container-page relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-md">
            Newfoundland and Labrador Station History
          </h1>
        </div>
      </section>

      {/* ─────────── HISTORY TIMELINE (Toronto Style) ─────────── */}
      <section className="py-24 bg-warm-gray overflow-hidden">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="text-coral font-bold tracking-widest uppercase text-sm">Our Story</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-navy leading-tight">
              Decades of Care in Newfoundland and Labrador
            </h2>
          </div>

          <div className="space-y-20 md:space-y-32 relative max-w-6xl mx-auto">
            {/* Vertical connecting line for desktop */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[2px] bg-coral/20 -translate-x-1/2"></div>

            {historyBlocks.map((block, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-24 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Center Dot */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-4 border-coral items-center justify-center z-10 shadow-md">
                  <div className="w-3 h-3 bg-coral rounded-full"></div>
                </div>

                {/* Image Side */}
                <div className="w-full md:w-1/2 relative group">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-card group-hover:shadow-card-hover transition-all duration-500 border-4 border-white">
                    <img 
                      src={block.img} 
                      alt={block.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                  {/* Year Badge overlay on desktop */}
                  <div className={`absolute top-8 ${idx % 2 !== 0 ? '-left-8' : '-right-8'} bg-navy text-white px-8 py-3 rounded-xl shadow-xl z-20 hidden md:block transform transition-transform group-hover:-translate-y-2`}>
                    <span className="text-xl font-bold tracking-wider">{block.era}</span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 space-y-6 bg-white md:bg-transparent p-8 md:p-0 rounded-3xl shadow-sm md:shadow-none border md:border-none border-border relative z-10">
                  {/* Year Badge for mobile */}
                  <div className="md:hidden inline-block bg-coral text-white px-4 py-2 rounded-lg text-sm font-bold mb-2">
                    {block.era}
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-extrabold text-navy">{block.title}</h3>
                  
                  <div className="text-text-mid text-lg leading-relaxed space-y-4 font-medium">
                    {block.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── TEAM SECTION (Toronto Featured Leader Style) ─────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-page max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="eyebrow">Leadership</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-navy leading-tight">
              Newfoundland and Labrador Team
            </h2>
          </div>

          {/* Render all NL members using the Toronto "Featured" layout because of long bios */}
          <div className="space-y-12 md:space-y-16">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="grid lg:grid-cols-12 gap-10 md:gap-12 items-center bg-warm-gray p-8 md:p-12 rounded-3xl shadow-sm">
                <div className="lg:col-span-5">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full rounded-2xl shadow-soft object-cover aspect-[4/5]"
                  />
                </div>
                <div className="lg:col-span-7">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-navy leading-tight">
                    {member.name}
                  </h2>
                  <h3 className="mt-4 text-lg font-bold text-coral uppercase tracking-wider">
                    {member.role}
                  </h3>
                  <div className="mt-6 space-y-4 text-base md:text-lg text-text-mid leading-relaxed">
                    {member.bio}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── PORT WELFARE COMMITTEE (Toronto Secondary Cards Style) ─────────── */}
      <section className="py-20 md:py-28 bg-warm-gray">
        <div className="container-page max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight">
              Port Welfare Committee of Newfoundland and Labrador
            </h2>
            <p className="mt-6 text-lg text-text-mid leading-relaxed font-medium max-w-4xl mx-auto">
              The Port Welfare Committee for Newfoundland and Labrador is a committed group of local champions from the maritime, labour, stakeholder and community sectors who have come together with a shared purpose: to ensure the wellbeing of seafarers visiting our province. 
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* PWC Member 1 */}
            <div className="flex flex-col items-center text-center bg-white border border-border rounded-3xl p-10 shadow-card">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-navy text-white flex items-center justify-center text-4xl md:text-5xl font-bold shadow-soft mb-6">
                EP
              </div>
              <h3 className="text-xl font-bold text-navy">Rev. Eric Phinney</h3>
              <p className="text-coral font-bold uppercase tracking-wider text-sm mt-1 mb-4">Regional Director</p>
              <p className="text-text-mid font-medium break-all">eric.phinney@mtsmail.org</p>
              <p className="text-text-mid font-medium mt-1">1-506-643-0799</p>
            </div>

            {/* PWC Member 2 */}
            <div className="flex flex-col items-center text-center bg-white border border-border rounded-3xl p-10 shadow-card">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-navy text-white flex items-center justify-center text-4xl md:text-5xl font-bold shadow-soft mb-6">
                MC
              </div>
              <h3 className="text-xl font-bold text-navy">Marsha Clyne</h3>
              <p className="text-coral font-bold uppercase tracking-wider text-sm mt-1 mb-4">Regional Fundraising Manager</p>
              <p className="text-text-mid font-medium break-all">marsha.clyne@missiontoseafarers.ca</p>
              <p className="text-text-mid font-medium mt-1">1-647-773-4841</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── NEW PHOTO GALLERY SLIDER SECTION ─────────── */}
      <section className="py-20 md:py-24 bg-white border-t border-border overflow-hidden">
        <div className="container-page max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow mx-auto">Our Community in Action</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-navy leading-tight">
              Newfoundland and Labrador Seafarers' Centre Gallery
            </h2>
            <p className="mt-4 text-lg text-text-mid font-medium">
              A glimpse into our local facilities, activities, and dedicated teams welcoming international crews to our ports.
            </p>
          </div>

          <div className="relative px-8 md:px-12">
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-coral hover:text-white text-navy p-3 rounded-full shadow-lg transition-all duration-300 border border-border focus:outline-none"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
              >
                {newPhotos.map((photo, i) => (
                  <div key={i} className="shrink-0 p-2" style={{ width: `${100 / visibleItems}%` }}>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-border bg-white group">
                      <img 
                        src={photo} 
                        alt={`NL Seafarers Centre Activity ${i + 1}`} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-coral hover:text-white text-navy p-3 rounded-full shadow-lg transition-all duration-300 border border-border focus:outline-none"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-4">
            <div className="flex flex-wrap gap-2 justify-center items-center">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 shrink-0 ${
                    currentIndex === idx ? "w-6 bg-coral" : "w-2 bg-navy/20 hover:bg-navy/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── IMPACT SECTION ─────────── */}
      <section className="py-20 md:py-28 bg-warm-gray border-t border-border">
        <div className="container-page max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow mx-auto">Our Impact</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-navy leading-tight">
              Supporting Seafarers in Newfoundland and Labrador & Beyond
            </h2>
            <p className="mt-6 text-lg text-text-mid font-medium">
              Did you know that 90% of the world’s goods are transported by sea?
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-border mb-20 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-extrabold text-navy mb-4">
              Seafarers: Newfoundland and Labrador At Mission to Seafarers Canada
            </h3>
            <p className="text-lg text-text-mid leading-relaxed font-medium">
              We take pride in being the trusted support network for seafarers arriving at ports across Canada, especially in Newfoundland and Labrador. Seafarers often face long stretches at sea, feeling isolated and far from home. Through your generosity, we provide the essential care, respond to countless spiritual, emotional, and physical needs, and provide a human connection that makes a difference in their lives.
            </p>
          </div>

          <div className="bg-navy p-10 md:p-14 rounded-3xl shadow-xl text-white mb-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
            <h3 className="text-2xl md:text-3xl font-extrabold text-center mb-10">2024 Milestone</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/20">
              <div className="py-4">
                <p className="text-5xl md:text-6xl font-extrabold text-coral">2,900+</p>
                <p className="mt-3 text-sm uppercase tracking-widest font-bold opacity-90">ships visited across canada</p>
              </div>
              <div className="py-4">
                <p className="text-5xl md:text-6xl font-extrabold text-coral">11,500</p>
                <p className="mt-3 text-sm uppercase tracking-widest font-bold opacity-90">seafarer welcomed into our centers</p>
              </div>
              <div className="py-4">
                <p className="text-5xl md:text-6xl font-extrabold text-coral">8,000+</p>
                <p className="mt-3 text-sm uppercase tracking-widest font-bold opacity-90">essential rides to shore provided</p>
              </div>
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto mb-12">
            <h3 className="text-3xl font-extrabold text-navy mb-6">Impact Beyond Numbers</h3>
            <p className="text-lg text-text-mid leading-relaxed font-medium mb-6">
              Behind each number is a meaningful story: a crew member able to call home thanks to a SIM card we provided, or a seafarer who hadn’t set foot on land for weeks finally stepping ashore. Our impact goes beyond numbers; it’s about human connection and making seafarers feel seen, valued, and cared for. As the maritime industry evolves with disruptions, strikes, and shifting global tides, our mission remains constant: to stand by those who keep global trade moving. With 10 stations and growing, we are committed to providing unwavering support to seafarers across Canada.
            </p>
            <p className="text-lg text-navy font-bold">
              But we need your continued support to ensure we can keep serving those who need us most.
              <br className="hidden md:block" />
              Will you join us? Your generosity ensures that when the next ship arrives, we’ll be ready, armed with warmth, resources, and a simple message: You are not alone.
            </p>
          </div>

          {/* <div className="bg-white border border-border rounded-3xl p-8 md:p-12 shadow-sm mb-24 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-5">
               <Globe2 className="w-64 h-64 text-navy" />
             </div>
             <h3 className="text-2xl md:text-3xl font-extrabold text-navy mb-8 relative z-10">Regional Impact Highlights</h3>
             <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 relative z-10">
               <div>
                 <ul className="space-y-4">
                   <li className="flex items-start gap-3">
                     <span className="h-2 w-2 rounded-full bg-coral mt-2 shrink-0" />
                     <p className="text-sm text-text-mid font-medium"><strong className="text-navy">East Asia:</strong> Major hubs in Singapore, Busan, and the Philippines.</p>
                   </li>
                   <li className="flex items-start gap-3">
                     <span className="h-2 w-2 rounded-full bg-coral mt-2 shrink-0" />
                     <p className="text-sm text-text-mid font-medium"><strong className="text-navy">Middle East & South Asia:</strong> Growing chaplaincy in Bahrain, Colombo, and India.</p>
                   </li>
                   <li className="flex items-start gap-3">
                     <span className="h-2 w-2 rounded-full bg-coral mt-2 shrink-0" />
                     <p className="text-sm text-text-mid font-medium"><strong className="text-navy">Africa:</strong> Expanded support in Durban and Mombasa, including solar, transport, and digital upgrades.</p>
                   </li>
                   <li className="flex items-start gap-3">
                     <span className="h-2 w-2 rounded-full bg-coral mt-2 shrink-0" />
                     <p className="text-sm text-text-mid font-medium"><strong className="text-navy">Europe:</strong> Centers in Rotterdam, Rouen, and Tilbury with a focus on female seafarers.</p>
                   </li>
                 </ul>
               </div>
               <div>
                 <ul className="space-y-4">
                   <li className="flex items-start gap-3">
                     <span className="h-2 w-2 rounded-full bg-coral mt-2 shrink-0" />
                     <p className="text-sm text-text-mid font-medium"><strong className="text-navy">Latin America:</strong> Renewed programs in Brazil, Argentina, and Costa Rica.</p>
                   </li>
                   <li className="flex items-start gap-3">
                     <span className="h-2 w-2 rounded-full bg-coral mt-2 shrink-0" />
                     <div className="text-sm text-text-mid font-medium">
                       <strong className="text-navy">USA & Canada:</strong> Expanding with:
                       <ul className="ml-5 mt-2 space-y-1 list-disc text-sm">
                         <li>New Canadian Regional Director to unify operations</li>
                         <li>Regional Fundraising Manager to drive donor engagement</li>
                       </ul>
                     </div>
                   </li>
                   <li className="flex items-start gap-3">
                     <span className="h-2 w-2 rounded-full bg-coral mt-2 shrink-0" />
                     <p className="text-sm text-text-mid font-medium"><strong className="text-navy">Oceania & Australia:</strong> Supporting crews in 29 Pacific ports.</p>
                   </li>
                 </ul>
               </div>
             </div>
             <div className="mt-10 relative z-10 flex justify-start">
               <Button asChild variant="outline" className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold h-12 px-8">
                 <a href={regionalImpactPdf} target="_blank" rel="noopener noreferrer">Learn More</a>
               </Button>
             </div>
          </div> */}

          {/* Projected Impact in NL */}
          {/* <div className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h3 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight">
                Projected Impact in Newfoundland and Labrador: Making a Difference in Our First Year
              </h3>
              <p className="mt-4 text-lg text-text-mid font-medium leading-relaxed">
                Our Newfoundland and Labrador initiative is poised for growth, and with your help, we can make a significant impact. Here are our realistic goals for the first year of operations based on the St. John’s Port Authority 2024 report and the seafarer traffic forecast for the region.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
               <div className="bg-white rounded-3xl p-8 border border-border shadow-sm">
                 <div className="flex items-center gap-4 mb-4">
                   <span className="bg-coral text-white font-bold py-1 px-3 rounded-md text-sm tracking-wider uppercase">Goal 1</span>
                   <h4 className="text-xl font-extrabold text-navy">Ship Visits</h4>
                 </div>
                 <p className="font-bold text-coral text-lg mb-4">500 Visits in Year 1</p>
                 <ul className="space-y-2 mb-4 text-text-mid font-medium text-sm">
                   <li>• Projected Number of Ships Visited: 500</li>
                   <li>• Average Seafarers per Ship: 20-25</li>
                   <li>• Total Number of Seafarers Impacted: 10,000–12,500</li>
                 </ul>
                 <p className="text-text-mid text-sm font-medium leading-relaxed">
                   Every visit will provide essential support like SIM cards, toiletries, snacks, and emotional care through our team of chaplains and volunteers. These visits will be a lifeline for seafarers in need of a connection while in port.
                 </p>
               </div>

               <div className="bg-white rounded-3xl p-8 border border-border shadow-sm">
                 <div className="flex items-center gap-4 mb-4">
                   <span className="bg-coral text-white font-bold py-1 px-3 rounded-md text-sm tracking-wider uppercase">Goal 2</span>
                   <h4 className="text-xl font-extrabold text-navy">Seafarers’ Centers</h4>
                 </div>
                 <p className="font-bold text-coral text-lg mb-4">Serving 12,500 Seafarers</p>
                 <ul className="space-y-2 mb-4 text-text-mid font-medium text-sm">
                   <li>• Total Seafarers Served in Year 1: 12,500</li>
                   <li>• Key Services Provided: Free Wi-Fi, comfortable lounges, snacks</li>
                 </ul>
                 <p className="text-text-mid text-sm font-medium leading-relaxed">
                   With local information, support resources, and volunteer assistance, the seafarers’ centers will serve as safe, welcoming spaces for rest and connection. Here, seafarers can recharge and reconnect with loved ones before they head back to sea.
                 </p>
               </div>

               <div className="bg-white rounded-3xl p-8 border border-border shadow-sm">
                 <div className="flex items-center gap-4 mb-4">
                   <span className="bg-coral text-white font-bold py-1 px-3 rounded-md text-sm tracking-wider uppercase">Goal 3</span>
                   <h4 className="text-xl font-extrabold text-navy">Mental Health & Crisis Support</h4>
                 </div>
                 <p className="font-bold text-coral text-lg mb-4">Reaching 1,000 Seafarers</p>
                 <ul className="space-y-2 mb-4 text-text-mid font-medium text-sm">
                   <li>• Seafarers Reached with Mental Health Support: 1,000</li>
                   <li>• Number of Crisis Interventions Provided: 100</li>
                   <li>• Emergency Support Available 24/7: Yes</li>
                 </ul>
                 <p className="text-text-mid text-sm font-medium leading-relaxed">
                   Life at sea can be stressful, and we are committed to offering confidential emotional support and mental health services to seafarers who may be facing challenges. Our team will be available for crisis interventions, referrals, and 24/7 emergency resources.
                 </p>
               </div>

               <div className="bg-white rounded-3xl p-8 border border-border shadow-sm">
                 <div className="flex items-center gap-4 mb-4">
                   <span className="bg-coral text-white font-bold py-1 px-3 rounded-md text-sm tracking-wider uppercase">Goal 4</span>
                   <h4 className="text-xl font-extrabold text-navy">Transportation Assistance</h4>
                 </div>
                 <p className="font-bold text-coral text-lg mb-4">Facilitating 2,000 Rides</p>
                 <ul className="space-y-2 mb-4 text-text-mid font-medium text-sm">
                   <li>• Total Number of Rides Provided: 2,000</li>
                   <li>• Key Destinations Supported: Local stores (Walmart, pharmacies)</li>
                 </ul>
                 <p className="text-text-mid text-sm font-medium leading-relaxed">
                   We will ensure that seafarers who can go ashore can get the essentials they need, from toiletries to transportation, to make their time in port as smooth and stress-free as possible.
                 </p>
               </div>

               <div className="bg-white rounded-3xl p-8 border border-border shadow-sm sm:col-span-2 max-w-3xl mx-auto w-full">
                 <div className="flex items-center gap-4 mb-4">
                   <span className="bg-coral text-white font-bold py-1 px-3 rounded-md text-sm tracking-wider uppercase">Goal 5</span>
                   <h4 className="text-xl font-extrabold text-navy">Community & Volunteer Engagement</h4>
                 </div>
                 <p className="font-bold text-coral text-lg mb-4">Building Local Networks</p>
                 <ul className="space-y-2 mb-4 text-text-mid font-medium text-sm">
                   <li>• Number of Volunteers Trained: 50</li>
                   <li>• Number of Corporate Partners Engaged: 5</li>
                   <li>• Community Outreach Events: 10</li>
                 </ul>
                 <p className="text-text-mid text-sm font-medium leading-relaxed">
                   In our first year, we aim to build a robust network of volunteers and corporate partners to ensure long-term sustainability. Through training programs and local outreach, we will foster community involvement to support our mission.
                 </p>
               </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* ─────────── FUNDING PROGRAMS LIST ─────────── */}
      <section className="py-12 bg-white pb-20">
        <div className="container-page max-w-5xl mx-auto">
          <h4 className="text-2xl md:text-3xl font-extrabold text-navy mb-6 text-center">Programs You Can Support</h4>
          <p className="text-center text-base text-text-mid mb-10 font-medium">Your gift will directly contribute to one or more of the following impactful programs:</p>
          <ul className="grid sm:grid-cols-2 gap-4">
            <li className="bg-warm-gray rounded-2xl p-6 flex items-start gap-4 border border-border">
              <HandHeart className="w-6 h-6 text-coral shrink-0" />
              <p className="text-sm font-medium leading-relaxed text-text-mid"><strong className="text-navy block mb-1">Ship Visits:</strong> Delivering onboard care and essential services to seafarers, right where they work and live at sea.</p>
            </li>
            <li className="bg-warm-gray rounded-2xl p-6 flex items-start gap-4 border border-border">
              <Users className="w-6 h-6 text-coral shrink-0" />
              <p className="text-sm font-medium leading-relaxed text-text-mid"><strong className="text-navy block mb-1">Seafarers’ Centers Activities:</strong> Offering a safe, welcoming space on land for rest, recreation, and connection—a home away from home.</p>
            </li>
            <li className="bg-warm-gray rounded-2xl p-6 flex items-start gap-4 border border-border">
              <HeartPulse className="w-6 h-6 text-coral shrink-0" />
              <p className="text-sm font-medium leading-relaxed text-text-mid"><strong className="text-navy block mb-1">Mental Health & Crisis Support:</strong> Providing emotional and psychological support to seafarers facing stress, isolation, and emergencies.</p>
            </li>
            <li className="bg-warm-gray rounded-2xl p-6 flex items-start gap-4 border border-border">
              <MapPin className="w-6 h-6 text-coral shrink-0" />
              <p className="text-sm font-medium leading-relaxed text-text-mid"><strong className="text-navy block mb-1">Transportation Assistance:</strong> Ensuring access to local stores, services, and places of worship through safe and reliable transport options.</p>
            </li>
            <li className="bg-warm-gray rounded-2xl p-6 flex items-start gap-4 border border-border sm:col-span-2">
              <Sparkles className="w-6 h-6 text-coral shrink-0" />
              <p className="text-sm font-medium leading-relaxed text-text-mid"><strong className="text-navy block mb-1">Community & Volunteer Engagement:</strong> Mobilizing local volunteers and building partnerships to create a strong support network for visiting seafarers.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* ─────────── CTA: BE PART OF THE WELCOME (Toronto Style) ─────────── */}
      <section className="py-20 md:py-24 bg-white border-t border-border">
        <div className="container-page">
          <div className="rounded-3xl bg-gradient-hero text-white p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-coral/30 blur-3xl" />
            <div className="relative z-10">
              <span className="eyebrow bg-white/20 text-white border-none mb-4">Funding and Support Needs</span>
              <h2 className="text-3xl md:text-4xl font-extrabold !text-white mt-4">Be Part of the Welcome.</h2>
              <p className="mt-4 text-white/90 max-w-xl mx-auto text-lg font-medium">
                Partner, volunteer or donate. Every contribution helps a seafarer feel seen.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-coral hover:bg-coral-light text-white font-bold shadow-warm h-12 px-8">
                  <Link to="/get-involved">Get Involved</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-navy font-bold h-12 px-8 bg-transparent">
                  <a href="https://www.canadahelps.org/en/dn/73316" target="_blank" rel="noopener noreferrer">
                    Donate
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;