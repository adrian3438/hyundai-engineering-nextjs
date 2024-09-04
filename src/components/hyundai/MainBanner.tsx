import Carousel from "components/reuseable/Carousel";

// GLOBAL CUSTOM COMPONENTS
import NextLink from "components/reuseable/links/NextLink";

export default function MainBanner() {
    return (
        <div className="wrapper bg-dark">
            <div className="swiper-container swiper-hero dots-over">
                <Carousel slidesPerView={1} autoplay={{delay: 7000, disableOnInteraction: false}}>
                    <div
                        className="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
                        style={{backgroundImage: 'url("/img/hyundai/main-construction-1.jpg")'}}>
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-9 text-center text-lg-start justify-content-center align-self-center align-items-start">
                                    <h2 className="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                                        정직으로 신뢰를 얻고, 전문성으로 보답합니다.
                                    </h2>

                                    <p className="lead fs-23 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
                                        결과물로 증명하는 종합건설회사 <span className="fw-bold">(주)현대엔지니어링</span> 입니다.
                                    </p>

                                    <div className="animate__animated animate__slideInUp animate__delay-3s">
                                        <NextLink title="Read More" href="#" className="btn btn-lg btn-outline-white rounded-pill"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
                        style={{backgroundImage: 'url("/img/hyundai/main-construction-2.jpg")'}}>
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-5 text-center text-lg-start justify-content-center align-self-center align-items-start m-auto">
                                    <div className="display-1 fs-50 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s text-center row">
                                        <div className="col-md-4">
                                            30+<br/><span className="fs-43">사업년수</span>
                                        </div>
                                        <div className="col-md-4">
                                            500+<br/><span className="fs-43">공사건수</span>
                                        </div>
                                        <div className="col-md-4">
                                            200+<br/><span className="fs-43">보유고객</span>
                                        </div>
                                    </div>

                                    <p className="lead fs-23 lh-sm mb-7 text-white text-center">
                                        실적으로 증명된 신뢰, 우리는 <span className="fw-bold">건설의 미래</span>를 만듭니다.
                                    </p>

                                    <div className="animate__animated animate__slideInUp animate__delay-3s text-center">
                                        <NextLink title="포트폴리오" href="#" className="btn btn-lg btn-outline-white rounded-pill"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
                        style={{backgroundImage: 'url("/img/hyundai/main-construction-3.jpg")'}}>
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-7 text-center text-lg-start justify-content-center align-self-center align-items-start">
                                    <h2 className="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                                        건축의 시작과 끝, 우리가 책임집니다.
                                    </h2>

                                    <p className="lead fs-23 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
                                        경험과 기술력으로 건설의 새로운 지평을 여는 <span className="fw-bold">(주)현대엔지니어링</span> 입니다.
                                    </p>

                                    <div className="animate__animated animate__slideInUp animate__delay-3s">
                                        <NextLink title="Read More" href="#" className="btn btn-lg btn-outline-white rounded-pill"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
}
