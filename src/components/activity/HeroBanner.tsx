import { useState, useEffect } from 'react'

const bannerImages = [
  'https://gsimg.asiayo.com/ay-image-upload/1767858153850_2026_%E6%B2%B3%E5%8F%A3%E6%B9%96%E6%B9%96%E4%B8%8A%E7%A5%AD%E5%8F%8A%E7%99%BB%E5%B1%B1%E8%A1%8C%E7%A8%8B_Resize_PP2.0_1920x600.jpg',
  'https://gsimg.asiayo.com/ay-image-upload/1737440407869_%E6%97%A5%E6%9C%AC%E4%B8%80%E6%97%A5%E9%81%8ASP%20BN.jpg',
  'https://gsimg.asiayo.com/ay-image-upload/1700407452134_%E9%AB%98%E7%88%BE%E5%A4%AB-1.png',
  'https://gsimg.asiayo.com/ay-image-upload/1768457762731_baseball-banner.jpg',
  'https://gsimg.asiayo.com/ay-image-upload/1696326984232_seb-general1.png',
]

const HeroBanner = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bannerImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[360px] md:h-[480px] overflow-hidden bg-neutral-8">
      {bannerImages.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`banner-${i}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {bannerImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-[10px] h-[10px] rounded-full transition-colors ${
              i === current ? 'bg-primary-5' : 'bg-neutral-0/60'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroBanner
