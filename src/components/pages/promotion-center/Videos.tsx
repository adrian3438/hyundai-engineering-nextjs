import NavBar from "../../hyundai/NavBar";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import NextLink from "../../reuseable/links/NextLink";

export default function Videos() {
    return (
        <>
            <section
                className="wrapper image-wrapper bg-image bg-overlay text-white"
                style={{backgroundImage: "url(/img/hyundai/company/ceo-greeting-banner.jpg)"}}>
                <div className="container min-vh-60 d-flex align-items-center">
                    <div className="row w-100">
                        <div className="col-md-12">
                            <h1 className="display-2 text-white mb-3">(주)현대엔지니어링의 역사는 계속 이어갑니다.</h1>
                            <p className="lead fs-lg">
                                고객의 꿈을 현실로 만들어가는 우리의 건설 실적, 그 자체가 신뢰의 증거입니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <NavBar depthId="menu3" activeId={1}/>

            <div className="container py-17">
                <div className="row">
                    <div className="col-md-10 m-auto">
                        <div className="mb-10">
                            <h1 className="text-primary">영상</h1>
                        </div>
                        <div className="row">
                            <div className="col-md-4 rounded mb-7">
                                <div className="ratio ratio-16x9">
                                    <iframe src="https://player.vimeo.com/video/1007586783?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="hyundae-engineering-sustainability-video"></iframe>
                                </div>
                            </div>
                            <div className="col-md-4 rounded mb-7">
                                <div className="ratio ratio-16x9">
                                    <iframe src="https://player.vimeo.com/video/1007586783?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="hyundae-engineering-sustainability-video"></iframe>
                                </div>
                            </div>
                            <div className="col-md-4 rounded mb-7">
                                <div className="ratio ratio-16x9">
                                    <iframe src="https://player.vimeo.com/video/1007586783?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="hyundae-engineering-sustainability-video"></iframe>
                                </div>
                            </div>
                            <div className="col-md-4 rounded mb-7">
                                <div className="ratio ratio-16x9">
                                    <iframe src="https://player.vimeo.com/video/1007586783?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="hyundae-engineering-sustainability-video"></iframe>
                                </div>
                            </div>
                            <div className="col-md-4 rounded mb-7">
                                <div className="ratio ratio-16x9">
                                    <iframe src="https://player.vimeo.com/video/1007586783?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="hyundae-engineering-sustainability-video"></iframe>
                                </div>
                            </div>
                            <div className="col-md-4 rounded mb-7">
                                <div className="ratio ratio-16x9">
                                    <iframe src="https://player.vimeo.com/video/1007586783?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="hyundae-engineering-sustainability-video"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-10">
                    <NextLink href="#" title="더보기" className="btn btn-outline-primary"/>
                </div>
            </div>
        </>
    );
}
