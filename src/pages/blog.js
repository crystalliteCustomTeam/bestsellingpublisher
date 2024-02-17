import React from 'react';
import Link from 'next/link';

import FEATURED from '../component/blogs/featuredSec'
import WEARE from '../component/blogs/LetUsWEARE'
import HeaderContactForm from '../component/headerContactformNew';
import WMODE from '../component/workMode1'
import BTM from '../component/bottomLogos';
import CTA from '../component/cta3';
import SwiperComponents from '../component/SwiperComponent'

import LogoSliders from '../component/bottomLogosNEW'

const blog = () => {
  return (
    <>
      <main>
        <FEATURED
          banneraffordable='aboutus'
          title='The Blogs of Barnett, Home of Creativity'
          dec={`Our blog is a paradise for writers, authors, and intellectuals alike. Over here, we share ideas on design, publishing, marketing, and promotion. We discuss the ghostwriting industry and how it works, as well as educating readers on what the landscape of the industry is.`}
          href1={<> <Link href=" " data-fancybox="" data-src="#popupform" className="btn btn-green">
            Get Started <i className="fas fa-caret-right ml-1"></i>
          </Link> </>}
          href2={<>
            <Link href=" " className="chat btn btn-white-border ml-4">
              Live Chat
            </Link>
          </>}
        />
        <LogoSliders />
        <WEARE />
        <CTA />
        <BTM />
        <WMODE />
        <SwiperComponents />
      </main>
    </>
  )
}

export default blog
