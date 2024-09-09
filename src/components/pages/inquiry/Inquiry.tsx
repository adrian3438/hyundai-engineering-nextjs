'use client'
import React, { useState } from "react";
import NavBar from "../../hyundai/NavBar";

export default function Inquiry() {
    const [data, setData] = useState<any>({
        company : '', name : '', position : '', phone : '', mobile : '',
        email : '', type : '', message : '', attachedFile : null
    })
    const [fileName , setFileName] = useState<string>('')
    function handleChange (e : any) {
        const {name , type , value , files} = e.target
        if(type === 'file') {
            const reader = new FileReader()
            if(files[0]) { reader.readAsDataURL(files[0]) }
            reader.onload = () => {
                setData((prev:any) => ({...prev, [name] : files[0]}))
                setFileName(files[0].name)
            }
        }else{
            setData((prev:any) => ({...prev, [name] : value}))
        }
    }
    function save () {

    }
    return ( 
        <>
            <section
                className="wrapper image-wrapper bg-image bg-overlay text-white"
                style={{backgroundImage: "url(/img/hyundai/company/ceo-greeting-banner.jpg)"}}>
                <div className="container min-vh-60 d-flex align-items-center">
                    <div className="row w-100">
                        <div className="mx-auto">
                            <p className="lead fs-lg text-yellow">
                                문의하기
                            </p>
                            <h1 className="display-1 text-white mb-3">문의하기</h1>
                        </div>
                    </div>
                </div>
            </section>

            {/*<NavBar depthId={5}/>*/}

            <div className="container py-17">
                <h2 className="display-5 text-center">무엇이 궁금하신가요?</h2>
                <section className="row my-10 justify-content-center">
                    <div className="row col-md-11">
                        <form className="contact-form needs-validation" method="post">
                            <div className="messages"></div>
                            <div className="row gx-4">
                                <h3 className="display-7 mb-5"><span className="dots-number bg-navy text-white text-center fs-16 d-inline-block">1</span>
                                    문의하시는 고객님의 정보를 기입해 주세요.
                                    <span className="text-red">*</span></h3>
                                <div className="col-md-4">
                                    <div className="form-floating mb-4">
                                        <input required type="text" name="company" id="company_name" placeholder="test" className="form-control"/>
                                        <label htmlFor="company_name">회사명 *</label>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="form-floating mb-4">
                                        <input required type="text" name="name" id="customer_name" placeholder="test4" className="form-control"/>
                                        <label htmlFor="customer_name">고객명 *</label>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-floating mb-4">
                                        <input required type="text" name="position" id="rank_name" placeholder="test6" className="form-control"/>
                                        <label htmlFor="rank_name">직급 *</label>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-floating mb-4">
                                        <input required type="text" name="number" id="email" placeholder="test8" className="form-control"/>
                                        <label htmlFor="rank_name">연락처 *</label>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="form-floating mb-4">
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            id="form_email"
                                            className="form-control"
                                            placeholder="test10"
                                        />
                                        <label htmlFor="form_email">이메일 *</label>
                                    </div>
                                </div>
                            </div>

                            <div className="row gx-4 mt-8">
                                <h3 className="display-7 mb-5">
                                    <span className="dots-number bg-navy text-white text-center fs-16 d-inline-block">2</span>
                                    &nbsp;어떤 것이 궁금하신가요?
                                    <span className="text-red">*</span>
                                </h3>
                                <div className="dots-dongpae-form2">
                                    <div><input type="radio" id="questionType01" name="questionType"/><label htmlFor="questionType01" className="form-control text-center p-0">test13</label></div>
                                    <div><input type="radio" id="questionType02" name="questionType"/><label htmlFor="questionType02" className="form-control text-center p-0">test14</label></div>
                                    <div><input type="radio" id="questionType03" name="questionType"/><label htmlFor="questionType03" className="form-control text-center p-0">test15</label></div>
                                    <div><input type="radio" id="questionType04" name="questionType"/><label htmlFor="questionType04" className="form-control text-center p-0">test16</label></div>
                                    <div><input type="radio" id="questionType05" name="questionType"/><label htmlFor="questionType05" className="form-control text-center p-0">test17</label></div>
                                </div>
                            </div>

                            <div className="row gx-4 mt-8">
                                <h3 className="display-7 mb-5"><span className="dots-number bg-navy text-white text-center fs-16 d-inline-block">3</span> test20 <span className="text-red">*</span></h3>
                                <div className="col-12">
                                    <div className="form-floating mb-4">
                            <textarea
                                required
                                name="message"
                                id="form_message"
                                className="form-control"
                                placeholder="Your message"
                                style={{height: 300}}
                            />
                                        <label htmlFor="form_message">Message *</label>
                                        <div className="valid-feedback"> Looks good!</div>
                                        <div className="invalid-feedback"> Please enter your messsage.</div>
                                    </div>
                                </div>


                            </div>

                            <div className="row gx-4 mt-8">
                                <h3 className="display-7 mb-5"><span className="dots-number bg-navy text-white text-center fs-16 d-inline-block">4</span> test1
                                    <span className="text-red">*</span></h3>
                                <div className="col-md-4">
                                    <input required type="file" name="attachedFile" id="file_upload" className="form-control"/>
                                </div>
                            </div>

                            <div className="col-12 text-center mt-10">
                                <div className="form-check">
                                    <div className="d-inline-block m-auto mb-5">
                                        <label className="form-check-label" htmlFor="flexCheck1">
                                            test20
                                        </label>
                                        <input className="form-check-input" name="agreeTerms" type="checkbox" id="flexCheck1"/>
                                    </div>

                                </div>
                                <div className="form-check">
                                    <div className="d-inline-block m-auto mb-5">
                                        <label className="form-check-label" htmlFor="flexCheck2">
                                            test21
                                        </label>
                                        <input className="form-check-input" name="adagree" type="checkbox" id="flexCheck2"/>
                                    </div>

                                </div>
                                <input type="submit" value="test25" className="btn btn-primary rounded btn-send mb-3"/>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </>

    );
}
