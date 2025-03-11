
import { ChevronRight, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-white border-t border-border">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <span className="bg-primary text-white h-8 w-8 rounded-md flex items-center justify-center font-bold text-lg">H</span>
              <span className="font-bold text-xl">HireBot</span>
            </a>
            <p className="text-muted-foreground mb-6">
              AI-powered recruitment platform that transforms your hiring process, ensuring you find the perfect candidates efficiently.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors">
                <Twitter size={18} className="text-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors">
                <Linkedin size={18} className="text-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors">
                <Facebook size={18} className="text-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors">
                <Instagram size={18} className="text-foreground" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center">
                  <ChevronRight size={14} className="mr-1" /> About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Press
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Solutions</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Candidate Sourcing
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center">
                  <ChevronRight size={14} className="mr-1" /> AI Chatbots
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Interview Tools
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Analytics
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Enterprise
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center">
                  <ChevronRight size={14} className="mr-1" /> API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} HireBot. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
