import PageLocal from './PageLocal'
import React from 'react'

export const metadata = {
  title: "CAMS - Case Study | Divy Gandhi",
  description:
    "Why a 70% market leader is forced to diversify into lower-margin businesses despite industry growth.",

  openGraph: {
    title: "CAMS — The Paradox of Growth",
    description:
      "A deep dive into why CAMS growth doesn’t translate into pricing power.",
    siteName: "Divy Gandhi",
    images: [
      {
        url: "https://mma.prnewswire.com/media/543939/CAMS_Logo.jpg",
        width: 1200,
        height: 630,
        alt: "CAMS Case Study",
      },
    ],
    locale: "en_IN",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "CAMS — The Paradox of Growth",
    description:
      "Why CAMS grows but earns less per unit over time.",
    images: ["https://mma.prnewswire.com/media/543939/CAMS_Logo.jpg"],
  },
};

const page = () => {
  return (
    <div className='font-mono'>
      <PageLocal/>
    </div>
  )
}

export default page