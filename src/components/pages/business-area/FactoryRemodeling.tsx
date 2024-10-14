import NavBar from "../../hyundai/NavBar";
import Image from "next/image";
import React from "react";

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
                <div className="row text-keep-all">
                    <div className="col-md-10 m-auto">
                        <div className="border rounded px-10 py-10 position-relative fs-20">
                            <span className="clip-background">공장 리모델링</span>
                            <p>공장 리모델링은 신축으로 발생하는 대규모 건설 비용 부담, 시간적, 공간적 공백의 <strong>위험부담을 최소화하면서 건축물의 가치를 유지 및 향상</strong> 시키기에 최적의 작업 방식입니다. 건축물의 노후화로 인해 발생하는 하자 뿐만 아니라 외.내부 공간을 새롭게 단장이 가능합니다. 또한, 기존 건축물의 <strong>낙후 부분을 제거</strong>하고 <strong>미래 가치를 향상시킬수 있는 효과적인 방법</strong>입니다.</p>
                            <p className="mb-0">이러한 과정 속, 공장내.외부에 필요한 설비 등을 보충할 수 있도록 공간을 확장하거나 재설립함으로써 <strong>기존 공간의 활용도</strong>를 높일 수 있는 방법이 됩니다.</p>
                        </div>
                    </div>
                </div>

                <div className="row text-keep-all mt-15">
                    <div className="col-md-10 m-auto">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-md-12 mb-10">
                                <h2 className="mb-8 text-center">공장 리모델링이 필요한 이유</h2>
                                <div className="bg-gray rounded-4 p-7">
                                    <p className="lead fs-lg"><strong>공장 리모델링</strong>은 일반적인 보수 작업으로는 해결하기 어려운 문제를 해결하기 위한 <strong>필수적인 과정</strong>입니다. 특히, 오래된 공장은 구조적 안정성과 기능성 면에서 리모델링을 통해 그 수명을 연장하고, 더 나은 작업 환경을 제공할 수 있습니다.</p>
                                    <p className="lead fs-lg mb-0">최신 기술과 자재를 활용한 리모델링은 <strong>공장의 안전성을 높이</strong>는 동시에, 외관 개선과 <strong>에너지 효율성을 향상</strong>시켜 전반적인 운영 비용을 절감할 수 있는 <strong>효과적인 방법</strong>입니다.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-between">
                            <div className="col-md-3 text-center">
                                <p className="lead fs-lg fw-bold">철저한 계획</p>
                                <Image src="/img/hyundai/business-area/factoryRemodeling-4.png" alt="철저한 계획" width={375} height={375} className="w-100 h-auto"/>
                            </div>
                            <div className="col-md-1">
                                <i className="uil uil-arrow-right fs-60 fw-bold"></i>
                            </div>
                            <div className="col-md-3 text-center">
                                <p className="lead fs-lg fw-bold">맞춤 시공, 비용 절약</p>
                                <Image src="/img/hyundai/business-area/factoryRemodeling-5.png" alt="맞춤 시공, 비용 절약" width={375} height={375} className="w-100 h-auto"/>
                            </div>
                            <div className="col-md-1">
                                <i className="uil uil-arrow-right fs-60 fw-bold"></i>
                            </div>
                            <div className="col-md-3 text-center">
                                <p className="lead fs-lg fw-bold">새로워진 공장환경</p>
                                <Image src="/img/hyundai/business-area/factoryRemodeling-6.png" alt="새로워진 공장환경" width={375} height={375} className="w-100 h-auto"/>
                            </div>
                        </div>

                        <hr/>

                        <div className="row my-15 align-items-center flex-row-reverse justify-content-between">
                            <div className="col-md-5">
                                <Image src="/img/hyundai/business-area/factoryRemodeling-1.png" alt="지속 가능 경영의 중요성" width={375} height={375} className="w-100 h-auto"/>
                            </div>
                            <div className="col-md-6 bg-gray rounded-4 p-7">
                                <p className="lead fs-lg"><strong>조립식 판넬 건물</strong>은 경량성과 시공의 용이성 덕분에 많은 산업 현장에서 활용되고 있지만, 시간이 지나면서 내구성이 약해지거나 손상이 발생할 수 있습니다. 특히, 오래된 조립식 판넬은 외부 환경 요인에 의해 부식되거나 손상이 심해져, 간단한 보수 작업만으로는 문제를 해결하기 어려운 경우가 많습니다.</p>
                                <p className="lead fs-lg mb-0">이러한 상황에서는 손상된 부위를 단순히 보수하는 것이 아니라, <strong>해당 부분을 잘라내거나 벽체 전체를 교체</strong>하는 방식으로 문제를 해결해야 합니다. 이는 건물의 <strong>구조적 안전성을 확보</strong>하고, 장기적인 유지보수를 줄일 수 있는 중요한 방법입니다.</p>
                            </div>
                        </div>

                        <hr/>

                        <div className="row mb-15 align-items-center justify-content-between">
                            <div className="col-md-5">
                                <Image src="/img/hyundai/business-area/factoryRemodeling-2.png" alt="지속 가능 경영의 중요성" width={375} height={375} className="w-100 h-auto"/>
                            </div>
                            <div className="col-md-6 bg-gray rounded-4 p-7">
                                <p className="lead fs-lg">또한, 공장의 출입문이나 창문 등 <strong>주요 시설의 리모델링</strong>을 통해 외관 개선뿐만 아니라 <strong>기능성도 향상</strong>시킬 수 있습니다. 낡고 기능이 떨어진 출입문이나 창문을 새로운 자재로 교체하면, <strong>에너지 효율성</strong>을 높이는 것은 물론 공장의 <strong>보안성과 작업 환경의 쾌적함</strong>도 크게 향상됩니다.</p>
                                <p className="lead fs-lg mb-0">이러한 리모델링은 단순한 미관 개선 이상의 효과를 제공하며, 공장의 전체적인 가치를 높여주기도 합니다. 현대적인 디자인과 기능이 결합된 리모델링을 통해, 공장의 외관은 더욱 <strong>세련되고 현대적인 느낌</strong>을 줄 수 있습니다.</p>
                            </div>
                        </div>

                        <hr/>

                        <div className="row mb-15 align-items-center flex-row-reverse justify-content-between">
                            <div className="col-md-5">
                                <Image src="/img/hyundai/business-area/factoryRemodeling-3.png" alt="지속 가능 경영의 중요성" width={375} height={375} className="w-100 h-auto"/>
                            </div>
                            <div className="col-md-6 bg-gray rounded-4 p-7">
                                <p className="lead fs-lg">특히, 공장 상부를 지탱하는 하부 벽체에서 문제가 발생할 경우, 이 부분의 손상을 제때 해결하지 않으면 공장의 전체 구조에 영향을 줄 수 있습니다. <strong>하부 벽체</strong>는 공장 상부의 <strong>하중을 견디는 중요한 구조적 요소</strong>이므로, 균열이나 자재 탈락이 발생하면 즉시 보수 또는 리모델링이 필요합니다.</p>
                                <p className="lead fs-lg mb-0">이러한 문제를 방치하면 건물의 전체적인 안정성에 심각한 영향을 미칠 수 있으며, 최악의 경우 건물의 붕괴 위험까지 초래할 수 있습니다. 따라서, 하부 벽체의 손상은 반드시 정밀하게 진단하고 적절한 <strong>리모델링을 통해 공장의 수명을 연장</strong>해야 합니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
