import NavBar from "../../hyundai/NavBar";

export default function Location() {
    return (
        <>
            <section
                className="wrapper image-wrapper bg-image bg-overlay text-white"
                style={{
                    backgroundImage: "url(/img/hyundai/company/companyLocation.png)",
                    backgroundPosition: "center bottom"
                }}>
                <div className="container min-vh-60 d-flex align-items-center">
                    <div className="row w-100">
                        <div className="mx-auto">
                            <p className="lead fs-lg text-yellow">
                                오시는길
                            </p>
                            <h1 className="display-1 text-white mb-3">오시는길</h1>
                        </div>
                    </div>
                </div>
            </section>

            <NavBar depthId={"menu1"} activeId={4}/>

            <div className="container py-17">
                <div className="row text-keep-all">
                    <div className="col-md-10 border rounded m-auto py-11 px-10 position-relative pb-15">
                        <span className="clip-background">오시는길</span>
                        <div className="row justify-content-between">
                            <div className="col-md-6">
                                <p className="fs-20 fw-bold">인천 연수구 송도미래로 30 (인천광역시 연수구 송도동 214) 송도비알씨스마트밸리지식산업센터 D동 1610호</p>
                                <p className="fs-20"><i className="uil uil-mobile-android-alt align-middle fs-24"></i> 010-5256-9489 / <i className="uil uil-phone align-middle fs-24"></i> 032-837-5647 <br/> <i className="uil uil-print align-middle fs-24"></i> 032-837-5643 / <i className="uil uil-envelope align-middle fs-24"></i> hdeng60@nate.com</p>
                                <p className="position-relative ps-11 fs-20">
                                    <i className="uil uil-car-sideview position-absolute start-0 fs-40" style={{marginTop: '-5px'}}></i>
                                    <span className="fw-bold">제 3경인고속화도로</span>: 인천공항, 목감 방면 물왕톨게이트 → 고잔톨게이트 → ‘남동구청, 남동산단‘ 방면 오른쪽 → 외암사거리 좌회전 → 송도미래로 우회전 → 1.3km 직진, 좌측 건물
                                </p>
                                <p className="position-relative ps-11 fs-20">
                                    <span className="fw-bold">경인고속도로</span>: 신월IC → 서운분기점에서 ‘판교, 중동‘ 방면 → 장수IC에서 ‘장수‘방면 → 서창분기점에서 ‘인천항, 인천공항, 안양’방면 → 남동IC에서 ‘인천광역시청, 인천지방경찰청, 남동공단‘ 방면 → 경제자유구격 송도, 남동공단 → 8.7km 직진 송도미래로 우회전 → 1.3km 직진, 좌측 건물
                                </p>
                                <p className="position-relative ps-11 fs-20">
                                    <i className="uil uil-bus position-absolute top-0 start-0 fs-40" style={{marginTop: '-5px'}}></i>
                                    <span className="fw-bold">송도스마트밸리 앞</span>: 6번, 16번<br/>
                                    <span className="fw-bold">극지연구소 앞</span>: 6번, 9번, 16번, 순환42번, 1302번
                                </p>

                                <p className="position-relative ps-11 mb-0 fs-20">
                                    <i className="uil uil-subway position-absolute top-0 start-0 fs-40" style={{marginTop: '-5px'}}></i>
                                    <span className="fw-bold">지하철</span>: 인천 1호선 지식산업단지역 하차 후 도보 15분<br/>(통근버스 운영)
                                </p>
                            </div>
                            <div className="col-md-6">
                            <iframe
                                    allowFullScreen
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.9803414584785!2d126.64580027639904!3d37.3666420355643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b765949a17d7d%3A0x3e416215c4d0688c!2z7J247LKc6rSR7Jet7IucIOyXsOyImOq1rCDshqHrj4Trr7jrnpjroZwgMzA!5e0!3m2!1sko!2skr!4v1749606338380!5m2!1sko!2skr"
                                    style={{width: "100%", height: "100%", border: 0}}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
