import React from 'react'
import Link from 'next/link';


import FEATURED from '../component/SeoContentWriting/featuredSec'
import HEADERCONTACTNEW from '../component/headerContactformNew'
import LETUSHELPSEO from '../component/SeoContentWriting/LetUsHelpSEO'
import GhostWriting from '@/component/ghostWritingServices/ghostWriting'
import CREATIVEGHOSTWRITERS from '../component/ghostWritingServices/creativeGhostWriters'
import WMODE from '../component/workMode1'
import CTA3 from '../component/cta3';
import BTM from '../component/bottomLogos';
import SwiperComponents from '../component/SwiperComponent'

import LogoSliders from '../component/bottomLogosNEW'


const Ghostwriting = () => {
  return (
    <>
      <main>

        <FEATURED
          banneraffordable='seo'
          title='Amplify Your Brand Image Through SEO Content Writing'
          dec={` Create SEO-optimized content that converts and attracts more organic search traffic to boost your online visibility and credibility.`}
          href1={<> <Link href="tel:800-781-9093" data-fancybox="" data-src="#popupform" className="btn btn-green">
            Get Started <i className="fas fa-caret-right ml-1"></i>
          </Link> </>}
          href2={<>
            <Link href="javascript:$zopim.livechat.window.show()" className="chat btn btn-white-border ml-4">
              Live Chat
            </Link>
          </>}
        />
        <LogoSliders></LogoSliders>
        <LETUSHELPSEO />
        <GhostWriting serviceTitle="SEO Content Writing Services"
        serviceDesc="We have a vast pool of ghostwriters and will work with you to find the best match for your needs. You will receive a PR and media campaign, an audiobook with a professional voice actor, and high-quality studio production. Finally, distribution and retailer accounts will be established in your name, ensuring you own all rights and royalties.
        "/>
        <CREATIVEGHOSTWRITERS />
        <CTA3 />
        <BTM />
        <WMODE />
        <SwiperComponents />

      </main>
    </>
  )
}

export default Ghostwriting;
