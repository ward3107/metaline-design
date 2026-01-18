import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { MarkdownModal } from './MarkdownModal';

export const Footer: React.FC = () => {
  const { content, language } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState({ title: '', path: '' });
  const spaceClass = language === 'he' ? 'space-x-reverse' : '';
  const iconMargin = language === 'he' ? 'ml-3' : 'mr-3';

  return (
    <footer className="bg-primary text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <div className={`flex items-center space-x-2 ${spaceClass} mb-6`}>
               <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
               </div>
               <span className="text-2xl font-bold text-white">{content.companyName}</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {content.footer.about}
            </p>
            <div className={`flex space-x-4 ${spaceClass}`}>
              <a href="#" className="hover:text-accent transition-colors"><Facebook size={24} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Instagram size={24} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Linkedin size={24} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">{content.footer.quickLinks}</h3>
            <ul className="space-y-3">
              {content.nav.map((link: { path: string; label: string }) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-accent transition-colors flex items-center">
                    <span className={`w-1.5 h-1.5 bg-accent rounded-full ${language === 'he' ? 'ml-2' : 'mr-2'}`}></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">{content.footer.services}</h3>
            <ul className="space-y-3">
              {content.servicesList.slice(0, 5).map((service: { id: string; title: string }) => (
                <li key={service.id}>
                  <Link to="/products" className="hover:text-accent transition-colors flex items-center">
                    <span className={`w-1.5 h-1.5 bg-gray-600 rounded-full ${language === 'he' ? 'ml-2' : 'mr-2'}`}></span>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">{content.footer.contact}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className={`${iconMargin} text-accent shrink-0`} size={20} />
                <span>{content.contact.addressVal}</span>
              </li>
              <li className="flex items-center">
                <Phone className={`${iconMargin} text-accent shrink-0`} size={20} />
                <span dir="ltr">+972 3-555-5555</span>
              </li>
              <li className="flex items-center">
                <Mail className={`${iconMargin} text-accent shrink-0`} size={20} />
                <span>info@anton.co.il</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <button
              onClick={() => {
                setModalConfig({ title: 'Terms of Service', path: '/legal/terms.md' });
                setModalOpen(true);
              }}
              className="text-gray-400 hover:text-accent transition-colors"
            >
              Terms of Service
            </button>
            <button
              onClick={() => {
                setModalConfig({ title: 'Privacy Policy', path: '/legal/privacy.md' });
                setModalOpen(true);
              }}
              className="text-gray-400 hover:text-accent transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => {
                setModalConfig({ title: 'Help & FAQ', path: '/legal/help.md' });
                setModalOpen(true);
              }}
              className="text-gray-400 hover:text-accent transition-colors"
            >
              Help & FAQ
            </button>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 mt-6">
          <p>&copy; {new Date().getFullYear()} {content.companyName}. {content.footer.rights}</p>
        </div>
      </div>

      {/* Markdown Modal */}
      <MarkdownModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalConfig.title}
        path={modalConfig.path}
      />
    </footer>
  );
};