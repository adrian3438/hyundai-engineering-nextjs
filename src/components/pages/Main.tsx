'use client'
import Link from "next/link";
import Image from "next/image";
import Header from "../hyundai/Header";
import { useRouter } from "next/navigation";
import MainBanner2 from "../hyundai/MainBanner2";
import React from "react";
import Employees from "../../icons/solid-mono/Employees";
import TeamTwo from "../../icons/solid-mono/TeamTwo";
import AwardTwo from "../../icons/lineal/AwardTwo";

interface Props {
    news : string[]
    portFolio : string[]
}

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
                        <h1 className="display-1 mb-3 text-center">사업분야</h1>
                        <p className="lead text-center mb-10 fs-25">(주)현대엔지니어링은 공장전문건설사 입니다.</p>
                        <div className="row">
                            <article className="col-md-4 p-0">
                                <figure className="overlay overlay-1 hover-scale h-100">
                                    <Link href="/business-area/new-construction" className="h-100">
                                        <Image src="/img/hyundai/construnction-new-building.jpg" alt="신축" width={560} height={350} className="w-100 h-100"/>
                                        <span style={{backgroundColor:'rgba(0,0,0,0.3)', display: 'block'}} className="w-100 h-100 position-absolute top-0 start-0"></span>
                                        <span className="position-absolute fs-35 fw-bold top-50 start-50 translate-middle" style={{zIndex: 8}}>신축</span>
                                        {/*<span className="bg" style={{zIndex: 9}}/>*/}
                                    </Link>

                                    <figcaption>
                                        <h2 className="from-top mb-0"></h2>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col-md-4 p-0">
                                <figure className="overlay overlay-1 hover-scale h-100">
                                    <Link href="/business-area/extension-reconstruction" className="h-100">
                                        <Image src="/img/hyundai/repair-building.jpg" alt="image title" width={560} height={350} className="w-100 h-100"/>
                                        <span style={{backgroundColor: 'rgba(0,0,0,0.3)', display: 'block'}} className="w-100 h-100 position-absolute top-0 start-0"></span>
                                        <span className="position-absolute fs-35 fw-bold top-50 start-50 translate-middle" style={{zIndex: 8}}>증 · 개축</span>
                                        {/*<span className="bg" style={{zIndex: 9}}/>*/}
                                    </Link>

                                    <figcaption>
                                        <h2 className="from-top mb-0"></h2>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col-md-4 p-0">
                                <figure className="overlay overlay-1 hover-scale h-100">
                                    <Link href="/business-area/factory-remodeling" className="h-100">
                                        <Image src="/img/hyundai/factory-remodeling.jpg" alt="image title" width={560} height={350} className="w-100 h-100"/>
                                        <span style={{backgroundColor: 'rgba(0,0,0,0.3)', display: 'block'}} className="w-100 h-100 position-absolute top-0 start-0"></span>
                                        <span className="position-absolute fs-35 fw-bold top-50 start-50 translate-middle" style={{zIndex: 8}}>공장 리모델링</span>
                                        {/*<span className="bg" style={{zIndex: 9}}/>*/}
                                    </Link>

                                    <figcaption>
                                        <h2 className="from-top mb-0"></h2>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col-md-6 p-0">
                                <figure className="overlay overlay-1 hover-scale h-100">
                                    <Link href="/business-area/factory-waterproofing" className="h-100">
                                        <Image src="/img/hyundai/factory-water-proof.jpg" alt="image title" width={560} height={350} className="w-100 h-100"/>
                                        <span style={{backgroundColor: 'rgba(0,0,0,0.3)', display: 'block'}} className="w-100 h-100 position-absolute top-0 start-0"></span>
                                        <span className="position-absolute fs-35 fw-bold top-50 start-50 translate-middle" style={{zIndex: 8}}>공장방수</span>
                                        {/*<span className="bg" style={{zIndex: 9}}/>*/}
                                    </Link>

                                    <figcaption>
                                        <h2 className="from-bottom mb-0"></h2>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col-md-6 p-0">
                                <figure className="overlay overlay-1 hover-scale h-100">
                                    <Link href="/business-area/factory-maintenance" className="h-100">
                                        <Image src="/img/hyundai/factory-repair.jpg" alt="image title" width={560} height={350} className="w-100 h-100"/>
                                        <span style={{backgroundColor: 'rgba(0,0,0,0.3)', display: 'block'}} className="w-100 h-100 position-absolute top-0 start-0"></span>
                                        <span className="position-absolute fs-35 fw-bold top-50 start-50 translate-middle" style={{zIndex: 8}}>공장보수</span>
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

                <div className="bg-pale-ash" style={{background: 'url(/img/hyundai/main/portfolio-bg.jpg) no-repeat 100% 0', backgroundSize: "100% auto"}}>
                    <div className="container pb-17 pt-15">
                        <div className="row">
                            <h1 className="display-1 mb-3 text-center">포트폴리오</h1>
                            <p className="lead text-center mb-10 fs-25">성실과 전문성으로 보답하는<br/>(주)현대엔지니어링의 사업실적입니다.</p>
                            <div className="row row-cols-md-5">
                                <article className="pb-15">
                                    <figure className="overlay overlay-1 hover-scale h-100">
                                        <Link href="/portfolio?type=3" className="h-100">
                                            <Image src="/img/hyundai/main/new-construction.jpg" alt="image title" width={560} height={350} className="w-100 h-100"/>
                                            <span style={{backgroundColor: 'rgba(0,0,0,0.3)', display: 'block'}} className="w-100 h-100 position-absolute top-0 start-0"></span>
                                            <span className="position-absolute fs-35 fw-bold top-50 start-50 translate-middle" style={{zIndex: 8}}>신축</span>
                                        </Link>

                                        <figcaption>
                                            <h2 className="from-top mb-0"></h2>
                                        </figcaption>
                                    </figure>
                                </article>
                                <article className="pt-15">
                                    <figure className="overlay overlay-1 hover-scale h-100">
                                        <Link href="/portfolio?type=4" className="h-100">
                                            <Image src="/img/hyundai/main/extension-reconstruction.jpg" alt="image title" width={560} height={350} className="w-100 h-100"/>
                                            <span style={{backgroundColor: 'rgba(0,0,0,0.3)', display: 'block'}} className="w-100 h-100 position-absolute top-0 start-0"></span>
                                            <span className="position-absolute fs-35 fw-bold top-50 start-50 translate-middle" style={{zIndex: 8}}>증 · 개축</span>
                                        </Link>

                                        <figcaption>
                                            <h2 className="from-top mb-0"></h2>
                                        </figcaption>
                                    </figure>
                                </article>
                                <article className="pb-15">
                                    <figure className="overlay overlay-1 hover-scale h-100">
                                        <Link href="/portfolio?type=5" className="h-100">
                                            <Image src="/img/hyundai/main/factory-remodeling.jpg" alt="image title" width={560} height={350} className="w-100 h-100"/>
                                            <span style={{backgroundColor: 'rgba(0,0,0,0.3)', display: 'block'}} className="w-100 h-100 position-absolute top-0 start-0"></span>
                                            <span className="position-absolute fs-35 fw-bold top-50 start-50 translate-middle" style={{zIndex: 8}}>공장<br/>리모델링</span>
                                        </Link>

                                        <figcaption>
                                            <h2 className="from-top mb-0"></h2>
                                        </figcaption>
                                    </figure>
                                </article>
                                <article className="pt-15">
                                    <figure className="overlay overlay-1 hover-scale h-100">
                                        <Link href="/portfolio?type=6" className="h-100">
                                            <Image src="/img/hyundai/main/factory-waterproofing.jpg" alt="image title" width={560} height={350} className="w-100 h-100"/>
                                            <span style={{backgroundColor: 'rgba(0,0,0,0.3)', display: 'block'}} className="w-100 h-100 position-absolute top-0 start-0"></span>
                                            <span className="position-absolute fs-35 fw-bold top-50 start-50 translate-middle" style={{zIndex: 8}}>공장방수</span>
                                        </Link>

                                        <figcaption>
                                            <h2 className="from-top mb-0"></h2>
                                        </figcaption>
                                    </figure>
                                </article>
                                <article className="pb-15">
                                    <figure className="overlay overlay-1 hover-scale h-100">
                                        <Link href="/portfolio?type=7" className="h-100">
                                            <Image src="/img/hyundai/main/factory-maintenance.jpg" alt="image title" width={560} height={350} className="w-100 h-100"/>
                                            <span style={{backgroundColor: 'rgba(0,0,0,0.3)', display: 'block'}} className="w-100 h-100 position-absolute top-0 start-0"></span>
                                            <span className="position-absolute fs-35 fw-bold top-50 start-50 translate-middle" style={{zIndex: 8}}>공장보수</span>
                                        </Link>

                                        <figcaption>
                                            <h2 className="from-top mb-0"></h2>
                                        </figcaption>
                                    </figure>
                                </article>
                            </div>


                            {/*{portFolio?.map((portFolio: any, index: number) => (
                                <article className="item post col-md-4" key={portFolio?.ID}>
                                    <div className="card">
                                        <figure className="card-img-top overlay overlay-1 hover-scale">
                                            <Link href="#" onClick={(e) => handlePortPage(e, portFolio?.ID)}>
                                                <FigureImage width={560} height={350} src={portFolio?.thumnailFile}/>
                                                <span className="bg"/>
                                            </Link>

                                            <figcaption>
                                                <h5 className="from-top mb-0">Read More</h5>
                                            </figcaption>
                                        </figure>

                                        <div className="card-body">
                                            <div className="post-header">
                                                <h2 className="post-title h3 mt-1 mb-3 overflow-hidden dots-main-post-title">
                                                    <NextLink onClick={(e) => handlePortPage(e, portFolio?.ID)} title={portFolio?.promSubject} className="link-dark fs-25" href="#"/>
                                                </h2>
                                            </div>

                                            <div className="post-content overflow-hidden dots-main-post-detail">
                                                <p className="mb-0 fs-18">{portFolio?.excerpt}</p>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}*/}
                        </div>
                        {/*<div className="text-center mt-10">
                            <NextLink href="/portfolio" title="포트폴리오 바로가기" className="btn btn-outline-primary"/>
                        </div>*/}
                    </div>
                </div>

                <div className="container pb-17 pt-15">
                    <div className="row">
                        <section className="section-frame overflow-hidden m-0">
                            <div
                                className="wrapper image-wrapper bg-image bg-cover bg-overlay"
                                style={{backgroundImage: "url(/img/hyundai/main/company-bg.jpg)", backgroundSize: '100% auto'}}>
                                <div className="container h-100">
                                    <div className="row h-100 pt-15 pb-20 px-10">
                                        <div className="col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-5 text-center text-lg-start justify-content-center align-self-center align-items-start">
                                            <h2 className="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                                                고객만족을 최우선으로<br/> 생각합니다
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row px-15 position-relative" style={{marginTop: '-100px', zIndex:10}}>
                                <div className="col-md-6 bg-blue py-10 px-10">
                                    <h2 className="text-white mb-5">회사소개</h2>
                                    <div className="row row-cols-md-3">
                                        <div className="text-center">
                                            <a href="/company/about-us" className="text-white d-block">
                                                <Employees className="icon-svg-xs text-white" />
                                                <p className="mt-3 mb-0">회사소개</p>
                                            </a>
                                        </div>
                                        <div className="text-center">
                                            <a href="/company/ceo-greeting" className="text-white d-block">
                                                <TeamTwo className="icon-svg-xs text-white" />
                                                <p className="mt-3 mb-0">CEO 인사말</p>
                                            </a>
                                        </div>
                                        <div className="text-center" style={{marginTop: '-20px'}}>
                                            <a href="/company/certification" className="text-white d-block">
                                                <i className="uil uil-award fs-43 align-center"></i>
                                                <p className="mb-0" style={{marginTop: '-3px'}}>인증현황</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 bg-white border-bottom">
                                    <a href="/inquiry" className="d-block py-10 px-10">
                                        <h2>문의하기</h2>
                                        <p className="mt-2 mb-0 text-center"><i className="uil uil-envelope-question fs-50"></i><br/>
                                            질문서 작성
                                        </p>
                                    </a>
                                </div>
                                <div className="col-md-3 bg-pale-ash">
                                    <a href="/promotion-center/news" className="d-block py-10 px-10">
                                        <h2>소식지</h2>
                                        <p className="mt-2 mb-0 text-center"><i className="uil uil-book-open fs-50"></i><br/>바로가기</p>
                                    </a>
                                </div>
                            </div>
                        </section>
                        {/*<div
                            className="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
                            style={{backgroundImage: 'url("/img/photos/bg7.jpg")'}}>
                            <div className="container h-100">
                                <div className="row h-100">
                                    <div className="col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-5 text-center text-lg-start justify-content-center align-self-center align-items-start">
                                        <h2 className="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                                            고객만족을 최우선으로 생각합니다
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>*/}
                        {/*<h1 className="display-1 mb-3 text-center">소식지</h1>
                        <p className="lead text-center mb-10 fs-25">현대엔지니어링의 최신 소식을 확인하세요</p>
                        {news?.map((news: any, index: number) => (
                            <>
                                <div className="row gx-lg-8 gx-xl-12 align-items-center" key={news?.ID}>
                                    <div className="col-lg-4">
                                        <figure className="rounded">
                                            <img src={news?.thumnailFile} srcSet={news?.thumnailFile} alt={news?.thumnailFilename}/>
                                        </figure>
                                    </div>
                                    <div className="col-lg-8">
                                        <h3 className="display-6 mb-4">{news?.promSubject}</h3>
                                        <p className="mb-5 fs-18">
                                            <i className="uil uil-calendar-alt"></i> {news?.createDate}
                                        </p>
                                        <p className="mb-4 dots-main-post-detail overflow-hidden fs-18">
                                            {news?.excerpt}
                                        </p>
                                        <NextLink title="소식 보러가기" href="#" onClick={(e) => handleNewPage(e, news?.ID)} className="btn btn-soft-primary rounded-pill mt-6 mb-0 fs-18"/>
                                    </div>
                                </div>
                                <hr className="my-10 p-0"/>
                            </>
                        ))}*/}
                    </div>
                </div>
            </main>
        </>
    );
}
