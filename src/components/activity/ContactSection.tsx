import { useLanguage } from '@/i18n/LanguageContext'

const ContactSection = () => {
  const { t } = useLanguage()

  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-8 py-10">
      <h2 className="text-ds-4 font-bold text-neutral-8 mb-4">{t('contact.title')}</h2>
      <p className="text-ds-1 text-neutral-7 mb-4">{t('contact.phone')}</p>
      <p className="text-ds-1 text-neutral-6 mb-4">{t('contact.line')}</p>
      <div className="flex gap-3">
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-success-5 text-neutral-0 px-5 py-2.5 rounded-1 text-ds-1 font-medium hover:bg-success-6 transition-colors"
        >
          <img src="https://img.asiayo.com/static/images/line.svg" alt="LINE" className="w-5 h-5" />
          {t('contact.line')}
        </a>
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-success-5 text-neutral-0 px-5 py-2.5 rounded-1 text-ds-1 font-medium hover:bg-success-6 transition-colors"
        >
          {t('contact.agent')}
        </a>
      </div>
    </section>
  )
}

export default ContactSection
