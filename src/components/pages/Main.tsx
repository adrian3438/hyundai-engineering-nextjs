'use client'
import MainBanner from "../hyundai/MainBanner";
import Link from "next/link";
import FigureImage from "../reuseable/FigureImage";
import NextLink from "../reuseable/links/NextLink";
import Image from "next/image";
import Header from "../hyundai/Header";
import { useRouter } from "next/navigation";

interface Props {
    news : string[]
    portFolio : string[]
}

export default function Main({
    news , portFolio
} : Props) {
    const router = useRouter()
    function handleNewPage(e : any , id : number) {
        e.preventDefault()
        router.push(`/promotion-center/news/${id}`)
    }
    function handlePortPage (e:any, id : number) {
        e.preventDefault()
        router.push(`/portfolio/${id}`)
    }
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
                <MainBanner/>
                <div className="bg-pale-ash" style={{background: 'url(/img/hyundai/shape-01.svg) no-repeat 100% 0', backgroundSize: "auto 100%"}}>
                    <div className="container pb-17 pt-15">
                        <h1 className="display-1 mb-3 text-center">사업분야</h1>
                        <p className="lead text-center mb-10 fs-25">다양한 사업을 영위하는 종합건설사입니다</p>
                        <div className="row">
                            <article className="col-md-4">
                                <figure className="overlay overlay-1 hover-scale rounded mb-6">
                                    <Link href="/business-area/new-construction" className="position-relative">
                                        <Image src="/img/hyundai/construnction-new-building.jpg" alt="신축" width={560} height={350} className="w-100 h-auto"/>
                                        <span className="position-absolute fs-24 fw-bold" style={{top: "20px", left: "20px", zIndex: 8}}>신축</span>
                                        <span className="bg" style={{zIndex: 9}}/>
                                    </Link>

                                    <figcaption>
                                        <h2 className="from-top mb-0">신축</h2>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col-md-4">
                                <figure className="overlay overlay-1 hover-scale rounded mb-6">
                                    <Link href="/business-area/extension-reconstruction">
                                        <Image src="/img/hyundai/repair-building.jpg" alt="image title" width={560} height={350} className="w-100 h-auto"/>
                                        <span className="position-absolute fs-24 fw-bold" style={{top: "20px", left: "20px", zIndex: 8}}>증 · 개축</span>
                                        <span className="bg" style={{zIndex: 9}}/>
                                    </Link>

                                    <figcaption>
                                        <h2 className="from-top mb-0">증 · 개축</h2>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col-md-4">
                                <figure className="overlay overlay-1 hover-scale rounded mb-6">
                                    <Link href="/business-area/factory-remodeling">
                                        <Image src="/img/hyundai/factory-remodeling.jpg" alt="image title" width={560} height={350} className="w-100 h-auto"/>
                                        <span className="position-absolute fs-24 fw-bold" style={{top: "20px", left: "20px", zIndex: 8}}>공장 리모델링</span>
                                        <span className="bg" style={{zIndex: 9}}/>
                                    </Link>

                                    <figcaption>
                                        <h2 className="from-top mb-0">공장 리모델링</h2>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col-md-4">
                                <figure className="overlay overlay-1 hover-scale rounded mb-6">
                                    <Link href="/business-area/factory-waterproofing">
                                        <Image src="/img/hyundai/factory-water-proof.jpg" alt="image title" width={560} height={350} className="w-100 h-auto"/>
                                        <span className="position-absolute fs-24 fw-bold" style={{top: "20px", left: "20px", zIndex: 8}}>공장방수</span>
                                        <span className="bg" style={{zIndex: 9}}/>
                                    </Link>

                                    <figcaption>
                                        <h2 className="from-top mb-0">공장방수</h2>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col-md-4">
                                <figure className="overlay overlay-1 hover-scale rounded mb-6">
                                    <Link href="/business-area/factory-maintenance">
                                        <Image src="/img/hyundai/factory-repair.jpg" alt="image title" width={560} height={350} className="w-100 h-auto"/>
                                        <span className="position-absolute fs-24 fw-bold" style={{top: "20px", left: "20px", zIndex: 8}}>공장보수</span>
                                        <span className="bg" style={{zIndex: 9}}/>
                                    </Link>

                                    <figcaption>
                                        <h2 className="from-top mb-0">공장보수</h2>
                                    </figcaption>
                                </figure>
                            </article>
                        </div>
                    </div>
                </div>

                <div className="container pb-17 pt-15">
                    <div className="row">
                        <h1 className="display-1 mb-3 text-center">포트폴리오</h1>
                        <p className="lead text-center mb-10 fs-25">현대엔지니어링의 최신 포트폴리오를 만나보세요</p>

                        {portFolio?.map((portFolio: any, index: number) => (
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
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <NextLink href="/portfolio" title="포트폴리오 바로가기" className="btn btn-outline-primary"/>
                    </div>
                </div>

                <div className="container pb-17 pt-15">
                    <div className="row">
                        <h1 className="display-1 mb-3 text-center">소식지</h1>
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
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
}
