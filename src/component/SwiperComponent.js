// import function to register Swiper custom elements
import Image from "next/image";
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
// register Swiper custom elements

const TestimonialsSlider = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    register();
    const params = {
      slidesPerView: 5,
      injectStyles: [
        `.swiper-pagination-bullet {
          width: 10px;
          height: 10px;
        }
        .swiper-pagination-bullet-active {
          background: #00c0e4;
        }
      `,
      ],
      breakpoints: {
        300: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
        },
        1340: {
          slidesPerView: 3,
        },
      },
    };

    Object.assign(swiperElRef.current, params);

    swiperElRef.current.initialize();
  }, []);
  const slides = [
    {
      avatar: "/assets/images/newimg/stars.png",
      name: "- Michael P.",
      title: "CTO, Cybertech Solutions",
      quote:
        "I'm so grateful for the amazing book they crafted for me. Truly exceptional work!",
    },
    {
      avatar: "/assets/images/newimg/stars.png",
      name: "- Sarah W.",
      title: "CTO, Cybertech Solutions",
      quote:
        "Working with this book writing company was a game-changer for me. Their expertise is unmatched!",
    },
    {
      avatar: "/assets/images/newimg/stars.png",
      name: "- John D.",
      title: "CTO, Cybertech Solutions",
      quote:
        "I can’t believe the incredible quality of the book they wrote for me. It exceeded all my expectations!",
    },
    {
      avatar: "/assets/images/newimg/stars.png",
      name: "- Michael P.",
      title: "CTO, Cybertech Solutions",
      quote:
        "I'm so grateful for the amazing book they crafted for me. Truly exceptional work!",
    },
    {
      avatar: "/assets/images/newimg/stars.png",
      name: "- Sarah W.",
      title: "CTO, Cybertech Solutions",
      quote:
        "Working with this book writing company was a game-changer for me. Their expertise is unmatched!",
    },
    {
      avatar: "/assets/images/newimg/stars.png",
      name: "- John D.",
      title: "CTO, Cybertech Solutions",
      quote:
        "I can't believe the incredible quality of the book they wrote for me. It exceeded all my expectations!",
    },
    {
      avatar: "/assets/images/newimg/stars.png",
      name: "- John D.",
      title: "CTO, Cybertech Solutions",
      quote:
        "I can't believe the incredible quality of the book they wrote for me. It exceeded all my expectations!",
    },
  ];

  return (
    <section className="py-28 xs:py-10">
      <div className="container sm:container xs:container">
        <div>
          <div className="text-center">
            <h6 className="font-semibold text-[#40BEE2] font-primary text-[30px] mb-3">
              Hear The Words Of
            </h6>
            <h2 className="text-4xl font-bold mb-5 font-primary">
              Appreciation from Our Clients
            </h2>
            <p className="text-lg mb-3 mx-auto text-[16px] xs:text-[15px]">
              The appreciation from our clients is what keeps us going. Have a
              sneak peek of <br /> what our satisfied clients have to say about
              our work.
            </p>

          </div>
        </div>
        <swiper-container
          init={false}
          ref={swiperElRef}
          centered-slides="true"
          autoplay-delay="3000"
          loop="true"
          pagination="true"
          pagination-clickable="true"
        >
          {slides &&
            slides.map((testimonial, index) => (
              <swiper-slide key={index}>
                <div>
                  <div className="w-[90%] m-auto py-10">
                    <div className="card testimonialscard">
                      <Image quality={95}
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                      />
                      <div className="header">
                        <h1 className="name">{testimonial.name}</h1>
                      </div>
                      <div className="quote-container">
                        <p className="quote text-[12px]">{testimonial.quote}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            ))}
        </swiper-container>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
