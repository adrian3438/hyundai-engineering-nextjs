'use client'
import Link from "next/link";
import Image from "next/image";
import Header from "../hyundai/Header";
import MainBanner2 from "../hyundai/MainBanner2";
import React from "react";
import Employees from "../../icons/solid-mono/Employees";
import TeamTwo from "../../icons/solid-mono/TeamTwo";

// interface Props {
//     news : string[]
//     portFolio : string[]
// }

export default function Main() {
    /*const router = useRouter()
    function handleNewPage(e : any , id : number) {
        e.preventDefault()
        router.push(`/promotion-center/news/${id}`)
    }
    function handlePortPage (e:any, id : number) {
        e.preventDefault()
        router.push(`/portfolio/${id}`)
    }*/
    return (
        <>
        <header>
            <Header
                navClassName="navbar navbar-expand-lg center-nav transparent navbar-light position-absolute navbar-dark"
                button={
                    <a href="/sitemap" className="d-md-none d-lg-block dots-hamburger">
                        <i className="uil uil-bars fs-35"></i>
                    </a>
                }
                logoAlt="logo-light"
            />
        </header>
            <main className="content-wrapper">
                <MainBanner2/>
                <div>
                    <div className="pb-17 pt-15">
                        <h1 className="display-1 mb-10 text-center">사업분야</h1>
                        {/*<p className="lead text-center mb-10 fs-25">(주)현대엔지니어링은 공장전문건설사 입니다.</p>*/}
                        <div className="row row-cols-md-5 m-0">
                            <article className="p-0">
                                <figure className="overlay overlay-1 hover-scale h-100">
                                    <Link href="/business-area/new-construction" className="h-100">
                                        <Image src="/img/hyundai/main/business-main-1.jpg" alt="신축" width={560} height={350} className="w-100 h-100"/>
                                        <span style={{backgroundColor:'rgba(0,0,0,0.3)', display: 'block'}} className="w-100 h-100 position-absolute top-0 start-0"></span>
                                        <span className="position-absolute fs-35 fw-bold top-50 start-50 translate-middle w-100" style={{zIndex: 8}}>신축 <br/><span className="fs-16">MORE <i className="uil uil-arrow-circle-right d-inline align-middle fs-24"></i></span></span>
                                        {/*<span className="bg" style={{zIndex: 9}}/>*/}
                                    </Link>

                                    <figcaption>
                                        <h2 className="from-top mb-0"></h2>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="p-0">
                                <figure className="overlay overlay-1 hover-scale h-100">
                                    <Link href="/business-area/extension-reconstruction" className="h-100">
                                        <Image src="/img/hyundai/main/business-main-2.jpg" alt="image title" width={560} height={350} className="w-100 h-100"/>
                                        <span style={{backgroundColor: 'rgba(0,0,0,0.3)', display: 'block'}} className="w-100 h-100 position-absolute top-0 start-0"></span>
                                        <span className="position-absolute fs-35 fw-bold top-50 start-50 translate-middle w-100" style={{zIndex: 8}}>증 · 개축 <br/><span className="fs-16">MORE <i className="uil uil-arrow-circle-right d-inline align-middle fs-24"></i></span></span>
                                        {/*<span className="bg" style={{zIndex: 9}}/>*/}
                                    </Link>

                                    <figcaption>
                                        <h2 className="from-top mb-0"></h2>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="p-0">
                                <figure className="overlay overlay-1 hover-scale h-100">
                                    <Link href="/business-area/factory-remodeling" className="h-100">
                                        <Image src="/img/hyundai/main/business-main-3.jpg" alt="image title" width={560} height={350} className="w-100 h-100"/>
                                        <span style={{backgroundColor: 'rgba(0,0,0,0.3)', display: 'block'}} className="w-100 h-100 position-absolute top-0 start-0"></span>
                                        <span className="position-absolute fs-35 fw-bold top-50 start-50 translate-middle w-100" style={{zIndex: 8}}>공장 리모델링 <br/><span className="fs-16">MORE <i className="uil uil-arrow-circle-right d-inline align-middle fs-24"></i></span></span>
                                        {/*<span className="bg" style={{zIndex: 9}}/>*/}
                                    </Link>

                                    <figcaption>
                                        <h2 className="from-top mb-0"></h2>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="p-0">
                                <figure className="overlay overlay-1 hover-scale h-100">
                                    <Link href="/business-area/factory-waterproofing" className="h-100">
                                        <Image src="/img/hyundai/main/business-main-4.jpg" alt="image title" width={560} height={350} className="w-100 h-100"/>
                                        <span style={{backgroundColor: 'rgba(0,0,0,0.3)', display: 'block'}} className="w-100 h-100 position-absolute top-0 start-0"></span>
                                        <span className="position-absolute fs-35 fw-bold top-50 start-50 translate-middle w-100" style={{zIndex: 8}}>공장방수 <br/><span className="fs-16">MORE <i className="uil uil-arrow-circle-right d-inline align-middle fs-24"></i></span></span>
                                        {/*<span className="bg" style={{zIndex: 9}}/>*/}
                                    </Link>

                                    <figcaption>
                                        <h2 className="from-bottom mb-0"></h2>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="p-0">
                                <figure className="overlay overlay-1 hover-scale h-100">
                                    <Link href="/business-area/factory-maintenance" className="h-100">
                                        <Image src="/img/hyundai/main/business-main-5.jpg" alt="image title" width={560} height={350} className="w-100 h-100"/>
                                        <span style={{backgroundColor: 'rgba(0,0,0,0.3)', display: 'block'}} className="w-100 h-100 position-absolute top-0 start-0"></span>
                                        <span className="position-absolute fs-35 fw-bold top-50 start-50 translate-middle w-100" style={{zIndex: 8}}>공장보수 <br/><span className="fs-16">MORE <i className="uil uil-arrow-circle-right d-inline align-middle fs-24"></i></span></span>
                                        {/*<span className="bg" style={{zIndex: 9}}/>*/}
                                    </Link>

                                    <figcaption>
                                        <h2 className="from-top mb-0"></h2>
                                    </figcaption>
                                </figure>
                            </article>
                        </div>
                    </div>
                </div>

                {/*<div style={{background: 'url(/img/hyundai/main/portfolio-bg.jpg) no-repeat 100% 0', backgroundSize: "100% auto"}}>*/}
                <div className="bg-pale-ash" style={{background: 'url(/img/hyundai/shape-01.svg) no-repeat 100% 0', backgroundSize: "auto 100%"}}>
                    <div className="container pb-17 pt-15 px-0">
                        <div>
                            <h1 className="display-1 mb-3 text-center">포트폴리오</h1>
                            <p className="lead text-center mb-10 fs-25">성실과 전문성으로 보답하는<br/>(주)현대엔지니어링의 포트폴리오 입니다.</p>
                            <div className="row row-cols-md-5">
                                <article className="pb-md-15 pb-0">
                                    <figure className="overlay overlay-1 hover-scale h-100">
                                        <Link href="/portfolio?type=3" className="h-100">
                                            <Image src="/img/hyundai/main/portfolio-main-1.jpg" alt="image title" width={560} height={350} className="w-100 h-100"/>
                                            <span style={{backgroundColor: 'rgba(0,0,0,0.6)', display: 'block'}} className="w-100 h-100 position-absolute top-0 start-0"></span>
                                            <span className="position-absolute fs-35 fw-bold top-50 start-50 translate-middle w-100" style={{zIndex: 8}}>신축</span>
                                        </Link>

                                        <figcaption>
                                            <h2 className="from-top mb-0"></h2>
                                        </figcaption>
                                    </figure>
                                </article>
                                <article className="pt-md-15 pt-0">
                                    <figure className="overlay overlay-1 hover-scale h-100">
                                        <Link href="/portfolio?type=4" className="h-100">
                                            <Image src="/img/hyundai/main/portfolio-main-2.jpg" alt="image title" width={560} height={350} className="w-100 h-100"/>
                                            <span style={{backgroundColor: 'rgba(0,0,0,0.6)', display: 'block'}} className="w-100 h-100 position-absolute top-0 start-0"></span>
                                            <span className="position-absolute fs-35 fw-bold top-50 start-50 translate-middle w-100" style={{zIndex: 8}}>증 · 개축</span>
                                        </Link>

                                        <figcaption>
                                            <h2 className="from-top mb-0"></h2>
                                        </figcaption>
                                    </figure>
                                </article>
                                <article className="pb-md-15 pb-0">
                                    <figure className="overlay overlay-1 hover-scale h-100">
                                        <Link href="/portfolio?type=5" className="h-100">
                                            <Image src="/img/hyundai/main/portfolio-main-3.jpg" alt="image title" width={560} height={350} className="w-100 h-100"/>
                                            <span style={{backgroundColor: 'rgba(0,0,0,0.6)', display: 'block'}} className="w-100 h-100 position-absolute top-0 start-0"></span>
                                            <span className="position-absolute fs-35 fw-bold top-50 start-50 translate-middle w-100" style={{zIndex: 8}}>공장<br/>리모델링</span>
                                        </Link>

                                        <figcaption>
                                            <h2 className="from-top mb-0"></h2>
                                        </figcaption>
                                    </figure>
                                </article>
                                <article className="pt-md-15 pt-0">
                                    <figure className="overlay overlay-1 hover-scale h-100">
                                        <Link href="/portfolio?type=6" className="h-100">
                                            <Image src="/img/hyundai/main/portfolio-main-4.jpg" alt="image title" width={560} height={350} className="w-100 h-100"/>
                                            <span style={{backgroundColor: 'rgba(0,0,0,0.6)', display: 'block'}} className="w-100 h-100 position-absolute top-0 start-0"></span>
                                            <span className="position-absolute fs-35 fw-bold top-50 start-50 translate-middle w-100" style={{zIndex: 8}}>공장방수</span>
                                        </Link>

                                        <figcaption>
                                            <h2 className="from-top mb-0"></h2>
                                        </figcaption>
                                    </figure>
                                </article>
                                <article className="pb-md-15 pb-0">
                                    <figure className="overlay overlay-1 hover-scale h-100">
                                        <Link href="/portfolio?type=7" className="h-100">
                                            <Image src="/img/hyundai/main/portfolio-main-5.jpg" alt="image title" width={560} height={350} className="w-100 h-100"/>
                                            <span style={{backgroundColor: 'rgba(0,0,0,0.6)', display: 'block'}} className="w-100 h-100 position-absolute top-0 start-0"></span>
                                            <span className="position-absolute fs-35 fw-bold top-50 start-50 translate-middle w-100" style={{zIndex: 8}}>공장보수</span>
                                        </Link>

                                        <figcaption>
                                            <h2 className="from-top mb-0"></h2>
                                        </figcaption>
                                    </figure>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container pb-17 pt-17">
                    <section className="section-frame overflow-hidden m-0 p-0">
                        <div
                            className="wrapper image-wrapper bg-image bg-cover bg-overlay"
                            style={{backgroundImage: "url(/img/hyundai/main/company-bg.jpg)", backgroundSize: '100% auto'}}>
                            <div className="container h-100">
                                <div className="row h-100 pt-15 pb-20 px-10">
                                    <div className="col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-5 text-center text-lg-start justify-content-center align-self-center align-items-start">
                                        <h2 className="display-1 fs-40 mb-0 text-white animate__animated animate__slideInDown animate__delay-1s">
                                            고객만족을 최우선으로<br/> 생각합니다
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row px-md-15 px-3 position-relative" style={{marginTop: '-100px', zIndex: 10}}>
                            <div className="col-lg-6 col-md-8 bg-blue py-10 px-10">
                                <h2 className="text-white mb-5">회사소개</h2>
                                <div className="row row-cols-3 align-items-center">
                                    <div className="text-center p-0 h-100 border-end">
                                        <a href="/company/about-us" className="text-white d-block h-100">
                                            <Employees className="icon-svg-xs text-white"/>
                                            <p className="mt-3 mb-0">회사소개</p>
                                        </a>
                                    </div>
                                    <div className="text-center p-0 h-100 border-end">
                                        <a href="/company/ceo-greeting" className="text-white d-block h-100">
                                            <TeamTwo className="icon-svg-xs text-white"/>
                                            <p className="mt-3 mb-0">CEO 인사말</p>
                                        </a>
                                    </div>
                                    <div className="text-center p-0 h-100">
                                        <a href="/company/certification" className="text-white d-block h-100 position-relative h-100" style={{height: '78px !important'}}>
                                            <i className="uil uil-award fs-43 align-center position-absolute start-50 translate-middle-x" style={{top: '-13px'}}></i>
                                            <p className="mb-0 position-absolute w-100 text-center bottom-0">인증현황</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 bg-white border-bottom">
                                <a href="/inquiry" className="d-block py-10 px-xl-10 px-md-7 px-sm-10">
                                    <h2>문의하기</h2>
                                    <p className="mt-2 mb-0 text-center"><i className="uil uil-envelope-question fs-50"></i><br/>
                                        질문서 작성
                                    </p>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-12 bg-pale-ash">
                                <a href="/promotion-center/news" className="d-block py-10 px-xl-10 px-md-7 px-sm-10">
                                    <h2>소식지</h2>
                                    <p className="mt-2 mb-0 text-center"><i className="uil uil-book-open fs-50"></i><br/>바로가기</p>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
