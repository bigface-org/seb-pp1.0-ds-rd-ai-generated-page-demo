import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '@/i18n/LanguageContext'
import type { Locale } from '@/i18n/translations'

const ActivityHeader = () => {
  const { locale, setLocale, t } = useLanguage()
  const [langOpen, setLangOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const locales: { value: Locale; label: string }[] = [
    { value: 'zh-TW', label: '繁體中文(台灣)' },
    { value: 'zh-CN', label: '简体中文' },
    { value: 'en', label: 'English' },
  ]

  return (
    <header className="bg-neutral-0 shadow-header">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between h-[64px] px-6">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <a href="/activity" className="flex items-center">
            <img
              src="https://img.asiayo.com/static/images/asiayo-logo.svg"
              alt="AsiaYo"
              className="h-[28px]"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-6">
            {['cruise', 'group_tour', 'accommodation', 'activities', 'thsr'].map((key) => (
              <a
                key={key}
                href="#"
                className="text-ds-1 text-neutral-7 hover:text-primary-5 transition-colors whitespace-nowrap"
              >
                {t(`nav.${key}`)}
              </a>
            ))}
          </nav>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <span className="hidden md:flex items-center gap-1 text-ds-1 text-neutral-7">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12" y2="18" /></svg>
            {t('nav.download_app')}
          </span>

          <span className="hidden md:inline text-ds-1 text-neutral-6">{t('nav.currency')}</span>

          {/* Language dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 text-ds-1 text-neutral-7 hover:text-primary-5 transition-colors"
            >
              {t('nav.language')}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 bg-neutral-0 shadow-dropdown rounded-1 border border-neutral-3 py-1 min-w-[160px] z-dropdown">
                {locales.map((l) => (
                  <button
                    key={l.value}
                    onClick={() => { setLocale(l.value); setLangOpen(false) }}
                    className={`w-full text-left px-4 py-2 text-ds-1 transition-colors ${
                      locale === l.value
                        ? 'text-primary-5 bg-primary-0'
                        : 'text-neutral-7 hover:bg-neutral-2'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="#" className="hidden md:inline text-ds-1 text-neutral-7 hover:text-primary-5">{t('nav.login')}</a>
          <a href="#" className="hidden md:inline text-ds-1 text-neutral-7 hover:text-primary-5">{t('nav.register')}</a>
        </div>
      </div>
    </header>
  )
}

export default ActivityHeader
