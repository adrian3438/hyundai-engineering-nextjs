import NavBar from "../../hyundai/NavBar";

export default function FactoryMaintenance() {
    return (
        <>
            <section
                className="wrapper image-wrapper bg-image bg-overlay text-white"
                style={{backgroundImage: "url(/img/hyundai/main-banner.jpg)"}}>
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

            <NavBar depthId={"menu2"} activeId={4}/>

            <div className="container py-17">
                <div className="row">
                    <div className="col-md-10 m-auto">
                        <div className="mb-15">
                            <h1><span className="text-primary">공장보수</span></h1>
                        </div>
                        <div className="border rounded px-10 py-10 position-relative">
                            <span className="clip-background">공장보수</span>
                            <p>공장보수의 경우에는 리모델링보다는 조금 더 세부적인 공간을 관리하는 개념으로써 전반적인 공장을 목표로 하는것이 아닌 필요한 공간들을 위주로 중점적으로 관리하는 것을 말합니다.</p>
                            <p>단순히 공장 건물만을 보수하는 것이 아닌 공장전체를 아우르는 담장(붉은벽돌담벼락)과 주차장 바닥, 공장건물의 외벽 및 천정 노후부분들, 그리고 세부적으로는 사무실, 화장실, 휴개실의 샷시, 판넬, 그리고 문틀과도 같은 세세한 것까지 관리합니다.</p>
                            <p>특히, 공장보수는 전문가의 지식과 경험이 필수적인 작업이기 때문에 저희 (주)현대엔지니어링은 30년 경험의 전문가가 직접 현장을 관리, 감독하여 최상의 결과물을 보여드릴 것을 약속합니다.</p>
                            <p className="mb-0">#외벽, 천정 노후 #샷시, 판넬 #문짝, 문틀 #담장, 바닥, 붉은벽돌</p>
                        </div>
                    </div>
                </div>

                <div className="row mt-10">
                    <div className="col-md-10 m-auto">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-md-6 text-center">
                                <img src="/img/hyundai/business-area/maintenance-1.png" alt="신축"/>
                            </div>
                            <div className="col-md-5">
                                <p className="mb-0">내용이 들어갑니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
