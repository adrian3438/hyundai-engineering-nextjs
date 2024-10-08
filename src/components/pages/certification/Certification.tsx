import React from "react";
import Image from "next/image";

export default function Certification() {
    return (
        <>
            <section
                className="wrapper image-wrapper bg-image bg-overlay text-white"
                style={{backgroundImage: "url(/img/hyundai/company/ceo-greeting-banner.jpg)"}}>
                <div className="container min-vh-60 d-flex align-items-center">
                    <div className="row w-100">
                        <div className="mx-auto">
                            <p className="lead fs-lg text-yellow">
                                인증현황
                            </p>
                            <h1 className="display-1 text-white mb-3">인증현황</h1>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container py-17">
                <div className="row">
                    <div className="col-md-10 m-auto">
                        <div className="row">
                            <div className="col-md-4">
                                <h1 className="mb-15 position-sticky" style={{top:'120px', left:0}}>(주)현대엔지니어링의<br/> 등록 현황을 소개합니다.</h1>
                            </div>
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-6 text-center">
                                        <p className="rounded p-2 bg-gray">
                                            <Image src="/img/hyundai/certification/certification01.png" alt="사업자등록증" width={425} height={605} className="w-100 h-auto rounded-0"/>
                                        </p>
                                        <p>사업자등록증</p>
                                    </div>
                                    <div className="col-md-6 text-center">
                                        <p className="rounded p-2 bg-gray">
                                            <Image src="/img/hyundai/certification/certification02.png" alt="건설업등록증" width={425} height={605} className="w-100 h-auto rounded-0"/>
                                        </p>
                                        <p>건설업등록증</p>
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
