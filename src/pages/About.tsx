import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  Linkedin, 
  Youtube, 
  Users, 
  Navigation, 
  HeartPulse, 
  Smartphone, 
  Globe2, 
  HandHeart, 
  MapPin, 
  Sparkles 
} from "lucide-react";

// Hero / About Image
import aboutImg from "@/assets/About.jpg";

// Images - History Timeline
import historyImg1 from "@/assets/image (5).png";
import historyImg2 from "@/assets/image (3).png";
import historyImg3 from "@/assets/image (4).png";

// Images - Team
import judithMainImg from "@/assets/Toronto Station Chaplin And manager-Rev.Judith Alltree.png";
import aliciaImg from "@/assets/Alicia Hamming Navarrete.jpg";
import danImg from "@/assets/Pastor Dan Phannenhour- Hamilton Station Chapalin-.jpg";

// Images - Board (Used for committee members)
import walterImg from "@/assets/Board Of Directors/Walter Stewart- Director.jpg";
import kellyMcImg from "@/assets/Board Of Directors/Kelly McDonald.jpg";

// PDFs
import globalImpactPdf from "@/assets/pdf/FULLY-Signed-2023-Trustees-Annual-Report-and-Accnts.pdf";
import regionalImpactPdf from "@/assets/pdf/FULLY-Signed-2023-Trustees-Annual-Report-and-Accnts.pdf";

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
    title: "Renewed Focus on Seafarers’ Welfare in Newfoundland and Labrador",
    content: (
      <>
        <p>Beginning in the early 2020s, renewed efforts emerged to reestablish formal welfare services for seafarers in Newfoundland and Labrador. A pivotal moment came in September 2023, when the Fisheries and Marine Institute of Memorial University hosted a seminar that brought together stakeholders from across the province and country. This led to the formation of a Port Welfare Committee in St. John’s to coordinate and advocate for improved services.</p>
        <p className="mt-4">Building on this momentum, a master’s thesis completed in 2024 at Memorial University assessed the needs of seafarers in the region, confirming the urgent demand for a reliable, safe, and sustainable welfare facility. As of 2025, work is actively underway to formally establish The Mission to Seafarers Newfoundland and Labrador. The initiative aims to deliver services such as ship visits, drop-in centres, and emergency support in Newfoundland, continuing the long tradition of caring for the world’s seafarers in this province.</p>
      </>
    ),
    img: historyImg3, // Reusing image to maintain UI functionality
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
        <p>
          Fluent in English and French, Morgane values building strong relationships with maritime organizations, local partners, and seafarers. Her previous experience includes internships and project work with the International Maritime Organization (IMO) and the United Nations Conference on Trade and Development (UNCTAD), where she developed skills in safety training, community outreach, and international maritime policy.
        </p>
        <p>
          Morgane also serves as a volunteer with the Port Welfare Committee and is committed to creating a supportive, inclusive space where seafarers can relax, connect, and feel at home while in port.
        </p>
      </>
    )
  },
  {
    name: "Captain Christopher Hearn",
    role: "Director, Centre for Marine Simulation, Marine Institute of Memorial University",
    img: danImg,
    bio: (
      <>
        <p>
          Member of the Nautical Institute (MNI), Captain Christopher Hearn began his career after graduating from the Marine Institute’s Nautical Science Program in 1994. He quickly moved his way through the marine ranks and certification to Master Mariner and obtained command of several types of vessels in the deep sea and subsea sectors.
        </p>
        <p>
          First coming ashore as a Marine Superintendent with shipping companies engaged in subsea cable laying and repair, seismic work, and general cargo operations, he was involved supporting at sea operations and managing relationships with flag state authorities, class, insurers and clients. Additional activities including working with Human Resources identifying training needs and methods for improving competency among crews.
        </p>
        <p>
          Captain Hearn returned to the Marine Institute in 2008 as the Director of the Centre for Marine Simulation. The Centre is the largest and most comprehensive marine simulation facility in North America and covers an entire range of training, industrial assistance, and research and development capabilities through the use of simulation technology. CMS’s particular areas of expertise include the modeling and simulation of harsh maritime environments, human performance in moving environments, simulation of offshore oil and gas operations, and port design evaluation and maritime operational risk analysis.
        </p>
        <p>
          Captain Hearn has maintained an active role in the advancement of the maritime industry. Assisting government agencies with development of competency strategies for on ship operations in Polar regions. Participation and contribution to industry and governmental working groups focusing on adapting new technologies into maritime training. Captain Hearn is a member of several marine industry boards and associations of the Regional Coast Guard Advisory Board, former national president of the Master Mariners of Canada.
        </p>
      </>
    )
  },
  {
    name: "REV. JUDITH ALLTREE",
    role: "Regional Director / Mentor",
    img: judithMainImg,
    bio: (
      <>
        <p>
          Rev. Judith Alltree’s life and careers have all involved working with people from different countries and cultures: from her first career in the travel industry, to the music industry, and finally to Mission ministry and service. After 9 years in parish ministry, Judith joined the Mission to Seafarers in 2012 as Executive Director for MtS Toronto, which amalgamated in January, 2014 with the Mission to Seafarers Hamilton to become the Mission to Seafarers Southern Ontario (MTSSO). In June, 2017, Oshawa was added to this group, and in 2021 Port Colborne became the latest port to be served by MTSSO. She retired as ED in December, 2021, but joined the MTSSO Board of Directors a year later, now serving as Vice-President.
        </p>
        <p>
          In 2019 Rev. Alltree was appointed Regional Director for Mission to Seafarers Canada, serving the 10 port cities and 12 MtS stations in Canada from Vancouver to Halifax, working to support the region especially through the COVID crisis and lockdowns of 2020-2022. During that time the Canadian National Seafarers Welfare Board was formed, and Rev. Alltree served as the MtSC representative from 2020-2025. She is also the chair of the “Humble Servant Award” Working Group, which honours the life and service of Elisabeth Bertrand, the late-founder of the CNSWB.
        </p>
        <p>
          One of her biggest projects was to investigate the possibility of opening a Mission centre in the Port of St. John’s, Newfoundland and Labrador. As a result of a meeting on September 26, 2023 for the “Mobilization of community supports for a St. John’s Seafarer Welfare Centre” Rev. Alltree founded a Port Welfare Committee with 32 of the attendees of that event. Shortly thereafter, a Port Welfare Executive was elected, led by Captain Chris Hearn of the Marine Institute. We anticipate having active MtS centres in the province in 2025.
        </p>
        <p>
          Rev. Alltree continues to support the PWC as ex-officio and mentor, having retired as Regional Director of the Mission to Seafarers Canada at the end of March, 2025. She is Chaplain to the Marine Club (2017-present) board of directors, and continues to support the work of the Mission to Seafarers as a volunteer ship visitor and Port Chaplain for the entire Port of Toronto. In 2024, Rev. Alltree received the North American Maritime Ministry Association Distinguished Service award.
        </p>
      </>
    )
  }
];

