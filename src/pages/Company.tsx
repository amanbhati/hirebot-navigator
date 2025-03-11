
import { Routes, Route, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutUs from '@/components/company/AboutUs';
import Careers from '@/components/company/Careers';
import Blog from '@/components/company/Blog';
import Press from '@/components/company/Press';
import Solutions from '@/components/company/Solutions';
import CandidateSourced from '@/components/company/CandidateSourced';
import AiChatbots from '@/components/company/AiChatbots';
import InterviewTools from '@/components/company/InterviewTools';
import Analytics from '@/components/company/Analytics';
import Enterprise from '@/components/company/Enterprise';
import Support from '@/components/company/Support';
import HelpCenter from '@/components/company/HelpCenter';
import Documentation from '@/components/company/Documentation';
import ApiReference from '@/components/company/ApiReference';
import PrivacyPolicy from '@/components/company/PrivacyPolicy';
import TermsOfService from '@/components/company/TermsOfService';

const Company = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="section-container py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-7xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-border sticky top-24">
                  <nav className="space-y-6">
                    <div>
                      <h3 className="font-medium text-sm text-muted-foreground mb-2">Company</h3>
                      <ul className="space-y-1">
                        <li>
                          <NavLink to="/company/about-us" className={({isActive}) => 
                            `block px-3 py-2 rounded-md text-sm ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'}`
                          }>
                            About Us
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/company/careers" className={({isActive}) => 
                            `block px-3 py-2 rounded-md text-sm ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'}`
                          }>
                            Careers
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/company/blog" className={({isActive}) => 
                            `block px-3 py-2 rounded-md text-sm ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'}`
                          }>
                            Blog
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/company/press" className={({isActive}) => 
                            `block px-3 py-2 rounded-md text-sm ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'}`
                          }>
                            Press
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-sm text-muted-foreground mb-2">Solutions</h3>
                      <ul className="space-y-1">
                        <li>
                          <NavLink to="/company/solutions" className={({isActive}) => 
                            `block px-3 py-2 rounded-md text-sm ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'}`
                          }>
                            Overview
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/company/candidate-sourcing" className={({isActive}) => 
                            `block px-3 py-2 rounded-md text-sm ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'}`
                          }>
                            Candidate Sourcing
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/company/ai-chatbots" className={({isActive}) => 
                            `block px-3 py-2 rounded-md text-sm ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'}`
                          }>
                            AI Chatbots
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/company/interview-tools" className={({isActive}) => 
                            `block px-3 py-2 rounded-md text-sm ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'}`
                          }>
                            Interview Tools
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/company/analytics" className={({isActive}) => 
                            `block px-3 py-2 rounded-md text-sm ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'}`
                          }>
                            Analytics
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/company/enterprise" className={({isActive}) => 
                            `block px-3 py-2 rounded-md text-sm ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'}`
                          }>
                            Enterprise
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-sm text-muted-foreground mb-2">Support</h3>
                      <ul className="space-y-1">
                        <li>
                          <NavLink to="/company/support" className={({isActive}) => 
                            `block px-3 py-2 rounded-md text-sm ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'}`
                          }>
                            Overview
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/company/help-center" className={({isActive}) => 
                            `block px-3 py-2 rounded-md text-sm ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'}`
                          }>
                            Help Center
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/company/documentation" className={({isActive}) => 
                            `block px-3 py-2 rounded-md text-sm ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'}`
                          }>
                            Documentation
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/company/api-reference" className={({isActive}) => 
                            `block px-3 py-2 rounded-md text-sm ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'}`
                          }>
                            API Reference
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-sm text-muted-foreground mb-2">Legal</h3>
                      <ul className="space-y-1">
                        <li>
                          <NavLink to="/company/privacy-policy" className={({isActive}) => 
                            `block px-3 py-2 rounded-md text-sm ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'}`
                          }>
                            Privacy Policy
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/company/terms-of-service" className={({isActive}) => 
                            `block px-3 py-2 rounded-md text-sm ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'}`
                          }>
                            Terms of Service
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
              
              <div className="w-full md:w-3/4">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
                  <Routes>
                    <Route path="/" element={<AboutUs />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/press" element={<Press />} />
                    <Route path="/solutions" element={<Solutions />} />
                    <Route path="/candidate-sourcing" element={<CandidateSourced />} />
                    <Route path="/ai-chatbots" element={<AiChatbots />} />
                    <Route path="/interview-tools" element={<InterviewTools />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/enterprise" element={<Enterprise />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/help-center" element={<HelpCenter />} />
                    <Route path="/documentation" element={<Documentation />} />
                    <Route path="/api-reference" element={<ApiReference />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-of-service" element={<TermsOfService />} />
                  </Routes>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Company;
