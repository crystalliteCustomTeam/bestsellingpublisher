import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Tradition.module.css'
import Bookshelf from '@/styles/Bookshelf.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// images
import mock1 from 'media/images/book-mockup/1.png'
import mock2 from 'media/images/book-mockup/2.png'
import mock3 from 'media/images/book-mockup/3.png'
import mock4 from 'media/images/book-mockup/4.png'
import mock5 from 'media/images/book-mockup/9.png'
import mock6 from 'media/images/book-mockup/10.png'


import before from 'media/images/flods/tradition-before.png'

// mport { Fade } from "react-awesome-reveal";
import Link from 'next/link'

const Tradition = ({
    title,
    desc
}) => {

    let traditionslider = {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    return (
        <>
            <section className={styles.traditionFold}>
                <Container fluid className='px-md-5'>
                    <Row className='justify-content-center'>

                        <Col lg={12}>
                            <div className={`${styles.mockupsHead} text-center mb-5`}>
                                <h2 className='font-50 fw-700 font-primary txt-secondary mb-3'>{title}</h2>
                                <p className='font-15 font-secondary txt-secondary'>{desc}</p>
                                <div className='m-auto justify-content-center'>
                                    <Image quality={100} loading="lazy" className='img-fluid justify-content-center'
                                        src={before}
                                        alt='Best_Publisher'
                                    />
                                </div>

                            </div>
                        </Col>


                        <Col lg={12}>
                            <div className='mt-5 trade'>
                                <Slider {...traditionslider}>
                                    <div>
                                        <Image quality={80} loading="lazy" className='img-fluid'
                                            src={mock1}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image quality={80} loading="lazy" className='img-fluid'
                                            src={mock2}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image quality={80} loading="lazy" className='img-fluid'
                                            src={mock3}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image quality={80} loading="lazy" className='img-fluid'
                                            src={mock4}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image quality={100} width={150} height={150} loading="lazy" className='img-fluid'
                                            src={mock5}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image quality={100} width={150} height={150} loading="lazy" className='img-fluid'
                                            src={mock6}
                                            alt='Best_Publisher'
                                        />
                                    </div>


                                </Slider>
                            </div>
                            <div className={`${Bookshelf.bttns} d-flex mt-5 justify-content-center`}>
                                <Link className='btns btnPrimary' href="javascript:$zopim.livechat.window.show()">Let's discuss</Link>
                                <Link className='btns btnSecondary' href="tel:800-781-9093">800-781-9093</Link>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Tradition