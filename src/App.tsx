/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown, 
  Heart, 
  Instagram, 
  Linkedin, 
  Compass, 
  Home, 
  ShoppingBag,
  Quote,
  ArrowUpRight
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Interior Design', href: '#design' },
    { name: 'Furniture & Textiles', href: '#shop' },
    { name: 'Property Experiences', href: '#stays' },
    { name: 'Journal', href: '#journal' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-3xl font-serif tracking-tight text-raro-charcoal">
          RāRo
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm uppercase tracking-widest hover:text-raro-terracotta transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-raro-terracotta text-white px-6 py-2 text-sm uppercase tracking-widest rounded-[2px] hover:bg-opacity-90 transition-all duration-300">
            Consultation
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-raro-charcoal"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-8 px-6 flex flex-col space-y-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-lg font-serif tracking-wide border-b border-raro-charcoal/5 pb-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-raro-terracotta text-white w-full py-4 text-sm uppercase tracking-widest rounded-[2px]">
              Book a Consultation
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center px-6">
      {/* Background Image with Tint */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
          alt="Styled living room"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-raro-charcoal/30 backdrop-blur-[1px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-8xl text-white mb-6 leading-tight"
        >
          Where Design <br /> Meets Dwelling
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl text-white/90 font-light mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Interior design, curated furniture, and handpicked property experiences — crafted for the design-conscious.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6"
        >
          <button className="border border-white text-white px-10 py-4 text-sm uppercase tracking-widest rounded-[2px] hover:bg-white hover:text-raro-charcoal transition-all duration-500 w-full md:w-auto">
            Explore Our Work
          </button>
          <button className="bg-raro-terracotta text-white px-10 py-4 text-sm uppercase tracking-widest rounded-[2px] hover:bg-opacity-90 transition-all duration-500 w-full md:w-auto">
            Book a Consultation
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce opacity-70">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

const AboutStrip = () => {
  const features = [
    { 
      icon: <Home size={32} strokeWidth={1} />, 
      title: "Interior Design", 
      desc: "We shape spaces that tell your story" 
    },
    { 
      icon: <ShoppingBag size={32} strokeWidth={1} />, 
      title: "Furniture & Textiles", 
      desc: "Sourced pieces that carry character" 
    },
    { 
      icon: <Compass size={32} strokeWidth={1} />, 
      title: "Property Experiences", 
      desc: "Stays designed to inspire" 
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="text-raro-terracotta mb-6 transition-transform duration-500 group-hover:scale-110">
                {f.icon}
              </div>
              <h3 className="text-2xl mb-3">{f.title}</h3>
              <p className="text-raro-charcoal/60 font-light max-w-[250px]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DesignSection = () => {
  return (
    <section id="design" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-3/5 relative mb-12 md:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop" 
              alt="Minimal room"
              className="w-full h-[600px] object-cover shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="hidden md:block absolute -bottom-10 -right-10 w-64 h-64 bg-raro-sage/20 -z-10"></div>
          </div>
          <div className="w-full md:w-2/5 md:-ml-20 z-10">
            <div className="bg-raro-cream p-10 md:p-16 shadow-xl border border-raro-charcoal/5">
              <span className="text-raro-terracotta uppercase tracking-widest text-xs font-bold mb-4 block">Our Philosophy</span>
              <h2 className="text-4xl md:text-5xl mb-6 leading-tight">Spaces Designed with Intention</h2>
              <p className="text-raro-charcoal/70 font-light leading-relaxed mb-8">
                We believe a home should be a reflection of the soul. Our approach blends organic textures, timeless silhouettes, and a curated palette to create environments that feel both elevated and deeply personal.
              </p>
              <button className="group flex items-center space-x-3 text-sm uppercase tracking-widest font-bold hover:text-raro-terracotta transition-colors">
                <span>View Projects</span>
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ShopSection = () => {
  const products = [
    { 
      name: "The Linen Throw", 
      desc: "Hand-loomed in Belgium", 
      price: "$185", 
      img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=600&auto=format&fit=crop" 
    },
    { 
      name: "Talavera Vessel", 
      desc: "Aged clay, hand-thrown", 
      price: "$120", 
      img: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=600&auto=format&fit=crop" 
    },
    { 
      name: "Sienna Cushion", 
      desc: "Organic cotton velvet", 
      price: "$85", 
      img: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=600&auto=format&fit=crop" 
    },
    { 
      name: "Rattan Lounge", 
      desc: "Natural weave, teak frame", 
      price: "$1,250", 
      img: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=600&auto=format&fit=crop" 
    }
  ];

  return (
    <section id="shop" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-2">The Edit</h2>
          <p className="font-serif italic text-raro-charcoal/50 text-xl">Curated pieces for considered living</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden mb-4">
                <img 
                  src={p.img} 
                  alt={p.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-raro-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white text-raro-charcoal px-6 py-2 text-xs uppercase tracking-widest">Quick View</span>
                </div>
                <button className="absolute top-4 right-4 text-white hover:text-raro-terracotta transition-colors">
                  <Heart size={20} />
                </button>
              </div>
              <h4 className="text-xl mb-1">{p.name}</h4>
              <p className="text-xs text-raro-charcoal/50 uppercase tracking-widest mb-2">{p.desc}</p>
              <p className="font-medium text-raro-terracotta">{p.price}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="border-b border-raro-charcoal pb-1 text-sm uppercase tracking-widest hover:text-raro-terracotta hover:border-raro-terracotta transition-all">
            Shop All Pieces
          </button>
        </div>
      </div>
    </section>
  );
};

const PropertySection = () => {
  const stays = [
    {
      name: "Villa Sol",
      location: "Mallorca, Spain",
      desc: "A sun-drenched sanctuary overlooking the Mediterranean.",
      img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "The Olive Grove",
      location: "Tuscany, Italy",
      desc: "Rustic charm meets modern luxury in the heart of the valley.",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Casa Luna",
      location: "Tulum, Mexico",
      desc: "Jungle-shrouded design retreat with private cenote access.",
      img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="stays" className="py-24 bg-raro-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl mb-4">Curated Stays</h2>
          <p className="text-white/60 max-w-xl font-light leading-relaxed">
            Experience our design philosophy firsthand. We've handpicked and styled these properties to offer an immersive escape for the soul.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stays.map((stay, i) => (
            <div key={i} className="group bg-white/5 rounded-[2px] overflow-hidden hover:-translate-y-2 transition-transform duration-500">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={stay.img} 
                  alt={stay.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <span className="text-raro-gold text-xs uppercase tracking-widest mb-2 block">{stay.location}</span>
                <h3 className="text-2xl mb-4">{stay.name}</h3>
                <p className="text-white/50 font-light text-sm mb-6 leading-relaxed">{stay.desc}</p>
                <button className="flex items-center space-x-2 text-xs uppercase tracking-widest border-b border-white/20 pb-1 hover:border-raro-gold hover:text-raro-gold transition-all">
                  <span>View Stay</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const JournalSection = () => {
  const posts = [
    {
      title: "The Art of Slow Living",
      cat: "Living",
      img: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=800&auto=format&fit=crop",
      excerpt: "How we curate spaces that encourage presence and tranquility in a fast-paced world."
    },
    {
      title: "Sourcing Antique Textiles",
      cat: "Design Insight",
      img: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=800&auto=format&fit=crop",
      excerpt: "A journey through the markets of Provence to find fabrics with a past."
    },
    {
      title: "Mallorca: A Design Guide",
      cat: "Travel",
      img: "https://images.unsplash.com/photo-1537726235470-8504e3bdb299?q=80&w=800&auto=format&fit=crop",
      excerpt: "Our favorite hidden corners of the island, from artisan studios to coastal retreats."
    }
  ];

  return (
    <section id="journal" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl">From the Journal</h2>
          </div>
          <button className="hidden md:block text-sm uppercase tracking-widest border-b border-raro-charcoal pb-1">
            View All Stories
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {posts.map((post, i) => (
            <div key={i} className="group">
              <div className="aspect-[3/2] overflow-hidden mb-6">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-raro-terracotta text-xs uppercase tracking-widest font-bold mb-3 block">{post.cat}</span>
              <h3 className="text-2xl mb-4 group-hover:text-raro-terracotta transition-colors">{post.title}</h3>
              <p className="text-raro-charcoal/60 font-light text-sm leading-relaxed mb-6">{post.excerpt}</p>
              <a href="#" className="text-xs uppercase tracking-widest font-bold border-b border-raro-charcoal/20 pb-1 hover:border-raro-charcoal transition-all">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-raro-cream border-y border-raro-charcoal/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Quote size={48} className="mx-auto text-raro-terracotta/20 mb-8" />
        <p className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-10">
          "Working with RāRo was a transformative experience. They didn't just design a house; they created a sanctuary that resonates with who we are. Every piece feels intentional and every corner tells a story."
        </p>
        <div>
          <h5 className="text-lg font-medium">Elena & Marcus V.</h5>
          <p className="text-xs uppercase tracking-widest text-raro-charcoal/40 mt-1">The Coastal Villa Project</p>
        </div>
      </div>
    </section>
  );
};

const ConsultationCTA = () => {
  return (
    <section id="contact" className="relative py-32 overflow-hidden flex items-center justify-center text-center px-6">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxury interior"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-raro-charcoal/70"></div>
      </div>

      <div className="relative z-10 max-w-2xl">
        <h2 className="text-4xl md:text-6xl text-white mb-6">Let's Build Something Beautiful</h2>
        <p className="text-white/70 font-light mb-10 leading-relaxed">
          Whether you're designing a home, sourcing pieces, or curating a stay — we'd love to hear from you.
        </p>
        <button className="bg-raro-terracotta text-white px-12 py-5 text-sm uppercase tracking-widest rounded-[2px] hover:bg-opacity-90 transition-all duration-300">
          Start a Conversation
        </button>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-20">
          <div className="md:col-span-2">
            <h2 className="text-4xl font-serif mb-6">RāRo</h2>
            <p className="text-raro-charcoal/50 font-light max-w-xs leading-relaxed">
              A design-led platform for considered living. We believe in the power of intentional spaces and curated objects.
            </p>
            <div className="flex space-x-6 mt-8">
              <a href="#" className="text-raro-charcoal/40 hover:text-raro-terracotta transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-raro-charcoal/40 hover:text-raro-terracotta transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-raro-charcoal/40 hover:text-raro-terracotta transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 20a6 6 0 0 1 6-6h0a6 6 0 0 1 6 6v0a6 6 0 0 1-6 6h0a6 6 0 0 1-6-6v0Z"/><path d="M12 14V2"/><path d="M16 6l-4-4-4 4"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h6 className="text-xs uppercase tracking-widest font-bold mb-6">Services</h6>
            <ul className="space-y-4 text-sm text-raro-charcoal/60 font-light">
              <li><a href="#" className="hover:text-raro-terracotta transition-colors">Interior Design</a></li>
              <li><a href="#" className="hover:text-raro-terracotta transition-colors">Furniture Sourcing</a></li>
              <li><a href="#" className="hover:text-raro-terracotta transition-colors">Textile Design</a></li>
              <li><a href="#" className="hover:text-raro-terracotta transition-colors">Property Curation</a></li>
            </ul>
          </div>

          <div>
            <h6 className="text-xs uppercase tracking-widest font-bold mb-6">Company</h6>
            <ul className="space-y-4 text-sm text-raro-charcoal/60 font-light">
              <li><a href="#" className="hover:text-raro-terracotta transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-raro-terracotta transition-colors">The Process</a></li>
              <li><a href="#" className="hover:text-raro-terracotta transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-raro-terracotta transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h6 className="text-xs uppercase tracking-widest font-bold mb-6">Contact</h6>
            <ul className="space-y-4 text-sm text-raro-charcoal/60 font-light">
              <li>hello@raro-design.com</li>
              <li>+44 (0) 20 7946 0123</li>
              <li>London | Mallorca</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-raro-charcoal/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-raro-charcoal/30">
          <p>© 2026 RāRo Design. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-raro-charcoal transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-raro-charcoal transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  useEffect(() => {
    // Reveal animation on scroll
    const reveals = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach(reveal => observer.observe(reveal));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        <div className="reveal">
          <AboutStrip />
        </div>
        
        <div className="reveal">
          <DesignSection />
        </div>
        
        <div className="reveal">
          <ShopSection />
        </div>
        
        <div className="reveal">
          <PropertySection />
        </div>
        
        <div className="reveal">
          <JournalSection />
        </div>
        
        <div className="reveal">
          <Testimonials />
        </div>
        
        <div className="reveal">
          <ConsultationCTA />
        </div>
      </main>

      <Footer />
    </div>
  );
}
