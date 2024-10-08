'use client';

import NavBar from "../../hyundai/NavBar";
import Lottie from "react-lottie-player";
import lottieJson5 from "../../../../public/media/#5.json"
import lottieJson6 from "../../../../public/media/#6.json"
import lottieJson7 from "../../../../public/media/#7.json"
import lottieJson8 from "../../../../public/media/#8.json"
import {useEffect} from "react";

export default function ExtensionReconstruction() {
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
                        convertText01.innerHTML = '기존 건물'
                    }
                } else {
                    lottie01.classList.add("d-none");
                    lottie02.classList.remove("d-none");
                    if(convertText01) {
                        convertText01.innerHTML = '건축면적ㆍ연면적, 높이 증가'
                    }
                }

                if (lottie03.classList.contains('d-none')) {
                    lottie03.classList.remove("d-none");
                    lottie04.classList.add("d-none");
                    if(convertText02) {
                        convertText02.innerHTML = `건물이 있는 대지<br/><span class="fs-18 fw-normal">A: 기존 건물,  B: 기존 건물</span>`;
                    }
                } else {
                    lottie03.classList.add("d-none");
                    lottie04.classList.remove("d-none");
                    if(convertText02) {
                        convertText02.innerHTML = `건축면적ㆍ연면적, 높이 증가<br/><span class="fs-18 fw-normal">A: 내력벽, 기둥, 보 제거,  B: 기존 건물: 전부 제거</span>`;
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

            <NavBar depthId={"menu2"} activeId={1}/>

            <div className="container py-17">
                <div className="row text-keep-all">
                    <div className="col-md-10 m-auto">
                        <div className="border rounded px-10 py-10 position-relative fs-20">
                            <span className="clip-background">증·개축</span>
                            <p>공장 증축 및 개축은 기존 건축물의 <strong>공간과 기능을 확장</strong>하여 그 활용도를 높여주고, <strong>저렴한 비용으로 다양한 용도</strong>로의 변형 사용이 가능한 고효율 공사 방식입니다. 특히, 이러한 프로젝트는 제한된 건축물의 공간 활용도를 극대화 시켜 기존의 공간을 이용한 사업증대가 가능합니다.</p>
                            <p>증축 및 개축은 철제 파이프, H빔 등을 활용하여 <strong>공장복층, 공장증축, 공장옥상증축, 공장2층증축, 사무실준2층, 가설건축물</strong> 등의 다양한 형태로의 시공이 가능합니다.</p>
                            <p className="mb-0">당사는 수많은 상업용, 산업용 건물들의 증축과 개축 프로젝트를 담당해왔고, 고객의 다양한 요구에 맞는 형태의 서비스를 제공해 왔습니다. 또한, 고객의 기대를 충족시키기 위해 최선의 기술력으로 보답해왔습니다.</p>
                        </div>
                    </div>
                </div>

                <h2 className="text-primary text-center my-15 display-3">건축법시행령</h2>

                <div className="row text-keep-all">
                    <div className="col-md-10 m-auto">
                        <hr className="mt-0"/>
                        <div className="row justify-content-between align-items-center fs-20" style={{marginTop:'-50px'}}>
                            <div className="col-md-5 bg-gray rounded-4 p-7">
                                <p><span className="text-primary fw-bold">제2조(정의)</span><br/><span className="fs-15">①</span>이 영에서 사용하는 용어의 정의는 다음과 같다.<br/>&lt;개정 1988ㆍ2ㆍ24&gt;</p>
                                <p><strong className="text-navy">2. "증축"이라 함은 기존건축물이 있는 대지안에서 건축물의 건축면적ㆍ연면적 또는 높이를 증가시키는 것을 말한다.</strong></p>
                                <p>3. "개축"이라 함은 기존건축물의 전부 또는 일부(내력벽ㆍ기둥ㆍ보ㆍ지붕틀중 3이상이 포함되는 경우를 말한다)를 철거하고 그 대지안에 종전과 동일한 규모의 범위안에서 건축물을 다시 축조하는 것을 말한다.</p>
                                <p className="fw-bold mb-0"><a href="https://www.law.go.kr/LSW/lsLinkProc.do?lsClsCd=L&lsNm=%EA%B1%B4%EC%B6%95%EB%B2%95%EC%8B%9C%ED%96%89%EB%A0%B9&lsId=prec19881108&joNo=000200&efYd=19881108&mode=11&lnkJoNo=undefined" target="_blank" className="text-navy"><i className="uil uil-external-link-alt fs-20"></i> 법령 바로가기</a></p>
                            </div>
                            <div className="col-md-6 text-center">
                                <Lottie animationData={lottieJson5} play loop className="lottie01"/>
                                <Lottie animationData={lottieJson6} play loop className="lottie02 d-none"/>
                                <p className="mb-0 fs-20 fw-bold text-navy convert-text01" style={{marginTop: '-50px'}}>기존 건물</p>
                            </div>
                        </div>
                        <hr/>
                        <div className="row justify-content-between align-items-center fs-20" style={{marginTop:'-50px'}}>
                            <div className="col-md-6 text-center">
                                <Lottie animationData={lottieJson7} play loop className="lottie03"/>
                                <Lottie animationData={lottieJson8} play loop className="lottie04 d-none"/>
                                <p className="mb-0 fs-20 fw-bold text-navy convert-text02" style={{marginTop: '-50px'}}>건물이 있는 대지<br/><span className="fs-18 fw-normal">A: 기존 건물,  B: 기존 건물</span></p>
                            </div>
                            <div className="col-md-5 bg-gray rounded-4 p-7">
                                <p><span className="text-primary fw-bold">제2조(정의)</span><br/><span className="fs-15">①</span>이 영에서 사용하는 용어의 정의는 다음과 같다.<br/>&lt;개정 1988ㆍ2ㆍ24&gt;</p>
                                <p>2. "증축"이라 함은 기존건축물이 있는 대지안에서 건축물의 건축면적ㆍ연면적 또는 높이를 증가시키는 것을 말한다.</p>
                                <p><strong className="text-navy">3. "개축"이라 함은 기존건축물의 전부 또는 일부(내력벽ㆍ기둥ㆍ보ㆍ지붕틀중 3이상이 포함되는 경우를 말한다)를 철거하고 그 대지안에 종전과 동일한 규모의 범위안에서 건축물을 다시 축조하는 것을 말한다.</strong></p>
                                <p className="fw-bold mb-0"><a href="https://www.law.go.kr/LSW/lsLinkProc.do?lsClsCd=L&lsNm=%EA%B1%B4%EC%B6%95%EB%B2%95%EC%8B%9C%ED%96%89%EB%A0%B9&lsId=prec19881108&joNo=000200&efYd=19881108&mode=11&lnkJoNo=undefined" target="_blank" className="text-navy"><i className="uil uil-external-link-alt fs-20"></i> 법령 바로가기</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
