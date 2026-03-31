const CDN_URL = "https://img.asiayo.com"

const socialMediaLinks = [
  {
    name: "instagram",
    href: "https://www.instagram.com/asiayotw/",
    icon: {
      desktop: `${CDN_URL}/static/images/footer/logo/instagram.png`,
      mobile: `${CDN_URL}/static/images/logo_gray_instagram.png`,
    },
  },
  {
    name: "facebook",
    href: "https://www.facebook.com/AsiaYo/",
    icon: {
      desktop: `${CDN_URL}/static/images/footer/logo/facebook.png`,
      mobile: `${CDN_URL}/static/images/logo_gray_facebook.png`,
    },
  },
  {
    name: "line",
    href: "https://maac.io/3jIKd",
    icon: {
      desktop: `${CDN_URL}/static/images/footer/logo/line.png`,
      mobile: `${CDN_URL}/static/images/logo_gray_line.png`,
    },
  },
]

const navLinks = [
  { label: "About Us", href: "https://asiayo.com/explore/mkt_about_us" },
  { label: "Policy", href: "/terms/" },
  { label: "Contact Us", href: "/contact-us/" },
]

const Footer = () => (
  <footer className="mt-auto py-12 px-8 bg-neutral-2 md:py-8 md:px-4 md:bg-neutral-7">
    <div className="flex flex-col items-center gap-3 md:gap-2">
      <div className="flex items-center gap-2">
        <span className="text-ds-1 font-normal text-neutral-7 md:text-neutral-4">
          Follow Us
        </span>
        {socialMediaLinks.map((item) => (
          <a key={item.name} href={item.href} target="_blank" rel="noreferrer">
            <picture>
              <source media="(max-width: 767px)" srcSet={item.icon.mobile} />
              <img
                src={item.icon.desktop}
                alt={`${item.name}_logo`}
                className="w-5 h-5 block"
                loading="lazy"
              />
            </picture>
          </a>
        ))}
      </div>

      <ul className="flex gap-6">
        {navLinks.map((link, index) => (
          <li
            key={link.label}
            className={`relative inline-block ${
              index !== navLinks.length - 1
                ? "after:absolute after:w-px after:top-0 after:bottom-0 after:-right-3 after:bg-neutral-7 md:after:bg-neutral-4 after:pointer-events-none"
                : ""
            }`}
          >
            <a href={link.href} target="_blank" rel="noreferrer">
              <span className="text-ds-1 font-normal text-neutral-7 md:text-neutral-4">
                {link.label}
              </span>
            </a>
          </li>
        ))}
      </ul>

      <span className="text-ds-1 font-normal text-neutral-7 md:text-neutral-4">
        AsiaYo, Co., Ltd. All Rights Reserved.
      </span>
    </div>
  </footer>
)

export default Footer
