export default function AboutUs() {
    return (
        <>
            <section
                className="wrapper image-wrapper bg-image bg-overlay text-white"
                style={{backgroundImage: "url(/img/hyundai/company/ceo-greeting-banner.jpg)"}}>
                <div className="container min-vh-60 d-flex align-items-center">
                    <div className="row w-100">
                        <div className="mx-auto">
                            <p className="lead fs-lg text-yellow">
                                About us
                            </p>
                            <h1 className="display-1 text-white mb-3">소개</h1>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container py-17">
                <div className="row">
                    내용이 들어갑니다.
                </div>
            </div>
        </>
    );
}
