'use client'

import NavBar from "../../hyundai/NavBar";
import React, {useState} from "react";
import Image from "next/image";

const HistoryData = [
    {
        "yearMonth": "1996.02",
        "kr": ["현대엔지니어링 설립", "인천광역시 동구 송현동 129"],
        "imageUrl": "/img/hyundai/company/history/history-1.png"
    },
    {
        "yearMonth": "2002.03",
        "kr": ["남구 사무실 개설", "인천광역시 남동구 고잔동 38"],
        "imageUrl": "/img/hyundai/company/history/history-2012.jpg"
    },
    {
        "yearMonth": "2007.12",
        "kr": ["제조공장 지구단위 개발사무소 개설", "인천광역시 남동구 문학동 367"],
        "imageUrl": "/img/hyundai/company/history/history-3.png"
    },
    {
        "yearMonth": "2012.03",
        "kr": ["법인 설립 및 상호변경", "(주)현대엔지니어링 법인화", "인천광역시 연수구 송도미래로 30 스마트밸리 지식산업센터 D동 1610호"],
        "imageUrl": "/img/hyundai/company/history/history-2002.jpg"
    },
    {
        "yearMonth": "2013.02",
        "kr": ["법인 자본금 증자", "4억원 -> 7억 2천만원"],
        "imageUrl": "/img/hyundai/company/history/history-5.png"
    },
    {
        "yearMonth": "2013.04",
        "kr": ["종합 건설 먼저 취득", "건축공사업 건축-04-649"],
        "imageUrl": "/img/hyundai/certification/certification03.png"
    },
    {
        "yearMonth": "2016.06",
        "kr": ["건설산업기본법 제 9조 제 4항에 의거 건설 주기적 신고"],
        "imageUrl": "/img/hyundai/company/history/history-7.png"
    },
]

export default function History() {
    const [historyIndex, setHistoryIndex] = useState<number>(0)

    return (
        <>
            <section
                className="wrapper image-wrapper bg-image bg-overlay text-white"
                style={{backgroundImage: "url(/img/hyundai/company/companyHistory.jpg)"}}>
                <div className="container min-vh-60 d-flex align-items-center">
                    <div className="row w-100">
                    <div className="mx-auto">
                            <p className="lead fs-lg text-yellow">
                                연혁
                            </p>
                        </div>
                        <div className="col-md-12">
                            <h1 className="display-2 text-white mb-3">미래를 건설하는 일, 그 중심에 (주)현대엔지니어링이 있습니다.</h1>
                            <p className="lead fs-lg">
                                고객의 꿈을 현실로 만들어가는 우리의 건설 실적, 그 자체가 신뢰의 증거입니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <NavBar depthId="menu1" activeId={2}/>

            <div className="container py-17">
                <div className="row">
                    <h1 className="text-center mb-15"><span className="text-primary">(주) 현대엔지니어링의</span> 성장과정</h1>
                    <div className="col-md-8 mx-auto">
                        <div className="row border rounded px-10 pt-13 pb-10 justify-content-between position-relative align-items-center">
                            <span className="clip-background">연혁</span>
                            <div className="col-md-3">
                                <ul className="p-0 m-0" style={{listStyle: "none"}}>
                                    {HistoryData.map((item, index) => (
                                        <li key={index} className={`mb-5 fw-bold ${index === historyIndex ? 'fs-31' : 'fs-25 text-ash'}`}
                                            onClick={() => setHistoryIndex(index)}
                                        >
                                            <a style={{cursor: "pointer"}} className="hover">{index === historyIndex ? <i className="uil uil-angle-double-right"></i> : ''}{item.yearMonth}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-md-8">
                                {HistoryData.map((item, index) => (
                                    <section key={index}
                                             style={{
                                                 backgroundImage: `url(${item.imageUrl})`,
                                                 backgroundRepeat: 'no-repeat',
                                                 backgroundSize: `100% auto`,
                                                 backgroundPosition: `${index === 5 || index === 1 ? 'center 0' : `${index === 3 ? 'center -115px' : 'center center'}`}`,
                                                 maxWidth: "574px",
                                                 minHeight: "438px"
                                             }}
                                             className={`position-relative rounded overflow-hidden ${index === historyIndex ? 'd-block' : 'd-none'}`}
                                    >
                                        <ul className="position-absolute bottom-0 start-0 m-0 w-100 py-3"
                                            style={{background: "linear-gradient(360deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.05) 100%)"}}
                                        >
                                            {item.kr.map((item, index) => (
                                                <li key={index} className="text-white fs-20">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </section>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
