import PerformanceOptimization from "../components/PerformanceOptimization"
import EnhancedHeader from "../components/EnhancedHeader"
import EnhancedHero from "../components/EnhancedHero"
import EnhancedServices from "../components/EnhancedServices"
import AboutSection from "../components/AboutSection"
import ContactSection from "../components/ContactSection"
import EnhancedFooter from "../components/EnhancedFooter"

export default function Home() {
  return (
    <>
      <EnhancedHeader />
      <EnhancedHero />
      <PerformanceOptimization />
      <EnhancedServices />
      <AboutSection />
      <ContactSection />
      <EnhancedFooter />
    </>
  )
}
