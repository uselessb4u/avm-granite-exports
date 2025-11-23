const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-primary-foreground py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-electric-blue/5 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="font-display font-bold text-3xl mb-4">
                AVM <span className="text-electric-blue">EXPORTS</span>
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed max-w-md mb-6">
                India's leading exporter of premium granite rough blocks. 
                25 years of expertise, delivering trust and quality worldwide.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-electric-blue/20 flex items-center justify-center cursor-pointer transition-colors">
                  <span className="text-sm">→</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3 text-primary-foreground/70">
                <li>
                  <a href="#about" className="hover:text-electric-blue transition-colors inline-block hover:translate-x-1 transform duration-200">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-electric-blue transition-colors inline-block hover:translate-x-1 transform duration-200">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#videos" className="hover:text-electric-blue transition-colors inline-block hover:translate-x-1 transform duration-200">
                    Video Gallery
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-electric-blue transition-colors inline-block hover:translate-x-1 transform duration-200">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Location */}
            <div>
              <h4 className="font-display font-semibold text-lg mb-4">Location</h4>
              <p className="text-primary-foreground/70 leading-relaxed">
                Headquartered in<br />
                <span className="text-primary-foreground">Tamil Nadu</span><br />
                India's Premier Granite Hub
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {currentYear} AVM EXPORTS. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-primary-foreground/50">
              <a href="#" className="hover:text-electric-blue transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-electric-blue transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
