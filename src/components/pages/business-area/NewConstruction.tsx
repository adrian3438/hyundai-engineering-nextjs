import NavBar from "../../hyundai/NavBar";

export default function NewConstruction() {
    return (
        <>
            <section
                className="wrapper image-wrapper bg-image bg-overlay text-white"
                style={{backgroundImage: "url(/img/hyundai/company/ceo-greeting-banner.jpg)"}}>
                <div className="container min-vh-60 d-flex align-items-center">
                    <div className="row w-100">
                        <div className="mx-auto">
                            <p className="lead fs-lg text-yellow">
                                사업분야
                            </p>
                            <h1 className="display-1 text-white mb-3">최고의 품질과 서비스를 약속합니다.</h1>
                        </div>
                    </div>
                </div>
            </section>

            <NavBar depthId={"menu2"} activeId={0}/>

            <div className="container py-17">
                <div className="row">
                    <div className="col-md-10 m-auto">
                        <div className="mb-15">
                            <h1><span className="text-primary">신축</span> 사업</h1>
                        </div>
                        <div className="border rounded px-10 py-10 position-relative">
                            <span className="clip-background">신축</span>
                            <p>신축이란, 토지의 형태에 맞게 소유주가 요구하는 건축 방식으로 <strong>주거, 상업, 제조</strong> 등의 여러 형태가 가능한 건축물을 건설하는 방식입니다.</p>
                            <p>그 중에서 공장 <strong>신축은 기업 혹은 토지 소유자가 상업적인 이익과 목적을 위해 다양한 형태로 진행하는 신축 또는 재건축을 의미합니다.</strong> 특히, 공장 신축은 공간의 활용도를 최대로 높혀, 건물 차제의 효율성을 극한으로 끌어낼 수 있다는 장점이 있습니다.</p>
                            <p className="mb-0">공장과 관련한 신축의 형태는 창고, 천막가설건축물, 기숙사, 저온저장고, 휴개실 등의 항목으로 구분할 수 있습니다.</p>
                        </div>
                    </div>
                </div>

                <h2 className="text-primary text-center my-15">건축법시행령</h2>

                <div className="row">
                    <div className="col-md-10 m-auto">
                        <hr className="mt-0"/>
                        <div className="row justify-content-between align-items-center">
                            <div className="col-md-5">
                                <p><span className="text-primary fw-bold">제2조(정의)</span><br/><span className="fs-11">①</span>이 영에서 사용하는 용어의 정의는 다음과 같다.&lt;개정 1988ㆍ2ㆍ24&gt;</p>
                                <p>1. "신축"이라 함은 건축물이 없는 (기존건축물이 철거 또는 괴멸된 경우를 포함한다) <strong className="text-navy">대지에 새로이 건축물을 축조하는 것</strong>(부속건축물만 있는 대지에 새로이 주된 건축물을 축조하는 것을 포함하되, 개축 또는 재축의 경우를 제외한다)을 말한다.</p>
                                <p className="fw-bold"><a href="https://www.law.go.kr/LSW/lsLinkProc.do?lsClsCd=L&lsNm=%EA%B1%B4%EC%B6%95%EB%B2%95%EC%8B%9C%ED%96%89%EB%A0%B9&lsId=prec19881108&joNo=000200&efYd=19881108&mode=11&lnkJoNo=undefined" target="_blank" className="text-navy"><i className="uil uil-external-link-alt fs-20"></i> 법령 바로가기</a></p>
                            </div>
                            <div className="col-md-6 text-center">
                                <img src="/img/hyundai/business-area/newBuilding-2.png" alt="신축"/>
                                <p className="mb-0 fs-20 fw-bold text-navy">새로 축조된 건물</p>
                            </div>
                        </div>
                        <hr/>
                        <div className="row justify-content-between align-items-center">
                            <div className="col-md-6 text-center">
                                <img src="/img/hyundai/business-area/newBuilding-4.png" alt="신축"/>
                                <p className="mb-0 fs-20 fw-bold text-navy">새로운 건축물 축조</p>
                            </div>
                            <div className="col-md-5">
                            <p><span className="text-primary fw-bold">제2조(정의)</span><br/><span className="fs-11">①</span>이 영에서 사용하는 용어의 정의는 다음과 같다.&lt;개정 1988ㆍ2ㆍ24&gt;
                                </p>
                                <p>1. "신축"이라 함은 건축물이 없는 (기존건축물이 철거 또는 괴멸된 경우를 포함한다) 대지에 새로이 건축물을 축조하는 것(<strong className="text-navy">부속건축물만 있는 대지에 새로이 주된 건축물을 축조하는 것을 포함</strong>하되, 개축 또는 재축의 경우를 제외한다)을 말한다.</p>
                                <p className="fw-bold mb-0"><a href="https://www.law.go.kr/LSW/lsLinkProc.do?lsClsCd=L&lsNm=%EA%B1%B4%EC%B6%95%EB%B2%95%EC%8B%9C%ED%96%89%EB%A0%B9&lsId=prec19881108&joNo=000200&efYd=19881108&mode=11&lnkJoNo=undefined" target="_blank" className="text-navy"><i className="uil uil-external-link-alt fs-20"></i> 법령 바로가기</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
