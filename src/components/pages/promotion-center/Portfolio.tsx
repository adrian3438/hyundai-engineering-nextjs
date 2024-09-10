'use client'

import NavBar from "../../hyundai/NavBar";
import useIsotope from "../../../hooks/useIsotope";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import NextLink from "../../reuseable/links/NextLink";
const projectList = [
    {
        id: 1,
        link: "portfolio/1",
        type: "new-construction",
        date: "2023.10.20",
        title: "신축 포트폴리오",
        detail: "내용이 들어갑니다. 내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.",
        image: { width: 1300, height: 1262, url: "/img/hyundai/promotion-center/portfolio-exam-01.png" }
    },
    {
        id: 2,
        link: "portfolio/2",
        type: "extension-reconstruction",
        date: "2023.10.20",
        title: "증 · 개축 포트폴리오",
        detail: "내용이 들어갑니다. 내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.",
        image: { width: 1300, height: 1262, url: "/img/hyundai/promotion-center/portfolio-exam-02.png" }
    },
    {
        id: 3,
        link: "portfolio/3",
        type: "factory-remodeling",
        date: "2023.10.20",
        title: "공장리모델링 포트폴리오",
        detail: "내용이 들어갑니다.",
        image: { width: 1300, height: 1262, url: "/img/hyundai/promotion-center/portfolio-exam-03.png" }
    },
    {
        id: 4,
        link: "portfolio/4",
        type: "factory-waterproofing",
        date: "2023.10.20",
        title: "공장방수 포트폴리오",
        detail: "내용이 들어갑니다. 내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.",
        image: { width: 1300, height: 1262, url: "/img/hyundai/promotion-center/portfolio-exam-04.png" }
    },
    {
        id: 5,
        link: "portfolio/5",
        type: "factory-maintenance",
        date: "2023.10.20",
        title: "공장보수 포트폴리오",
        detail: "내용이 들어갑니다. 내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.",
        image: { width: 1300, height: 1262, url: "/img/hyundai/promotion-center/portfolio-exam-05.png" }
    },
];

const filterItems = [
    { id: 1, title: "All", value: "*" },
    { id: 2, title: "신축", value: ".new-construction" },
    { id: 3, title: "증 · 개축", value: ".extension-reconstruction" },
    { id: 4, title: "공장리모델링", value: ".factory-remodeling" },
    { id: 5, title: "공장방수", value: ".factory-waterproofing" },
    { id: 6, title: "공장보수", value: ".factory-maintenance" },
];

export default function Portfolio() {
    const { handleFilterKeyChange, filterKey } = useIsotope();

    return (
        <>
            <section
                className="wrapper image-wrapper bg-image bg-overlay text-white"
                style={{backgroundImage: "url(/img/hyundai/promotion-center/promotion-center-banner.jpg)"}}>
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

            <NavBar depthId="menu3" activeId={0}/>

            <div className="container py-17">
                <div className="row">
                    <div className="col-md-10 m-auto">
                        <div className="mb-10">
                            <h1 className="text-primary">포트폴리오</h1>
                        </div>

                        <div className="grid grid-view projects-masonry">
                            {/* ========== filter section ========== */}
                            <div className="isotope-filter filter mb-10">
                                <ul>
                                    {filterItems.map(({id, title, value}) => (
                                        <li key={id}>
                                            <a
                                                onClick={handleFilterKeyChange(value)}
                                                className={clsx({"filter-item": true, active: value === filterKey}) + ' fs-18'}>
                                                {title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* ========== projects section ========== */}
                            <div className="row gx-md-10 gy-10 gy-md-13 isotope">
                                {projectList.map(({id, image, title, date, link, type, detail}) => (
                                    <div className={`project item col-md-3 ${type}`} key={id}>
                                        <Link href={link}>
                                            <figure className="lift rounded mb-6">
                                                <Image
                                                    alt={title}
                                                    src={image.url}
                                                    width={image.width}
                                                    height={image.height}
                                                    className="w-100 h-auto"
                                                />
                                            </figure>
                                        </Link>

                                        <div className="project-details d-flex justify-content-center flex-column">
                                            <div className="post-header">
                                                <h3 className="post-title">{title}</h3>
                                                <div className="dots-portfolio-detail mb-1">
                                                    {detail}
                                                </div>
                                                <div className={`post-category mb-3`}>{date}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
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
