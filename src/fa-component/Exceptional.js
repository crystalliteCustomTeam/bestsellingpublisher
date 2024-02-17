import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Dreams.module.css'
import Bookshelf from '@/styles/Bookshelf.module.css'
import { Container, Row, Col } from 'react-bootstrap'

const data = [
    {
      heading: "Amazon Publishing",
      para: "Uncover the unparalleled excellence of our publishing services, where each word is meticulously crafted to captivate and inspire. Explore the realm of literary mastery with our team and discover the epitome of quality in every page turned.",
      path: "/images/flods/amazon_publishing.png",
      alt: "Amazon Publishing"
    },
    {
      heading: "Book Publishing",
      para: "Uncover the unparalleled excellence of our publishing services, where each word is meticulously crafted to captivate and inspire. Explore the realm of literary mastery with our team and discover the epitome of quality in every page turned.",
      path: "/images/flods/book_publishing.png",
      alt: "Book Publishing"
    },
    {
      heading: "Digital Book Publishing",
      para: "Uncover the unparalleled excellence of our publishing services, where each word is meticulously crafted to captivate and inspire. Explore the realm of literary mastery with our team and discover the epitome of quality in every page turned.",
      path: "/images/flods/digital_book_publishing.png",
      alt: "Digital Book Publishing"
    },
    {
      heading: "eBook Publishing",
      para: "Uncover the unparalleled excellence of our publishing services, where each word is meticulously crafted to captivate and inspire. Explore the realm of literary mastery with our team and discover the epitome of quality in every page turned.",
      path: "/images/flods/ebook_publishing.png",
      alt: "eBook Publishing"
    },
    {
      heading: "Self Publishing",
      para: "Uncover the unparalleled excellence of our publishing services, where each word is meticulously crafted to captivate and inspire. Explore the realm of literary mastery with our team and discover the epitome of quality in every page turned.",
      path: "/images/flods/self_publishing.png",
      alt: "Self Publishing"
    },
    {
      heading: "Book Marketing",
      para: "Uncover the unparalleled excellence of our publishing services, where each word is meticulously crafted to captivate and inspire. Explore the realm of literary mastery with our team and discover the epitome of quality in every page turned.",
      path: "/images/flods/book_marketing.png",
      alt: "Book Marketing"
    }
  ]

const Exceptional = ({
    title,
    subtitle,
}) => {
    return (
        <>
            <section className={styles.dreamsFlod}>
                <Container fluid className='px-md-5'>
                    <Row className='justify-content-center'>
                        <Col lg={12}>
                            <div className={`${styles.dreamsHead} text-center`}>
                                <h2 className='font-50 fw-500 font-primary txt-secondary mb-3' dangerouslySetInnerHTML={{ __html: title }}/>
                                <p className='font-15 font-secondary txt-secondary mb-5' dangerouslySetInnerHTML={{ __html: subtitle }}/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={styles.dreams1Flod}>
                <Container fluid className='px-md-5 bg-gray'>
                    <Row className={`${styles.dreamsRow} justify-content-center pt-4 pb-5 gy-4 gx-2`}>
                        {data?.map((e, i) => (
                            <Col key={i} lg={4} >
                                <div className={`${styles.ExceptionalCard} bg-white text-left position-relative`}>
                                    <h3 className='font-32 fw-700 font-primary txt-secondary1 pb-2'>{e.heading}</h3>
                                    <Row>
                                        <Col lg={7} md={7} sm={7} xs={6}>
                                            <p className='font-15 font-medium font-secondary txt-secondary mt-3 '>{e.para}</p>
                                        </Col>
                                        <Col lg={5} md={5} sm={5} xs={6}>
                                            <Image src={e.path} alt={e.alt} quality={100} loading="lazy" width={200} height={100} className='img-fluid block my-auto' />
                                        </Col>
                                    </Row>
                                    {/* <Link className='btns btnPrimary mt-5 mx-auto' href="#">Let's discuss</Link> */}
                                </div>
                            </Col>
                        ))}
                        <div className={`${Bookshelf.bttns} dislpay-flex mt-5 justify-content-center`}>
                            <Link className='btns btnPrimary' href="javascript:$zopim.livechat.window.show()">Let's discuss</Link>
                            <Link className='btns btnSecondary' href="tel:800-781-9093">800-781-9093</Link>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Exceptional
