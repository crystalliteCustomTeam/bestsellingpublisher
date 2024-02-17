import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const TabNavigation = ({ activeTab, setActiveTab }) => {

  return (
    <ul className="flex flex-wrap max-w-6xl gap-x-1 mx-auto gap-y-6 md:gap-y-8 xs:flex-none xs:flex-nowrap justify-center md:gap-2 xs:gap-x-1 xs:justify-start xs:mx-0 xs:overflow-x-scroll xs:py-5" role="tablist">
      <li className="">
        <a
          className={`py-2 px-10 md:px-2 xs:px-3 cursor-pointer ${activeTab === 's1' ? 'bg-[#00c0e4] text-white border-[2px] border-solid border-[#00c0e4]' : 'bg-transparent border-solid border-[2px] border-[#777777] text-[#8a8a8a] focus:text-white'
            }`}
          onClick={() => setActiveTab('s1')}
          role="tab"
          aria-controls="s1"
          aria-selected={activeTab === 's1' ? 'true' : 'false'}
        >
          All&nbsp;Posts
        </a>
      </li>
      <li className="">
        <a
          className={`py-2 px-10 md:px-2 xs:px-3 cursor-pointer ${activeTab === 's2' ? 'bg-[#00c0e4] text-white border-[2px] border-solid border-[#00c0e4]' : 'bg-transparent border-solid border-[2px] border-[#707070] text-[#8a8a8a]'
            }`}
          onClick={() => setActiveTab('s2')}
          role="tab"
          aria-controls="s2"
          aria-selected={activeTab === 's2' ? 'true' : 'false'}
        >
          Book&nbsp;Design
        </a>
      </li>
      <li className="">
        <a
          className={`py-2 px-10 md:px-2 xs:px-3 cursor-pointer ${activeTab === 's3' ? 'bg-[#00c0e4] text-white border-[2px] border-solid border-[#00c0e4]' : 'bg-transparent border-solid border-[2px] border-[#777777] text-[#8a8a8a]'
            }`}
          onClick={() => setActiveTab('s3')}
          role="tab"
          aria-controls="s3"
          aria-selected={activeTab === 's3' ? 'true' : 'false'}
        >
          Book&nbsp;Editing
        </a>
      </li>
      <li className="">
        <a
          className={`py-2 px-10 md:px-2 xs:px-3 cursor-pointer ${activeTab === 's4' ? 'bg-[#00c0e4] text-white border-[2px] border-solid border-[#00c0e4]' : 'bg-transparent border-solid border-[2px] border-[#777777] text-[#8a8a8a]'
            }`}
          onClick={() => setActiveTab('s4')}
          role="tab"
          aria-controls="s4"
          aria-selected={activeTab === 's4' ? 'true' : 'false'}
        >
          Book&nbsp;Marketing
        </a>
      </li>
      <li className="">
        <a
          className={`py-2 px-10 md:px-2 xs:px-3 cursor-pointer ${activeTab === 's5' ? 'bg-[#00c0e4] text-white border-[2px] border-solid border-[#00c0e4]' : 'bg-transparent border-solid border-[2px] border-[#777777] text-[#8a8a8a]'
            }`}
          onClick={() => setActiveTab('s5')}
          role="tab"
          aria-controls="s5"
          aria-selected={activeTab === 's5' ? 'true' : 'false'}
        >
          Book&nbsp;Publishing
        </a>
      </li>
      <li className="">
        <a
          className={`py-2 px-10 md:px-2 xs:px-3 cursor-pointer ${activeTab === 's6' ? 'bg-[#00c0e4] text-white border-[2px] border-solid border-[#00c0e4]' : 'bg-transparent border-solid border-[2px] border-[#777777] text-[#8a8a8a]'
            }`}
          onClick={() => setActiveTab('s6')}
          role="tab"
          aria-controls="s6"
          aria-selected={activeTab === 's6' ? 'true' : 'false'}
        >
          From&nbsp;Our&nbsp;Authors
        </a>
      </li>
      <li>
        <a
          className={`py-2 px-8 md:px-2 xs:px-3 cursor-pointer ${activeTab === 's7' ? 'bg-[#00c0e4] text-white border-[2px] border-solid border-[#00c0e4]' : 'bg-transparent border-solid border-[2px] border-[#777777] text-[#8a8a8a]'
            }`}
          onClick={() => setActiveTab('s7')}
          role="tab"
          aria-controls="s7"
          aria-selected={activeTab === 's7' ? 'true' : 'false'}
        >
          Ghostwriting&nbsp;Services
        </a>
      </li>
      <li>
        <a
          className={`py-2 px-8 md:px-2 xs:px-3 cursor-pointer ${activeTab === 's8' ? 'bg-[#00c0e4] text-white border-[2px] border-solid border-[#00c0e4]' : 'bg-transparent border-solid border-[2px] border-[#777777] text-[#8a8a8a]'
            }`}
          onClick={() => setActiveTab('s8')}
          role="tab"
          aria-controls="s8"
          aria-selected={activeTab === 's8' ? 'true' : 'false'}
        >
          Perfecting&nbsp;Your&nbsp;Skills
        </a>
      </li>
    </ul>
  );
};

