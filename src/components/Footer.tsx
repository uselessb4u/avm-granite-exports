const Footer = () => {
  return (
    <footer className="bg-granite-dark text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-playfair font-bold text-2xl mb-4">
                AVM <span className="text-accent">EXPORTS</span>
              </h3>
              <p className="text-primary-foreground/80 font-inter text-sm leading-relaxed">
                India's leading exporter of premium granite rough blocks. 
                25 years of expertise, delivering trust and quality worldwide.
              </p>
            </div>

            <div>
              <h4 className="font-inter font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-primary-foreground/80 font-inter text-sm">
                <li>
                  <a href="#about" className="hover:text-accent transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-accent transition-colors">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#videos" className="hover:text-accent transition-colors">
                    Video Gallery
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-accent transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-inter font-semibold text-lg mb-4">Location</h4>
              <p className="text-primary-foreground/80 font-inter text-sm leading-relaxed">
                Headquartered in Tamil Nadu<br />
                India's Premier Granite Hub
              </p>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="text-primary-foreground/60 font-inter text-sm">
              © {new Date().getFullYear()} AVM EXPORTS. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
