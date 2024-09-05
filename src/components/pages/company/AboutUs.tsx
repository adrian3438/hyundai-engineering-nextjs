'use client'
import NavBar from "../../hyundai/NavBar";
import {Tiles5} from "../../elements/tiles";
import ListColumn from "../../reuseable/ListColumn";
import {aboutList2} from "../../../data/about";
import CountUp from "react-countup";
import {factList7} from "../../../data/facts";

export default function AboutUs() {
    const images = ["about2", "about3"];
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

            <NavBar depth1Id={0} depth2Id={1}/>

            <div className="container py-17">
                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative order-lg-2">
                        <div className="shape bg-dot primary rellax w-16 h-20" style={{top: "3rem", left: "5.5rem"}}/>

                        <div className="overlap-grid overlap-grid-2">
                            <div className="item">
                                <figure className="rounded shadow">
                                    <img src={`/img/hyundai/company/ceo-greeting-middle-banner-2.png`} alt=""/>
                                </figure>
                            </div>
                            <div className="item" style={{marginTop: "-16.5%"}}>
                                <figure className="rounded shadow">
                                    <img src={`/img/hyundai/company/ceo-greeting-middle-banner-1.png`} alt=""/>
                                </figure>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <p className="display-6">공간을 대하는 (주)현대엔지니어링의 철학</p>
                        <h2 className="display-4 mb-10">New Thinking, New Possibilities</h2>
                        <p className="mb-6">
                            저희 (주)현대엔지니어링은 종합 건설사로서, 공장신축, 리모델링, 증축 및 개축, 공장보수, 공장방수 등의 다양한 건축 산업 분야에서 전문 기술력을 제공합니다.
                            <br/>
                            당사는 30년 넘게 수많은 공장신축과 공장리모델링 프로젝트를 바탕으로 폭넓은 경험과 전문 기술력을 활용하여 고객의 만족을 충족시키기 위해 노력하고 있습니다.
                        </p>
                        <p>
                            우리는 고객의 신뢰와 만족을 최우선으로 생각하며, 각 프로젝트마다 최상의 품질과 최고의 서비스로 보답하고자 합니다. 종합 건설사로서, 고객과 협력하여 모든 요구 사항을 충족하고, 함께 성장하는 파트너가 되기 위해 최선을 다하고 있습니다.</p>
                    </div>
                </div>

                <div className="row text-center mb-15">
                    <div className="col-lg-12 col-xl-12 col-xxl-12 mx-auto">
                        <h2 className="fs-16 text-uppercase text-muted mb-3">Trust, Safety, Know-how </h2>
                        <h3 className="display-3 px-lg-12 px-xxl-14 mb-10">
                            (주)현대엔지니어링은 성실함과 정직함으로 고객의 행복을 함께 지어갑니다
                        </h3>
                        <p>1997년부터 다져온 현대엔지니어링의 기술력과 노하우를 바탕으로 고객 여러분이 보다 안전하고 안락한 공간을 누릴 수 있도록 끊임없는 노력과 최선을 다해 시공하도록 하겠습니다.</p>
                        <p className="fw-bold">HYUNDAE ENGINEERING CO., LTD.</p>
                    </div>
                </div>

                <div className="row mb-6">
                    <div className="col-md-10 col-lg-9 col-xl-7 mx-auto">
                        <div className="row align-items-center counter-wrapper gy-4 gy-md-0">
                            <div className="col-md-4 text-center">
                                <h3 className="counter counter-lg text-primary">
                                    <CountUp end={30} suffix="+"/>
                                </h3>
                                <p>사업년수</p>
                            </div>
                            <div className="col-md-4 text-center">
                                <h3 className="counter counter-lg text-primary">
                                    <CountUp end={500} suffix="+"/>
                                </h3>
                                <p>공사건수</p>
                            </div>
                            <div className="col-md-4 text-center">
                                <h3 className="counter counter-lg text-primary">
                                    <CountUp end={200} suffix="+"/>
                                </h3>
                                <p>보유고객</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
