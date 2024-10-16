import Link from "next/link";

export default function Sitemap() {
    return (
        <>
            <section
                className="wrapper image-wrapper bg-image bg-overlay text-white"
                style={{backgroundImage: "url(/img/hyundai/company/ceo-greeting-banner.jpg)"}}>
                <div className="container min-vh-60 d-flex align-items-center">
                    <div className="row w-100">
                        <div className="col-md-12">
                            <h1 className="display-2 text-white mb-3">사이트맵</h1>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container py-17">
                <section className="row my-10 justify-content-center">
                    <div className="row sitemap">
                        <div className="col-md-3 px-4 mb-10">
                            <ul className="p-0">
                                <li><p className="border text-center fw-bold bg-primary fs-25"><Link href="#" className="text-white">회사소개</Link></p>
                                    <ul className="ps-4">
                                        <li><Link href="/company/ceo-greeting" className="fs-18">CEO 인사말</Link></li>
                                        <li><Link href="/company/about-us" className="fs-18">소개</Link></li>
                                        <li><Link href="/company/history" className="fs-18">연혁</Link></li>
                                        <li><Link href="/company/certification" className="fs-18">인증현황</Link></li>
                                        <li><Link href="/company/location" className="fs-18">오시는길</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 px-4 mb-10">
                            <ul className="p-0">
                                <li><p className="border text-center fw-bold bg-primary fs-25"><Link href="/business-area/new-construction" className="text-white">사업분야</Link></p>
                                    <ul className="ps-4">
                                        <li><Link href="/business-area/new-construction" className="fs-18">신축</Link></li>
                                        <li><Link href="/business-area/extension-reconstruction" className="fs-18">증 · 개축</Link></li>
                                        <li><Link href="/business-area/factory-remodeling" className="fs-18">공장 리모델링</Link></li>
                                        <li><Link href="/business-area/factory-waterproofing" className="fs-18">공장방수</Link></li>
                                        <li><Link href="/business-area/factory-maintenance" className="fs-18">공장보수</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 px-4 mb-10">
                            <ul className="p-0">
                                <li><p className="border text-center fw-bold bg-primary fs-25"><Link href="/portfolio" className="text-white">포트폴리오</Link></p>
                                    <ul className="ps-4">
                                        <li><Link href="/portfolio?type=3" className="fs-18">신축</Link></li>
                                        <li><Link href="/portfolio?type=4" className="fs-18">증 · 개축</Link></li>
                                        <li><Link href="/portfolio?type=5" className="fs-18">공장 리모델링</Link></li>
                                        <li><Link href="/portfolio?type=6" className="fs-18">공장방수</Link></li>
                                        <li><Link href="/portfolio?type=7" className="fs-18">공장보수</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 px-4 mb-10">
                            <ul className="p-0">
                                <li><p className="border text-center fw-bold bg-primary fs-25"><Link href="#" className="text-white">홍보센터</Link></p>
                                    <ul className="ps-4">
                                        <li><Link href="/promotion-center/videos" className="fs-18">영상</Link></li>
                                        <li><Link href="/promotion-center/news" className="fs-18">소식지</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 px-4 mb-10">
                            <ul className="p-0">
                                <li><p className="border text-center fw-bold bg-primary fs-25"><Link href="/esg" className="text-white">지속가능경영</Link></p>
                                    <ul className="ps-4">
                                        <li><Link href="/esg" className="fs-18">지속가능경영</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 px-4 mb-10">
                            <ul className="p-0">
                                <li><p className="border text-center fw-bold bg-primary fs-25"><Link href="/inquiry" className="text-white">문의하기</Link></p>
                                    <ul className="ps-4">
                                        <li><Link href="/inquiry" className="fs-18">문의하기</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
