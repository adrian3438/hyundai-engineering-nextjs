export default function Footer() {
    return (
        <footer className="bg-navy text-inverse">
            <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
                <div className="row gy-6 gy-lg-0 justify-content-between">
                    <div className="col-md-4 col-lg-3">
                        <div className="widget">
                            {/*<img className="mb-4" src="/img/logo-light.png" srcSet="/img/logo-light@2x.png 2x" alt=""/>*/}
                            <h2 className="text-white">현대엔지니어링</h2>
                            <p className="mb-4">인천광역시 연수구 송도미래로 30 <br className="d-none d-lg-block"/>송도스마트밸리 D동 1610호 21990</p>
                            <p className="mb-4">전화번호 : 032-000-0000</p>
                            <p className="mb-4">Fax : 032-000-0000</p>
                        </div>
                    </div>
                    <div className="col-md-auto col-lg-auto">
                        <div className="widget">
                            <h4 className="widget-title text-white mb-3">회사소개</h4>
                            <ul className="list-unstyled mb-0">
                                <li><a href="/company/ceo-greeting">CEO 인사말</a></li>
                                <li><a href="/company/about-us">소개</a></li>
                                <li><a href="/company/history">연혁</a></li>
                                <li><a href="/company/location">오시는길</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-auto col-lg-auto">
                        <div className="widget">
                            <h4 className="widget-title text-white mb-3">사업분야</h4>
                            <ul className="list-unstyled mb-0">
                                <li><a href="/business-area/new-construction">신축</a></li>
                                <li><a href="/business-area/extension-reconstruction">증 · 개축</a></li>
                                <li><a href="/business-area/factory-remodeling">공장 리모델링</a></li>
                                <li><a href="/business-area/factory-waterproofing">공장방수</a></li>
                                <li><a href="/business-area/factory-maintenance">공장보수</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-auto col-lg-auto">
                        <div className="widget">
                            <h4 className="widget-title text-white mb-3">홍보센터</h4>
                            <ul className="list-unstyled mb-0">
                                <li><a href="/promotion-center/portfolio">포트폴리오</a></li>
                                <li><a href="/promotion-center/videos">영상</a></li>
                                <li><a href="/promotion-center/News">소식지</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-auto col-lg-auto">
                        <div className="widget">
                            <h4 className="widget-title text-white mb-3"><a href="/certification" className="text-white">인증현황</a></h4>
                        </div>
                    </div>
                    <div className="col-md-auto col-lg-auto">
                        <div className="widget">
                            <h4 className="widget-title text-white mb-3"><a href="/esg" className="text-white">지속가능경영</a></h4>
                        </div>
                    </div>
                    <div className="col-md-auto col-lg-auto">
                        <div className="widget">
                            <h4 className="widget-title text-white mb-3"><a href="/inquiry" className="text-white">문의하기</a></h4>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
