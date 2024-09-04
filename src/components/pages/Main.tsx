'use client'

import MainBanner from "../hyundai/MainBanner";
import Link from "next/link";
import FigureImage from "../reuseable/FigureImage";
import NextLink from "../reuseable/links/NextLink";
import Image from "next/image";
import {projectList1} from "../../data/project";
import {ProjectCard1} from "../reuseable/project-cards";
import useIsotope from "../../hooks/useIsotope";
import {Clients4} from "../blocks/clients";
import {clientList2} from "../../data/client";

export default function Main() {
    useIsotope();

    return (
        <main className="content-wrapper">
            <MainBanner/>

            <div className="container pb-17 pt-15">
                <div className="row">
                    <section className="wrapper bg-light">
                        <div className="container py-14 py-md-16">
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
                    <div className="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 mb-10">
                        <div className="col-lg-4 mt-lg-2">
                            <h3 className="display-4 mb-3 pe-xxl-5">Trusted by over 300+ clients</h3>
                            <p className="lead fs-lg mb-0 pe-xxl-5">
                                We <span className="underline">bring solutions</span> to make life easier for our customers.
                            </p>
                        </div>

                        <div className="col-lg-8">
                            <div className="row row-cols-2 row-cols-md-4 gx-0 gx-md-8 gx-xl-12 gy-12">
                                <div className="col">
                                    <figure className="px-3 px-md-0 px-xxl-2">
                                        <Image src="/img/hyundai/new-building.svg" alt="demo" width={85} height={85} className="w-100 h-auto"/>
                                    </figure>
                                </div>
                                <div className="col">
                                    <figure className="px-3 px-md-0 px-xxl-2">
                                        <Image src="/img/hyundai/new-building.svg" alt="demo" width={85} height={85} className="w-100 h-auto"/>
                                    </figure>
                                </div>
                                <div className="col">
                                    <figure className="px-3 px-md-0 px-xxl-2">
                                        <Image src="/img/hyundai/new-building.svg" alt="demo" width={85} height={85} className="w-100 h-auto"/>
                                    </figure>
                                </div>
                                <div className="col">
                                    <figure className="px-3 px-md-0 px-xxl-2">
                                        <Image src="/img/hyundai/new-building.svg" alt="demo" width={85} height={85} className="w-100 h-auto"/>
                                    </figure>
                                </div>
                                <div className="col">
                                    <figure className="px-3 px-md-0 px-xxl-2">
                                        <Image src="/img/hyundai/new-building.svg" alt="demo" width={85} height={85} className="w-100 h-auto"/>
                                    </figure>
                                </div>
                                <div className="col">
                                    <figure className="px-3 px-md-0 px-xxl-2">
                                        <Image src="/img/hyundai/new-building.svg" alt="demo" width={85} height={85} className="w-100 h-auto"/>
                                    </figure>
                                </div>
                                <div className="col">
                                    <figure className="px-3 px-md-0 px-xxl-2">
                                        <Image src="/img/hyundai/new-building.svg" alt="demo" width={85} height={85} className="w-100 h-auto"/>
                                    </figure>
                                </div>
                                <div className="col">
                                    <figure className="px-3 px-md-0 px-xxl-2">
                                        <Image src="/img/hyundai/new-building.svg" alt="demo" width={85} height={85} className="w-100 h-auto"/>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container pb-17 pt-15">
                <div className="row">
                    <h1 className="display-1 mb-3 text-center">소식지</h1>
                    <p className="lead text-center mb-5">현대엔지니어링의 최신 소식을 확인하세요</p>
                    <hr className="my-10 p-0"/>
                    <div className="row gx-lg-8 gx-xl-12 align-items-center">
                        <div className="col-lg-4">
                            <figure className="rounded">
                                <img src="/img/photos/about19.jpg" srcSet="/img/photos/about19@2x.jpg 2x" alt=""/>
                            </figure>
                        </div>
                        <div className="col-lg-8">
                            <h3 className="display-6 mb-4">제목</h3>
                            <p className="mb-5">
                                <i className="uil uil-calendar-alt"></i> 2024. 06. 26
                            </p>
                            <p className="mb-5 dots-main-post-detail overflow-hidden">
                                OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.
                            </p>
                            <NextLink title="소식 보러가기" href="#" className="btn btn-soft-primary rounded-pill mt-6 mb-0"/>
                        </div>
                    </div>
                    <hr className="my-10 p-0"/>
                    <div className="row gx-lg-8 gx-xl-12 align-items-center">
                        <div className="col-lg-4">
                            <figure className="rounded">
                                <img src="/img/photos/about19.jpg" srcSet="/img/photos/about19@2x.jpg 2x" alt=""/>
                            </figure>
                        </div>
                        <div className="col-lg-8">
                            <h3 className="display-6 mb-4">제목</h3>
                            <p className="mb-5">
                                <i className="uil uil-calendar-alt"></i> 2024. 06. 26
                            </p>
                            <p className="mb-5 dots-main-post-detail overflow-hidden">
                                OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.
                            </p>
                            <NextLink title="소식 보러가기" href="#" className="btn btn-soft-primary rounded-pill mt-6 mb-0"/>
                        </div>
                    </div>
                    <hr className="my-10 p-0"/>
                    <div className="row gx-lg-8 gx-xl-12 align-items-center">
                        <div className="col-lg-4">
                            <figure className="rounded">
                                <img src="/img/photos/about19.jpg" srcSet="/img/photos/about19@2x.jpg 2x" alt=""/>
                            </figure>
                        </div>
                        <div className="col-lg-8">
                            <h3 className="display-6 mb-4">제목</h3>
                            <p className="mb-5">
                                <i className="uil uil-calendar-alt"></i> 2024. 06. 26
                            </p>
                            <p className="mb-5 dots-main-post-detail overflow-hidden">
                                OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.OOOO 인증을 획득했습니다. 내용이 들어갑니다.
                            </p>
                            <NextLink title="소식 보러가기" href="#" className="btn btn-soft-primary rounded-pill mt-6 mb-0"/>
                        </div>
                    </div>
                    <hr className="my-10 p-0"/>
                </div>
            </div>
        </main>
    );
}
