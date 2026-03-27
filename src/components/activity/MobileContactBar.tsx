import { useLanguage } from '@/i18n/LanguageContext'
import { DsButton } from '@/components/ds/DsButton'
import { Phone } from 'lucide-react'

const MobileContactBar = () => {
  const { t } = useLanguage()

  return (
    <div className="fixed bottom-0 left-0 w-full flex items-center justify-center px-4 py-2 bg-neutral-0 z-flash-notice md:hidden"
      style={{ boxShadow: '0 -2px 8px 0 rgba(0, 0, 0, 0.1)' }}
    >
      <DsButton variant="outline" level="primary" size="medium" type="button" className="flex-1 mr-4" onClick={() => window.open('#')}>
        <img src="https://img.asiayo.com/static/images/line.svg" alt="LINE" className="w-4 h-4" />
        {t('contact.line')}
      </DsButton>
      <DsButton variant="outline" level="primary" size="medium" type="button" className="flex-1" onClick={() => window.open('#')}>
        <Phone size={16} fill="currentColor" />
        {t('contact.agent')}
      </DsButton>
    </div>
  )
}

export default MobileContactBar
