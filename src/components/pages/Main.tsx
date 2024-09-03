import MainBanner from "../hyundai/MainBanner";
import Link from "next/link";
import FigureImage from "../reuseable/FigureImage";
import NextLink from "../reuseable/links/NextLink";
import Image from "next/image";
import {About14, About15} from "../blocks/about";
import ListColumn from "../reuseable/ListColumn";
import {aboutList1} from "../../data/about";

export default function Main() {
    return (
        <main className="content-wrapper">
            <MainBanner/>

            <div className="container pb-17 pt-15">
                <div className="row">
                    <h1 className="display-1 mb-3 text-center">포트폴리오</h1>
                    <p className="lead text-center mb-10">현대엔지니어링의 최신 포트폴리오를 만나보세요</p>

                    <article className="item post col-md-4">
                        <div className="card">
                            <figure className="card-img-top overlay overlay-1 hover-scale">
                                <Link href="#">
                                    <FigureImage width={560} height={350} src="/img/photos/b4.jpg"/>
                                    <span className="bg"/>
                                </Link>

                                <figcaption>
                                    <h5 className="from-top mb-0">Read More</h5>
                                </figcaption>
                            </figure>

                            <div className="card-body">
                                <div className="post-header">
                                    <h2 className="post-title h3 mt-1 mb-3 overflow-hidden dots-main-post-title">
                                        <NextLink title="타이틀이 들어갑니다.타이틀이 들어갑니다.타이틀이 들어갑니다.타이틀이 들어갑니다." className="link-dark" href="#"/>
                                    </h2>
                                </div>

                                <div className="post-content overflow-hidden dots-main-post-detail">
                                    <p className="mb-0">설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.</p>
                                </div>
                            </div>
                        </div>
                    </article>

                    <article className="item post col-md-4">
                        <div className="card">
                            <figure className="card-img-top overlay overlay-1 hover-scale">
                                <Link href="#">
                                    <FigureImage width={560} height={350} src="/img/photos/b4.jpg"/>
                                    <span className="bg"/>
                                </Link>

                                <figcaption>
                                    <h5 className="from-top mb-0">Read More</h5>
                                </figcaption>
                            </figure>

                            <div className="card-body">
                                <div className="post-header">
                                    <h2 className="post-title h3 mt-1 mb-3 overflow-hidden dots-main-post-title">
                                        <NextLink title="타이틀이 들어갑니다.타이틀이 들어갑니다.타이틀이 들어갑니다.타이틀이 들어갑니다." className="link-dark" href="#"/>
                                    </h2>
                                </div>

                                <div className="post-content overflow-hidden dots-main-post-detail">
                                    <p className="mb-0">설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.설명이 들어갑니다.</p>
                                </div>
                            </div>
                        </div>
                    </article>

                    <article className="item post col-md-4">
                        <div className="card">
                            <figure className="card-img-top overlay overlay-1 hover-scale">
                                <Link href="#">
                                    <FigureImage width={560} height={350} src="/img/photos/b4.jpg"/>
                                    <span className="bg"/>
                                </Link>

                                <figcaption>
                                    <h5 className="from-top mb-0">Read More</h5>
                                </figcaption>
                            </figure>

                            <div className="card-body">
                                <div className="post-header">
                                    <h2 className="post-title h3 mt-1 mb-3 overflow-hidden dots-main-post-title">
                                        <NextLink title="타이틀이 들어갑니다.타이틀이 들어갑니다.타이틀이 들어갑니다.타이틀이 들어갑니다." className="link-dark" href="#"/>
                                    </h2>
                                </div>

                                <div className="post-content overflow-hidden dots-main-post-detail">
                                    <p className="mb-0">설명이 들어갑니다.</p>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>

            <div className="bg-pale-ash">
                <div className="container pb-17 pt-15">
                    <div className="row">
                        <h1 className="display-1 mb-3 text-center">사업분야</h1>
                        <p className="lead text-center mb-10">다양한 사업을 영위하는 종합건설사입니다</p>

                        <article className="col-md-4">
                            <figure className="overlay overlay-1 hover-scale rounded mb-6">
                                <Link href="#">
                                    <Image src="/img/photos/b4.jpg" alt="image title" width={560} height={350} className="w-100 h-auto"/>
                                    <span className="bg"/>
                                </Link>

                                <figcaption>
                                    <h2 className="from-top mb-0">신축</h2>
                                </figcaption>
                            </figure>
                        </article>

                        <article className="col-md-4">
                            <figure className="overlay overlay-1 hover-scale rounded mb-6">
                                <Link href="#">
                                    <Image src="/img/photos/b4.jpg" alt="image title" width={560} height={350} className="w-100 h-auto"/>
                                    <span className="bg"/>
                                </Link>

                                <figcaption>
                                    <h2 className="from-top mb-0">증 · 개축</h2>
                                </figcaption>
                            </figure>
                        </article>

                        <article className="col-md-4">
                            <figure className="overlay overlay-1 hover-scale rounded mb-6">
                                <Link href="#">
                                    <Image src="/img/photos/b4.jpg" alt="image title" width={560} height={350} className="w-100 h-auto"/>
                                    <span className="bg"/>
                                </Link>

                                <figcaption>
                                    <h2 className="from-top mb-0">공장 리모델링</h2>
                                </figcaption>
                            </figure>
                        </article>

                        <article className="col-md-6">
                            <figure className="overlay overlay-1 hover-scale rounded mb-6">
                                <Link href="#">
                                    <Image src="/img/photos/b4.jpg" alt="image title" width={560} height={350} className="w-100 h-auto"/>
                                    <span className="bg"/>
                                </Link>

                                <figcaption>
                                    <h2 className="from-top mb-0">공장방수</h2>
                                </figcaption>
                            </figure>
                        </article>

                        <article className="col-md-6">
                            <figure className="overlay overlay-1 hover-scale rounded mb-6">
                                <Link href="#">
                                    <Image src="/img/photos/b4.jpg" alt="image title" width={560} height={350} className="w-100 h-auto"/>
                                    <span className="bg"/>
                                </Link>

                                <figcaption>
                                    <h2 className="from-top mb-0">공장보수</h2>
                                </figcaption>
                            </figure>
                        </article>
                    </div>
                </div>
            </div>

            <div className="container pb-17 pt-15">
                <div className="row">
                    <h1 className="display-1 mb-3 text-center">소식지</h1>
                    <p className="lead text-center mb-10">현대엔지니어링의 최신 소식을 확인하세요</p>
                    <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
                        <div className="col-lg-6 order-lg-2 position-relative">
                            <div
                                className="shape rounded-circle bg-line leaf rellax w-18 h-18"
                                style={{bottom: "-2.5rem", right: "-1.5rem"}}
                            />

                            <figure className="rounded">
                                <img src="/img/photos/about19.jpg" srcSet="/img/photos/about19@2x.jpg 2x" alt=""/>
                            </figure>
                        </div>

                        <div className="col-lg-6">
                            <h3 className="display-6 mb-4">Why Choose Us?</h3>
                            <p className="mb-5">
                                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus
                                ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                Maecenas faucibus mollis interdum. Maecenas sed diam eget risus varius.
                            </p>

                            <ListColumn list={aboutList1} bulletColor="primary"/>

                            <NextLink title="More Details" href="#" className="btn btn-soft-primary rounded-pill mt-6 mb-0"/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
