import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Terminal, 
  Cpu, 
  Shield, 
  Cloud, 
  Code, 
  Database, 
  ChevronRight, 
  ChevronLeft,
  Menu, 
  X, 
  ArrowRight,
  Globe,
  Zap,
  Lock,
  Layout,
  Smartphone,
  Network,
  Palette,
  ShoppingCart,
  BarChart,
  GraduationCap,
  Printer,
  Brain,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Instagram,
  Facebook
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300">
      {/* Top Banner Slogan - Always Visible, Never Moves */}
      <div className="bg-secondary text-white py-1.5 px-4 text-center text-[10px] sm:text-xs font-black uppercase tracking-widest border-b border-white/10 select-none">
        CONNECTING MALAWI &bull; SECURING THE FUTURE &bull; DELIVERING EXCELLENCE
      </div>

      <div className={`transition-all duration-300 ${scrolled ? 'bg-primary border-b border-white/10 shadow-xl py-2.5' : 'bg-primary border-b border-white/10 py-3.5'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="relative h-10 md:h-14 transition-all duration-300 flex items-center justify-center group">
              {!logoError ? (
                <img 
                  src="/logo.png" 
                  alt="KUYA IT Solutions" 
                  className="h-full w-auto object-contain"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <Terminal size={24} className="text-white" />
                  </div>
                  <span className="font-display font-extrabold text-2xl tracking-tighter text-white">KUYA IT</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[13px] font-bold uppercase tracking-wider text-slate-100">
            <a href="#services" className="hover:text-secondary transition-colors">Services</a>
            <a href="#about" className="hover:text-secondary transition-colors">About Us</a>
            <a href="#contact" className="btn-secondary px-6 text-xs shadow-lg shadow-secondary/20 uppercase">
              Let's Get in Touch
            </a>
          </div>

          <button className="md:hidden text-white hover:text-secondary" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-white/10 py-6 px-6 flex flex-col gap-4 shadow-xl">
          <a href="#services" className="text-white font-bold uppercase text-sm hover:text-secondary" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#about" className="text-white font-bold uppercase text-sm hover:text-secondary" onClick={() => setIsOpen(false)}>About Us</a>
          <a href="#contact" className="btn-secondary text-center uppercase text-sm" onClick={() => setIsOpen(false)}>Let's Get in Touch</a>
        </div>
      )}
    </nav>
  );
};

const MotionHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      src: "/computer repair.png",
      title: "Hardware Engineering & Repairs",
      subtitle: "PC DIAGNOSTICS & FIXES",
      category: "Engineering",
      desc: "We deliver comprehensive hardware repairs, precise device troubleshooting, and flawless system optimization to keep your devices at peak performance."
    },
    {
      src: "/networking solution.png",
      title: "Certified Cisco Networks",
      subtitle: "SECURE WAN & LAN SYSTEMS",
      category: "Infrastructure",
      desc: "We are certified by CISCO. Designing and deploying enterprise-grade, high-security routing architectures that keep business communication seamless."
    },
    {
      src: "/website-1.png",
      title: "Enterprise Web Development",
      subtitle: "CUSTOM RESPONSIVE WEB DESIGNS",
      category: "Development",
      desc: "Creating fully optimized, fast, and secure brand websites that capture customer engagement, build SEO rankings, and deliver flawless performance."
    },
    {
      src: "/mobile app.png",
      title: "Native Mobile Applications",
      subtitle: "CROSS-PLATFORM IOS & ANDROID",
      category: "Development",
      desc: "Engineering high-performance native apps with user-centered interactions to connect businesses with customers wherever they go."
    },
    {
      src: "/data analysis.png",
      title: "Data Management & Analytics",
      subtitle: "DATASETS, REPORTS & MONITORING",
      category: "Data Systems",
      desc: "Organizing, securing, and analyzing complex organisational datasets to unlock clear, action-driven metrics for smart operation planning."
    },
    {
      src: "/computer training.png",
      title: "Interactive Computer Training",
      subtitle: "DIGITAL LITERACY FOR GROUPS",
      category: "Education",
      desc: "Empowering school programs, corporate teams, and individuals with specialized computer educational courses and core digital workflows."
    }
  ];

  // Auto-play loop cycle
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 6000); // 6 Secs per slide
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-[95vh] lg:min-h-[105vh] flex items-center pt-40 pb-20 overflow-hidden bg-slate-950 border-b border-white/10">
      {/* Background base wallpaper featuring AboutKuya.png - balanced to make both background image and text crystal clear */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/AboutKuya.png" 
          alt="KUYA IT Solutions bg" 
          className="w-full h-full object-cover opacity-65 select-none" 
          referrerPolicy="no-referrer"
        />
        {/* Soft, custom dark gradient overlays: solid black on the left to ground the white text, fading smoothly across to transparent on the right so the image details shine through */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full text-white">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Stationary Intro text styled clearly with strong dropshadows directly over the background */}
          <div className="lg:col-span-5 flex flex-col justify-center bg-transparent relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-5.5xl font-display font-black leading-[1.05] mb-6 uppercase tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]"
            >
              ONE-STOP <br />
              SERVICE <span className="text-secondary drop-shadow-[0_2px_10px_rgba(204,51,51,0.6)]">HUB</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm md:text-base text-slate-100 leading-relaxed font-semibold max-w-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]"
            >
              KUYA IT Solutions and Consultancy delivers elite, certified digital solutions to empower businesses, NGOs, schools, and individual clients across Malawi. Combining professional technical expertise with rapid support.
            </motion.p>
          </div>

          {/* Right Column: Beautiful Slide Showcase of Services (7 columns) */}
          <div 
            className="lg:col-span-7 flex flex-col justify-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative min-h-[400px] md:min-h-[460px] w-full bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-white/15 flex items-center justify-center group">
              
              {/* Animated Slide Image wrapper */}
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0.4, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <img 
                  src={encodeURI(slides[activeIndex].src)} 
                  alt={slides[activeIndex].title}
                  className="w-full h-full object-cover select-none"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle gradient overlay to guarantee text legibility without obscuring the background picture */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </motion.div>

              {/* Info Overlay Panel - now showing ONLY the big title in solid bold red to let the slide image be completely clear */}
              <div className="absolute bottom-6 inset-x-6 z-10 flex flex-col bg-transparent">
                <h3 className="text-xl md:text-2.5xl font-display font-black uppercase tracking-wider text-secondary leading-tight drop-shadow-[0_1.5px_4px_rgba(0,0,0,0.95)]">
                  {slides[activeIndex].title}
                </h3>
              </div>

              {isPaused && (
                <div className="absolute top-3 right-3 bg-secondary border border-white/10 text-white text-[9px] font-black px-2 py-0.5 uppercase tracking-wider rounded-sm select-none">
                  Paused
                </div>
              )}
            </div>

            {/* Slider progress dots under visual container */}
            <div className="flex justify-center items-center gap-2 mt-4">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveIndex(i);
                    setIsPaused(false);
                  }}
                  className={`h-2 transition-all rounded-full ${i === activeIndex ? "w-6 bg-secondary" : "w-2 bg-white/20 hover:bg-white/40"}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};const About = () => {
  return (
    <section id="about" className="pt-32 pb-12 relative overflow-hidden bg-primary border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-4xl md:text-5xl font-display font-extrabold uppercase tracking-tight text-white mb-6">About KUYA IT</h2>
            <p className="text-slate-100 text-base md:text-lg mb-10 leading-relaxed font-semibold">
              KUYA IT Solutions and Consultancy is a Lilongwe-based, privately owned ICT services company. The company is headquartered in the Biwi Area of Lilongwe and is positioned to become a leading provider of comprehensive, end-to-end technology solutions for businesses, government institutions, NGOs, schools, and individual clients across Malawi.
            </p>
            
            {/* Mobile-only image between "About KUYA IT" text and the Vision/Mission blocks */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="block md:hidden mb-10 relative rounded-sm overflow-hidden shadow-2xl group"
            >
              <img 
                src={encodeURI("/AboutKuya.png")} 
                alt="About KUYA IT Solutions" 
                className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 hover:scale-105" 
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <div className="space-y-8">
              <div className="flex gap-6 p-6 bg-[#132c5c] border border-white/15 border-l-4 border-l-secondary hover:bg-[#193a7a] transition-colors rounded-r-lg">
                <div className="shrink-0 w-12 h-12 bg-secondary text-white flex items-center justify-center rounded-sm shadow-lg">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-white uppercase tracking-tight">Our Vision</h4>
                  <p className="text-slate-100 text-sm font-semibold leading-relaxed">To be Malawi's most trusted and technically excellent ICT solutions provider — empowering individuals and institutions through innovative technology.</p>
                </div>
              </div>
              <div className="flex gap-6 p-6 bg-[#132c5c] border border-white/15 border-l-4 border-l-secondary hover:bg-[#193a7a] transition-colors rounded-r-lg">
                <div className="shrink-0 w-12 h-12 bg-secondary text-white flex items-center justify-center rounded-sm shadow-lg">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-white uppercase tracking-tight">Our Mission</h4>
                  <p className="text-slate-100 text-sm font-semibold leading-relaxed">To deliver comprehensive, high-quality ICT services that solve real technology problems for clients across Malawi combining professional technical expertise.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="hidden md:block relative rounded-sm overflow-hidden shadow-2xl group"
            >
              <img 
                src={encodeURI("/AboutKuya.png")} 
                alt="About KUYA IT Solutions" 
                className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 hover:scale-105" 
                referrerPolicy="no-referrer"
              />
            </motion.div>
 
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative rounded-sm overflow-hidden shadow-2xl group"
            >
              <img 
                src={encodeURI("/mission & vissoion.png")} 
                alt="KUYA Professional Environment" 
                className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 hover:scale-105" 
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};



const Services = () => {
  const services = [
    {
      icon: <Cpu size={24} />,
      image: "/computer repair.png",
      title: "Computer Repair Service",
      desc: "We specialize in comprehensive troubleshooting, professional hardware repairs, and flawless software installations to keep your devices running at peak performance.",
      details: ["PC Installation", "Software services", "Hardware services"]
    },
    {
      icon: <ShoppingCart size={24} />,
      image: "/dello,lenovo & hp.png",
      title: "Computer Sales",
      desc: "We supply brand new high-performance systems, enterprise hardware, and global direct orders, carefully configured for corporate institutions and individuals.",
      details: ["HP (all types)", "Lenovo", "Dell", "Macbook"]
    },
    {
      icon: <Palette size={24} />,
      image: "/graphic design-1.png",
      title: "Graphic Design",
      desc: "We transform your ideas into striking visual identities with high-impact corporate branding, stunning marketing materials, and elegant UI/UX layouts.",
      details: ["Logo design", "Branding", "Label Designs", "Poster designs"]
    },
    {
      icon: <Printer size={24} />,
      image: "/printer.png",
      title: "Printing Machine Services",
      desc: "We deliver expert technical installation, precise network configuration, and dependable maintenance services for all classes of printing hardware.",
      details: ["Installation", "Replacement of parts", "Maintenance services"]
    },
    {
      icon: <Network size={24} />,
      image: "/networking solution.png",
      title: "Networking Solutions",
      desc: "We are certified by CISCO. We design and deploy robust, high-security LAN & WAN network infrastructures engineered to ensure continuous and uninterrupted corporate communication.",
      details: ["Network design", "LAN/WAN/Wireless", "Cisco configuration"]
    },
    {
      icon: <Layout size={24} />,
      image: "/website-1.png",
      title: "Website Design & Development",
      desc: "We build modern, fully responsive, and beautifully optimized websites that perfectly showcase your brand, drive customer engagement, and boost search rankings.",
      details: ["UI/UX", "SEO", "Responsive Design"]
    },
    {
      icon: <Smartphone size={24} />,
      image: "/mobile app.png",
      title: "Software & Mobile App Dev",
      desc: "We engineer customized, high-performance software and native mobile applications tailored for iOS, Android, and scalable web platforms.",
      details: ["iOS/Android", "Web Apps", "Custom Software"]
    },
    {
      icon: <BarChart size={24} />,
      image: "/data analysis.png",
      title: "Data Management & Analysis",
      desc: "We organize, protect, and analyze complex organizational datasets to unlock powerful, action-driven insights that steer smart operations and boost profitability.",
      details: ["Data Security", "Analytical Reports", "Database Management"]
    },
    {
      icon: <GraduationCap size={24} />,
      image: "/computer training.png",
      title: "Computer Training",
      desc: "We empower schools, corporate teams, and individuals with specialized, practical computing programs and essential digital age skills.",
      details: ["School Programs", "Personal Training", "Office Software"]
    },
    {
      icon: <Brain size={24} />,
      image: ["/AI pic 1.png", "/AI pic 2.png"],
      title: "AI Literacy",
      desc: "We guide your team through the future of work with tailored workshops and strategic consulting on leveraging AI technologies to automate and multiply productivity.",
      details: ["AI Workshops", "Automation", "Ethics & Usage"]
    }
  ];

  return (
    <section id="services" className="pt-24 pb-24 relative bg-primary border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="section-title text-4xl md:text-5xl font-display font-extrabold uppercase tracking-tight text-white font-black">Our Professional Services</h2>
          <p className="text-slate-100 text-sm md:text-base max-w-3xl font-bold leading-relaxed">KUYA IT Solutions provides a comprehensive suite of ICT services tailored to meet the technical demands of Malawi's evolving professional landscape.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="group bg-[#132c5c] border border-white/15 flex flex-col overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/15 hover:border-secondary/30 hover:-translate-y-2 rounded-xl"
            >
              {/* Header with Title and Icon */}
              <div className="pt-8 px-8 pb-5 flex justify-between items-start gap-4">
                <h3 className="text-xl font-bold text-white group-hover:text-secondary transition-colors leading-snug">{service.title}</h3>
                <div className="w-10 h-10 bg-[#0f2143] flex items-center justify-center text-secondary shrink-0 border border-white/15 shadow-sm">
                  {service.icon}
                </div>
              </div>

              {/* Image below name of service */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                {Array.isArray(service.image) ? (
                  <div className="grid grid-cols-2 h-full w-full gap-[2px] bg-slate-900">
                    {service.image.map((imgSrc, imgIdx) => (
                      <div key={imgIdx} className="relative h-full overflow-hidden">
                        <img 
                          src={typeof imgSrc === "string" && imgSrc.startsWith('/') ? encodeURI(imgSrc) : imgSrc} 
                          alt={`${service.title} part ${imgIdx + 1}`} 
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                          referrerPolicy="no-referrer" 
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <img 
                    src={typeof service.image === "string" && service.image.startsWith('/') ? encodeURI(service.image) : service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    referrerPolicy="no-referrer" 
                  />
                )}
              </div>
              
              {/* Description and Footer */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <p className="text-slate-300 leading-relaxed mb-6 text-sm font-medium">{service.desc}</p>
                
                <div className="pt-6 border-t border-white/15 flex items-center justify-between">
                  <span className="text-[12px] font-extrabold uppercase tracking-widest text-secondary">Service Code: IT-{idx + 10}</span>
                  <a href="#contact" className="w-8 h-8 rounded-full bg-[#0f2143] border border-white/15 text-white flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300">
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        

      </div>
    </section>
  );
};

const Stats = () => {
  return (
    <section className="py-10 border-y border-slate-100 bg-slate-50/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {[
            { label: "Projects Delivered", value: "150+" },
            { label: "Uptime Guarantee", value: "99.9%" },
            { label: "Global Clients", value: "40+" },
            { label: "Support", value: "24/7" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-sm text-slate-500 uppercase tracking-wider font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { num: "01", title: "Discovery", desc: "We analyze your current infrastructure and business goals." },
    { num: "02", title: "Architecture", desc: "Designing a scalable, secure, and future-proof technical blueprint." },
    { num: "03", title: "Implementation", desc: "Agile development and seamless deployment of solutions." },
    { num: "04", title: "Optimization", desc: "Continuous monitoring, scaling, and performance tuning." }
  ];

  return (
    <section id="process" className="py-12 relative overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="section-title text-4xl md:text-5xl font-display font-extrabold uppercase tracking-tight text-center after:left-1/2 after:-translate-x-1/2">Our Methodology</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">A structured, data-driven approach to solving complex ICT challenges across the Malawian professional sector.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative text-center px-4"
            >
              {/* Connector */}
              {idx !== steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-[1px] bg-slate-200 z-0 translate-x-12"></div>
              )}
              
              <div className="relative z-10 w-24 h-24 rounded-full bg-white border border-slate-100 flex items-center justify-center mx-auto mb-8 shadow-sm group hover:border-primary transition-colors">
                <span className="text-3xl font-display font-black text-slate-200 group-hover:text-primary transition-colors">{step.num}</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900 uppercase tracking-tight">{step.title}</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative bg-primary border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-[#132c5c] border border-white/15 rounded-2xl p-8 md:p-20 relative overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2 gap-20 relative z-10">
            <div>
              <h2 className="section-title text-3xl md:text-5xl font-display font-extrabold uppercase mb-8 text-white">Get in touch</h2>
              <p className="text-slate-100 text-lg mb-12 max-w-md font-semibold leading-relaxed">
                Professional ICT support is just a message away. Our team is ready to analyze your technical needs and deliver excellence.
              </p>
              
              <div className="space-y-8">
                <div className="group flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-[#0f2143] border border-white/15 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-[13px] text-secondary uppercase tracking-widest font-extrabold mb-2">Our Headquarters</div>
                    <div className="text-white font-bold text-lg">Biwi Area, Lilongwe, Malawi</div>
                  </div>
                </div>

                <div className="group flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-[#0f2143] border border-white/15 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300 shrink-0">
                    <Globe size={24} />
                  </div>
                  <div>
                    <div className="text-[13px] text-secondary uppercase tracking-widest font-extrabold mb-2">Website</div>
                    <div className="text-white font-bold text-lg">www.kuyaservices.com</div>
                  </div>
                </div>
                <div className="group flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-[#0f2143] border border-white/15 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-[13px] text-secondary uppercase tracking-widest font-extrabold mb-2">Call & Support</div>
                    <div className="text-white font-bold text-lg">+265 996 197 463</div>
                    <div className="text-white font-bold text-lg">+265 884 126 001</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#0d1e3d] p-8 md:p-12 border border-white/15 rounded-xl">
              <h3 className="text-xl font-bold mb-8 uppercase tracking-tight text-white">Service Request Form</h3>
              <form 
                action="https://formspree.io/f/xdayqqoz" 
                method="POST"
                className="space-y-6"
              >
                {/* Formspree Configuration */}
                <input type="hidden" name="_subject" value="New Service Request from KUYA IT Website" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[12px] font-bold uppercase tracking-widest text-slate-100">First Name</label>
                    <input 
                      type="text" 
                      name="firstName"
                      required
                      className="w-full bg-[#0f2143] border border-white/15 px-4 py-4 text-white focus:outline-none focus:border-secondary transition-colors text-sm rounded-md font-medium" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[12px] font-bold uppercase tracking-widest text-slate-100">Last Name</label>
                    <input 
                      type="text" 
                      name="lastName"
                      required
                      className="w-full bg-[#0f2143] border border-white/15 px-4 py-4 text-white focus:outline-none focus:border-secondary transition-colors text-sm rounded-md font-medium" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] font-bold uppercase tracking-widest text-slate-100">Professional Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full bg-[#0f2143] border border-white/15 px-4 py-4 text-white focus:outline-none focus:border-secondary transition-colors text-sm rounded-md font-medium" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] font-bold uppercase tracking-widest text-slate-100">Project Details</label>
                  <textarea 
                    name="message"
                    required
                    rows={4} 
                    className="w-full bg-[#0f2143] border border-white/15 px-4 py-4 text-white focus:outline-none focus:border-secondary transition-colors resize-none text-sm rounded-md font-medium"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="btn-secondary w-full py-5 rounded-sm uppercase tracking-widest text-sm shadow-xl shadow-secondary/20 cursor-pointer"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const [logoError, setLogoError] = useState(false);
  return (
    <footer className="py-20 bg-primary text-white overflow-hidden relative">
      {/* Decorative texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="grid grid-cols-12 h-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-white/20 h-full"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          <div className="md:col-span-1">
            <div className="mb-6">
              {!logoError ? (
                <img 
                  src="/logo.png" 
                  alt="KUYA IT Solutions" 
                  className="h-16 w-auto object-contain"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="flex items-center gap-2">
                  <Terminal size={32} className="text-secondary" />
                  <span className="font-display font-black text-2xl tracking-tighter">KUYA IT</span>
                </div>
              )}
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6 font-medium">
              Connecting Malawi | Securing the Future | Delivering Excellence
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Our Services</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm text-white/70 font-medium">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full shrink-0"></div><a href="#services" className="hover:text-secondary transition-colors">Web Development</a></li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full shrink-0"></div><a href="#services" className="hover:text-secondary transition-colors">Computer Repair</a></li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full shrink-0"></div><a href="#services" className="hover:text-secondary transition-colors">Networking Solutions</a></li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full shrink-0"></div><a href="#services" className="hover:text-secondary transition-colors">Computer Sales</a></li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full shrink-0"></div><a href="#services" className="hover:text-secondary transition-colors">App Development</a></li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full shrink-0"></div><a href="#services" className="hover:text-secondary transition-colors">Computer Training</a></li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full shrink-0"></div><a href="#services" className="hover:text-secondary transition-colors">IT Consultancy</a></li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full shrink-0"></div><a href="#services" className="hover:text-secondary transition-colors">Graphic Design</a></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Follow Us</h4>
            <ul className="space-y-4 text-sm text-white/70 font-medium mb-8">
              <li><a href="https://www.kuyaservices.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors font-bold text-white">www.kuyaservices.com</a></li>
              <li><a href="https://www.instagram.com/Kuya_solutions/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Instagram: Kuya_solutions</a></li>
              <li><a href="https://www.facebook.com/profile.php?id=61560644342372" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Facebook: Kuya I.T Solutions</a></li>
              <li><a href="#about" className="hover:text-secondary transition-colors">Vision & Mission</a></li>
            </ul>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all">
                <MessageCircle size={18} />
              </a>
              <a href="https://www.instagram.com/Kuya_solutions/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61560644342372" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all">
                <Facebook size={18} />
              </a>
              <a href="https://www.kuyaservices.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all">
                <Globe size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
          <div>&copy; {new Date().getFullYear()} KUYA IT Solutions & Consultancy</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-primary text-slate-100 selection:bg-secondary/20 selection:text-secondary">
      <Navbar />
      <main>
        <MotionHero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
