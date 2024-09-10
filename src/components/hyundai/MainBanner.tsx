'use client'

import React, {useEffect, useRef, useState} from "react";
// GLOBAL CUSTOM COMPONENTS
import NextLink from "components/reuseable/links/NextLink";

export default function MainBanner() {
    const mainImageRef = useRef<HTMLImageElement>(null);
    const mainFadeRef = useRef<HTMLDivElement>(null);
    const bannerWrap = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<number>(550);
    const [scaleUp, setScaleUp] = useState<boolean>(true);
    const [scaleDown, setScaleDown] = useState<boolean>(true);
    const prevScrollY = useRef(0);

    useEffect(() => {
        const handleInitialScroll = () => {
            if (window.scrollY === 0) {
                document.body.style.overflowY = "hidden";
            }
        };

        setTimeout(handleInitialScroll, 0);

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY === 0 && prevScrollY.current !== 0) {
                setScaleDown(false);
                document.body.style.overflowY = "hidden";
            }
            prevScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if(!scaleUp) {
            if(mainFadeRef.current && bannerWrap.current) {
                mainFadeRef.current.classList.remove('opacity-0');
                mainFadeRef.current.style.animation = "0.3s linear fadeIn";
                bannerWrap.current.classList.remove('d-none');
                bannerWrap.current.style.animation = "0.3s linear fadeIn";
                setTimeout(() => {
                    document.body.style.overflowY = "scroll";
                },0.5);
            }
            setScaleDown(true);
        } else {
            document.body.style.overflowY = "hidden";
        }
    }, [scaleUp]);

    useEffect(() => {
        if(!scaleDown) {
            if(mainFadeRef.current && bannerWrap.current) {
                mainFadeRef.current.classList.add('opacity-0');
                bannerWrap.current.classList.add('d-none');
            }
            setScaleUp(true);
        }
    }, [scaleDown]);

    const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
        if (mainImageRef.current) {
            if(event.deltaY > 0) {
                if(mainImageRef.current.offsetHeight < document.body.offsetHeight) {
                    setHeight(prevHeight => prevHeight + 40);
                } else {
                    setScaleUp(false);
                }
            }
            if(event.deltaY < 0) {
                if(height >= 551) {
                    setHeight(prevHeight => prevHeight - 40);
                } else {
                    setScaleDown(false);
                }
            }
            mainImageRef.current.style.height = `${height}px`;
            mainImageRef.current.style.transition = 'height 0.2s';
        }
    }

    return (
        <>
            <div className="wrapper dots-bg-navy swiper-fullscreen position-relative" onWheel={handleWheel}>
                <div ref={bannerWrap} className="position-absolute top-0 start-0 w-100 h-100 d-none" style={{zIndex:'11', background:"rgba(0,0,0,0.5)"}}></div>
                <div className="container pt-20 position-relative" style={{zIndex:"10"}}>
                    <div className="row text-white">
                        <div className="col-md-8">
                            <h1 className="text-white display-2">정직과 신뢰, 전문성으로 답합니다.</h1>
                            <p className="fs-20">결과물로 증명하는 종합건설회사 (주)현대엔지니어링 입니다.</p>
                        </div>
                        <div className="col-md-4">
                            <p className="fs-20">문의사항이 있으면 언제든지 연락주시기 바랍니다.</p>
                            <div className="row align-items-center">
                                <div className="col-md-auto">
                                    <NextLink title="Get started" href="#" className="btn btn-yellow text-navy"/>
                                </div>
                                <div className="col-md-auto">
                                    <p className="mb-0"><i className="uil uil-mobile-android-alt"></i> 010-5256-9489</p>
                                    <p className="mb-0"><i className="uil uil-phone"></i> 032-837-5647</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={mainFadeRef} className="position-absolute top-50 start-50 display-1 fs-50 mb-4 text-white text-center row row-cols-3 w-50 translate-middle opacity-0"
                     style={{zIndex:11}}
                >
                    <div className="col">
                        30+<br/><span className="fs-43">사업년수</span>
                    </div>
                    <div className="col">
                        500+<br/><span className="fs-43">공사건수</span>
                    </div>
                    <div className="col">
                        200+<br/><span className="fs-43">보유고객</span>
                    </div>
                </div>
                <img ref={mainImageRef} src="/img/hyundai/main-banner.jpg" alt="공사현장" className="position-absolute left-0 bottom-0" style={{zIndex:10, height:"550px"}}/>
            </div>
        </>
    );
}
