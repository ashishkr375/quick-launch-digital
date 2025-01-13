import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WhyChooseUs from '@/components/WhyChooseUs'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import Team from '@/components/Team'
import Services from '@/components/Services'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Hero />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <Team />
      <Services />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}

