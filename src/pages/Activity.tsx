import { useState } from 'react'
import { useLanguage } from '@/i18n/LanguageContext'
import MobileContactBar from '@/components/activity/MobileContactBar'
import ActivityHeader from '@/components/activity/ActivityHeader'
import HeroBanner from '@/components/activity/HeroBanner'
import { MainNavBar, SubNavBar } from '@/components/activity/CategoryTabs'
import EventCard from '@/components/activity/EventCard'
import ContactSection from '@/components/activity/ContactSection'
import ActivityFooter from '@/components/activity/ActivityFooter'

const events = [
  { id: 'fuji', image: 'https://gsimg.asiayo.com/ay-image-upload/1773806980780_Snipaste_2026-03-18_12-09-26.jpg', isPreparing: true },
  { id: 'sapporo', image: 'https://gsimg.asiayo.com/ay-image-upload/1762160066691_%E3%81%99%E3%81%99%E3%81%8D%E3%81%AE%E4%BA%A4%E5%B7%AE%E7%82%B9.jpg' },
  { id: 'hokkaido', image: 'https://gsimg.asiayo.com/ay-image-upload/1770370069276_23-102-238_C-1-1200x800.jpg' },
  { id: 'seoul', image: 'https://gsimg.asiayo.com/ay-image-upload/1772764153054_JTBC2.jpg' },
  { id: 'jeju', image: 'https://gsimg.asiayo.com/ay-image-upload/1770975795042_image.jpg' },
  { id: 'niigata', image: 'https://gsimg.asiayo.com/ay-image-upload/1773387216536_1-1photobigswan.jpg' },
  { id: 'kobe', image: 'https://gsimg.asiayo.com/ay-image-upload/1773120338779_image.jpg' },
  { id: 'kanazawa', image: 'https://gsimg.asiayo.com/ay-image-upload/1770782233285_course_2024_start.jpg' },
  { id: 'yokohama', image: 'https://gsimg.asiayo.com/ay-image-upload/1772609212028_69960ea59a8c6c5ff4b4c824d4f27846.jpg' },
]

const Activity = () => {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState('hot')
  const [activeSubTab, setActiveSubTab] = useState('hot')

  return (
    <div className="min-h-screen bg-neutral-1 pb-[72px] md:pb-0">
      <ActivityHeader />
      <HeroBanner />

      {/* Title section */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-8 py-8">
        <h1 className="text-ds-3 md:text-ds-5 font-bold text-neutral-8 mb-3">{t('hero.title')}</h1>
        <p className="text-ds-1 font-normal md:text-ds-3 md:font-bold text-neutral-6">{t('hero.description')}</p>
      </section>

      {/* Wrap MainNavBar + all content below so sticky parent extends to bottom */}
      <div>
        <MainNavBar activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="bg-neutral-2">
          <SubNavBar activeSubTab={activeSubTab} onSubTabChange={setActiveSubTab} />

          {/* Event cards grid */}
          <div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {events.map((event) => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-neutral-0">
          <ContactSection />
        </div>
        <ActivityFooter />
      </div>
      <MobileContactBar />
    </div>
  )
}

export default Activity
