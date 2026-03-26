import { useLanguage } from '@/i18n/LanguageContext'

const paymentLogos = [
  { name: 'applepay', src: 'https://img.asiayo.com/static/images/footer/logo/applepay.svg' },
  { name: 'visa', src: 'https://img.asiayo.com/static/images/footer/logo/visa.svg' },
  { name: 'master', src: 'https://img.asiayo.com/static/images/footer/logo/master.svg' },
  { name: 'jcb', src: 'https://img.asiayo.com/static/images/footer/logo/jcb.svg' },
  { name: 'linepay', src: 'https://img.asiayo.com/static/images/footer/logo/linepay.svg' },
  { name: 'jkopay', src: 'https://img.asiayo.com/static/images/footer/logo/jkopay.svg' },
]

const ActivityFooter = () => {
  const { t } = useLanguage()

  return (
    <footer className="bg-neutral-8 text-neutral-4 py-8">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <a href="#" className="text-ds-0 hover:text-neutral-0 transition-colors">{t('footer.terms')}</a>
          <a href="#" className="text-ds-0 hover:text-neutral-0 transition-colors">{t('footer.privacy')}</a>
        </div>
        <p className="text-ds-0 text-neutral-5 mb-4">{t('footer.copyright')}</p>
        <div className="flex flex-wrap items-center gap-3">
          {paymentLogos.map((logo) => (
            <img key={logo.name} src={logo.src} alt={logo.name} className="h-[24px] opacity-70" />
          ))}
        </div>
      </div>
    </footer>
  )
}

export default ActivityFooter
