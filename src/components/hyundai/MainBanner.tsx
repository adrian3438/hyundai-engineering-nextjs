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
                                <div className="col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-5 text-center text-lg-start justify-content-center align-self-center align-items-start">
                                    <h2 className="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                                        We bring solutions to make life easier.
                                    </h2>

                                    <p className="lead fs-23 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
                                        We are a creative company that focuses on long term relationships with customers.
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
                                <div className="col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-5 text-center text-lg-start justify-content-center align-self-center align-items-start">
                                    <h2 className="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                                        We bring solutions to make life easier.
                                    </h2>

                                    <p className="lead fs-23 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
                                        We are a creative company that focuses on long term relationships with customers.
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
                        style={{backgroundImage: 'url("/img/hyundai/main-construction-3.jpg")'}}>
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-5 text-center text-lg-start justify-content-center align-self-center align-items-start">
                                    <h2 className="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                                        We bring solutions to make life easier.
                                    </h2>

                                    <p className="lead fs-23 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
                                        We are a creative company that focuses on long term relationships with customers.
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
