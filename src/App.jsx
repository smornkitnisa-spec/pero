import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { ConceptSection } from './components/sections/ConceptSection';
import { SolutionSection } from './components/sections/SolutionSection';
import { TargetSection } from './components/sections/TargetSection';
import { PricingSection } from './components/sections/PricingSection';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <LanguageProvider>
      <div style={{ minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}>
        <Navbar />
        <main>
          <HeroSection />
          <ConceptSection />
          <SolutionSection />
          <TargetSection />
          <PricingSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;

