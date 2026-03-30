import { useLanguage } from '@/i18n/LanguageContext'
import { useRef, useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type MainTabsProps = {
  activeTab: string
  onTabChange: (tab: string) => void
}

type SubTabsProps = {
  activeSubTab: string
  onSubTabChange: (tab: string) => void
}

const mainTabs = [
  'hot', 'japan_marathon', 'intl_marathon', 'hiking',
  'intl_cycling', 'taiwan_marathon', 'golf', 'baseball',
]

const subTabs = ['hot', 'pb', 'beginner', 'extreme', 'day_trip']

const SCROLL_AMOUNT = 200

export const MainNavBar = ({ activeTab, onTabChange }: MainTabsProps) => {
  const { t } = useLanguage()
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)

  const checkScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setShowLeft(el.scrollLeft > 0)
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    checkScroll()
    el.addEventListener('scroll', checkScroll, { passive: true })
    window.addEventListener('resize', checkScroll)
    return () => {
      el.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    }
  }, [checkScroll])

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({
      left: direction === 'right' ? SCROLL_AMOUNT : -SCROLL_AMOUNT,
      behavior: 'smooth',
    })
  }

  return (
    <div className="sticky top-0 z-header bg-primary-9">
      <div className="max-w-[1280px] mx-auto relative">
        {/* Left arrow */}
        {showLeft && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-0 z-10 flex items-center px-2 h-[48px] bg-gradient-to-r from-primary-9 via-primary-9/80 to-transparent"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} className="text-neutral-0" />
          </button>
        )}

        {/* Tabs */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide px-4 md:px-8 no-scrollbar"
        >
          {mainTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`px-6 py-3 text-base leading-6 font-medium whitespace-nowrap transition-colors ${
                activeTab === tab
                  ? 'text-neutral-0 bg-primary-5'
                  : 'text-neutral-3 hover:text-neutral-0'
              }`}
            >
              {t(`tab.${tab}`)}
            </button>
          ))}
        </div>

        {/* Right arrow */}
        {showRight && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-0 z-10 flex items-center px-2 h-[48px] bg-gradient-to-l from-primary-9 via-primary-9/80 to-transparent"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} className="text-neutral-0" />
          </button>
        )}
      </div>
    </div>
  )
}

export const SubNavBar = ({ activeSubTab, onSubTabChange }: SubTabsProps) => {
  const { t } = useLanguage()
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)

  const checkScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setShowLeft(el.scrollLeft > 0)
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    checkScroll()
    el.addEventListener('scroll', checkScroll, { passive: true })
    window.addEventListener('resize', checkScroll)
    return () => {
      el.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    }
  }, [checkScroll])

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({
      left: direction === 'right' ? SCROLL_AMOUNT : -SCROLL_AMOUNT,
      behavior: 'smooth',
    })
  }

  return (
    <div className="max-w-[1280px] mx-auto pt-5 pb-3">
      <div className="relative">
        {/* Left arrow */}
        {showLeft && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center w-12 h-12 rounded-full border border-neutral-5 bg-neutral-0 text-neutral-7 hover:bg-neutral-2 active:bg-neutral-3 transition-colors shadow-03"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        {/* Tabs */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar gap-2 px-4 md:px-8"
        >
          {subTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onSubTabChange(tab)}
              className={`px-5 py-[7px] rounded-full text-base leading-6 border transition-colors whitespace-nowrap flex-shrink-0 ${
                activeSubTab === tab
                  ? 'bg-primary-5 text-neutral-0 border-primary-5'
                  : 'bg-neutral-0 text-primary-5 border-primary-5 hover:bg-primary-0 active:bg-primary-1'
              }`}
            >
              {t(`subtab.${tab}`)}
            </button>
          ))}
        </div>

        {/* Right arrow */}
        {showRight && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center w-12 h-12 rounded-full border border-neutral-5 bg-neutral-0 text-neutral-7 hover:bg-neutral-2 active:bg-neutral-3 transition-colors shadow-03"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>
    </div>
  )
}
