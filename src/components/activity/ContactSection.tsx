import { useLanguage } from '@/i18n/LanguageContext'
import { DsButton } from '@/components/ds/DsButton'
import { Phone } from 'lucide-react'

const ContactSection = () => {
  const { t } = useLanguage()

  return (
    <section className="hidden md:block max-w-[1280px] mx-auto px-4 md:px-8 py-10">
      <h2 className="text-ds-5 font-bold text-neutral-8 mb-4">{t('contact.title')}</h2>
      <p className="text-ds-1 font-normal text-neutral-7 mb-1">{t('contact.phone')}</p>
      <p className="text-ds-1 font-normal text-neutral-7 mb-4">{t('contact.lineDesc')}</p>
      <div className="flex gap-3">
        <DsButton variant="outline" level="primary" size="large" type="button" onClick={() => window.open('#')}>
          <img src="https://img.asiayo.com/static/images/line.svg" alt="LINE" className="w-4 h-4" />
          {t('contact.line')}
        </DsButton>
      </div>
    </section>
  )
}

export default ContactSection
