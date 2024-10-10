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
                style={{backgroundImage: "url(/img/hyundai/contactUsbanner.png)"}}>
                <div className="container min-vh-60 d-flex align-items-center">
                    <div className="row w-100">
                        <div className="mx-auto">
                            <p className="lead fs-lg text-yellow">
                                문의하기
                            </p>
                            <h1 className="display-1 text-white mb-3">빠른 시일안에 연락 드리겠습니다</h1>
                        </div>
                    </div>
                </div>
            </section>

            {/*<NavBar depthId={5}/>*/}

            <div className="container py-17">
                <h2 className="display-4 text-center mb-15">무엇이 궁금하신가요?</h2>
                <section className="row my-10 justify-content-center">
                    <div className="row col-md-11">
                        <form className="contact-form needs-validation" method="post">
                            <div className="messages"></div>
                            <div className="row gx-4">
                                <h3 className="display-6 mb-5"><span className="dots-number bg-navy text-white text-center fs-20 d-inline-block">1</span> 문의하시는 고객님의 정보를 기입해 주세요. <span className="text-red">*</span></h3>
                                <div className="col-md-4">
                                    <div className="form-floating mb-4">
                                        <input required type="text" name="company" id="company_name" placeholder="test" className="form-control fs-18"/>
                                        <label htmlFor="company_name" className="fs-18">회사명 *</label>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="form-floating mb-4">
                                        <input required type="text" name="name" id="customer_name" placeholder="test4" className="form-control fs-18"/>
                                        <label htmlFor="customer_name" className="fs-18">고객명 *</label>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-floating mb-4">
                                        <input required type="text" name="position" id="rank_name" placeholder="test6" className="form-control fs-18"/>
                                        <label htmlFor="rank_name" className="fs-18">직급 *</label>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-floating mb-4">
                                        <input required type="text" name="number" id="email" placeholder="test8" className="form-control fs-18"/>
                                        <label htmlFor="rank_name" className="fs-18">연락처 *</label>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="form-floating mb-4">
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            id="form_email"
                                            className="form-control fs-18"
                                            placeholder="test10"
                                        />
                                        <label htmlFor="form_email" className="fs-18">이메일 *</label>
                                    </div>
                                </div>
                            </div>

                            <div className="row gx-4 mt-15">
                                <h3 className="display-6 mb-5">
                                    <span className="dots-number bg-navy text-white text-center fs-20 d-inline-block">2</span> 어떤 것이 궁금하신가요? <span className="text-red">*</span>
                                </h3>
                                <div className="dots-dongpae-form2">
                                    <div><input type="radio" id="questionType01" name="questionType"/><label htmlFor="questionType01" className="form-control text-center p-0 fs-18">신축</label></div>
                                    <div><input type="radio" id="questionType02" name="questionType"/><label htmlFor="questionType02" className="form-control text-center p-0 fs-18">증 · 개축</label></div>
                                    <div><input type="radio" id="questionType03" name="questionType"/><label htmlFor="questionType03" className="form-control text-center p-0 fs-18">공장 리모델링</label></div>
                                    <div><input type="radio" id="questionType04" name="questionType"/><label htmlFor="questionType04" className="form-control text-center p-0 fs-18">공장방수</label></div>
                                    <div><input type="radio" id="questionType05" name="questionType"/><label htmlFor="questionType05" className="form-control text-center p-0 fs-18">공장보수</label></div>
                                </div>
                            </div>

                            <div className="row gx-4 mt-15">
                                <h3 className="display-6 mb-5"><span className="dots-number bg-navy text-white text-center fs-20 d-inline-block">3</span> 문의하실 내용을 자유롭게 적어주세요. <span className="text-red">*</span></h3>
                                <div className="col-12">
                                    <div className="form-floating mb-4">
                                        <textarea
                                            required
                                            name="message"
                                            id="form_message"
                                            className="form-control fs-18"
                                            placeholder="Your message"
                                            style={{height: 300, resize: "none"}}
                                        />
                                        <label htmlFor="form_message" className="fs-18">Message</label>
                                        <div className="valid-feedback"> Looks good!</div>
                                        <div className="invalid-feedback"> Please enter your messsage.</div>
                                    </div>
                                </div>


                            </div>

                            <div className="row gx-4 mt-15">
                                <h3 className="display-6 mb-5"><span className="dots-number bg-navy text-white text-center fs-20 d-inline-block">4</span> 파일을 업로드해 주세요. <span className="text-red">*</span></h3>
                                <div className="col-md-4">
                                    <input required type="file" name="attachedFile" id="file_upload" className="form-control"/>
                                </div>
                            </div>

                            <div className="row gx-4 mt-15">
                                <h3 className="display-6 mb-5"><span className="dots-number bg-navy text-white text-center fs-20 d-inline-block">5</span> 귀하의 소중한 명함을 업로드해 주세요. <span className="text-red">*</span></h3>
                                <div className="col-md-4">
                                    <input required type="file" name="attachedFile" id="file_upload2" className="form-control"/>
                                </div>
                            </div>

                            <div className="col-12 mt-10">
                                <div className="form-check">
                                    <div className="d-inline-block m-auto mb-5">
                                        <label className="form-check-label fs-18" htmlFor="flexCheck1">
                                            (필수) 개인정보 수집 및 이용에 동의합니다.
                                        </label>
                                        <input className="form-check-input" name="agreeTerms" type="checkbox" id="flexCheck1"/>
                                    </div>
                                </div>
                                <p className="text-start d-inline-block m-auto fs-18">문의 답변 발송을 위한 개인정보(회사명, 이름, 직급, 연락처, 이메일)를 수집하고 이용합니다.<br/>
                                    수집된 정보는 이메일 발송, 전화상담, 통계 조회 외 다른 목적으로 이용되지 않으며, 서비스가 종료되거나 구독을 해지할 경우 즉시 그 정보가 파기됩니다.<br/> 이 내용에 동의하지 않을 경우, 개인정보 수집 및 이용 동의를 거부할 권리가 있습니다. 다만, 동의 거부 시 서비스 이용이 제한됩니다.
                                </p>
                                <div className="mt-15">
                                    <input type="submit" value="문의하기" className="btn btn-primary rounded btn-send mb-3 fs-18"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </>

    );
}
