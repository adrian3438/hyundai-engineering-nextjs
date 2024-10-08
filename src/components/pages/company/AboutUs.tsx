'use client'
import NavBar from "../../hyundai/NavBar";
import CountUp from "react-countup";

export default function AboutUs() {
    return (
        <>
            <section
                className="wrapper image-wrapper bg-image bg-overlay text-white"
                style={{backgroundImage: "url(/img/hyundai/company/ceo-greeting-banner.jpg)"}}>
                <div className="container min-vh-60 d-flex align-items-center">
                    <div className="row w-100">
                        <div className="col-md-12">
                            <h1 className="display-2 text-white mb-3">미래를 건설하는 일, 그 중심에 (주)현대엔지니어링이 있습니다.</h1>
                            <p className="lead fs-lg">
                                고객의 꿈을 현실로 만들어가는 우리의 건설 실적, 그 자체가 신뢰의 증거입니다.
                            </p>
                        </div>
                        <div className="col-md-9">
                            <p className="display-2 mb-0 text-end">1997년 창립</p>
                        </div>
                    </div>
                </div>
            </section>

            <NavBar depthId="menu1" activeId={1}/>

            <div className="container py-17">
                <div className="row mb-13">
                    <h1 className="text-center display-4">고객을 대하는 <span className="text-primary">(주)현대엔지니어링의 철학</span><br/>여러분에게 약속합니다.</h1>
                </div>

                {/*<div className="row position-relative mb-15">
                    <div className="col-md-10 mx-auto position-relative">
                        <span className="clip-background">소개</span>
                        <img src="/img/hyundai/company/about-us-middle-banner.png" alt="New Thinking, New Possibilities" className="w-100"/>
                    </div>
                </div>*/}

                <div className="row text-center mb-10">
                    <div className="col-lg-12 col-xl-12 col-xxl-12 mx-auto">
                        <h2 className="fs-16 text-uppercase text-muted mb-3">Trust, Safety, Know-how </h2>
                        <h3 className="display-3 px-lg-12 px-xxl-14 mb-10">
                            New Thinking, New Possibilities
                        </h3>
                        <p className="fs-23">1997년부터 다져온 현대엔지니어링의 기술력과 노하우를 바탕으로<br/> 고객 여러분이 보다 안전하고 안락한 공간을 누릴 수 있도록<br/> 끊임없는 노력과 최선을 다해 시공하도록 하겠습니다.</p>
                    </div>
                </div>

                <div className="row mb-6">
                    <div className="col-md-10 col-lg-9 col-xl-7 mx-auto">
                        <div className="row align-items-center counter-wrapper gy-4 gy-md-0">
                            <div className="col-md-4 text-center">
                                <h3 className="counter counter-lg text-primary">
                                    <CountUp end={30} suffix="+"/>
                                </h3>
                                <p className="fs-25">사업년수</p>
                            </div>
                            <div className="col-md-4 text-center">
                                <h3 className="counter counter-lg text-primary">
                                    <CountUp end={500} suffix="+"/>
                                </h3>
                                <p className="fs-25">공사건수</p>
                            </div>
                            <div className="col-md-4 text-center">
                                <h3 className="counter counter-lg text-primary">
                                    <CountUp end={200} suffix="+"/>
                                </h3>
                                <p className="fs-25">보유고객</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
