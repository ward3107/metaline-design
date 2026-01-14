import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const { content, language } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', phone: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const iconMargin = language === 'he' ? 'ml-4' : 'mr-4';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 pb-20">
      {/* Header */}
      <div className="bg-primary dark:bg-black text-white py-20 mb-12">
        <div className="container mx-auto px-4 text-center">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{content.contact.title}</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {content.contact.subtitle}
            </p>
          </Reveal>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <Reveal>
            <div className="space-y-8">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{content.contact.infoTitle}</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className={`w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0 ${iconMargin}`}>
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">{content.contact.phone}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1" dir="ltr">+972 3-555-5555</p>
                      <p className="text-sm text-gray-500 mt-1">{content.contact.phoneNote}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className={`w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0 ${iconMargin}`}>
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">{content.contact.email}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">info@anton.co.il</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className={`w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0 ${iconMargin}`}>
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">{content.contact.address}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">{content.contact.addressVal}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 dark:bg-slate-800 rounded-2xl h-64 overflow-hidden shadow-lg relative">
                 <img src="https://picsum.photos/800/400?blur=2" alt="Map Location" className="w-full h-full object-cover grayscale opacity-50" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-white dark:bg-slate-700 px-4 py-2 rounded shadow text-gray-800 dark:text-white font-medium">{content.contact.map}</span>
                 </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.2}>
            <div className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{content.contact.formTitle}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">{content.contact.formSubtitle}</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{content.contact.labels.phone}</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
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

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{content.contact.labels.message}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent focus:border-accent transition-all outline-none resize-none"
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