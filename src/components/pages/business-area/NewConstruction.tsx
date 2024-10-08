'use client'

import NavBar from "../../hyundai/NavBar";
import Lottie from "react-lottie-player";
import lottieJson1 from "../../../../public/media/#1.json"
import lottieJson2 from "../../../../public/media/#2.json"
import lottieJson3 from "../../../../public/media/#3.json"
import lottieJson4 from "../../../../public/media/#4.json"
import {useEffect} from "react";

export default function NewConstruction() {
    useEffect(() => {
        const lottie01 = document.querySelector('.lottie01');
        const lottie02 = document.querySelector('.lottie02');
        const convertText01 = document.querySelector('.convert-text01');

        const lottie03 = document.querySelector('.lottie03');
        const lottie04 = document.querySelector('.lottie04');
        const convertText02 = document.querySelector('.convert-text02');

        const intervalId = setInterval(() => {
            if (lottie01 && lottie02 && lottie03 && lottie04) {
                if (lottie01.classList.contains('d-none')) {
                    lottie01.classList.remove("d-none");
                    lottie02.classList.add("d-none");
                    if(convertText01) {
                        convertText01.innerHTML = '건물이 없는 대지'
                    }
                } else {
                    lottie01.classList.add("d-none");
                    lottie02.classList.remove("d-none");
                    if(convertText01) {
                        convertText01.innerHTML = '새로 축조된 건물'
                    }
                }

                if (lottie03.classList.contains('d-none')) {
                    lottie03.classList.remove("d-none");
                    lottie04.classList.add("d-none");
                    if(convertText02) {
                        convertText02.innerHTML = `부속건물이 있는 대지<br/><span class="fs-18 fw-normal position-absolute top-100 start-0 w-100 text-center">A: 부속건물,  B: 건축예정 대지</span>`;
                    }
                } else {
                    lottie03.classList.add("d-none");
                    lottie04.classList.remove("d-none");
                    if(convertText02) {
                        convertText02.innerHTML = '새로운 건축물 축조';
                    }
                }
            }
        }, 5000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

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

            <NavBar depthId={"menu2"} activeId={0}/>

            <div className="container py-17">
                <div className="row text-keep-all">
                    <div className="col-md-10 m-auto">
                        <div className="border rounded px-10 py-10 position-relative fs-20">
                            <span className="clip-background">신축</span>
                            <p>신축이란, 토지의 형태에 맞게 소유주가 요구하는 건축 방식으로 <strong>주거, 상업, 제조</strong> 등의 여러 형태가 가능한 건축물을 건설하는 방식입니다.</p>
                            <p>그 중에서 공장 <strong>신축은 기업 혹은 토지 소유자가 상업적인 이익과 목적을 위해 다양한 형태로 진행하는 신축 또는 재건축을 의미합니다.</strong> <br/>특히, 공장 신축은 공간의 활용도를 최대로 높혀, 건물 차제의 효율성을 극한으로 끌어낼 수 있다는 장점이 있습니다.</p>
                            <p className="mb-0">공장과 관련한 신축의 형태는 창고, 천막가설건축물, 기숙사, 저온저장고, 휴개실 등의 항목으로 구분할 수 있습니다.</p>
                        </div>
                    </div>
                </div>

                <h2 className="text-primary text-center my-15 display-3">건축법시행령</h2>

                <div className="row text-keep-all">
                    <div className="col-md-10 m-auto">
                        <hr className="mt-0"/>
                        <div className="row justify-content-between align-items-center fs-20" style={{marginTop:'-80px'}}>
                            <div className="col-md-5 bg-gray rounded-4 p-7">
                                <p><span className="text-primary fw-bold fs-21">제2조(정의)</span><br/><span className="fs-15">①</span>이 영에서 사용하는 용어의 정의는 다음과 같다.<br/>&lt;개정 1988ㆍ2ㆍ24&gt;</p>
                                <p>1. "신축"이라 함은 건축물이 없는 (기존건축물이 철거 또는 괴멸된 경우를 포함한다) <strong className="text-navy">대지에 새로이 건축물을 축조하는 것</strong>(부속건축물만 있는 대지에 새로이 주된 건축물을 축조하는 것을 포함하되, 개축 또는 재축의 경우를 제외한다)을 말한다.</p>
                                <p className="fw-bold mb-0"><a href="https://www.law.go.kr/LSW/lsLinkProc.do?lsClsCd=L&lsNm=%EA%B1%B4%EC%B6%95%EB%B2%95%EC%8B%9C%ED%96%89%EB%A0%B9&lsId=prec19881108&joNo=000200&efYd=19881108&mode=11&lnkJoNo=undefined" target="_blank" className="text-navy"><i className="uil uil-external-link-alt fs-20"></i> 법령 바로가기</a></p>
                            </div>
                            <div className="col-md-6 text-center">
                                <Lottie animationData={lottieJson2} play loop className="lottie01"/>
                                <Lottie animationData={lottieJson1} play loop className="lottie02 d-none"/>
                                <p className="mb-0 fs-20 fw-bold text-navy convert-text01" style={{marginTop: '-50px'}}>건물이 없는 대지</p>
                            </div>
                        </div>
                        <hr/>
                        <div className="row justify-content-between align-items-center fs-20" style={{marginTop:'-80px'}}>
                            <div className="col-md-6 text-center">
                                <Lottie animationData={lottieJson3} play loop className="lottie03"/>
                                <Lottie animationData={lottieJson4} play loop className="lottie04 d-none"/>
                                <p className="mb-0 fs-20 fw-bold text-navy convert-text02 position-relative" style={{marginTop: '-50px'}}>부속건물이 있는 대지<br/><span className="fs-18 fw-normal position-absolute top-100 start-0 w-100 text-center">A: 부속건물,  B: 건축예정 대지</span></p>
                            </div>
                            <div className="col-md-5 bg-gray rounded-4 p-7">
                                <p><span className="text-primary fw-bold fs-21">제2조(정의)</span><br/><span className="fs-15">①</span>이 영에서 사용하는 용어의 정의는 다음과 같다.<br/>&lt;개정 1988ㆍ2ㆍ24&gt;
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
