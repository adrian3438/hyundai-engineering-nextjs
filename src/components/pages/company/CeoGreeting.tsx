import NavBar from "../../hyundai/NavBar";
import Image from "next/image";

export default function CeoGreeting() {
    return (
        <>
            <section
                className="wrapper image-wrapper bg-image bg-overlay text-white"
                style={{backgroundImage: "url(/img/hyundai/company/ceoGreerings-banner.png)"}}>
                <div className="container min-vh-60 d-flex align-items-center">
                    <div className="row w-100">
                        <div className="col-md-12">
                        <div className="mx-auto">
                            <p className="lead fs-lg text-yellow">
                                CEO 인사말
                            </p>
                        </div>
                            <h1 className="display-2 text-white mb-3">신뢰와 정직으로 고객에게 보답합니다</h1>
                        </div>
                    </div>
                </div>
            </section>

            <NavBar depthId="menu1" activeId={0}/>

            <div className="container py-17">
                <div className="row">
                    <div className="col-md-10 m-auto text-keep-all">
                        <div className="mb-15">
                            <h1><span className="text-primary">(주) 현대엔지니어링 홈페이지</span>에 방문해주신 여러분을 진심으로 환영합니다.</h1>

                        </div>
                        <div className="border rounded px-10 py-15 position-relative fs-19">
                            <span className="clip-background">CEO 인사말</span>
                            <p>안녕하십니까,</p>
                            <p>(주) 현대엔지니어링 홈페이지에 방문해주신 여러분을 진심으로 환영합니다.</p>
                            <p><strong>(주) 현대엔지니어링은 고객의 신뢰를 바탕으로 최고의 품질과 완벽한 시공을 최우선으로 목표로 삼고 있습니다.</strong> 저희 회사는 1997년 창립 이래 전국 공업단지 및 상업단지에서 수많은 공장신축과 리모델링 공사를 진행해 왔습니다. 당사는 수십년간 현장에서 활동해 온 전문가들이 하나의 팀으로 활동하며, 다양한 프로젝트에서 쌓아온 풍부한 경험과 노하우를 바탕으로, 고객에게 최고의 가치를 제공하기 위해 끊임없이 노력하고 있습니다.</p>
                            <p>또한, 저희 (주) 현대엔지니어링의 모든 임직원들은 각자의 자리에서 전문성과 열정을 바탕으로 최선을 다하고 있습니다. 우리는 고객의 요구와 기대를 정확히 이해하고, 이를 초과 달성하기 위해 항상 귀를 기울이고 소통하며, 신속하고 정확한 서비스를 제공합니다. 고객과의 신뢰는 당사의 가장 중요한 자산이며, 이를 기반으로 더욱 성장해 나가고 있습니다.</p>
                            <p>저희 (주) 현대엔지니어링은 건축물의 구조적 안정성과 디자인뿐만 아니라, 환경 친화적인 요소를 중요하게 생각합니다. 이를 위해 최신 기술과 재료를 도입하고, 친환경적인 시공 방식을 적극적으로 채택하고 있습니다. 또한, 에너지 효율성을 높이는 설계와 시공을 통해 미래 세대에게도 책임을 다하는 지속 가능한 건축문화를 만들어가고자 합니다.</p>
                            <p>끝으로, 저희 회사의 성장을 함께 이끌어주신 고객 여러분과 파트너 여러분께 깊은 감사의 인사를 전합니다. 앞으로도 변함없는 신뢰와 성원 부탁드리며, 당사는 여러분의 기대에 부응하는 최고의 종합건설사가 될 것을 약속드립니다.</p>
                            <p className="text-end mt-15"><Image src="/img/hyundai/logo.png" alt="현대 엔지니어링" width={200} height={38} className="h-auto" /> <Image src="/img/hyundai/company/sign.png" alt="이우용" width={300} height={60} className="h-auto"/></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
