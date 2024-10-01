'use client'

import useIsotope from "../../../hooks/useIsotope";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import NextLink from "../../reuseable/links/NextLink";

interface Props {
    data : any
    typeList : any
}
export default function Portfolio({data ,typeList} : Props) {
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

            <div className="container py-17">
                <div className="row">
                    <div className="col-md-10 m-auto">
                        <div className="grid grid-view projects-masonry">
                            {/* ========== filter section ========== */}
                            <div className="isotope-filter filter mb-10">
                                <ul>
                                    <li>
                                        <a
                                            onClick={handleFilterKeyChange('*')}
                                            className={clsx({"filter-item": true, active: '*' === filterKey}) + ' fs-18'}>
                                            All
                                        </a>
                                    </li>
                                    {typeList.map((type:any, index:number) => (
                                        <li key={index}>
                                            <a
                                                onClick={handleFilterKeyChange(`.${type?.codeId.toString()}`)}
                                                className={clsx({"filter-item": true, active: `.${type?.codeId.toString()}` === filterKey}) + ' fs-18'}>
                                                {type?.codeName}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* ========== projects section ========== */}
                            <div className="row gx-md-10 gy-10 gy-md-13 isotope">
                                {data.map((list:any , index:number) => (
                                    <div className={`project item col-md-3 ${list?.businessDivisionType.toString()}`} key={index}>
                                        <Link href={'/portfolio/4'}>
                                            <figure className="lift rounded mb-6">
                                                <Image
                                                    alt={list?.thumnailFilename}
                                                    src={list?.thumnailFile}
                                                    width={1300}
                                                    height={1300}
                                                    className="w-100 h-auto"
                                                />
                                            </figure>
                                        </Link>

                                        <div className="project-details d-flex justify-content-center flex-column">
                                            <div className="post-header">
                                                <h3 className="post-title">{list?.promSubject}</h3>
                                                <div className="dots-portfolio-detail mb-1">
                                                    {list?.excerpt}
                                                </div>
                                                <div className={`post-category mb-3`}>{list?.createDate}</div>
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
