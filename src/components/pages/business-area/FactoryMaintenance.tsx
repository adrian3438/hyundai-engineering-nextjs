import NavBar from "../../hyundai/NavBar";
import Image from "next/image";
import React from "react";

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
                <div className="row text-keep-all">
                    <div className="col-md-10 m-auto">
                        <div className="border rounded px-10 py-10 position-relative fs-20">
                            <span className="clip-background">공장보수</span>
                            <p><strong>공장보수</strong>의 경우에는 리모델링보다는 조금 더 <strong>세부적인 공간을 관리하는 개념</strong>으로써 전반적인 공장을 목표로 하는것이 아닌 <strong>필요한 공간들을 위주로 중점적으로 관리</strong>하는 것을 말합니다.</p>
                            <p>단순히 공장 건물만을 보수하는 것이 아닌 공장전체를 아우르는 담장(붉은벽돌담벼락)과 주차장 바닥, 공장건물의 외벽 및 천정 노후부분들, 그리고 세부적으로는 사무실, 화장실, 휴개실의 샷시, 판넬, 그리고 문틀과도 같은 <strong>세세한 것까지 관리</strong>합니다.</p>
                            <p>특히, 공장보수는 <strong>전문가의 지식과 경험이 필수적인 작업</strong>이기 때문에 저희 <strong>(주)현대엔지니어링</strong>은 30년 경험의 전문가가 직접 현장을 관리, 감독하여 <strong>최상의 결과물</strong>을 보여드릴 것을 약속합니다.</p>
                            <p className="mb-0">#외벽, 천정 노후 #샷시, 판넬 #문짝, 문틀 #담장, 바닥, 붉은벽돌</p>
                        </div>
                    </div>
                </div>

                <div className="row mt-10">
                    <div className="col-md-10 m-auto">
                        <div className="row justify-content-between align-items-center text-keep-all">
                            <div className="col-md-12 m-auto">
                                <div className="row my-20 align-items-center flex-row-reverse justify-content-between">
                                    <div className="col-md-5">
                                        <Image src="/img/hyundai/business-area/factoryRepair-1.png" alt="지속 가능 경영의 중요성" width={375} height={375} className="w-100 h-auto"/>
                                    </div>
                                    <div className="col-md-6 bg-gray rounded-4 p-7">
                                        <p className="lead fs-lg">판넬의 일부분이 손상된 경우, 숙련된 작업자가 해당 부위를 신속하고 정확하게 보수하여 종전과 같은 상태로 복원할 수 있습니다.</p>
                                        <p className="lead fs-lg mb-0">이러한 수리는 <strong>손상의 종류와 정도</strong>에 따라 적절한 재료와 방법을 사용하여 진행됩니다.</p>
                                    </div>
                                </div>

                                <div className="row my-20 align-items-center justify-content-between">
                                <div className="col-md-5">
                                        <Image src="/img/hyundai/business-area/factoryRepair-2.png" alt="지속 가능 경영의 중요성" width={375} height={375} className="w-100 h-auto"/>
                                    </div>
                                    <div className="col-md-6 bg-gray rounded-4 p-7">
                                        <p className="lead fs-lg">예를 들어, 패널 표면의 페인트가 탈락되어 미관을 해치는 경우, 친환경 페인트를 활용하여 다시 도장함으로써 외관을 개선하고 환경에도 이로운 영향을 미칠 수 있습니다.</p>
                                        <p className="lead fs-lg mb-0">이러한 보수 작업은 건축물의 <strong>미적 요소</strong>뿐만 아니라 <strong>내구성 향상</strong>에도 중요한 역할을 합니다.</p>
                                    </div>
                                </div>

                                <div className="row mb-20 align-items-center flex-row-reverse justify-content-between">
                                <div className="col-md-5">
                                        <Image src="/img/hyundai/business-area/factoryRepair-3.png" alt="지속 가능 경영의 중요성" width={375} height={375} className="w-100 h-auto"/>
                                    </div>
                                    <div className="col-md-6 bg-gray rounded-4 p-7">
                                        <p className="lead fs-lg">공장에서 사용되는 배관 시스템 또한 시간이 지남에 따라 마모나 손상이 발생할 수 있습니다. 이를 방치할 경우 큰 사고로 이어질 수 있기 때문에, <strong>주기적인 점검과 신속한 수리</strong>가 필수적입니다.</p>
                                        <p className="lead fs-lg"><strong>숙련된 작업자</strong>는 배관의 손상 부위를 찾아내고 <strong>필요한 수리 작업을 수행</strong>하여 정상적인 가동 상태로 복원합니다.</p>
                                        <p className="lead fs-lg mb-0">이러한 배관 수리는 공장의 <strong>생산 효율성</strong>뿐만 아니라 <strong>작업자의 안전</strong>에도 매우 중요합니다.</p>
                                    </div>
                                </div>

                                <div className="row mb-20 align-items-center justify-content-between">
                                    <div className="col-md-5">
                                    <Image src="/img/hyundai/business-area/factoryRepair-4.png" alt="지속 가능 경영의 중요성" width={375} height={375} className="w-100 h-auto"/>
                                    </div>
                                    <div className="col-md-6 bg-gray rounded-4 p-7">
                                        <p className="lead fs-lg">또한 <strong>철구조물</strong>은 다양한 외부 환경에 노출되어 부식이나 파손이 발생할 수 있습니다. 철구조물의 손상은 구조적 안전성에 큰 영향을 미치므로, 이를 <strong>빠르게 수리하는 것</strong>이 중요합니다.</p>
                                        <p className="lead fs-lg">손상된 철구조물은 전문적인 도구와 기술을 통해 복원되며, 특히 <strong>내구성과 부식 방지 기능</strong>을 강화하기 위한 코팅 작업이 자주 동반됩니다.</p>
                                        <p className="lead fs-lg mb-0">이를 통해 철구조물의 <strong>수명을 연장</strong>하고, <strong>안전성을 유지</strong>할 수 있습니다.</p>
                                    </div>
                                </div>

                                <div className="row align-items-center justify-content-between">
                                    <h2 className="mb-8 text-center">공장보수가 필요한 이유</h2>
                                    <div className="col-md-12 mb-10 bg-gray rounded-4 p-7">
                                        <p className="lead fs-lg">리모델링과 달리 전면적인 수정보다는 <strong>일부 영역에 한정하여 수리를 진행하는 방식</strong>은 시간과 비용 면에서 <strong>효율적</strong>입니다. 이러한 방식은 건물이나 시설의 전체적인 구조나 디자인을 유지하면서도, 손상되거나 <strong>성능이 저하된 특정 부분을 집중적으로 보완</strong>하는 데 중점을 둡니다. 예를 들어, 건물 외벽의 일부 패널이 손상된 경우, 해당 부위만을 보수하여 <strong>전반적인 외관과 기능을 유지</strong>할 수 있습니다. 이처럼 부분 수리는 필요한 부분에만 개입하기 때문에 <strong>자원을 절약하고 작업 시간을 단축</strong>할 수 있습니다.</p>
                                        <p className="lead fs-lg mb-0">또한, 부분적인 수리 작업은 전체적인 시설 운영에 미치는 영향을 최소화하는 장점도 있습니다. 공장의 배관이나 철구조물 같은 주요 설비는 완전히 교체하는 대신 <strong>손상된 부분만 수리함</strong>으로써, 공장의 <strong>생산 중단을 피하거나 최소화</strong>할 수 있습니다. 이러한 방식은 비즈니스 운영의 <strong>연속성을 유지</strong>하면서도 필수적인 수리 작업을 효과적으로 수행할 수 있게 해줍니다.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
