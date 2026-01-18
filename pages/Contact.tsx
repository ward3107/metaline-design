import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ChevronDown } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

export const Contact: React.FC = () => {
  const { content, language } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    designType: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', phone: '', email: '', designType: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const iconMargin = language === 'he' ? 'ml-4' : 'mr-4';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 pb-20">
      {/* Header */}
      <div className="bg-primary dark:bg-black text-white py-12 md:py-20 mb-8 md:mb-12">
        <div className="container mx-auto px-4 text-center">
          <Reveal>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{content.contact.title}</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              {content.contact.subtitle}
            </p>
          </Reveal>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <div className="space-y-6 md:space-y-8">
            <Reveal width="100%">
              <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">{content.contact.infoTitle}</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className={`w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0 ${iconMargin}`}>
                      <Phone size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white text-sm md:text-base">{content.contact.phone}</h3>
                      <a href="tel:+97235555555" className="text-gray-600 dark:text-gray-400 mt-1 hover:text-accent dark:hover:text-accent transition-colors" dir="ltr">+972 3-555-5555</a>
                      <p className="text-xs text-gray-500 mt-1">{content.contact.phoneNote}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className={`w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0 ${iconMargin}`}>
                      <Mail size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white text-sm md:text-base">{content.contact.email}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm md:text-base">info@anton.co.il</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className={`w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0 ${iconMargin}`}>
                      <MapPin size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white text-sm md:text-base">{content.contact.address}</h3>
                      <a
                        href="https://ul.waze.com/ul?navigate=yes&q=HaMelacha+12+Holon+Israel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent dark:text-accent mt-1 hover:text-accent-hover dark:hover:text-accent-hover transition-colors text-sm md:text-base block underline underline-offset-2"
                      >
                        {content.contact.addressVal} 🚗
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Google Map */}
            <Reveal width="100%" delay={0.1}>
              <div className="rounded-2xl h-48 md:h-64 overflow-hidden shadow-lg relative border border-gray-100 dark:border-slate-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3358.5!2d35.23!3d32.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c4f6d8f5f5f5f%3A0x0!2sJdeida%20Mack%2C%20Israel!5e0!3m2!1sen!2s!4v1!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="מיקום - ג'דיידה מכר"
                  className="w-full h-full"
                />
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.2} width="100%">
            <div className="bg-white dark:bg-slate-800 p-6 md:p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">{content.contact.formTitle}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 md:mb-8 text-sm md:text-base">{content.contact.formSubtitle}</p>
              
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{content.contact.labels.name}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent focus:border-accent transition-all outline-none"
                    placeholder={content.contact.labels.namePlaceholder}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{content.contact.labels.phone}</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      inputMode="numeric"
                      pattern="[0-9\-]*"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent focus:border-accent transition-all outline-none"
                      placeholder={content.contact.labels.phonePlaceholder}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{content.contact.labels.email}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent focus:border-accent transition-all outline-none"
                      placeholder={content.contact.labels.emailPlaceholder}
                    />
                  </div>
                </div>

                {/* New Design Type Dropdown */}
                <div>
                  <label htmlFor="designType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{content.contact.labels.designType}</label>
                  <div className="relative">
                    <select
                      id="designType"
                      name="designType"
                      required
                      value={formData.designType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent focus:border-accent transition-all outline-none appearance-none"
                    >
                      <option value="" disabled>{content.contact.labels.designPlaceholder}</option>
                      {content.contact.designs.map((design: { id: string, label: string }) => (
                        <option key={design.id} value={design.id}>
                          {design.label}
                        </option>
                      ))}
                    </select>
                    <div className={`absolute inset-y-0 ${language === 'he' ? 'left-3' : 'right-3'} flex items-center pointer-events-none text-gray-400`}>
                      <ChevronDown size={20} />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{content.contact.labels.message}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent focus:border-accent transition-all outline-none resize-none min-h-[100px]"
                    placeholder={content.contact.labels.messagePlaceholder}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className={`w-full py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all ${
                    submitted 
                    ? 'bg-green-600 text-white cursor-default' 
                    : 'bg-accent hover:bg-accent-hover text-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  {submitted ? (
                    content.buttons.success
                  ) : (
                    <>
                      {content.buttons.sendMessage} <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};