import { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Gallery } from './pages/Gallery';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfUse } from './pages/TermsOfUse';
import { RefundPolicy } from './pages/RefundPolicy';
import { Disclaimer } from './pages/Disclaimer';
import { AccessibilityStatement } from './pages/AccessibilityStatement';
import { NotFound } from './pages/NotFound';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <ThemeProvider>
          <HashRouter>
            <ScrollToTop />
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfUse />} />
                <Route path="/refund-policy" element={<RefundPolicy />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
                <Route path="/accessibility" element={<AccessibilityStatement />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </HashRouter>
        </ThemeProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
};

export default App;
