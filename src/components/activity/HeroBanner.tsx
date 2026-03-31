import { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const bannerImages = [
  'https://gsimg.asiayo.com/ay-image-upload/1767858153850_2026_%E6%B2%B3%E5%8F%A3%E6%B9%96%E6%B9%96%E4%B8%8A%E7%A5%AD%E5%8F%8A%E7%99%BB%E5%B1%B1%E8%A1%8C%E7%A8%8B_Resize_PP2.0_1920x600.jpg',
  'https://gsimg.asiayo.com/ay-image-upload/1737440407869_%E6%97%A5%E6%9C%AC%E4%B8%80%E6%97%A5%E9%81%8ASP%20BN.jpg',
  'https://gsimg.asiayo.com/ay-image-upload/1700407452134_%E9%AB%98%E7%88%BE%E5%A4%AB-1.png',
  'https://gsimg.asiayo.com/ay-image-upload/1768457762731_baseball-banner.jpg',
  'https://gsimg.asiayo.com/ay-image-upload/1696326984232_seb-general1.png',
]

const HeroBanner = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => { emblaApi.off('select', onSelect) }
  }, [emblaApi, onSelect])

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  )

  return (
    <div className="relative w-full h-[360px] md:h-[480px] overflow-hidden bg-neutral-8">
      <div ref={emblaRef} className="h-full overflow-hidden">
        <div className="flex h-full">
          {bannerImages.map((src, i) => (
            <div key={i} className="flex-[0_0_100%] min-w-0 h-full">
              <img
                src={src}
                alt={`banner-${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {bannerImages.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`w-[10px] h-[10px] rounded-full transition-colors ${
              i === selectedIndex ? 'bg-primary-5' : 'bg-neutral-0/60'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroBanner
