import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
    const clients = [
        {
            img: profilePic1,
            review:
                "Very Hard Worker and so active.Feel free to hire him.",
        },
        {
            img: profilePic2,
            review:
                "So talented, dedicated and have good knowledge about design and development.",
        },
        {
            img: profilePic3,
            review:
                "He is so humble and very dedicated about his work.Know how to handle any types of situation",
        },
        {
            img: profilePic4,
            review:
                "One of the best thing about him is he knows how to handle a customer and solve their any types of technical issue.",
        },
    ];

    return (
        <div className="t-wrapper" id="testimonial">
            <div className="t-heading">
                <h1 className='headings'>Look What my clients said about me!</h1>
                <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
                <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

            </div>
            <Swiper
                // install Swiper modules
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                                <img src={client.img} alt="" />
                                <span className="review-test">{client.review}</span>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default Testimonial;