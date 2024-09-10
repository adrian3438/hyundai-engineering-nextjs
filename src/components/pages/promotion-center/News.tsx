import NavBar from "../../hyundai/NavBar";
import Image from "next/image";
import FigureImage from "../../reuseable/FigureImage";
import NextLink from "../../reuseable/links/NextLink";
import clsx from "clsx";

export default function News() {
    return (
        <>
            <section
                className="wrapper image-wrapper bg-image bg-overlay text-white"
                style={{backgroundImage: "url(/img/hyundai/company/ceo-greeting-banner.jpg)"}}>
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

            <NavBar depthId="menu3" activeId={2}/>

            <div className="container py-17">
                <div className="row">
                    <div className="col-md-10 m-auto">
                        <div className="mb-10">
                            <h1 className="text-primary">소식지</h1>
                        </div>
                        
                        <div className="row gx-lg-8 gx-xl-12">
                            {/* ========== blog details section ========== */}
                            <div className="col-lg-8">
                                <div className="blog classic-view">
                                    <article className="post">
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
                                    </article>

                                    <div className="blog grid grid-view">
                                        <div className="row isotope gx-md-8 gy-8 mb-8">
                                            <article className="item post col-md-6">
                                                <div className="card">
                                                    <figure className="card-img-top overlay overlay-1 hover-scale"><a href="#">
                                                        <figure><img alt="demo" loading="lazy" width="560" height="350" decoding="async" data-nimg="1" className="w-100 h-auto" src="/_next/image?url=%2Fimg%2Fphotos%2Fb4.jpg&amp;w=1200&amp;q=75"
                                                                     style={{color: "transparent"}}/></figure>
                                                        <span className="bg"></span></a>
                                                        <figcaption><h5 className="from-top mb-0">Read More</h5></figcaption>
                                                    </figure>
                                                    <div className="card-body">
                                                        <div className="post-header">
                                                            <div className="post-category text-line"><a className="hover" href="#">신축</a></div>
                                                            <h2 className="post-title h3 mt-1 mb-3"><a className="link-dark" href="#">타이틀이 들어갑니다.</a></h2></div>
                                                        <div className="post-content"><p>내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.</p></div>
                                                        <ul className="post-meta d-flex mb-0">
                                                            <li className="post-date"><i className="uil uil-calendar-alt"></i><span>2024. 06. 26</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </article>
                                            <article className="item post col-md-6">
                                                <div className="card">
                                                    <figure className="card-img-top overlay overlay-1 hover-scale"><a href="#">
                                                        <figure><img alt="demo" loading="lazy" width="560" height="350" decoding="async" data-nimg="1" className="w-100 h-auto" src="/_next/image?url=%2Fimg%2Fphotos%2Fb4.jpg&amp;w=1200&amp;q=75"
                                                                     style={{color: "transparent"}}/></figure>
                                                        <span className="bg"></span></a>
                                                        <figcaption><h5 className="from-top mb-0">Read More</h5></figcaption>
                                                    </figure>
                                                    <div className="card-body">
                                                        <div className="post-header">
                                                            <div className="post-category text-line"><a className="hover" href="#">공장 리모델링</a></div>
                                                            <h2 className="post-title h3 mt-1 mb-3"><a className="link-dark" href="#">타이틀이 들어갑니다.</a></h2></div>
                                                        <div className="post-content"><p>내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.</p></div>
                                                        <ul className="post-meta d-flex mb-0">
                                                            <li className="post-date"><i className="uil uil-calendar-alt"></i><span>2024. 06. 26</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </article>
                                            <article className="item post col-md-6">
                                                <div className="card">
                                                    <figure className="card-img-top overlay overlay-1 hover-scale"><a href="#">
                                                        <figure><img alt="demo" loading="lazy" width="560" height="350" decoding="async" data-nimg="1" className="w-100 h-auto" src="/_next/image?url=%2Fimg%2Fphotos%2Fb4.jpg&amp;w=1200&amp;q=75"
                                                                     style={{color: "transparent"}}/></figure>
                                                        <span className="bg"></span></a>
                                                        <figcaption><h5 className="from-top mb-0">Read More</h5></figcaption>
                                                    </figure>
                                                    <div className="card-body">
                                                        <div className="post-header">
                                                            <div className="post-category text-line"><a className="hover" href="#">공장방수</a></div>
                                                            <h2 className="post-title h3 mt-1 mb-3"><a className="link-dark" href="#">타이틀이 들어갑니다.</a></h2></div>
                                                        <div className="post-content"><p>내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.</p></div>
                                                        <ul className="post-meta d-flex mb-0">
                                                            <li className="post-date"><i className="uil uil-calendar-alt"></i><span>2024. 06. 26</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </article>
                                            <article className="item post col-md-6">
                                                <div className="card">
                                                    <figure className="card-img-top overlay overlay-1 hover-scale"><a href="#">
                                                        <figure><img alt="demo" loading="lazy" width="560" height="350" decoding="async" data-nimg="1" className="w-100 h-auto" src="/_next/image?url=%2Fimg%2Fphotos%2Fb4.jpg&amp;w=1200&amp;q=75"
                                                                     style={{color: "transparent"}}/></figure>
                                                        <span className="bg"></span></a>
                                                        <figcaption><h5 className="from-top mb-0">Read More</h5></figcaption>
                                                    </figure>
                                                    <div className="card-body">
                                                        <div className="post-header">
                                                            <div className="post-category text-line"><a className="hover" href="#">공장보수</a></div>
                                                            <h2 className="post-title h3 mt-1 mb-3"><a className="link-dark" href="#">타이틀이 들어갑니다.</a></h2></div>
                                                        <div className="post-content"><p>내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.</p></div>
                                                        <ul className="post-meta d-flex mb-0">
                                                            <li className="post-date"><i className="uil uil-calendar-alt"></i><span>2024. 06. 26</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>

                                    <nav className={`d-flex justify-content-center`} aria-label="pagination">
                                        <ul className={clsx({pagination: true, "pagination-alt": false})}>
                                            <li className="page-item disabled">
                                                <NextLink href="#" className="page-link" title={<i className="uil uil-arrow-left"/>}/>
                                            </li>

                                            <li className={clsx({"page-item": true, active: true})}>
                                                <button className="page-link">1</button>
                                            </li>
                                            <li className={clsx({"page-item": true, active: false})}>
                                                <button className="page-link">2</button>
                                            </li>
                                            <li className={clsx({"page-item": true, active: false})}>
                                                <button className="page-link">3</button>
                                            </li>

                                            <li className="page-item">
                                                <NextLink href="#" className="page-link" title={<i className="uil uil-arrow-right"/>}/>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            {/* ========== sidebar section ========== */}
                            <aside className="col-lg-4 sidebar mt-8 mt-lg-6">
                                {/*<BlogSidebar/>*/}


                                <div className="widget">
                                    <h4 className="widget-title mb-3">About Us</h4>
                                    <p>
                                        (주) 현대엔지니어링은 고객의 신뢰를 바탕으로 최고의 품질과 완벽한 시공을 최우선으로 목표로 삼고 있습니다. 저희 회사는 1997년 창립 이래 전국 공업단지 및 상업단지에서 수많은 공장신축과 리모델링 공사를 진행해 왔습니다. 당사는 수십년간 현장에서 활동해 온 전문가들이 하나의 팀으로 활동하며, 다양한 프로젝트에서 쌓아온 풍부한 경험과 노하우를 바탕으로, 고객에게 최고의 가치를 제공하기 위해 끊임없이 노력하고 있습니다
                                    </p>
                                </div>

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
