'use client'

import useIsotope from "../../../hooks/useIsotope";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import NextLink from "../../reuseable/links/NextLink";
import { useEffect, useState } from "react";
import api from "lib/api";
import { useRouter } from "next/navigation";

interface Props {
    data : any
    typeList : any
    totalCount : number
}
export default function Portfolio({data ,typeList, totalCount} : Props) {
    const router = useRouter()
    const [visiable , setVisiable] = useState<number>(1)
    const { handleFilterKeyChange, filterKey } = useIsotope();
    function handlePage (e : any , id : number) {
        e.preventDefault()
        router.push(`/portfolio/${id}`)
    }
    function handleShowMore() {
        setVisiable(prevVisibleItems => prevVisibleItems + 1);
    }
    console.log('typeList : ', data);
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
                                                onClick={handleFilterKeyChange(`.type_${type?.codeId.toString()}`)}
                                                className={clsx({"filter-item": true, active: `.type_${type?.codeId.toString()}` === filterKey}) + ' fs-18'}>
                                                {type?.codeName?.split(',')[0]}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* ========== projects section ========== */}
                            <div className="row gx-md-10 gy-10 gy-md-13 isotope">
                                {data.map((list:any , index:number) => (
                                    <div className={`project item col-md-3 type_${list?.businessDivisionType.toString()}`} key={index}>
                                        <Link href={'#'} onClick={(e)=>handlePage(e, list?.ID)}>
                                            <figure className="lift rounded mb-6">
                                                <Image
                                                    alt={list?.thumnailFilename}
                                                    src={list?.thumnailFile}
                                                    width={1300}
                                                    height={1262}
                                                    className="w-100 h-auto"
                                                />
                                            </figure>
                                        </Link>

                                        <div className="project-details d-flex justify-content-center flex-column">
                                            <div className="post-header">
                                                <div className="post-category text-line">{list?.businessDivisionName}</div>
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

                {/* {visiable < data.length && (
                    <div className="text-center mt-10">
                        <button onClick={handleShowMore} className="btn btn-outline-primary">
                            더보기
                        </button>
                    </div>
                )} */}
            </div>
        </>
    );
}
