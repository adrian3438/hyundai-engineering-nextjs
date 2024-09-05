import NavBar from "../../hyundai/NavBar";

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

            <NavBar depth1Id={0} depth2Id={1}/>

            <div className="container py-17">
                <div className="row">
                    내용이 들어갑니다.
                </div>
            </div>
        </>
    );
}
