import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Menu, X } from 'lucide-react';

export const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const Eyebrow = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-solar-500/30 bg-solar-500/10 text-solar-500 text-xs font-bold mb-6 uppercase tracking-wider ${className}`}>
    <span className="w-2 h-2 rounded-full bg-solar-500" />
    {children}
  </div>
);

export const Button = ({ children, variant = 'primary', className = "", to }: { children: React.ReactNode, variant?: 'primary' | 'ghost', className?: string, to?: string }) => {
  const baseStyle = "px-[28px] py-[14px] font-semibold rounded-full transition-all duration-200 ease-in-out flex items-center justify-center gap-2 group text-sm md:text-base";
  const variants = {
    primary: "bg-solar-500 text-white hover:bg-solar-600",
    ghost: "bg-transparent border-[1.5px] border-white text-white hover:bg-white/10"
  };
  
  const Component = to ? Link : 'button';
  
  return (
    <Component to={to || '#'} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </Component>
  );
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Services', path: '/services' },
    { name: 'Who We Work With', path: '/who-we-work-with' },
    { name: 'Results', path: '/results' },
    { name: 'About', path: '/about' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-light-bg text-dark-900 font-sans selection:bg-solar-500/30">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-black/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <svg className="w-7 h-7 text-[#A87B20] group-hover:scale-105 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 A 10 10 0 0 1 6 22" strokeWidth="1.5" />
              <path d="M6 6 A 6 6 0 0 1 6 18" strokeWidth="2.5" />
              <path d="M6 10 A 2 2 0 0 1 6 14" strokeWidth="3.5" />
            </svg>
            <span className={`font-display text-2xl tracking-tight transition-colors ${isScrolled ? 'text-dark-900' : 'text-white'}`}>
              <span className="font-light">Solar</span><span className="font-bold">Reclaim</span>
            </span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`transition-colors ${location.pathname === link.path ? 'text-solar-500' : (isScrolled ? 'text-dark-600 hover:text-dark-900' : 'text-white/80 hover:text-white')}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link to="/contact" className="px-6 py-3 bg-dark-900 text-white text-sm font-semibold rounded-full hover:bg-black transition-colors duration-200 ease-in-out">
              Book a Free Lead Audit
            </Link>
          </div>

          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-dark-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-dark-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-black/5 shadow-xl py-4 px-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`text-lg font-semibold ${location.pathname === link.path ? 'text-solar-500' : 'text-dark-900'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="mt-4 px-6 py-4 bg-dark-900 hover:bg-black transition-colors text-white text-center font-semibold rounded-xl">
              Book a Free Lead Audit
            </Link>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Global Footer */}
      <footer className="bg-dark-bg text-white pt-24 pb-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Col 1 */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <svg className="w-7 h-7 text-[#A87B20]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2 A 10 10 0 0 1 6 22" strokeWidth="1.5" />
                  <path d="M6 6 A 6 6 0 0 1 6 18" strokeWidth="2.5" />
                  <path d="M6 10 A 2 2 0 0 1 6 14" strokeWidth="3.5" />
                </svg>
                <span className="font-display text-2xl tracking-tight text-white">
                  <span className="font-light">Solar</span><span className="font-bold">Reclaim</span>
                </span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-2">
                Commission-Only Aged Lead Reactivation
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                Serving TX & FL Residential Solar Installers
              </p>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="font-bold mb-6">Pages</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li><Link to="/" className="hover:text-solar-500 transition-colors">Home</Link></li>
                <li><Link to="/how-it-works" className="hover:text-solar-500 transition-colors">How It Works</Link></li>
                <li><Link to="/services" className="hover:text-solar-500 transition-colors">Services</Link></li>
                <li><Link to="/who-we-work-with" className="hover:text-solar-500 transition-colors">Who We Work With</Link></li>
                <li><Link to="/results" className="hover:text-solar-500 transition-colors">Results</Link></li>
                <li><Link to="/about" className="hover:text-solar-500 transition-colors">About</Link></li>
                <li><Link to="/contact" className="hover:text-solar-500 transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="font-bold mb-6">Contact</h4>
              <ul className="space-y-3 text-sm text-white/60 mb-6">
                <li><a href="mailto:contact@solarreclaim.com" className="hover:text-solar-500 transition-colors">contact@solarreclaim.com</a></li>
                <li>Response within 24 hours</li>
              </ul>
              <h4 className="font-bold mb-4">Social</h4>
              <a href="https://www.linkedin.com/in/pranjaysaini" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-solar-500 transition-colors text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>

            {/* Col 4 */}
            <div>
              <h4 className="font-bold mb-6">Compliance</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li>All calls made manually.</li>
                <li>TCPA compliant.</li>
                <li>DNC-scrubbed on every batch.</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-white/40 text-sm">
            <p>© {new Date().getFullYear()} SolarReclaim. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
