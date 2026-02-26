import { Home, Shield, Building, Warehouse, Lock, Sun, Ruler } from 'lucide-react';

export const en = {
  direction: 'ltr',
  companyName: "Anton",
  tagline: "Advanced Aluminum & Steel Solutions",
  nav: [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ],
  buttons: {
    callNow: 'Call Now',
    products: 'Our Products',
    contact: 'Contact Us',
    learnMore: 'Learn More',
    scroll: 'Scroll',
    viewDetails: 'View Details',
    sendMessage: 'Send Message',
    sending: 'Sending...',
    success: 'Message Sent Successfully!',
    backToTop: 'Back to Top'
  },
  cookies: {
    title: 'Cookie Settings',
    text: 'We use cookies to improve your browsing experience, serve personalized content, and analyze our traffic.',
    acceptAll: 'Accept All',
    rejectAll: 'Reject All',
    customize: 'Customize',
    save: 'Save Preferences',
    categories: {
      essential: {
        title: 'Essential',
        desc: 'These cookies are necessary for the website to function and cannot be switched off.'
      },
      analytics: {
        title: 'Analytics',
        desc: 'Help us understand how visitors interact with the website.'
      },
      marketing: {
        title: 'Marketing',
        desc: 'Used to display relevant ads and personalized content.'
      }
    }
  },
  home: {
    heroTitle: 'Design & Safety',
    heroHighlight: 'Without Compromise',
    heroDesc: 'We specialize in the planning, manufacturing, and installation of premium gates, fences, and shading solutions.',
    servicesTitle: 'Our Solutions',
    servicesDesc: 'A wide range of quality products customized to your needs. Drag to explore all services.',
    ctaTitle: 'Ready to Upgrade Your Property?',
    ctaDesc: 'Our professional team is available for an initial consultation without obligation. Let\'s plan your next project together.',
    ctaButton: 'Talk to Us Today',
    features: {
      warranty: { title: 'Full Warranty', desc: 'All our products come with a comprehensive warranty for your peace of mind.' },
      design: { title: 'Custom Design', desc: 'Full customization of design, dimensions, and colors to meet project requirements.' },
      safety: { title: 'Safety Standards', desc: 'Meeting the strictest standards for safety and quality.' },
      schedule: { title: 'On Time Delivery', desc: 'Commitment to fast delivery and installation times without delays.' }
    }
  },
  products: {
    title: 'Our Products',
    subtitle: 'Our comprehensive product catalog. Each product is carefully manufactured from quality raw materials and modern design.',
    noResults: 'No products found in this category.',
    categories: [
      { id: 'all', label: 'All' },
      { id: 'gates', label: 'Gates' },
      { id: 'fences', label: 'Fences' },
      { id: 'pergolas', label: 'Pergolas' },
      { id: 'railings', label: 'Railings' },
      { id: 'cladding', label: 'Cladding' },
    ]
  },
  gallery: {
    title: 'Project Gallery',
    subtitle: 'A glimpse of some of the projects we have carried out for our clients. Uncompromising quality in every detail.',
    types: {
      residential: 'Residential',
      commercial: 'Commercial',
      outdoor: 'Outdoor'
    }
  },
  about: {
    title: 'About Anton',
    subtitle: 'Since 2005, we have been leading the aluminum and steel industry in Israel with new standards of quality, service, and innovation.',
    storyTitle: 'Our Story',
    storyP1: '"Anton" was founded out of a passion for aesthetics and practicality in the construction world. What started as a small workshop grew to become one of the leading companies in aluminum and steel solutions for residential and industrial use.',
    storyP2: 'We believe that the home is a person\'s fortress, so every product leaving our factory undergoes strict quality control. Our gates, fences, and pergolas are not just safety and shading products - they are an integral part of home design.',
    storyP3: 'Our team consists of certified engineers, designers, and installers with decades of experience, committed to giving every customer the most precise solution for their needs.',
    valuesTitle: 'Our Values',
    values: [
      { title: 'Excellence', text: 'Striving for perfection in every weld and screw.' },
      { title: 'Personal Service', text: 'Close accompaniment from planning to installation.' },
      { title: 'Professionalism', text: 'Using the most advanced manufacturing technologies.' },
      { title: 'Reliability', text: 'Full transparency and strict adherence to schedules.' },
    ]
  },
  contact: {
    title: 'Contact Us',
    subtitle: 'Have a question? Want a quote? Leave your details and we will get back to you shortly.',
    infoTitle: 'Contact Information',
    phone: 'Phone',
    phoneNote: 'Sunday - Thursday, 08:00 - 18:00',
    email: 'Email',
    address: 'Address',
    addressVal: '12 HaMelacha St., Holon Industrial Zone',
    formTitle: 'Send Us a Message',
    formSubtitle: 'Fill out the form and our representative will contact you to schedule a consultation.',
    labels: {
      name: 'Full Name',
      namePlaceholder: 'John Doe',
      phone: 'Phone',
      phonePlaceholder: '050-0000000',
      email: 'Email',
      emailPlaceholder: 'name@example.com',
      designType: 'Desired Design Type',
      designPlaceholder: 'Select design type...',
      message: 'Message',
      messagePlaceholder: 'Tell us about your project...'
    },
    designs: [
      { id: 'gates', label: 'Electric Gates' },
      { id: 'fences', label: 'Aluminum Fences' },
      { id: 'pergolas', label: 'Shading Pergolas' },
      { id: 'railings', label: 'Safety Railings' },
      { id: 'cladding', label: 'Wall Cladding' },
      { id: 'bars', label: 'Designed Bars' },
      { id: 'other', label: 'Other / Custom Solution' },
    ],
    map: 'Interactive Map (Simulation)'
  },
  footer: {
    about: 'Your experts for aluminum and steel solutions. Design, manufacturing, and installation at the highest level, with strict adherence to quality and service without compromise.',
    quickLinks: 'Quick Links',
    services: 'Our Services',
    contact: 'Contact Info',
    rights: 'All rights reserved.'
  },
  servicesList: [
    {
      id: 'gates',
      title: 'Electric Gates',
      description: 'Designed aluminum and steel gates, combining maximum safety with modern and luxurious design for home and business.',
      icon: Shield,
      image: 'https://picsum.photos/800/600?random=1'
    },
    {
      id: 'fences',
      title: 'Designed Fences',
      description: 'Perimeter fencing solutions that maintain your privacy while keeping a clean and aesthetic design line.',
      icon: Ruler,
      image: 'https://picsum.photos/800/600?random=2'
    },
    {
      id: 'pergolas',
      title: 'Shading Pergolas',
      description: 'Advanced aluminum pergolas, electric or fixed, resistant to all weather conditions and requiring no maintenance.',
      icon: Sun,
      image: 'https://picsum.photos/800/600?random=3'
    },
    {
      id: 'railings',
      title: 'Safety Railings',
      description: 'Glass and aluminum railings for balconies and stairs, combining transparency and safety meeting strict standards.',
      icon: Home,
      image: 'https://picsum.photos/800/600?random=4'
    },
    {
      id: 'cladding',
      title: 'Aluminum Cladding',
      description: 'Advanced wall cladding giving the structure an innovative look, thermal insulation, and protection for years.',
      icon: Building,
      image: 'https://picsum.photos/800/600?random=5'
    },
    {
      id: 'bars',
      title: 'Bars & Grilles',
      description: 'Decorative bars that do not obstruct the view, providing maximum protection and peace of mind.',
      icon: Lock,
      image: 'https://picsum.photos/800/600?random=6'
    }
  ],
  productsList: [
    { id: '1', category: 'gates', title: 'Hi-Tech Entry Gate', description: 'Hi-tech model aluminum gate with hidden motor', image: 'https://picsum.photos/600/400?random=10' },
    { id: '2', category: 'gates', title: 'Classic Wing Gate', description: 'Classic design wing gate with decorative elements', image: 'https://picsum.photos/600/400?random=11' },
    { id: '3', category: 'fences', title: 'Louver Fence', description: 'Louver model aluminum fence for full privacy', image: 'https://picsum.photos/600/400?random=12' },
    { id: '4', category: 'fences', title: 'Hi-Tech Fence', description: 'Fence with clean straight lines', image: 'https://picsum.photos/600/400?random=13' },
    { id: '5', category: 'pergolas', title: 'Floating Pergola', description: 'Pergola without pillars in floating design', image: 'https://picsum.photos/600/400?random=14' },
    { id: '6', category: 'pergolas', title: 'Electric Pergola', description: 'Retractable pergola with remote control', image: 'https://picsum.photos/600/400?random=15' },
    { id: '7', category: 'railings', title: 'Glass Railing', description: 'Embedded glass railing without pillars', image: 'https://picsum.photos/600/400?random=16' },
    { id: '8', category: 'cladding', title: 'Wood-Look Cladding', description: 'Aluminum cladding with high-quality wood finish', image: 'https://picsum.photos/600/400?random=17' },
  ],
  galleryList: [
    { id: '1', category: 'residential', title: 'Villa in Savyon', image: 'https://picsum.photos/800/800?random=20' },
    { id: '2', category: 'commercial', title: 'Herzliya Hi-Tech Offices', image: 'https://picsum.photos/800/600?random=21' },
    { id: '3', category: 'residential', title: 'Private House in Caesarea', image: 'https://picsum.photos/600/800?random=22' },
    { id: '4', category: 'outdoor', title: 'Ramat HaSharon Designed Garden', image: 'https://picsum.photos/800/600?random=23' },
    { id: '5', category: 'residential', title: 'Tel Aviv Penthouse', image: 'https://picsum.photos/800/800?random=24' },
    { id: '6', category: 'commercial', title: 'Azrieli Mall', image: 'https://picsum.photos/600/600?random=25' },
  ]
};
