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
      {/* Top Info Bar - Unicaf Style */}
      {!scrolled && (
        <div className="bg-primary text-white py-2 hidden md:block border-b border-primary-foreground/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center text-xs font-semibold tracking-wide">
            <div className="flex gap-6">
              <span className="flex items-center gap-1"><Mail size={14} className="text-secondary" /> kuyaservice1@gmail.com</span>
              <span className="flex items-center gap-1"><Globe size={14} className="text-secondary" /> www.kuyaservices.com</span>
              <span className="flex items-center gap-1"><Phone size={14} className="text-secondary" /> +265 996 197 463</span>
            </div>
            <div className="flex gap-4 items-center">
              <a href="https://www.facebook.com/profile.php?id=61560644342372" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                <Facebook size={14} />
              </a>
              <a href="https://www.instagram.com/Kuya_solutions/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                <Instagram size={14} />
              </a>
            </div>
          </div>
        </div>
      )}

      <div className={`transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm md:bg-white md:py-5 py-4'}`}>
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
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                    <Terminal size={24} className="text-white" />
                  </div>
                  <span className="font-display font-extrabold text-2xl tracking-tighter text-primary">KUYA IT</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[13px] font-bold uppercase tracking-wider text-slate-700">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#about" className="hover:text-primary transition-colors">About Us</a>
            <a href="#contact" className="btn-secondary px-6 text-xs shadow-lg shadow-secondary/20 uppercase">
              Let's Get in Touch
            </a>
          </div>

          <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-6 px-6 flex flex-col gap-4 shadow-xl">
          <a href="#services" className="text-slate-900 font-bold uppercase text-sm" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#about" className="text-slate-900 font-bold uppercase text-sm" onClick={() => setIsOpen(false)}>About Us</a>
          <a href="#contact" className="btn-secondary text-center uppercase text-sm" onClick={() => setIsOpen(false)}>Let's Get in Touch</a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 md:pt-40 overflow-hidden bg-slate-50">
      {/* Background Image & Effects */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/background.png" 
          alt="Malawi ICT Hub" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-primary/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full text-white">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-white text-[12px] font-bold mb-8 uppercase tracking-widest rounded-sm"
          >
            <Zap size={16} />
            <span>CONNECTING MALAWI | SECURING THE FUTURE | DELIVERING EXCELLENCE</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-8xl font-display font-extrabold leading-[1] mb-8"
          >
            ONE-STOP <br />
            SERVICE <br />
            <span className="text-secondary">HUB</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-100/90 mb-12 max-w-2xl leading-relaxed font-medium"
          >
            KUYA IT Solution & Consultancy delivers Website design & development, Software & mobile app development, Networking solutions (LAN & WAN), Graphic design, Computer hardware & software solutions, Computer sales & orders (brand new & refurbished), Data management & analysis, Computer training (schools & individuals), Printing Machine (installation & maintenance), and Artificial intelligence literacy.
          </motion.p>
          
          {/* CTA removed as requested */}
        </div>
      </div>

    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="pt-32 pb-12 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-4xl md:text-5xl font-display font-extrabold uppercase tracking-tight">About KUYA IT</h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
              KUYA IT Solutions and Consultancy is a Lilongwe-based, privately owned ICT services company. The company is headquartered in the Biwi Area of Lilongwe and is positioned to become a leading provider of comprehensive, end-to-end technology solutions for businesses, government institutions, NGOs, schools, and individual clients across Malawi.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6 p-6 bg-slate-50 border-l-4 border-primary">
                <div className="shrink-0 w-12 h-12 bg-primary text-white flex items-center justify-center rounded-sm shadow-lg shadow-primary/20">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-slate-900 uppercase tracking-tight">Our Vision</h4>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed">To be Malawi's most trusted and technically excellent ICT solutions provider — empowering individuals and institutions through innovative technology.</p>
                </div>
              </div>
              <div className="flex gap-6 p-6 bg-slate-50 border-l-4 border-secondary">
                <div className="shrink-0 w-12 h-12 bg-secondary text-white flex items-center justify-center rounded-sm shadow-lg shadow-secondary/20">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-slate-900 uppercase tracking-tight">Our Mission</h4>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed">To deliver comprehensive, high-quality ICT services that solve real technology problems for clients across Malawi combining professional technical expertise.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-sm overflow-hidden shadow-2xl group"
          >
            <img 
              src="/mission & vissoion.png" 
              alt="KUYA Professional Environment" 
              className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
          </motion.div>
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
      desc: "Comprehensive troubleshooting, repair, and software installation services.",
      details: ["PC Installation", "Software services", "Hardware services"]
    },
    {
      icon: <ShoppingCart size={24} />,
      image: "/dello,lenovo & hp.png",
      title: "Computer Sales & Orders",
      desc: "Procurement of brand new and high-quality refurbished computers ideal for homes, offices and students.",
      details: ["HP (all types)", "Lenovo", "Dell", "Macbook"]
    },
    {
      icon: <Palette size={24} />,
      image: "/graphic design.png",
      title: "Graphic Design",
      desc: "Creative visual solutions including branding, marketing materials, and UI/UX.",
      details: ["Logo design", "Branding", "Label Designs", "Poster designs"]
    },
    {
      icon: <Printer size={24} />,
      image: "/printer.png",
      title: "Printing Machine Services",
      desc: "Professional installation, configuration, and maintenance of printing equipment.",
      details: ["Installation", "Replacement of parts", "Maintenance services"]
    },
    {
      icon: <Network size={24} />,
      image: "/networking solution.png",
      title: "Networking Solutions",
      desc: "Reliable and secure LAN & WAN network infrastructure setup and maintenance.",
      details: ["Network design", "LAN/WAN/Wireless", "Cisco configuration"]
    },
    {
      icon: <Layout size={24} />,
      image: "/website.png",
      title: "Website Design & Development",
      desc: "Modern, responsive, and user-friendly websites tailored to your brand.",
      details: ["UI/UX", "SEO", "Responsive Design"]
    },
    {
      icon: <Smartphone size={24} />,
      image: "/mobile app.png",
      title: "Software & Mobile App Dev",
      desc: "Custom applications built for iOS, Android, and cross-platform environments.",
      details: ["iOS/Android", "Web Apps", "Custom Software"]
    },
    {
      icon: <BarChart size={24} />,
      image: "/data analysis.png",
      title: "Data Management & Analysis",
      desc: "Organizing, securing, and analyzing data to drive informed business decisions.",
      details: ["Data Security", "Analytical Reports", "Database Management"]
    },
    {
      icon: <GraduationCap size={24} />,
      image: "/computer training.png",
      title: "Computer Training",
      desc: "Empowering schools and individuals with essential digital and computing skills.",
      details: ["School Programs", "Personal Training", "Office Software"]
    },
    {
      icon: <Brain size={24} />,
      image: "/artificial intelligence.png",
      title: "AI Literacy",
      desc: "Education and consulting to help you understand and leverage AI technologies.",
      details: ["AI Workshops", "Automation", "Ethics & Usage"]
    }
  ];

  return (
    <section id="services" className="pt-12 pb-12 relative bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12">
          <h2 className="section-title text-4xl md:text-5xl font-display font-extrabold uppercase tracking-tight">Our Professional Services</h2>
          <p className="text-slate-500 text-lg max-w-3xl font-medium">KUYA IT Solutions provides a comprehensive suite of ICT services tailored to meet the technical demands of Malawi's evolving professional landscape.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="group bg-white border border-slate-100 flex flex-col overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-500"></div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-white flex items-center justify-center text-primary shadow-lg border border-slate-100">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm font-medium">{service.desc}</p>
                
                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-[12px] font-extrabold uppercase tracking-widest text-primary">Service Code: IT-{idx + 10}</span>
                  <a href="#contact" className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <a href="#contact" className="btn-primary inline-flex items-center gap-3 px-12 py-5 rounded-sm uppercase tracking-widest text-sm">
            View All Services & Specialisations
          </a>
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
    <section id="contact" className="py-12 relative bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-white rounded-sm p-8 md:p-20 relative overflow-hidden shadow-2xl border border-slate-100">
          <div className="grid md:grid-cols-2 gap-20 relative z-10">
            <div>
              <h2 className="section-title text-3xl md:text-5xl font-display font-extrabold uppercase mb-8 text-slate-900">Get in touch</h2>
              <p className="text-slate-600 text-lg mb-12 max-w-md font-medium">
                Professional ICT support is just a message away. Our team is ready to analyze your technical needs and deliver excellence.
              </p>
              
              <div className="space-y-8">
                <div className="group flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-[13px] text-slate-800 uppercase tracking-widest font-extrabold mb-2">Our Headquarters</div>
                    <div className="text-slate-900 font-bold text-lg">Biwi Area, Lilongwe, Malawi</div>
                  </div>
                </div>

                <div className="group flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                    <Globe size={24} />
                  </div>
                  <div>
                    <div className="text-[13px] text-slate-800 uppercase tracking-widest font-extrabold mb-2">Website</div>
                    <div className="text-slate-900 font-bold text-lg">www.kuyaservices.com</div>
                  </div>
                </div>
                <div className="group flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-secondary/5 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-[13px] text-slate-800 uppercase tracking-widest font-extrabold mb-2">Call & Support</div>
                    <div className="text-slate-900 font-bold text-lg">+265 996 197 463</div>
                    <div className="text-slate-900 font-bold text-lg">+265 884 126 001</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 md:p-12 border border-slate-100">
              <h3 className="text-xl font-bold mb-8 uppercase tracking-tight text-slate-900">Service Request Form</h3>
              <form 
                action="https://formspree.io/f/xdayqqoz" 
                method="POST"
                className="space-y-6"
              >
                {/* Formspree Configuration */}
                <input type="hidden" name="_subject" value="New Service Request from KUYA IT Website" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[12px] font-bold uppercase tracking-widest text-slate-800">First Name</label>
                    <input 
                      type="text" 
                      name="firstName"
                      required
                      className="w-full bg-white border border-slate-200 px-4 py-4 text-slate-900 focus:outline-none focus:border-primary transition-colors text-sm" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[12px] font-bold uppercase tracking-widest text-slate-800">Last Name</label>
                    <input 
                      type="text" 
                      name="lastName"
                      required
                      className="w-full bg-white border border-slate-200 px-4 py-4 text-slate-900 focus:outline-none focus:border-primary transition-colors text-sm" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] font-bold uppercase tracking-widest text-slate-800">Professional Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full bg-white border border-slate-200 px-4 py-4 text-slate-900 focus:outline-none focus:border-primary transition-colors text-sm" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] font-bold uppercase tracking-widest text-slate-800">Project Details</label>
                  <textarea 
                    name="message"
                    required
                    rows={4} 
                    className="w-full bg-white border border-slate-200 px-4 py-4 text-slate-900 focus:outline-none focus:border-primary transition-colors resize-none text-sm"
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
            <ul className="space-y-4 text-sm text-white/70 font-medium">
              <li><a href="https://www.kuyaservices.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors font-bold text-white">www.kuyaservices.com</a></li>
              <li><a href="https://www.instagram.com/Kuya_solutions/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Instagram: Kuya_solutions</a></li>
              <li><a href="https://www.facebook.com/profile.php?id=61560644342372" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Facebook: Kuya I.T Solutions</a></li>
              <li><a href="#about" className="hover:text-secondary transition-colors">Vision & Mission</a></li>
            </ul>
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
    <div className="min-h-screen selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
