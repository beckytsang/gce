import { useLang } from '@/i18n'
import Header from '@/sections/Header'
import Hero from '@/sections/Hero'
import Ticker from '@/sections/Ticker'
import WhoWeAre from '@/sections/WhoWeAre'
import Services from '@/sections/Services'
import FeaturedProjects from '@/sections/FeaturedProjects'
import WhyGCE from '@/sections/WhyGCE'
import LatestProjects from '@/sections/LatestProjects'
import Accreditation from '@/sections/Accreditation'
import CtaFooter from '@/sections/CtaFooter'

export default function Home() {
  const { lang } = useLang()
  return (
    <div key={lang} style={{ animation: 'lang-fade 0.4s ease both' }}>
      <style>{`@keyframes lang-fade { from { opacity: 0.35 } to { opacity: 1 } }`}</style>
      <Header />
      <main>
        <Hero />
        <Ticker />
        <WhoWeAre />
        <Services />
        <FeaturedProjects />
        <WhyGCE />
        <LatestProjects />
        <Accreditation />
        <CtaFooter />
      </main>
    </div>
  )
}
