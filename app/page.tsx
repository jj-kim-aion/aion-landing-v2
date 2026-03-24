import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import WhyAion from './components/WhyAion'
import HowItWorks from './components/HowItWorks'
import CaseStudies from './components/CaseStudies'
import QualificationForm from './components/QualificationForm'
import SocialProof from './components/SocialProof'
import ClosingCTA from './components/ClosingCTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PainPoints />
      <WhyAion />
      <HowItWorks />
      <CaseStudies />
      <QualificationForm />
      <SocialProof />
      <ClosingCTA />
      <Footer />
    </main>
  )
}
