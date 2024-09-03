'use client';

import { Fragment, ReactElement, useRef } from "react";
// -------- CUSTOM HOOKS -------- //
import useSticky from "hooks/useSticky";

// -------- CUSTOM COMPONENTS -------- //
import NextLink from "components/reuseable/links/NextLink";
// LOCAL CUSTOM COMPONENTS
import FancyHeader from "../blocks/navbar/components/fancy-header";

// ===================================================================
interface NavbarProps {
    info?: boolean;
    cart?: boolean;
    fancy?: boolean;
    logoAlt?: string;
    search?: boolean;
    social?: boolean;
    language?: boolean;
    stickyBox?: boolean;
    navClassName?: string;
    button?: ReactElement;
    navOtherClass?: string;
}
// ===================================================================

export default function Header({
    fancy,
    button,
    logoAlt,
    cart = false,
    info = false,
    social = false,
    search = false,
    language = false,
    stickyBox = true,
    navOtherClass = "navbar-other w-100 d-flex ms-auto",
    navClassName = "navbar navbar-expand-lg center-nav transparent navbar-light"
}: NavbarProps) {
    const sticky = useSticky(350);
    const navbarRef = useRef<HTMLElement | null>(null);

    // dynamically render the logo
    const logo = sticky ? "logo-dark" : logoAlt ?? "logo-dark";

    // dynamically added navbar className
    const fixedClassName = "navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed";

    // all main header contents
    const headerContent = (
        <Fragment>
            <div className="navbar-brand w-100">
                {/*<NextLink href="/" title={<img alt="logo" src={`/img/${logo}.png`} srcSet={`/img/${logo}@2x.png 2x`}/>}/>*/}
                <NextLink href="/" title="현대엔지니어링"/>
            </div>

            <div id="offcanvas-nav" data-bs-scroll="true" className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
                <div className="offcanvas-header d-lg-none">
                    <h3 className="text-white fs-30 mb-0">Sandbox</h3>
                    <button type="button" aria-label="Close" data-bs-dismiss="offcanvas" className="btn-close btn-close-white"/>
                </div>

                <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown"><a href="#" data-bs-toggle="dropdown" className="nav-link">회사소개</a>
                            <ul className="dropdown-menu">
                                <li className="nav-item"><a className="dropdown-item" href="/company/ceo-greeting">CEO 인사말</a></li>
                                <li className="nav-item"><a className="dropdown-item" href="/company/about-us">소개</a></li>
                                <li className="nav-item"><a className="dropdown-item" href="/company/history">연혁</a></li>
                                <li className="nav-item"><a className="dropdown-item" href="/company/location">오시는길</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown"><a href="#" data-bs-toggle="dropdown" className="nav-link">사업분야</a>
                            <ul className="dropdown-menu">
                                <li className="nav-item"><a className="dropdown-item" href="/business-area/new-construction">신축</a></li>
                                <li className="nav-item"><a className="dropdown-item" href="/business-area/extension-reconstruction">증 · 개축</a></li>
                                <li className="nav-item"><a className="dropdown-item" href="/business-area/factory-remodeling">공장 리모델링</a></li>
                                <li className="nav-item"><a className="dropdown-item" href="/business-area/factory-waterproofing">공장방수</a></li>
                                <li className="nav-item"><a className="dropdown-item" href="/business-area/factory-maintenance">공장보수</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown"><a href="#" data-bs-toggle="dropdown" className="nav-link">홍보센터</a>
                            <ul className="dropdown-menu">
                                <li className="nav-item"><a className="dropdown-item" href="/promotion-center/portfolio">포트폴리오</a></li>
                                <li className="nav-item"><a className="dropdown-item" href="/promotion-center/videos">영상</a></li>
                                <li className="nav-item"><a className="dropdown-item" href="/promotion-center/news">소식지</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown"><a href="#" data-bs-toggle="dropdown" className="nav-link">인증현황</a>
                            <ul className="dropdown-menu">
                                <li className="nav-item"><a className="dropdown-item" href="#">인증종류-1</a></li>
                                <li className="nav-item"><a className="dropdown-item" href="#">인증종류-3</a></li>
                                <li className="nav-item"><a className="dropdown-item" href="#">인증종류-3</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown"><a href="/esg" data-bs-toggle="dropdown" className="nav-link">지속가능경영</a></li>
                        <li className="nav-item dropdown"><a href="/inquiry" data-bs-toggle="dropdown" className="nav-link">문의하기</a></li>
                    </ul>
                </div>
            </div>

            {/* ============= right side header content ============= */}
            <div className="navbar-other w-100 d-flex ms-auto">
                <ul className="navbar-nav flex-row align-items-center ms-auto">
                    <li className="nav-item dropdown language-select text-uppercase">
                        <a role="button" aria-haspopup="true" aria-expanded="false" data-bs-toggle="dropdown" className="nav-link dropdown-item dropdown-toggle">Ko</a>
                        <ul className="dropdown-menu">
                            <li className="nav-item">
                                <button className="dropdown-item">En</button>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown language-select text-uppercase">
                        <a role="button" aria-haspopup="true" aria-expanded="false" data-bs-toggle="dropdown" className="nav-link">
                            <i className="uil uil-bars"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </Fragment>
    );

    return (
        <Fragment>
            {stickyBox ? <div style={{paddingTop: sticky ? navbarRef.current?.clientHeight : 0}}/> : null}

            <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
                {fancy ? (
                    <FancyHeader>{headerContent}</FancyHeader>
                ) : (
                    <div className="container flex-lg-row flex-nowrap align-items-center">{headerContent}</div>
                )}
            </nav>
        </Fragment>
    );
}