const About = () => (
  <>
    {/* Hero Section */}
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-navy min-h-[45vh] flex items-center justify-center border-b border-navy-dark">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src={aboutImg} 
          alt="About Mission to Seafarers" 
          className="w-full h-full object-cover object-center opacity-40 mix-blend-overlay" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy/60 to-transparent" />
      </div>
      
      {/* Hero Content */}
      <div className="container-page relative z-10 text-center max-w-4xl mx-auto">
        <span className="text-coral font-bold tracking-widest uppercase text-sm block mb-4">ABOUT US</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          Harboring Humanity Welcoming Seafarers to Our Shores
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-medium">
          At the heart of the Newfoundland and Labrador Seafarers’ Centre is a commitment to care for the seafarers who arrive in our province’s ports from around the world.
        </p>
      </div>
    </section>

    {/* Mission, Vision, Equity Statement Section */}
    <section className="py-20 md:py-28 bg-white">
      <div className="container-page max-w-6xl mx-auto">
        <div className="mt-14 grid md:grid-cols-3 gap-6 relative">
          <div className="rounded-2xl bg-warm-gray p-8 shadow-sm hover:shadow-card-hover transition-all">
            <h2 className="text-2xl font-extrabold text-navy mb-4">Our Mission</h2>
            <p className="text-text-mid leading-relaxed">
              To welcome and support seafarers visiting Newfoundland and Labrador by providing a safe, inclusive space where they can rest, connect with loved ones, and access practical support and pastoral care, no matter their faith, background, or time in port. We are part of the larger Mission to Seafarers Canada and the global Mission to Seafarers network, but our work is deeply rooted in the needs and communities of Newfoundland and Labrador’s ports.
            </p>
          </div>
          <div className="rounded-2xl bg-warm-gray p-8 shadow-sm hover:shadow-card-hover transition-all">
            <h2 className="text-2xl font-extrabold text-navy mb-4">Our Vision</h2>
            <p className="text-text-mid leading-relaxed">
              To be a trusted haven of welcome and care for seafarers in Newfoundland and Labrador, where every mariner is honored, supported, and connected to the global maritime community.
            </p>
          </div>
          <div className="rounded-2xl bg-warm-gray p-8 shadow-sm hover:shadow-card-hover transition-all">
            <h2 className="text-2xl font-extrabold text-navy mb-4">Equity Statement</h2>
            <p className="text-text-mid leading-relaxed">
              The Newfoundland and Labrador Seafarers’ Centre is committed to fostering an inclusive, equitable environment for all seafarers who come through our doors. We acknowledge the diverse backgrounds, identities, and experiences of those we serve and strive to eliminate barriers to access and support. Whether a seafarer seeks rest, connection, or care, they will find a space where they are welcomed without judgment and treated with equal dignity.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Core Values Section */}
    <section className="py-20 md:py-24 bg-warm-gray">
      <div className="container-page max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy leading-tight">
            Our Core Value
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          <div className="rounded-2xl bg-white p-8 shadow-sm border border-border hover:shadow-card-hover transition-all">
            <p className="text-text-mid leading-relaxed">
              <strong className="text-navy block text-lg mb-2">Hospitality,</strong> 
              We provide a safe and welcoming space for all international seafarers visiting Newfoundland and pastoral care, no matter their faith, background, or time in port. We are part of the larger Mission to Seafarers Canada and the global Mission to Seafarers network, but our work is deeply rooted in the needs and communities of Newfoundland and Labrador’s ports.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm border border-border hover:shadow-card-hover transition-all">
            <p className="text-text-mid leading-relaxed">
              <strong className="text-navy block text-lg mb-2">Compassion—</strong> 
              Our care addresses the emotional, spiritual, and practical needs of seafarers living and working at sea.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm border border-border hover:shadow-card-hover transition-all">
            <p className="text-text-mid leading-relaxed">
              <strong className="text-navy block text-lg mb-2">Respect—</strong> 
              We honor each seafarer’s identity, culture, and faith, ensuring every visitor feels seen and valued.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm border border-border hover:shadow-card-hover transition-all">
            <p className="text-text-mid leading-relaxed">
              <strong className="text-navy block text-lg mb-2">Community Partnership—</strong> 
              We collaborate with local port authorities, maritime agencies, and volunteers to strengthen our outreach and impact.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm border border-border hover:shadow-card-hover transition-all">
            <p className="text-text-mid leading-relaxed">
              <strong className="text-navy block text-lg mb-2">Integrity,</strong> 
              We uphold transparency, accountability, and trust in all our actions.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm border border-border hover:shadow-card-hover transition-all">
            <p className="text-text-mid leading-relaxed">
              <strong className="text-navy block text-lg mb-2">Faith in Action—</strong> 
              Guided by Christian values, we offer non-denominational pastoral care while respecting the diverse beliefs of those we serve.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* History Timeline Section */}
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-page">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-coral font-bold tracking-widest uppercase text-sm">History</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-navy leading-tight">
            Timeline layout of MTS Newfoundland, MTS Canada, and MTS International
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

    {/* Team Section */}
    <section className="py-20 md:py-28 bg-warm-gray">
      <div className="container-page max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="eyebrow">Meet the Team</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-navy leading-tight">
            Leadership
          </h2>
        </div>

        <div className="space-y-12">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="grid lg:grid-cols-12 gap-12 items-center mb-20 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-border">
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

    {/* Port Welfare Committee */}
    <section className="py-20 md:py-28 bg-white">
      <div className="container-page max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight">
            Port Welfare Committee of Newfoundland and Labrador
          </h2>
          <p className="mt-6 text-lg text-text-mid leading-relaxed font-medium max-w-4xl mx-auto">
            The Port Welfare Committee for Newfoundland and Labrador is a committed group of local champions from the maritime, labour, stakeholder and community sectors who have come together with a shared purpose: to ensure the wellbeing of seafarers visiting our province. Their guidance, advocacy, and unwavering support have been instrumental in the growth and sustainability of the Mission to Seafarers NL and its upcoming Seafarers’ Centre.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center bg-warm-gray border border-border rounded-2xl p-8 shadow-card">
            <img src={walterImg} alt="Rev. Eric Phinney" className="w-40 h-40 object-cover rounded-full shadow-soft mb-6" />
            <h3 className="text-xl font-bold text-navy">Rev. Eric Phinney, Regional Director</h3>
            <p className="text-text-mid font-medium mt-2">Email: eric.phinney@mtsmail.org</p>
            <p className="text-text-mid font-medium mt-1">Phone: 1-506-643-0799</p>
          </div>
          <div className="flex flex-col items-center text-center bg-warm-gray border border-border rounded-2xl p-8 shadow-card">
            <img src={kellyMcImg} alt="Marsha Clyne" className="w-40 h-40 object-cover rounded-full shadow-soft mb-6" />
            <h3 className="text-xl font-bold text-navy">Marsha Clyne, Regional Fundraising Manager</h3>
            <p className="text-text-mid font-medium mt-2">Email: marsha.clyne@missiontoseafarers.ca</p>
            <p className="text-text-mid font-medium mt-1">Phone: 1-647-773-4841</p>
          </div>
        </div>
      </div>
    </section>

    {/* ─────────── IMPACT SECTION ─────────── */}
    <section className="py-20 md:py-28 bg-white border-t border-border">
      <div className="container-page max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="eyebrow">Our Impact</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-navy leading-tight">
            Supporting Seafarers in Newfoundland and Labrador & Beyond
          </h2>
          <p className="mt-6 text-lg text-text-mid font-medium">
            Did you know that 90% of the world’s goods are transported by sea?
          </p>
        </div>

        {/* Seafarers: NL & Canada */}
        <div className="bg-warm-gray p-8 md:p-12 rounded-3xl shadow-sm border border-border mb-20 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-extrabold text-navy mb-4">
            Seafarers: Newfoundland and Labrador At Mission to Seafarers Canada
          </h3>
          <p className="text-lg text-text-mid leading-relaxed font-medium">
            We take pride in being the trusted support network for seafarers arriving at ports across Canada, especially in Newfoundland and Labrador. Seafarers often face long stretches at sea, feeling isolated and far from home. Through your generosity, we provide the essential care, respond to countless spiritual, emotional, and physical needs, and provide a human connection that makes a difference in their lives.
          </p>
        </div>

        {/* 2024 Milestone */}
        <div className="bg-navy p-10 md:p-14 rounded-3xl shadow-xl text-white mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          <h3 className="text-2xl md:text-3xl font-extrabold text-center mb-10">2024 Milestone</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
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

        {/* Impact Beyond Numbers */}
        <div className="text-center max-w-4xl mx-auto mb-24">
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

        {/* Global Impact */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="eyebrow">Global Impact</span>
              <h3 className="mt-4 text-3xl md:text-4xl font-extrabold text-navy leading-tight">
                Supporting Seafarers Worldwide
              </h3>
              <p className="mt-4 text-text-mid font-medium leading-relaxed">
                The Mission to Seafarers operates in over 200 ports across 50+ countries, delivering vital support through ship visits, seafarers’ centres, mental health services, family outreach, and emergency care. Our Flying Angel Campaign 2025 highlights our global commitment to evolving welfare needs, mental health challenges, and inclusive care.
              </p>
            </div>
            <Button asChild size="lg" className="bg-coral hover:bg-coral-light text-white font-bold h-12 w-full md:w-auto shrink-0">
               <a href={globalImpactPdf} target="_blank" rel="noopener noreferrer">Learn More</a>
            </Button>
          </div>

          <h4 className="text-xl font-bold text-navy mb-8">Key Areas of Global Support:</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { i: Users, t: "Face-to-Face Ship Visiting", d: "Emotional, spiritual, and crisis support to crews in port." },
              { i: Navigation, t: "Seafarers' Centre Upgrades", d: "Creating modern, safe spaces for rest and recreation." },
              { i: HeartPulse, t: "Mental Health & Crisis Response", d: "Life-saving interventions with SafeTALK and CISM training." },
              { i: Smartphone, t: "Digital Innovation", d: "Tools like the Happy at Sea app and Ship Visitor software improve communication." },
              { i: Globe2, t: "Diversity & Inclusion", d: "Hiring female ship visitors and supporting marginalized seafarers." },
            ].map(({ i: Icon, t, d }) => (
              <div key={t} className="rounded-2xl bg-warm-gray p-8 shadow-sm hover:shadow-card-hover transition-all flex flex-col items-start border border-border">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-white text-coral border border-border mb-5">
                  <Icon className="h-6 w-6" />
                </span>
                <h5 className="text-lg font-bold text-navy leading-tight mb-2">{t}</h5>
                <p className="text-text-mid leading-relaxed font-medium">{d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Impact Highlights */}
        <div className="bg-white border border-border rounded-3xl p-8 md:p-12 shadow-sm mb-24 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-5">
             <Globe2 className="w-64 h-64 text-navy" />
           </div>
           <h3 className="text-2xl md:text-3xl font-extrabold text-navy mb-8 relative z-10">Regional Impact Highlights</h3>
           <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 relative z-10">
             <div>
               <ul className="space-y-4">
                 <li className="flex items-start gap-3">
                   <span className="h-2 w-2 rounded-full bg-coral mt-2 shrink-0" />
                   <p className="text-text-mid font-medium"><strong className="text-navy">East Asia:</strong> Major hubs in Singapore, Busan, and the Philippines.</p>
                 </li>
                 <li className="flex items-start gap-3">
                   <span className="h-2 w-2 rounded-full bg-coral mt-2 shrink-0" />
                   <p className="text-text-mid font-medium"><strong className="text-navy">Middle East & South Asia:</strong> Growing chaplaincy in Bahrain, Colombo, and India.</p>
                 </li>
                 <li className="flex items-start gap-3">
                   <span className="h-2 w-2 rounded-full bg-coral mt-2 shrink-0" />
                   <p className="text-text-mid font-medium"><strong className="text-navy">Africa:</strong> Expanded support in Durban and Mombasa, including solar, transport, and digital upgrades.</p>
                 </li>
                 <li className="flex items-start gap-3">
                   <span className="h-2 w-2 rounded-full bg-coral mt-2 shrink-0" />
                   <p className="text-text-mid font-medium"><strong className="text-navy">Europe:</strong> Centers in Rotterdam, Rouen, and Tilbury with a focus on female seafarers.</p>
                 </li>
               </ul>
             </div>
             <div>
               <ul className="space-y-4">
                 <li className="flex items-start gap-3">
                   <span className="h-2 w-2 rounded-full bg-coral mt-2 shrink-0" />
                   <p className="text-text-mid font-medium"><strong className="text-navy">Latin America:</strong> Renewed programs in Brazil, Argentina, and Costa Rica.</p>
                 </li>
                 <li className="flex items-start gap-3">
                   <span className="h-2 w-2 rounded-full bg-coral mt-2 shrink-0" />
                   <div className="text-text-mid font-medium">
                     <strong className="text-navy">USA & Canada:</strong> Expanding with:
                     <ul className="ml-5 mt-2 space-y-1 list-disc text-sm">
                       <li>New Canadian Regional Director to unify operations</li>
                       <li>Regional Fundraising Manager to drive donor engagement</li>
                     </ul>
                   </div>
                 </li>
                 <li className="flex items-start gap-3">
                   <span className="h-2 w-2 rounded-full bg-coral mt-2 shrink-0" />
                   <p className="text-text-mid font-medium"><strong className="text-navy">Oceania & Australia:</strong> Supporting crews in 29 Pacific ports.</p>
                 </li>
               </ul>
             </div>
           </div>
           <div className="mt-10 relative z-10">
             <Button asChild variant="outline" className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold h-12 px-8">
               <a href={regionalImpactPdf} target="_blank" rel="noopener noreferrer">Learn More</a>
             </Button>
           </div>
        </div>

        {/* Projected Impact in NL */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight">
              Projected Impact in Newfoundland and Labrador: Making a Difference in Our First Year
            </h3>
            <p className="mt-4 text-text-mid font-medium leading-relaxed">
              Our Newfoundland and Labrador initiative is poised for growth, and with your help, we can make a significant impact. Here are our realistic goals for the first year of operations based on the St. John’s Port Authority 2024 report and the seafarer traffic forecast for the region.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
             {/* Goal 1 */}
             <div className="bg-warm-gray rounded-3xl p-8 border border-border">
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
               <p className="text-text-mid font-medium leading-relaxed">
                 Every visit will provide essential support like SIM cards, toiletries, snacks, and emotional care through our team of chaplains and volunteers. These visits will be a lifeline for seafarers in need of a connection while in port.
               </p>
             </div>

             {/* Goal 2 */}
             <div className="bg-warm-gray rounded-3xl p-8 border border-border">
               <div className="flex items-center gap-4 mb-4">
                 <span className="bg-coral text-white font-bold py-1 px-3 rounded-md text-sm tracking-wider uppercase">Goal 2</span>
                 <h4 className="text-xl font-extrabold text-navy">Seafarers’ Centers</h4>
               </div>
               <p className="font-bold text-coral text-lg mb-4">Serving 12,500 Seafarers</p>
               <ul className="space-y-2 mb-4 text-text-mid font-medium text-sm">
                 <li>• Total Seafarers Served in Year 1: 12,500</li>
                 <li>• Key Services Provided: Free Wi-Fi and phone charging, Comfortable lounges with snacks and drinks</li>
               </ul>
               <p className="text-text-mid font-medium leading-relaxed">
                 With local information, support resources, and volunteer assistance, the seafarers’ centers will serve as safe, welcoming spaces for rest and connection. Here, seafarers can recharge and reconnect with loved ones before they head back to sea.
               </p>
             </div>

             {/* Goal 3 */}
             <div className="bg-warm-gray rounded-3xl p-8 border border-border">
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
               <p className="text-text-mid font-medium leading-relaxed">
                 Life at sea can be stressful, and we are committed to offering confidential emotional support and mental health services to seafarers who may be facing challenges. Our team will be available for crisis interventions, referrals, and 24/7 emergency resources.
               </p>
             </div>

             {/* Goal 4 */}
             <div className="bg-warm-gray rounded-3xl p-8 border border-border">
               <div className="flex items-center gap-4 mb-4">
                 <span className="bg-coral text-white font-bold py-1 px-3 rounded-md text-sm tracking-wider uppercase">Goal 4</span>
                 <h4 className="text-xl font-extrabold text-navy">Transportation Assistance</h4>
               </div>
               <p className="font-bold text-coral text-lg mb-4">Facilitating 2,000 Rides</p>
               <ul className="space-y-2 mb-4 text-text-mid font-medium text-sm">
                 <li>• Total Number of Rides Provided: 2,000</li>
                 <li>• Key Destinations Supported: Local stores (Walmart, pharmacies, convenience shops)</li>
               </ul>
               <p className="text-text-mid font-medium leading-relaxed">
                 We will ensure that seafarers who can go ashore can get the essentials they need, from toiletries to transportation, to make their time in port as smooth and stress-free as possible.
               </p>
             </div>

             {/* Goal 5 */}
             <div className="bg-warm-gray rounded-3xl p-8 border border-border md:col-span-2 max-w-3xl mx-auto w-full">
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
               <p className="text-text-mid font-medium leading-relaxed">
                 In our first year, we aim to build a robust network of volunteers and corporate partners to ensure long-term sustainability. Through training programs and local outreach, we will foster community involvement to support our mission.
               </p>
             </div>
          </div>
        </div>

        {/* Funding & Programs */}
        <div className="bg-gradient-hero text-white rounded-3xl p-10 md:p-14 shadow-xl relative overflow-hidden">
           <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-coral/30 blur-3xl pointer-events-none" />
           <div className="relative z-10 text-center mb-10">
             <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Funding and Support Needs: Help Us Reach Our Goals</h3>
             <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 font-medium">
               To achieve these ambitious goals, we are seeking $500,000 in startup capital for the first year.
             </p>
             <Button asChild size="lg" className="bg-white text-navy hover:bg-white/90 font-bold h-12 px-10 text-lg shadow-warm">
               <a href="https://www.canadahelps.org/en/dn/73316" target="_blank" rel="noopener noreferrer">Help us</a>
             </Button>
           </div>
           
           <div className="relative z-10 pt-10 border-t border-white/20">
             <h4 className="text-2xl font-extrabold text-white mb-6 text-center">Programs You Can Support</h4>
             <p className="text-center text-white/90 mb-8 font-medium">Your gift will directly contribute to one or more of the following impactful programs:</p>
             <ul className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
               <li className="bg-white/10 backdrop-blur rounded-xl p-4 flex items-start gap-3">
                 <HandHeart className="w-6 h-6 text-coral-light shrink-0" />
                 <p className="text-sm font-medium leading-relaxed"><strong className="text-white block mb-1">Ship Visits:</strong> Delivering onboard care and essential services to seafarers, right where they work and live at sea.</p>
               </li>
               <li className="bg-white/10 backdrop-blur rounded-xl p-4 flex items-start gap-3">
                 <Users className="w-6 h-6 text-coral-light shrink-0" />
                 <p className="text-sm font-medium leading-relaxed"><strong className="text-white block mb-1">Seafarers’ Centers Activities:</strong> Offering a safe, welcoming space on land for rest, recreation, and connection—a home away from home.</p>
               </li>
               <li className="bg-white/10 backdrop-blur rounded-xl p-4 flex items-start gap-3">
                 <HeartPulse className="w-6 h-6 text-coral-light shrink-0" />
                 <p className="text-sm font-medium leading-relaxed"><strong className="text-white block mb-1">Mental Health & Crisis Support:</strong> Providing emotional and psychological support to seafarers facing stress, isolation, and emergencies.</p>
               </li>
               <li className="bg-white/10 backdrop-blur rounded-xl p-4 flex items-start gap-3">
                 <MapPin className="w-6 h-6 text-coral-light shrink-0" />
                 <p className="text-sm font-medium leading-relaxed"><strong className="text-white block mb-1">Transportation Assistance:</strong> Ensuring access to local stores, services, and places of worship through safe and reliable transport options.</p>
               </li>
               <li className="bg-white/10 backdrop-blur rounded-xl p-4 flex items-start gap-3 md:col-span-2">
                 <Sparkles className="w-6 h-6 text-coral-light shrink-0" />
                 <p className="text-sm font-medium leading-relaxed"><strong className="text-white block mb-1">Community & Volunteer Engagement:</strong> Mobilizing local volunteers and building partnerships to create a strong support network for visiting seafarers.</p>
               </li>
             </ul>
             <div className="mt-10 text-center">
               <Button asChild size="lg" className="bg-coral hover:bg-coral-light text-white font-bold h-12 px-10 text-lg shadow-warm">
                 <a href="https://www.canadahelps.org/en/dn/73316" target="_blank" rel="noopener noreferrer">Donate</a>
               </Button>
             </div>
           </div>
        </div>
      </div>
    </section>

    {/* Social Media CTA */}
   
  </>
);

export default About;