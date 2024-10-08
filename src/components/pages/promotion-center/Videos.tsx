'use client'
import NavBar from "../../hyundai/NavBar";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import NextLink from "../../reuseable/links/NextLink";
import { useEffect, useState } from "react";
import api from "lib/api";

interface Props {
}
export default function Videos({
} : Props) {
    const [data, setData] = useState<any>([])
    useEffect(() => {
        async function getList () {
            const response = await api.get(`/user/promotion/getPrVideoList.php?videoType=1&page=1&size=99&keyword=&sortColumn=videoMdate&sortOrder=desc`)
            if(response?.data?.Result === true) {
                setData(response?.data?.List)
            }
        }
        getList()
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
                            <h1 className="display-2 text-white mb-3">(주)현대엔지니어링의 다양한 소개 영상을 만나보세요.</h1>
                            {/* <p className="lead fs-lg">
                                (주)현대엔지니어링의 최신 현황을 소개해 드립니다.
                            </p> */}
                        </div>
                    </div>
                </div>
            </section>

            <NavBar depthId="menu3" activeId={0}/>

            <div className="container py-17">
                <div className="row">
                    <div className="col-md-10 m-auto">
                        <div className="row">
                            {data?.map((list:any, index:number) => (
                            <div className="col-md-4 rounded mb-7" key={index}>
                                <div className="ratio ratio-16x9">
                                    <iframe src={list?.videoUrlKr} allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="hyundae-engineering-sustainability-video"></iframe>
                                </div>
                            </div>
                            ))}
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
