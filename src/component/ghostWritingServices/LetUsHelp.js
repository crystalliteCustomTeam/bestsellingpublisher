import Image from 'next/image'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from 'react';

const demandingSpecilaist = () => {
    var settings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3, // Display 2 columns at this breakpoint
                    slidesToScroll: 3, // Scroll 2 columns at this breakpoint
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // Display 1 column at this breakpoint
                    slidesToScroll: 1, // Scroll 1 column at this breakpoint
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1, // Display 1 column at this breakpoint
                    slidesToScroll: 1, // Scroll 1 column at this breakpoint
                }
            }
        ]
    };

    // Initialize state for screen size
    const [isLargeScreen, setIsLargeScreen] = useState(true); // Default to true for larger screens

    // Function to update the screen size state
    const updateScreenSize = () => {
        setIsLargeScreen(window.innerWidth >= 768); // Customize the breakpoint as needed
    };

    // Add an event listener to update the screen size state on resize
    useEffect(() => {
        updateScreenSize(); // Initial call

        const handleResize = () => {
            updateScreenSize();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            // Clean up the event listener
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <>
            <section className="py-[100px] relative ">
                <div className="container max-w-7xl lg:max-w-6xl relative z-10 font-secondary">
                    <div className="text-center justify-content-center mb-5 xs:px-2 ">
                        <h6 className='text-2xl font-primary text-[#40BEE2] mb-2 font-semibold'>Let Us Help You</h6>
                        <h2 className='text-[40px] font-primary font-bold xs:leading-tight'>What Sets Us Apart?</h2>
                        <p className='max-w-[80%] mx-auto mt-3 mb-5 text-[#05193c] xs:text-justify sm:text-justify sm:max-w-[80%] xs:max-w-[90%]'>
                            Barnett Ghostwriting is a well-known international ghostwriting and editing firm that has been operating for over a decade. Our experts create well-versed writing that demonstrates true professionalism while exhibiting creativity. Our services are not only economical but also ensure that both the needs of the authors and the preferences of their target audience are adequately met. Some of our platform’s distinguishing traits are as follows:
                        </p>
                    </div>
                    <div className={`${isLargeScreen ? '' : 'hidden'} grid md:grid-cols-2 grid-cols-4 gap-4 mt-10 items-stretch justify-stretch xs:grid-cols-1 xs:px-5 md:px-5`}>
                        <div className="  ">
                            <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] p-6 px-auto items-center justify-center mx-auto rounded-3xl">
                                <h4 className='text-xl font-semibold mx-auto '>Seal of <br /> Approval</h4>
                                <Image quality={95} src="/imageAR/checkmark.png" width={80} height={80} className='mx-auto my-12 ' alt="Seal of Approval" />
                                <p className='text-[17px]'>100% original Content</p>
                            </div>
                        </div>
                        <div className=" ">
                            <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] p-6 px-auto items-center justify-center mx-auto rounded-3xl">

                                <h4 className='text-xl font-semibold mx-auto'>Reviewed by <br /> editors</h4>
                                <Image quality={95} src="/imageAR/checkmark.png" width={80} height={80} className='mx-auto my-12' alt="Reviewed by editors" />
                                <p className='text-[17px] '>Error-free copy</p>
                            </div>
                        </div>
                        <div className=" ">
                            <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] p-6 px-auto items-center justify-center mx-auto rounded-3xl">

                                <h4 className='text-xl font-semibold mx-auto'>Unlimited <br /> Revisions</h4>
                                <Image quality={95} src="/imageAR/checkmark.png" width={80} height={80} className='mx-auto my-12' alt="Unlimited Revisions" />
                                <p className='text-[17px] '>For all your book projects</p>
                            </div>
                        </div>
                        <div className=" ">
                            <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] p-6 px-auto items-center justify-center mx-auto rounded-3xl">

                                <h4 className='text-xl font-semibold mx-auto'>Rights of  <br /> Ownership Maintained</h4>
                                <Image quality={95} src="/imageAR/checkmark.png" width={80} height={80} className='mx-auto my-12' alt="Rights of Ownership Maintained" />
                                <p className='text-[17px] '>No reselling</p>
                            </div>
                        </div>
                    </div>



                    <div className={`${isLargeScreen ? 'hidden' : ''} grid md:grid-cols-2 grid-cols-4 gap-4 mt-10 items-stretch justify-stretch sm:grid-cols-1 sm:px-16 xs:grid-cols-1 xs:px-10 md:px-5`}>
                        <Slider {...settings}>
                            <div className="  ">
                                <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] p-6 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <h4 className='text-xl font-semibold mx-auto '>Seal of <br /> Approval</h4>
                                    <Image quality={95} src="/imageAR/checkmark.png" width={80} height={80} className='mx-auto my-12 ' alt="Seal of Approval" />
                                    <p className='text-[17px]'>100% original Content</p>
                                </div>
                            </div>
                            <div className=" ">
                                <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] p-6 px-auto items-center justify-center mx-auto rounded-3xl">

                                    <h4 className='text-xl font-semibold mx-auto'>Reviewed by <br /> editors</h4>
                                    <Image quality={95} src="/imageAR/checkmark.png" width={80} height={80} className='mx-auto my-12' alt="Reviewed by editors" />
                                    <p className='text-[17px] '>Error-free copy</p>
                                </div>
                            </div>
                            <div className=" ">
                                <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] p-6 px-auto items-center justify-center mx-auto rounded-3xl">

                                    <h4 className='text-xl font-semibold mx-auto'>Unlimited <br /> Revisions</h4>
                                    <Image quality={95} src="/imageAR/checkmark.png" width={80} height={80} className='mx-auto my-12' alt="Unlimited Revisions" />
                                    <p className='text-[17px] '>For all your book projects</p>
                                </div>
                            </div>
                            <div className=" ">
                                <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] p-6 px-auto items-center justify-center mx-auto rounded-3xl">

                                    <h4 className='text-xl font-semibold mx-auto'>Rights of  <br /> Ownership Maintained</h4>
                                    <Image quality={95} src="/imageAR/checkmark.png" width={80} height={80} className='mx-auto my-12' alt="Rights of Ownership Maintained" />
                                    <p className='text-[17px] '>No reselling</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>

    )
}

export default demandingSpecilaist
