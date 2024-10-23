import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade, Navigation} from "swiper/modules";
import "swiper/swiper-bundle.css";
import {fadeInAnimate, slideInDownAnimate} from "utils/animation";

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
                        style={{backgroundImage: 'url("/img/hyundai/main-construction-1.jpg")'}}>
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-6 text-center text-lg-start justify-content-center align-self-center align-items-start">
                                    <h2 className="display-1 fs-45 mb-4 text-white" style={fadeInAnimate("900ms")}>
                                        우리는 정직과, 신뢰, 전문성으로 답하는
                                    </h2>

                                    <p className="lead fs-24 lh-sm mb-7 text-white" style={fadeInAnimate("900ms")}>
                                        종합건설회사 (주)현대엔지니어링입니다
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
                        style={{backgroundImage: 'url("/img/hyundai/main-construction-2.jpg")'}}>
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-10 text-center text-lg-start justify-content-center align-self-center align-items-start">
                                    <h2 className="display-1 fs-45 mb-4 text-white" style={fadeInAnimate("900ms")}>
                                        우리는
                                    </h2>

                                    <p className="lead fs-24 lh-sm mb-7 text-white" style={fadeInAnimate("900ms")}>
                                        고객만족을 최우선으로 생각합니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
                        style={{backgroundImage: 'url("/img/hyundai/main-construction-3.jpg")'}}>
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-5 text-center text-lg-start justify-content-center align-self-center align-items-start">
                                    <h2 className="display-1 fs-45 mb-4 text-white" style={fadeInAnimate("900ms")}>
                                        우리는
                                    </h2>

                                    <p className="lead fs-24 lh-sm mb-7 text-white" style={fadeInAnimate("900ms")}>
                                        과거와 현재를 통해 더 나은 미래를 약속합니다.
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
