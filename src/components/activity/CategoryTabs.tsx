import { useLanguage } from '@/i18n/LanguageContext'

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

export const MainNavBar = ({ activeTab, onTabChange }: MainTabsProps) => {
  const { t } = useLanguage()

  return (
    <div className="sticky top-0 z-header bg-primary-9">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex overflow-x-auto scrollbar-hide">
        {mainTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`px-5 py-3 text-ds-1 font-medium whitespace-nowrap transition-colors ${
              activeTab === tab
                ? 'text-neutral-0 bg-primary-5'
                : 'text-neutral-3 hover:text-neutral-0'
            }`}
          >
            {t(`tab.${tab}`)}
          </button>
        ))}
      </div>
    </div>
  )
}

export const SubNavBar = ({ activeSubTab, onSubTabChange }: SubTabsProps) => {
  const { t } = useLanguage()

  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-8 pt-5 pb-3">
      <div className="flex flex-wrap gap-2">
        {subTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onSubTabChange(tab)}
            className={`px-4 py-1.5 rounded-full text-ds-1 border transition-colors ${
              activeSubTab === tab
                ? 'bg-primary-5 text-neutral-0 border-primary-5'
                : 'bg-neutral-0 text-neutral-7 border-neutral-4 hover:border-primary-5 hover:text-primary-5'
            }`}
          >
            {t(`subtab.${tab}`)}
          </button>
        ))}
      </div>
    </div>
  )
}
