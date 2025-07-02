'use client'
import api from "lib/api"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import 'quill/dist/quill.core.css';
// import "../../../assets/admin/editor.css";

interface Props {
    id : any
}
export default function NewsDetail({id} : Props) {
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
            const response = await api.get(`/user/promotion/getContentDetail2.php?ID=${id}&contentType=1&userLang=KR`)
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
                style={{backgroundImage: "url(/img/hyundai/promotion-center/promotionCenter-banner.png)"}}>
                <div className="container min-vh-60 d-flex align-items-center">
                    <div className="row w-100">
                    <div className="mx-auto">
                            <p className="lead fs-lg text-yellow">
                                홍보센터
                            </p>
                        </div>
                        <div className="col-md-12">
                            <h1 className="display-2 text-white mb-3">(주)현대엔지니어링의 최신 현황을 소개해 드립니다.</h1>
                            {/* <p className="lead fs-lg">
                                (주)현대엔지니어링의 최신 현황을 소개해 드립니다.
                            </p> */}
                        </div>
                    </div>
                </div>
            </section>
            <div className="container my-10">
                <section className="row my-10 justify-content-center">
                <div className="col-md-10">
                        <p className="fs-18 fw-600">소식지</p>
                        <h2 className="text-black fw-600">{data?.list?.promSubject}</h2>
                        <p className="fs-16 fw-500">{data?.list?.createDate}</p>
                        <hr className="mt-5 mb-8"/>
                  <article className="mb-8">
                    <div className="quill user-quill">
                      <div className="ql-container ql-snow user-ql">
                        <div className="ql-editor ql-size-16px user-ql-inner" dangerouslySetInnerHTML={{__html: data?.list?.description}}/>
                      </div>
                    </div>
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