const blogsContent = () => {
  const [activeTab, setActiveTab] = useState('s1');

  return (
    <div>
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Content for each tab */}
      {activeTab === 's1' && (
        <div className='container max-w-7xl lg:max-w-6xl px-5 font-secondary mt-10 md:p-5 xs:p-5 pt-3 pb-4 text-[#1d1d1f]'>
          
           <div className='bg-[#f2f2f2] rounded-3xl grid grid-cols-2 gap-5 md:gap-2 sm:gap-1 grid-rows-1 xs:grid-cols-1 items-center justify-center font-secondary mb-4 xs:gap-2'>
            <div>
              <Image quality={95} src='/assets/images/newimg/blog1.jpg'  className='range-lg bg-transparent rounded-4xl p-5 md:p-2 sm:p-1'  width={600} height={600} alt='blog' />
            </div>
            <div className='space-y-2 px-10 md:py-5 md:px-4 md:space-y-1 sm:px-1 xs:py-10 xs:px-5 sm:py-5'>
              <h3 className='font-semibold text-4xl font-primary md:leading-10 xs:leading-tight sm:text-3xl xs:text-3xl'>Lorem ipsum dolor sit amet</h3>
              <h5 className='text-[14px] ' >September 12, 2023 - <span className='text-sky-400'> Book Publishing</span></h5>
              <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas gravida posuere. Curabitur elementum dui id diam dignissim faucibus.</p>
              <br/>
              <Link href="/blogs-content" className='font-semibold'><span className='text-sky-400'> Read More</span></Link>
            </div>
          </div>
          <div className='bg-[#f2f2f2] rounded-3xl grid grid-cols-2 gap-5 md:gap-2 sm:gap-1 grid-rows-1 xs:grid-cols-1 items-center justify-center font-secondary mb-4 xs:gap-2'>
            <div>
              <Image quality={95} src='/assets/images/newimg/blog2.jpg'  className='range-lg bg-transparent rounded-4xl p-5 md:p-2'  width={600} height={600} alt='blog' />
            </div>
            <div className='space-y-2 px-10 md:py-5 md:px-4 md:space-y-1 sm:px-1 xs:py-10 xs:px-5 sm:py-5'>
            <h3 className='font-semibold text-4xl font-primary md:leading-10 xs:leading-tight sm:text-3xl xs:text-3xl'>Lorem ipsum dolor sit amet</h3>
              <h5 className='text-[14px] ' >September 12, 2023 - <span className='text-sky-400'> Book Publishing</span></h5>
              <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas gravida posuere. Curabitur elementum dui id diam dignissim faucibus.</p>
              <br/>
              <Link href="/" className='font-semibold'><span className='text-sky-400'> Read More</span></Link>
            </div>
          </div>
          <div className='bg-[#f2f2f2] rounded-3xl grid grid-cols-2 gap-5 grid-rows-1 md:gap-2  xs:grid-cols-1 items-center justify-center font-secondary mb-4'>
            <div>
              <Image quality={95} src='/assets/images/newimg/blog3.jpg'  className='range-lg bg-transparent rounded-4xl p-5 md:p-2'  width={600} height={600} alt='blog' />
            </div>
            <div className='space-y-2 px-10 md:py-5 md:px-4 md:space-y-1 sm:px-1 xs:py-10 xs:px-5 sm:py-5'>
            <h3 className='font-semibold text-4xl font-primary md:leading-10 xs:leading-tight sm:text-3xl xs:text-3xl'>Lorem ipsum dolor sit amet</h3>
              <h5 className='text-[14px] ' >September 12, 2023 - <span className='text-sky-400'> Book Publishing</span></h5>
              <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas gravida posuere. Curabitur elementum dui id diam dignissim faucibus.</p>
              <br/>
              <Link href="/" className='font-semibold'><span className='text-sky-400'> Read More</span></Link>
            </div>
          </div>
         
        </div>
     
      )}
      {activeTab === 's2' && (
        <div className='container max-w-7xl lg:max-w-6xl px-5 font-secondary mt-10 md:p-5 xs:p-5 pt-3 pb-4 text-[#1d1d1f]'>
          
        
      
       <div className='bg-[#f2f2f2] rounded-3xl grid grid-cols-2 gap-5 md:gap-2 sm:gap-1 grid-rows-1 xs:grid-cols-1 items-center justify-center font-secondary mb-4 xs:gap-2'>
         <div>
           <Image quality={95} src='/assets/images/newimg/blog3.jpg'  className='range-lg bg-transparent rounded-4xl p-5 md:p-2'  width={600} height={600} alt='blog' />
         </div>
         <div className='space-y-2 px-10 md:py-5 md:px-4 md:space-y-1 sm:px-1 xs:py-10 xs:px-5 sm:py-5'>
            <h3 className='font-semibold text-4xl font-primary md:leading-10 xs:leading-tight sm:text-3xl xs:text-3xl'>Lorem ipsum dolor sit amet</h3>
           <h5 className='text-[14px] ' >September 12, 2023 - <span className='text-sky-400'> Book Publishing</span></h5>
           <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas gravida posuere. Curabitur elementum dui id diam dignissim faucibus.</p>
           <br/>
           <Link href="/" className='font-semibold'><span className='text-sky-400'> Read More</span></Link>
         </div>
       </div>
      
     </div>
      )}
      {activeTab === 's3' && (
        <div className='container max-w-7xl lg:max-w-6xl px-5 font-secondary mt-10 md:p-5 xs:p-5 pt-3 pb-4 text-[#1d1d1f]'>
          
        <div className='bg-[#f2f2f2] rounded-3xl grid grid-cols-2 gap-5 md:gap-2 sm:gap-1 grid-rows-1 xs:grid-cols-1 items-center justify-center font-secondary mb-4 xs:gap-2'>
         <div>
           <Image quality={95} src='/assets/images/newimg/blog1.jpg'  className='range-lg bg-transparent rounded-4xl p-5 md:p-2'  width={600} height={600} alt='blog' />
         </div>
         <div className='space-y-2 px-10 md:py-5 md:px-4 md:space-y-1 sm:px-1 xs:py-10 xs:px-5 sm:py-5'>
            <h3 className='font-semibold text-4xl font-primary md:leading-10 xs:leading-tight sm:text-3xl xs:text-3xl'>Lorem ipsum dolor sit amet</h3>
           <h5 className='text-[14px] ' >September 12, 2023 - <span className='text-sky-400'> Book Publishing</span></h5>
           <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas gravida posuere. Curabitur elementum dui id diam dignissim faucibus.</p>
           <br/>
           <Link href="/" className='font-semibold'><span className='text-sky-400'> Read More</span></Link>
         </div>
       </div>
      
      
     </div>
      )}
      {activeTab === 's4' && (
        <div className='container max-w-7xl lg:max-w-6xl px-5 font-secondary mt-10 md:p-5 xs:p-5 pt-3 pb-4 text-[#1d1d1f]'>
          
        <div className='bg-[#f2f2f2] rounded-3xl grid grid-cols-2 gap-5 md:gap-2 sm:gap-1 grid-rows-1 xs:grid-cols-1 items-center justify-center font-secondary mb-4 xs:gap-2'>
         <div>
           <Image quality={95} src='/assets/images/newimg/blog1.jpg'  className='range-lg bg-transparent rounded-4xl p-5 md:p-2'  width={600} height={600} alt='blog' />
         </div>
         <div className='space-y-2 px-10 md:py-5 md:px-4 md:space-y-1 sm:px-1 xs:py-10 xs:px-5 sm:py-5'>
            <h3 className='font-semibold text-4xl font-primary md:leading-10 xs:leading-tight sm:text-3xl xs:text-3xl'>Lorem ipsum dolor sit amet</h3>
           <h5 className='text-[14px] ' >September 12, 2023 - <span className='text-sky-400'> Book Publishing</span></h5>
           <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas gravida posuere. Curabitur elementum dui id diam dignissim faucibus.</p>
           <br/>
           <Link href="/" className='font-semibold'><span className='text-sky-400'> Read More</span></Link>
         </div>
       </div>
      
       
      
     </div>
      )}
      {activeTab === 's5' && (
       <div className='container max-w-7xl lg:max-w-6xl px-5 font-secondary mt-10 md:p-5 xs:p-5 pt-3 pb-4 text-[#1d1d1f]'>
          
       <div className='bg-[#f2f2f2] rounded-3xl grid grid-cols-2 gap-5 md:gap-2 sm:gap-1 grid-rows-1 xs:grid-cols-1 items-center justify-center font-secondary mb-4 xs:gap-2'>
        <div>
          <Image quality={95} src='/assets/images/newimg/blog1.jpg'  className='range-lg bg-transparent rounded-4xl p-5 md:p-2'  width={600} height={600} alt='blog' />
        </div>
        <div className='space-y-2 px-10 md:py-5 md:px-4 md:space-y-1 sm:px-1 xs:py-10 xs:px-5 sm:py-5'>
           <h3 className='font-semibold text-4xl font-primary md:leading-10 xs:leading-tight sm:text-3xl xs:text-3xl'>Lorem ipsum dolor sit amet</h3>
          <h5 className='text-[14px] ' >September 12, 2023 - <span className='text-sky-400'> Book Publishing</span></h5>
          <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas gravida posuere. Curabitur elementum dui id diam dignissim faucibus.</p>
          <br/>
          <Link href="/" className='font-semibold'><span className='text-sky-400'> Read More</span></Link>
        </div>
      </div>
      
      
     
    </div>
      )}
      {activeTab === 's6' && (
       <div className='container max-w-7xl lg:max-w-6xl px-5 font-secondary mt-10 md:p-5 xs:p-5 pt-3 pb-4 text-[#1d1d1f]'>
          
       <div className='bg-[#f2f2f2] rounded-3xl grid grid-cols-2 gap-5 md:gap-2 sm:gap-1 grid-rows-1 xs:grid-cols-1 items-center justify-center font-secondary mb-4 xs:gap-2'>
        <div>
          <Image quality={95} src='/assets/images/newimg/blog1.jpg'  className='range-lg bg-transparent rounded-4xl p-5 md:p-2'  width={600} height={600} alt='blog' />
        </div>
        <div className='space-y-2 px-10 md:py-5 md:px-4 md:space-y-1 sm:px-1 xs:py-10 xs:px-5 sm:py-5'>
           <h3 className='font-semibold text-4xl font-primary md:leading-10 xs:leading-tight sm:text-3xl xs:text-3xl'>Lorem ipsum dolor sit amet</h3>
          <h5 className='text-[14px] ' >September 12, 2023 - <span className='text-sky-400'> Book Publishing</span></h5>
          <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas gravida posuere. Curabitur elementum dui id diam dignissim faucibus.</p>
          <br/>
          <Link href="/" className='font-semibold'><span className='text-sky-400'> Read More</span></Link>
        </div>
      </div>
      
     
     
    </div>
      )}
      {activeTab === 's7' && (
        <div className='container max-w-7xl lg:max-w-6xl px-5 font-secondary mt-10 md:p-5 xs:p-5 pt-3 pb-4 text-[#1d1d1f]'>
          
        
       <div className='bg-[#f2f2f2] rounded-3xl grid grid-cols-2 gap-5 md:gap-2 sm:gap-1 grid-rows-1 xs:grid-cols-1 items-center justify-center font-secondary mb-4 xs:gap-2'>
         <div>
           <Image quality={95} src='/assets/images/newimg/blog2.jpg'  className='range-lg bg-transparent rounded-4xl p-5 md:p-2'  width={600} height={600} alt='blog' />
         </div>
         <div className='space-y-2 px-10 md:py-5 md:px-4 md:space-y-1 sm:px-1 xs:py-10 xs:px-5 sm:py-5'>
            <h3 className='font-semibold text-4xl font-primary md:leading-10 xs:leading-tight sm:text-3xl xs:text-3xl'>Lorem ipsum dolor sit amet</h3>
           <h5 className='text-[14px] ' >September 12, 2023 - <span className='text-sky-400'> Book Publishing</span></h5>
           <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas gravida posuere. Curabitur elementum dui id diam dignissim faucibus.</p>
           <br/>
           <Link href="/" className='font-semibold'><span className='text-sky-400'> Read More</span></Link>
         </div>
       </div>
       
      
     </div>
      )}
      {activeTab === 's8' && (
        <div className='container max-w-7xl lg:max-w-6xl px-5 font-secondary mt-10 md:p-5 xs:p-5 pt-3 pb-4 text-[#1d1d1f]'>
          
        
       <div className='bg-[#f2f2f2] rounded-3xl grid grid-cols-2 gap-5 md:gap-2 sm:gap-1 grid-rows-1 xs:grid-cols-1 items-center justify-center font-secondary mb-4 xs:gap-2'>
         <div>
           <Image quality={95} src='/assets/images/newimg/blog2.jpg'  className='range-lg bg-transparent rounded-4xl p-5 md:p-2'  width={600} height={600} alt='blog' />
         </div>
         <div className='space-y-2 px-10 md:py-5 md:px-4 md:space-y-1 sm:px-1 xs:py-10 xs:px-5 sm:py-5'>
            <h3 className='font-semibold text-4xl font-primary md:leading-10 xs:leading-tight sm:text-3xl xs:text-3xl'>Lorem ipsum dolor sit amet</h3>
           <h5 className='text-[14px] ' >September 12, 2023 - <span className='text-sky-400'> Book Publishing</span></h5>
           <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas gravida posuere. Curabitur elementum dui id diam dignissim faucibus.</p>
           <br/>
           <Link href="/" className='font-semibold'><span className='text-sky-400'> Read More</span></Link>
         </div>
       </div>
       
      
     </div>
      )}
    </div>
  );
};

export default blogsContent;
