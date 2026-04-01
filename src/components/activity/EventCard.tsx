import { Tag } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'

type EventCardProps = {
  id: string
  image: string
  isPreparing?: boolean
}

const EventCard = ({ id, image, isPreparing }: EventCardProps) => {
  const { t } = useLanguage()

  return (
    <a
      href="#"
      className="group block rounded-0 overflow-hidden shadow-card hover:shadow-card-hover transition-shadow bg-neutral-0"
    >
      {/* Image */}
      <div className="relative h-[200px] overflow-hidden">
        <img src={image} alt={t(`card.${id}.title`)} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
        {/* Location badge */}
        <span className="absolute top-4 left-0 bg-primary-10 text-neutral-0 text-ds-0 font-medium px-2 py-0.5 rounded-none">
          {t(`card.${id}.location`)}
        </span>
        {/* Preparing overlay */}
        {isPreparing && (
          <div className="absolute inset-0 bg-neutral-9/50 flex items-center justify-center">
            <span className="text-ds-3 font-bold text-neutral-0">{t(`card.${id}.preparing`)}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-ds-2 md:text-ds-3 font-bold text-neutral-8 mb-2">{t(`card.${id}.title`)}</h3>
        <p className="text-ds-1 font-normal text-neutral-6 leading-relaxed mb-1">{t(`card.${id}.desc1`)}</p>
        <p className="text-ds-1 font-normal text-neutral-6 leading-relaxed mb-1">{t(`card.${id}.desc2`)}</p>
        <p className="text-ds-1 font-normal text-neutral-6 leading-relaxed mb-3">{t(`card.${id}.desc3`)}</p>
        <div className="border-t border-neutral-3 pt-3 mt-3">
          <p className="text-ds-1 font-normal text-neutral-9">{t(`card.${id}.type`)}</p>
          <p className="text-ds-1 font-normal text-neutral-9 mt-1">{t(`card.${id}.package`)}</p>
          <div className="border-t border-neutral-3 pt-3 mt-3">
            <p className="text-ds-1 font-normal text-danger-6 flex items-center gap-1">
              <Tag size={16} className="text-danger-6" fill="currentColor" />
              {t(`card.${id}.price`)}
            </p>
          </div>
        </div>
      </div>
    </a>
  )
}

export default EventCard
