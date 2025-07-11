'use client'
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import {useEffect, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import api from "lib/api";

interface Props {
    page : number
    typeList : any
    type : any
}
export default function Portfolio({page, typeList, type} : Props) {
    const param = useSearchParams().get('type');
    const router = useRouter()
    const [visiable , setVisiable] = useState<number>(1)
    const [data , setData] = useState<any>([])
    async function getList () {
        const response = await api.get(`/user/promotion/getContentsList.php?contentType=${2}&businessDivisionType=${type || 0}&userLang=KR&page=${page || 1}&size=99&sortColumn=date&sortOrder=desc`)
        if(response?.data?.result === true) {
            if(response?.data !== null) {
                setData(response?.data?.List)
            } else {
                setData([]);
            }
        }
    }
    function handlePage (e : any , id : number) {
        e.preventDefault()
        router.push(`/portfolio/${id}`)
    }
    function handleShowMore() {
        setVisiable(prevVisibleItems => prevVisibleItems + 1);
    }
    useEffect(()=>{
        getList()
    }, [page, type])

    return (
        <>
            <section
                className="wrapper image-wrapper bg-image bg-overlay text-white"
                style={{backgroundImage: "url(/img/hyundai/promotion-center/portfolioBanner.png"}}>
                <div className="container min-vh-60 d-flex align-items-center">
                    <div className="row w-100">
                    <div className="mx-auto">
                            <p className="lead fs-lg text-yellow">
                                포트폴리오
                            </p>
                        </div>
                        <div className="col-md-12">
                            <h1 className="display-2 text-white mb-3">(주)현대엔지니어링의 다양한 사업분야 실적현황입니다.</h1>
                            <p className="lead fs-lg">
                                지난 경험을 통해 더 나은 내일을 짓습니다
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
                                    <li
                                        onClick={()=>router.push(`/portfolio`)}
                                    >
                                        <a className={param === null || undefined ? 'fs-25 active' : 'fs-25 text-ash'}>
                                            All
                                        </a>
                                    </li>
                                    {typeList.map((type:any, index:number) => (
                                        <>
                                        {type?.codeId !== 9 &&
                                            <li
                                                key={index}
                                                onClick={()=>router.push(`/portfolio?type=${type?.codeId}`)}
                                            >
                                                <a className={Number(param) === type.codeId ? 'active fs-25 text-ash' : 'fs-25 text-ash'}>
                                                    {type?.codeName?.split(',')[0]}
                                                </a>
                                            </li>
                                        }
                                        </>
                                    ))}
                                </ul>
                            </div>

                            {/* ========== projects section ========== */}
                            {data?.length > 0 ? (
                              <div className="row gx-md-10 gy-10 gy-md-13 isotope">
                                  {data.length > 0 && data.map((list: any, index: number) => (
                                    <div key={index} className="project item col-md-3">
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
                            ) : (
                              <p>게시글이 없습니다.</p>
                            )}
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
