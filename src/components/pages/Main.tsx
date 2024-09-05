'use client'

import MainBanner from "../hyundai/MainBanner";
import Link from "next/link";
import NextLink from "../reuseable/links/NextLink";
import Image from "next/image";
import useIsotope from "../../hooks/useIsotope";
import Carousel from "../reuseable/Carousel";
import carouselBreakpoints from "utils/carouselBreakpoints";
import {blogList3} from "../../data/blog";

export default function Main() {
    useIsotope();

    return (
        <main className="content-wrapper">
            <MainBanner/>

            <div className="container pb-17 pt-15">
                <div className="row">
                    <section className="wrapper bg-light">
                        <div className="container py-14">
                            <div className="row mt-6">
                                <div>
                                    <div className="projects-tiles">
                                        <div className="project grid grid-view">
                                            <div className="row g-6 isotope">
                                                <div className="item col-md-6">
                                                    <div className="project-details d-flex justify-content-center flex-column">
                                                        <div className="post-header">
                                                            <div className="post-category text-red mb-3">PORTFOLIO</div>
                                                            <h2 className="post-title mb-3">(주)현대엔지니어링의 최신 포트폴리오를 만나보세요</h2>
                                                        </div>

                                                        <div className="post-content">
                                                            <p>현장에서 쌓아온 신뢰와 품질의 기록, 우리 건설의 포트폴리오가 말해줍니다.</p>
                                                            <NextLink title="See Project" href="See Portfolio" className="more hover link-red"/>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="item col-md-6">
                                                    <figure className="itooltip itooltip-light hover-scale rounded" title="tooltip">
                                                        <a href="#" data-glightbox={`title: tooltip`} data-gallery="project-2">
                                                            <Image alt="title" src="/img/hyundai/portfolio-01.png" width={900} height={800} className="w-100 h-auto"/>
                                                        </a>
                                                    </figure>
                                                </div>
                                                <div className="item col-md-6">
                                                    <figure className="itooltip itooltip-light hover-scale rounded" title="tooltip">
                                                        <a href="#" data-glightbox={`title: tooltip`} data-gallery="project-2">
                                                            <Image alt="title" src="/img/hyundai/portfolio-02.png" width={900} height={900} className="w-100 h-auto"/>
                                                        </a>
                                                    </figure>
                                                </div>
                                                <div className="item col-md-6">
                                                    <figure className="itooltip itooltip-light hover-scale rounded" title="tooltip">
                                                        <a href="#" data-glightbox={`title: tooltip`} data-gallery="project-2">
                                                            <Image alt="title" src="/img/hyundai/portfolio-03.png" width={900} height={718} className="w-100 h-auto"/>
                                                        </a>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <section className="wrapper bg-gray">
                <div className="container py-14 py-md-16">
                    <div className="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 align-items-center">
                        <div className="col-lg-5 mt-lg-2">
                            <h3 className="display-4 mb-3 pe-xxl-5">사업분야</h3>
                            <p className="lead fs-lg mb-0 pe-xxl-5">
                                (주)현대엔지니어링은 최첨단 기술과 혁신적인 설계로 고품질의 건축물을 완성하며, 안전과 지속 가능성을 최우선으로 고려합니다. 고객의 요구를 반영한 맞춤형 솔루션을 제공하여, 각 프로젝트마다 최고의 가치를 실현하고 있습니다.
                            </p>
                        </div>

                        <div className="col-lg-7">
                            <div className="row row-cols-2 row-cols-md-5 align-items-center">
                                <div className="col mt-0">
                                    <figure className="px-3 px-md-0 px-xxl-2 text-center">
                                        <Link href="/business-area/new-construction" className="d-block">
                                            <Image src="/img/hyundai/new-building.svg" alt="demo" width={85} height={85} className="w-100 h-auto" style={{width: "85px !important"}}/>
                                            <span className="d-block">신축</span>
                                        </Link>
                                    </figure>
                                </div>
                                <div className="col mt-0">
                                    <figure className="px-3 px-md-0 px-xxl-2 text-center">
                                        <Link href="/business-area/extension-reconstruction" className="d-block">
                                            <Image src="/img/hyundai/building-renovation.svg" alt="demo" width={85} height={85} className="w-100 h-auto" style={{width: "79px !important"}}/>
                                            <span className="d-block">신축</span>
                                        </Link>
                                    </figure>
                                </div>
                                <div className="col mt-0">
                                    <figure className="px-3 px-md-0 px-xxl-2 text-center">
                                        <Link href="/business-area/factory-remodeling" className="d-block">
                                            <Image src="/img/hyundai/steel-structure.svg" alt="demo" width={85} height={85} className="w-100 h-auto" style={{width: "80px !important"}}/>
                                            <span className="d-block">공장 리모델링</span>
                                        </Link>
                                    </figure>
                                </div>
                                <div className="col mt-0">
                                    <figure className="px-3 px-md-0 px-xxl-2 text-center">
                                        <Link href="/business-area/factory-waterproofing" className="d-block">
                                            <Image src="/img/hyundai/water-proof.svg" alt="demo" width={85} height={85} className="w-100 h-auto" style={{width: "85px !important"}}/>
                                            <span className="d-block">공장방수</span>
                                        </Link>
                                    </figure>
                                </div>
                                <div className="col mt-0">
                                    <figure className="px-3 px-md-0 px-xxl-2 text-center">
                                        <Link href="/business-area/factory-maintenance" className="d-block">
                                            <Image src="/img/hyundai/roof-repair.svg" alt="demo" width={85} height={85} className="w-100 h-auto" style={{width: "85px !important"}}/>
                                            <span className="d-block">공장보수</span>
                                        </Link>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container pb-17 pt-15">
                <div className="row">
                    <p className="lead text-center text-blue mb-5 fw-bold">Latest News</p>
                    <h1 className="display-5 mb-3 text-center mb-15">(주)현대엔지니어링의 최신 소식을 확인하세요.</h1>
                    <div className="swiper-container nav-bottom nav-color mb-14 swiper-container-3">
                        <Carousel grabCursor pagination={false} className="overflow-visible pb-2" breakpoints={carouselBreakpoints} loop={true} autoplay>
                            <article>
                                <div className="card shadow-lg">
                                    <figure className="card-img-top overlay overlay-1">
                                        <Link href="#">
                                            <img src="/img/hyundai/news01.png" alt=""/>
                                            <span className="bg"/>
                                        </Link>

                                        <figcaption>
                                            <h5 className="from-top mb-0">Read More</h5>
                                        </figcaption>
                                    </figure>

                                    <div className="card-body p-6">
                                        <div className="post-header">
                                            <div className="post-category">
                                                <NextLink title="신축" href="#" className="hover"/>
                                            </div>

                                            <h2 className="post-title h3 mt-1 mb-3">
                                                <NextLink title="타이틀이 들어갑니다." href="#" className="link-dark"/>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article>
                                <div className="card shadow-lg">
                                    <figure className="card-img-top overlay overlay-1">
                                        <Link href="#">
                                            <img src="/img/hyundai/news02.png" alt=""/>
                                            <span className="bg"/>
                                        </Link>

                                        <figcaption>
                                            <h5 className="from-top mb-0">Read More</h5>
                                        </figcaption>
                                    </figure>

                                    <div className="card-body p-6">
                                        <div className="post-header">
                                            <div className="post-category">
                                                <NextLink title="신축" href="#" className="hover"/>
                                            </div>

                                            <h2 className="post-title h3 mt-1 mb-3">
                                                <NextLink title="타이틀이 들어갑니다." href="#" className="link-dark"/>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article>
                                <div className="card shadow-lg">
                                    <figure className="card-img-top overlay overlay-1">
                                        <Link href="#">
                                            <img src="/img/hyundai/news03.png" alt=""/>
                                            <span className="bg"/>
                                        </Link>

                                        <figcaption>
                                            <h5 className="from-top mb-0">Read More</h5>
                                        </figcaption>
                                    </figure>

                                    <div className="card-body p-6">
                                        <div className="post-header">
                                            <div className="post-category">
                                                <NextLink title="신축" href="#" className="hover"/>
                                            </div>

                                            <h2 className="post-title h3 mt-1 mb-3">
                                                <NextLink title="타이틀이 들어갑니다." href="#" className="link-dark"/>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article>
                                <div className="card shadow-lg">
                                    <figure className="card-img-top overlay overlay-1">
                                        <Link href="#">
                                            <img src="/img/hyundai/news04.png" alt=""/>
                                            <span className="bg"/>
                                        </Link>

                                        <figcaption>
                                            <h5 className="from-top mb-0">Read More</h5>
                                        </figcaption>
                                    </figure>

                                    <div className="card-body p-6">
                                        <div className="post-header">
                                            <div className="post-category">
                                                <NextLink title="신축" href="#" className="hover"/>
                                            </div>

                                            <h2 className="post-title h3 mt-1 mb-3">
                                                <NextLink title="타이틀이 들어갑니다." href="#" className="link-dark"/>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </Carousel>
                    </div>
                </div>
            </div>
        </main>
    );
}
