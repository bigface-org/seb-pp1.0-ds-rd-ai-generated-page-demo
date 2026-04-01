import { useLanguage } from '@/i18n/LanguageContext'
import TabFilter from '@/components/common/TabFilter'
import type { Tab } from '@/components/common/TabFilter/types'

type MainTabsProps = {
  activeTab: string
  onTabChange: (tab: string) => void
}

type SubTabsProps = {
  activeSubTab: string
  onSubTabChange: (tab: string) => void
}

const mainTabIds = [
  'hot', 'japan_marathon', 'intl_marathon', 'hiking',
  'intl_cycling', 'taiwan_marathon', 'golf', 'baseball',
]

const subTabIds = ['hot', 'pb', 'beginner', 'extreme', 'day_trip']

export const MainNavBar = ({ activeTab, onTabChange }: MainTabsProps) => {
  const { t } = useLanguage()
  const tabs: Tab[] = mainTabIds.map((id) => ({ id, label: t(`tab.${id}`) }))

  return (
    <TabFilter
      type="main"
      tabs={tabs}
      activeTab={activeTab}
      hasOuter
      onTabChange={(tab) => onTabChange(tab.id)}
    />
  )
}

export const SubNavBar = ({ activeSubTab, onSubTabChange }: SubTabsProps) => {
  const { t } = useLanguage()
  const tabs: Tab[] = subTabIds.map((id) => ({ id, label: t(`subtab.${id}`) }))

  return (
    <TabFilter
      type="sub"
      tabs={tabs}
      activeTab={activeSubTab}
      onTabChange={(tab) => onSubTabChange(tab.id)}
    />
  )
}
