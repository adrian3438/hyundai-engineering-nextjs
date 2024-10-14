import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade, Navigation} from "swiper/modules";
import "swiper/swiper-bundle.css";

export default function MainBanner2() {
    const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
    const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

    return (
        <div className='swiper-container swiper-fullscreen'>
            <Swiper
                modules={[Autoplay, EffectFade, Navigation]}
                effect="fade"
                fadeEffect={{crossFade: true}}
                autoplay={{delay: 5000, disableOnInteraction: false}}
                navigation={{ prevEl, nextEl }}
                loop={true}
                speed={1500}
            >
                <SwiperSlide>
                    <div
                        className="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
                        style={{backgroundImage: 'url("/img/photos/bg7.jpg")'}}>
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-5 text-center text-lg-start justify-content-center align-self-center align-items-start">
                                    <h2 className="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                                        (주)현대엔지니어링은
                                    </h2>

                                    <p className="lead fs-30 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
                                        정직과 신뢰, 전문성으로 답합니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
                        style={{backgroundImage: 'url("/img/photos/bg28.jpg")'}}>
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-10 text-center text-lg-start justify-content-center align-self-center align-items-start">
                                    <h2 className="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                                        결과물로 증명하는 종합건설회사
                                    </h2>

                                    <p className="lead fs-30 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
                                        (주)현대엔지니어링 입니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
                        style={{backgroundImage: 'url("/img/photos/bg29.jpg")'}}>
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-5 text-center text-lg-start justify-content-center align-self-center align-items-start">
                                    <h2 className="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                                        30년간 이어온 기업정신
                                    </h2>

                                    <p className="lead fs-30 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
                                        미래가치를 약속하는 (주)현대엔지니어링 입니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="swiper-controls">
                {/* CUSTOM NAVIGATION */}
                <div className="swiper-navigation">
                    <div
                        role="button"
                        ref={(node) => setPrevEl(node)}
                        className="swiper-button swiper-button-prev"
                    />
                    <div
                        role="button"
                        ref={(node) => setNextEl(node)}
                        className="swiper-button swiper-button-next"
                    />
                </div>
            </div>
        </div>
    );
}
