'use client'
import NavBar from "../../hyundai/NavBar";
import Image from "next/image";
import FigureImage from "../../reuseable/FigureImage";
import NextLink from "../../reuseable/links/NextLink";
import clsx from "clsx";
import { useEffect } from "react";
import api from "lib/api";
import { useRouter } from "next/navigation";
import Paginate from "components/DotsAdmin/Paginate/paginate";
interface Props {
    data : any
    language : string | undefined
    bussinessTypeList : any
    totalCount : number
    page : number
}
export default function News({data, language, bussinessTypeList, totalCount, page} : Props) {
    const router = useRouter()
    return (
        <>
            <section
                className="wrapper image-wrapper bg-image bg-overlay text-white"
                style={{backgroundImage: "url(/img/hyundai/promotion-center/promotion-center-banner.jpg)"}}>
                <div className="container min-vh-60 d-flex align-items-center">
                    <div className="row w-100">
                        <div className="col-md-12">
                            <h1 className="display-2 text-white mb-3">(주)현대엔지니어링의 역사는 계속 이어갑니다.</h1>
                            <p className="lead fs-lg">
                                고객의 꿈을 현실로 만들어가는 우리의 건설 실적, 그 자체가 신뢰의 증거입니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <NavBar depthId="menu3" activeId={1}/>

            <div className="container py-17">
                <div className="row">
                    <div className="col-md-10 m-auto">
                        <div className="row gx-lg-8 gx-xl-12">
                            {/* ========== blog details section ========== */}
                            <div className="col-lg-8">
                                <div className="blog classic-view">
                                    {/* <article className="post">
                                        <div className="card">
                                            <figure className="card-img-top overlay overlay-1 hover-scale">
                                                <a className="link-dark" href="news/1">
                                                    <Image alt="blog" width={960} height={600} src="/img/photos/b1.jpg" className="w-100 h-auto"/>
                                                    <span className="bg"/>
                                                </a>

                                                <figcaption>
                                                    <h5 className="from-top mb-0">Read More</h5>
                                                </figcaption>
                                            </figure>

                                            <div className="card-body">
                                                <div className="post-header">
                                                    <div className="post-category text-line">
                                                        <NextLink title={`신축`} href="#" className="hover"/>
                                                    </div>

                                                    <h2 className="post-title mt-1 mb-0">
                                                        <NextLink title={`타이틀이 들어갑니다.`} className="link-dark" href={`link`}/>
                                                    </h2>
                                                </div>

                                                <div className="post-content">
                                                    <p>{`내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. `}</p>
                                                </div>

                                                <ul className="post-meta d-flex mb-0">
                                                    <li className="post-date">
                                                        <i className="uil uil-calendar-alt"/>
                                                        <span>2024. 06. 26</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </article> */}

                                    <div className="blog grid grid-view">
                                        <div className="row isotope gx-md-8 gy-8 mb-8">

                                        {data?.map((list:any , index:number) => (
                                        <article className="item post col-md-6" key={index}>
                                            <div className="card" onClick={()=>router.push(`/promotion-center/news/${list?.ID}`)}>
                                                <figure className="card-img-top overlay overlay-1 hover-scale"><a href="#">
                                                    <figure><img alt="demo" loading="lazy" width="560" height="350" decoding="async" data-nimg="1" className="w-100 h-auto" src={list?.thumnailFile}
                                                                style={{color: "transparent"}}/></figure>
                                                    <span className="bg"></span></a>
                                                    <figcaption><h5 className="from-top mb-0">Read More</h5></figcaption>
                                                </figure>
                                                <div className="card-body">
                                                    <div className="post-header">
                                                        <div className="post-category text-line"><a className="hover" href="#">{list?.businessDivisionName}</a></div>
                                                        <h2 className="post-title h3 mt-1 mb-3"><a className="link-dark" href="#">{list?.promSubject}</a></h2></div>
                                                    <div className="post-content"><p>{list?.excerpt?.length > 70 ? list?.excerpt?.slice(0,70) + '...' : list?.excerpt}</p></div>
                                                    <ul className="post-meta d-flex mb-0">
                                                        <li className="post-date"><i className="uil uil-calendar-alt"></i><span>2024. 06. 26</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </article>
                                        ))}
                                        </div>
                                    </div>

                                    <nav className={`d-flex justify-content-center`} aria-label="pagination">
                                        <Paginate
                                            page={page} size={25} totalCount={totalCount}
                                        />
                                    </nav>
                                </div>
                            </div>

                            {/* ========== sidebar section ========== */}
                            <aside className="col-lg-4 sidebar mt-8 mt-lg-6">
                                {/* ========== popular posts section ========== */}
                                <div className="widget">
                                    <h4 className="widget-title mb-3">Popular Posts</h4>

                                    <ul className="image-list">
                                        <li>
                                            <NextLink title={<FigureImage width={100} height={100} className="rounded" src={'/img/photos/a1.jpg'}/>} href="#"/>

                                            <div className="post-content">
                                                <h6 className="mb-2">
                                                    <NextLink className="link-dark" title={'타이틀이 들어갑니다.'} href="#"/>
                                                </h6>

                                                <ul className="post-meta">
                                                    <li className="post-date">
                                                        <i className="uil uil-calendar-alt"/>
                                                        <span>2024. 06. 26</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <NextLink title={<FigureImage width={100} height={100} className="rounded" src={'/img/photos/a1.jpg'}/>} href="#"/>

                                            <div className="post-content">
                                                <h6 className="mb-2">
                                                    <NextLink className="link-dark" title={'타이틀이 들어갑니다.'} href="#"/>
                                                </h6>

                                                <ul className="post-meta">
                                                    <li className="post-date">
                                                        <i className="uil uil-calendar-alt"/>
                                                        <span>2024. 06. 26</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <NextLink title={<FigureImage width={100} height={100} className="rounded" src={'/img/photos/a1.jpg'}/>} href="#"/>

                                            <div className="post-content">
                                                <h6 className="mb-2">
                                                    <NextLink className="link-dark" title={'타이틀이 들어갑니다.'} href="#"/>
                                                </h6>

                                                <ul className="post-meta">
                                                    <li className="post-date">
                                                        <i className="uil uil-calendar-alt"/>
                                                        <span>2024. 06. 26</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                {/* ========== categories section ========== */}
                                <div className="widget">
                                    <h4 className="widget-title mb-3">Categories</h4>

                                    <ul className="unordered-list bullet-primary text-reset">
                                        <li>
                                            <NextLink title="신축(10)" href="#"/>
                                        </li>
                                        <li>
                                            <NextLink title="증 · 개축(5)" href="#"/>
                                        </li>
                                        <li>
                                            <NextLink title="공장 리모델링(10)" href="#"/>
                                        </li>
                                        <li>
                                            <NextLink title="공장방수(10)" href="#"/>
                                        </li>
                                        <li>
                                            <NextLink title="공장보수(10)" href="#"/>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
