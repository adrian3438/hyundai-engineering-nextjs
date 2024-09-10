import NavBar from "../../hyundai/NavBar";

export default function FactoryRemodeling() {
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

            <NavBar depthId={"menu2"} activeId={2}/>

            <div className="container py-17">
                <div className="row">
                    <div className="col-md-10 m-auto">
                        <div className="mb-15">
                            <h1><span className="text-primary">공장 리모델링</span></h1>
                        </div>
                        <div className="border rounded px-10 py-10 position-relative">
                            <span className="clip-background">공장 리모델링</span>
                            <p>공장 리모델링은 신축으로 발생하는 많은 건설 비용, 시간 공백 여러 기업의 위험부담을 최소화하면서 건축물의 가치를 유지 및 향상 하기에 적합한 작업방식입니다. 건축물의 노후화로 인해 발생하는 하자 뿐만 아니라 외.내부 공간을 새롭게 단장이 가능합니다. 또한, 기존 건축물의 낙후 부분을 제거하고 미래 가치를 (*약속할수있는) 이 향상시킬 수 있는 효과적인 방법입니다.</p>
                            <p className="mb-0">이러한 과정 속, 공장내.외부에 필요한 설비 등을 보충할 수 있도록 공간을 확장하거나 재설립함으로써 기존 공간의 활용도를 높일 수 있는 방법이 됩니다.</p>
                        </div>
                    </div>
                </div>

                <h2 className="text-primary text-center my-15">건축법시행령</h2>

                <div className="row">
                    <div className="col-md-10 m-auto">
                        내용이 들어갑니다.
                    </div>
                </div>
            </div>
        </>
    );
}
