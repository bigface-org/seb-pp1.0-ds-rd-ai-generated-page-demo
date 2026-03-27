import { useLanguage } from '@/i18n/LanguageContext'
import { Phone } from 'lucide-react'

const MobileContactBar = () => {
  const { t } = useLanguage()

  return (
    <div className="fixed bottom-0 left-0 w-full flex items-center justify-center px-4 py-3 bg-neutral-0 z-[100] md:hidden"
      style={{ boxShadow: '0 -2px 8px 0 rgba(0, 0, 0, 0.1)' }}
    >
      <button
        className="flex-1 h-12 flex items-center justify-center gap-1 rounded-lg border border-neutral-4 bg-neutral-0 mr-2 cursor-pointer"
        onClick={() => window.open('#')}
      >
        <Phone size={16} fill="currentColor" className="text-neutral-8" />
        <span className="text-ds-1 font-bold text-neutral-8">{t('contact.agent')}</span>
      </button>
      <button
        className="flex-1 h-12 flex items-center justify-center gap-1 rounded-lg border-none cursor-pointer"
        style={{ backgroundColor: '#00B900' }}
        onClick={() => window.open('#')}
      >
        <img src="https://img.asiayo.com/static/images/line.svg" alt="LINE" className="w-6 h-6" />
        <span className="text-ds-1 font-bold text-neutral-0">{t('contact.line')}</span>
      </button>
    </div>
  )
}

export default MobileContactBar
