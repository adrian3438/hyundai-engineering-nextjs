'use client'

import useIsotope from "../../../hooks/useIsotope";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import NextLink from "../../reuseable/links/NextLink";
import { useEffect, useState } from "react";
import api from "lib/api";
import { useRouter } from "next/navigation";
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
interface Props {
    data : any
    typeList : any
    totalCount : number
}
export default function Portfolio({data ,typeList, totalCount} : Props) {
    const router = useRouter()
    const { handleFilterKeyChange, filterKey } = useIsotope();
    function handlePage (e : any , id : number) {
        e.preventDefault()
        router.push(`/portfolio/${id}`)
    }
    // const [data , setData] = useState<any>([])
    const [type , setType] = useState<any>([])
    // async function getList () {
    //     const response = await api.get(`/user/promotion/getContentsList.php?contentType=${2}&businessDivisionType=${0}&userLang=KR&page=${1}&size=10&sortColumn=date&sortOrder=desc`)
    //     if(response?.data?.result === true) {
    //         setData(response?.data?.List)
    //     }
    // }
    // async function getType () {
    //     const response = await api.get(`/admin/code/getBusinessDivisionTypeList.php`)
    //     if(response?.data?.result=== true) {
    //         getList()
    //         setType(response?.data?.List)
    //     }
    // }
    // useEffect(() => {getType()}, [])
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
                                                {type?.codeName}
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

                {/* <div className="text-center mt-10">
                    <NextLink href="#" title="더보기" className="btn btn-outline-primary"/>
                </div> */}
            </div>
        </>
    );
}
