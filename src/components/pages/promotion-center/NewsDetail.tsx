export default function NewsDetail() {
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
            <div className="container my-10">
                <section className="row my-10 justify-content-center">
                    <div className="col-md-10">
                        <p className="fs-18 fw-600">소식지</p>
                        <h2 className="text-black fw-600">타이틀이 들어갑니다.</h2>
                        <p className="fs-16 fw-500">2024-08-09</p>
                        <hr className="mt-5 mb-8"/>
                        <article className="mb-8">
                            에디터 영역이 들어갑니다.
                            에디터 영역이 들어갑니다.
                            에디터 영역이 들어갑니다.
                            에디터 영역이 들어갑니다.
                            에디터 영역이 들어갑니다.
                            에디터 영역이 들어갑니다.
                            에디터 영역이 들어갑니다.
                            에디터 영역이 들어갑니다.
                            에디터 영역이 들어갑니다.
                            에디터 영역이 들어갑니다.
                            에디터 영역이 들어갑니다.
                            에디터 영역이 들어갑니다.
                            에디터 영역이 들어갑니다.
                            에디터 영역이 들어갑니다.
                            에디터 영역이 들어갑니다.
                            에디터 영역이 들어갑니다.
                            에디터 영역이 들어갑니다.
                            에디터 영역이 들어갑니다.
                            에디터 영역이 들어갑니다.
                            에디터 영역이 들어갑니다.
                            에디터 영역이 들어갑니다.
                            에디터 영역이 들어갑니다.
                            에디터 영역이 들어갑니다.
                            에디터 영역이 들어갑니다.
                        </article>
                        <div className="mt-4 border-bottom">
                            <div className="py-4 px-5 border-top">
                                <i className="uil uil-angle-up fs-22 me-4"></i>
                                <span className="text-black fw-bold me-4">이전글</span>
                                <a href="#" className="text-medium-gray fw-bold">이전글 타이틀 입니다.</a>
                            </div>
                            <div className="py-4 px-5 border-top">
                                <i className="uil uil-angle-down fs-22 me-4"></i>
                                <span className="text-black fw-bold me-4">다음글</span>
                                <a href="#" className="text-medium-gray fw-bold">다음글 타이틀 입니다.</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
