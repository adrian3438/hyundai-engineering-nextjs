'use client'

import NextLink from "../reuseable/links/NextLink";
import {NavBarData} from "../../data/hyundai/navBarData"
import {useState} from "react";

interface Props {
    depth1Id: number,
    depth2Id?: number,
}

export default function NavBar({depth1Id, depth2Id}: Props) {
    const handleClick = (e:any) => {
        const target = e.currentTarget as HTMLElement;
        const nextEl = target.nextElementSibling as HTMLElement;
        if (nextEl.style.display === 'none') {
            nextEl.style.display = "block";
        } else {
            nextEl.style.display = "none";
        }
    }

    // @ts-ignore
    const depth2NavTitle = NavBarData.kr.depth1?.[depth1Id]?.depth2_info?.[depth2Id]?.title || '';

    return (
        <div className="border-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-auto p-0">
                        <a href="/" className="px-5 py-4 d-inline-block lh-1 bg-blue"><i className="uil uil-home fs-20 text-white"></i></a>
                    </div>
                    <div className="col-auto p-0 position-relative" style={{zIndex: 10}}>
                        <a onClick={handleClick} className="border-end d-flex py-2 ps-5 pe-3 align-items-center">
                            <span>{NavBarData.kr.depth1[depth1Id].title}</span>
                            <i className="uil uil-angle-down fs-25 ms-10"></i>
                        </a>
                        <ul style={{listStyleType: "none", left: '0', display: 'none'}} className="p-0 position-absolute border p-3 pt-1 bg-white mb-6 w-100">
                            {NavBarData.kr.depth1.map((item, index) => (
                                <li className="mt-2" key={index}><NextLink title={item.title} href={item.linkUrl} className="d-block"/></li>
                            ))}
                        </ul>
                    </div>
                    {NavBarData.kr.depth1[depth1Id].depth2_info && (<div className="col-auto p-0 position-relative" style={{zIndex: 10}}>
                        <a onClick={handleClick} className="border-end d-flex py-2 ps-5 pe-3 align-items-center">
                            <span>{depth2NavTitle}</span>
                            <i className="uil uil-angle-down fs-25 ms-10"></i>
                        </a>
                        <ul style={{listStyleType: "none", left: '-1px', display: 'none'}} className="p-0 position-absolute border p-3 pt-1 bg-white mb-6 w-100">
                            {NavBarData.kr.depth1[depth1Id].depth2_info?.map((item, index) => (
                                <li className="mt-2" key={index}><NextLink title={item.title} href={item.linkUrl} className="d-block"/></li>
                            ))}
                        </ul>
                    </div>)}
                </div>
            </div>
        </div>
    )
}