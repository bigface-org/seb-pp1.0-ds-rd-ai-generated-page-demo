import { useLanguage } from '@/i18n/LanguageContext'
import { DsButton } from '@/components/ds/DsButton'
import { Phone } from 'lucide-react'

const ContactSection = () => {
  const { t } = useLanguage()

  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-8 py-10">
      <h2 className="text-ds-4 font-bold text-neutral-8 mb-4">{t('contact.title')}</h2>
      <p className="text-ds-1 text-neutral-7 mb-4">{t('contact.phone')}</p>
      <p className="text-ds-1 text-neutral-6 mb-4">{t('contact.line')}</p>
      <div className="flex gap-3">
        <DsButton variant="outline" level="primary" size="large" type="button" onClick={() => window.open('#')}>
          <img src="https://img.asiayo.com/static/images/line.svg" alt="LINE" className="w-5 h-5" />
          {t('contact.line')}
        </DsButton>
        <DsButton variant="outline" level="primary" size="large" type="button" onClick={() => window.open('#')}>
          <Phone size={20} />
          {t('contact.agent')}
        </DsButton>
      </div>
    </section>
  )
}

export default ContactSection
