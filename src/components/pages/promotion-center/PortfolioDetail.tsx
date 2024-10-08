'use client'

import api from "lib/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
interface Props {
    id : string | undefined
    // data : any
    // next : any
    // prev : any
}
export default function PortfolioDetail({
    id,
    // data , next , prev
} : Props) {
    const router = useRouter()
    const [data , setData] = useState<any>({
        list : null, next : null, prev : null
    })
    function handlePage (e:any, url:string) {
        e.preventDefault()
        router.push(url)
    }
    useEffect(() => {
        async function getDetail() {
            const response = await api.get(`/user/promotion/getContentDetail2.php?ID=${id}&contentType=2&userLang=KR`)
            if(response?.data?.result === true) {
                if(response?.data?.List?.length > 0) {setData((prev:any) => ({...prev, list : response?.data?.List[0]}))}
                if(response?.data?.next?.length > 0) {setData((prev:any) => ({...prev, next : response?.data?.next[0]}))}
                if(response?.data?.prev?.length > 0) {setData((prev:any) => ({...prev, prev : response?.data?.prev[0]}))}
            }
        }
        getDetail()
    }, [])
    return (
        <>
            <section
                className="wrapper image-wrapper bg-image bg-overlay text-white"
                style={{backgroundImage: "url(/img/hyundai/promotion-center/promotion-center-banner.jpg)"}}>
                <div className="container min-vh-60 d-flex align-items-center">
                    <div className="row w-100">
                        <div className="col-md-12">
                            <h1 className="display-2 text-white mb-3">(주)현대엔지니어링의 다양한 사업분야 실적현황입니다.</h1>
                            <p className="lead fs-lg">
                                지난 경험을 통해 더 나은 내일을 짓습니다
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container my-10">
                <section className="row my-10 justify-content-center">
                    <div className="col-md-10">
                        <p className="fs-18 fw-600">포트폴리오</p>
                        <h2 className="text-black fw-600">{data?.list?.promSubject}</h2>
                        <p className="fs-16 fw-500">{data?.list?.createDate}</p>
                        <hr className="mt-5 mb-8"/>
                        <article className="mb-8"
                        dangerouslySetInnerHTML={{
                            __html : data?.list?.description
                        }}
                        >

                        </article>
                        <div className="mt-4 border-bottom">
                            <div className="py-4 px-5 border-top">
                                <i className="uil uil-angle-up fs-22 me-4"></i>
                                <span className="text-black fw-bold me-4">이전글</span>
                                {data?.prev?.prevUrl ?
                                <a href="#" onClick={(e)=>handlePage(e, data?.prev?.prevUrl)} className="text-medium-gray fw-bold">{data?.prev?.prevSubject}</a>
                                :
                                <a className="text-medium-gray fw-bold">이전 글 없음</a>
                                }
                            </div>
                            <div className="py-4 px-5 border-top">
                                <i className="uil uil-angle-down fs-22 me-4"></i>
                                <span className="text-black fw-bold me-4">다음글</span>
                                {data?.prev?.nextUrl ?
                                <a href="#" onClick={(e)=>handlePage(e, data?.next?.nextUrl)} className="text-medium-gray fw-bold">{data?.next?.nextSubject}</a>
                                :
                                <a className="text-medium-gray fw-bold">다음 글 없음</a>
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
