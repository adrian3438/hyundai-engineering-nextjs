'use client'
import React, { useState } from "react";
import NavBar from "../../hyundai/NavBar";
import api from "lib/api";
export default function Inquiry() {
    const [data, setData] = useState<any>({
        company : '', name : '', position : '', phone : '',
        email : '', type : '', title : '', message : '', attachedFile : null, attachedCard : null
    })
    const [isCheck , setCheck] = useState<boolean>(false)
    const [fileName , setFileName] = useState<string>('')
    const [preview , setPreview] = useState<any>(null);
    function handleChange (e : any) {
        const {name , type , value , files} = e.target
        if(type === 'file') {
            const reader = new FileReader()
            if(files[0]) { reader.readAsDataURL(files[0]) }
            reader.onload = () => {
                setData((prev:any) => ({...prev, [name] : files[0]}))
                if(name === 'attachedFile') { setFileName(files[0].name) }
                else { setPreview(reader.result) }
            }
        }else{
            setData((prev:any) => ({...prev, [name] : value}))
        }
    }
    console.log(data)
    console.log(isCheck)
    async function save () {
        if(!data?.company) { alert('회사명을 입력해 주시기 바랍니다.'); return; }
        if(!data?.name) { alert('이름을 입력해 주시기 바랍니다.'); return; }
        if(!data?.position) { alert('직급을 입력해 주시기 바랍니다.'); return; }
        if(!data?.phone) { alert('연락처를 입력해 주시기 바랍니다.'); return; }
        if(!data?.email) { alert('이메일을 입력해 주시기 바랍니다.'); return; }
        if(!data?.type) { alert('사업분야를 선택해주시기 바랍니다.'); return; }
        if(!data?.title) { alert('문의 제목을 입력해주시기 바랍니다.'); return; }
        if(!data?.message) { alert('문의 내용을 입력해 주시기 바랍니다.'); return; }
        if(!isCheck) { alert('개인정보 수집 및 이용동의를 체크해주시기 바랍니다.'); return; }
        try {
            const formData = new FormData()
            formData.append('companyName', data?.company)
            formData.append('inquiryName', data?.name)
            formData.append('inquiryEmail', data?.email)
            formData.append('inquiryPosition', data?.position)
            formData.append('inquiryPhone', data?.phone)
            formData.append('inquiryType' , data?.type)
            formData.append('inquirySubject', data?.title)
            formData.append('inquiryContents', data?.message)
            if(data?.attachedFile) {formData.append('attachedFile' , data?.attachedFile)}
            if(data?.attachedCard) {formData.append('namecardFile' , data?.attachedCard)}
            formData.append('privacyAgree' , isCheck ? 'Y' : 'N')
            const response = await api.post(`/user/inquiry/setInquiry.php` , formData)
            if(response?.data?.result === true) {alert(response?.data?.resultMsg); window.location.reload()}
            else {alert(response?.data?.resultMsg)}
        }catch {alert('Server Error')}
    }
    return (
        <>
            <section
                className="wrapper image-wrapper bg-image bg-overlay text-white"
                style={{backgroundImage: "url(/img/hyundai/contactUsbanner.png)"}}
            >
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

            <div className="container py-16">
                <div className="mb-15">
                    <h2 className="display-4 text-center mb-5">(주)현대엔지니어링은 여러분의 연락을 기다립니다</h2>
                    <div className="row">
                        <div className="col-md-8 mx-auto bg-pale-ash display-4 text-center border py-2 rounded">
                            대표전화번호<br/> <i className="uil uil-phone align-middle"></i> 032-837-5647 / 010-5256-9489
                        </div>
                    </div>
                </div>
                <section className="row my-10 justify-content-center">
                    <div className="row col-md-11">
                        <form className="contact-form needs-validation" method="post">
                            <div className="messages"></div>
                            <div className="row gx-4">
                                <h3 className="display-6 mb-5"><span className="dots-number bg-navy text-white text-center fs-20 d-inline-block">1</span> 문의하시는 고객님의 정보를 기입해 주세요. <span className="text-red">*</span></h3>
                                <div className="col-md-4">
                                    <div className="form-floating mb-4">
                                        <input required type="text" name="company" onChange={handleChange} id="company_name" placeholder="test" className="form-control fs-18"/>
                                        <label htmlFor="company_name" className="fs-18">회사명 *</label>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="form-floating mb-4">
                                        <input required type="text" name="name" onChange={handleChange} id="customer_name" placeholder="test4" className="form-control fs-18"/>
                                        <label htmlFor="customer_name" className="fs-18">고객명 *</label>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-floating mb-4">
                                        <input required type="text" name="position" onChange={handleChange} id="rank_name" placeholder="test6" className="form-control fs-18"/>
                                        <label htmlFor="rank_name" className="fs-18">직급 *</label>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-floating mb-4">
                                        <input required type="text" name="phone" onChange={handleChange} id="email" placeholder="test8" className="form-control fs-18"/>
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
                                            onChange={handleChange}
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
                                    <div><input type="radio" value={'NB'} onChange={handleChange} id="questionType01" name="type"/><label htmlFor="questionType01" className="form-control text-center p-0 fs-18">신축</label></div>
                                    <div><input type="radio" value={'RE'} onChange={handleChange} id="questionType02" name="type"/><label htmlFor="questionType02" className="form-control text-center p-0 fs-18">증 · 개축</label></div>
                                    <div><input type="radio" value={'FR'} onChange={handleChange} id="questionType03" name="type"/><label htmlFor="questionType03" className="form-control text-center p-0 fs-18">공장 리모델링</label></div>
                                    <div><input type="radio" value={'FW'} onChange={handleChange} id="questionType04" name="type"/><label htmlFor="questionType04" className="form-control text-center p-0 fs-18">공장방수</label></div>
                                    <div><input type="radio" value={'FP'} onChange={handleChange} id="questionType05" name="type"/><label htmlFor="questionType05" className="form-control text-center p-0 fs-18">공장보수</label></div>
                                </div>
                            </div>

                            <div className="row gx-4 mt-15">
                                <h3 className="display-6 mb-5"><span className="dots-number bg-navy text-white text-center fs-20 d-inline-block">3</span> 문의하실 내용을 자유롭게 적어주세요. <span className="text-red">*</span></h3>
                                <div className="col-12">
                                    <div style={{marginBottom : '15px'}}>
                                        <input
                                            required
                                            type="email"
                                            name="title"
                                            onChange={handleChange}
                                            id="form_email"
                                            className="form-control fs-18"
                                            placeholder="문의제목을 입력해 주세요."
                                        />
                                    </div>
                                    <div className="form-floating mb-4">
                                        <textarea
                                            required
                                            name="message"
                                            onChange={handleChange}
                                            id="form_message"
                                            className="form-control fs-18"
                                            placeholder="문의 내용을 입력해주세요."
                                            style={{height: 300, resize: "none"}}
                                        />
                                        <label htmlFor="form_message" className="fs-18">문의 내용을 입력해주세요.</label>
                                        <div className="valid-feedback"> Looks good!</div>
                                        <div className="invalid-feedback"> Please enter your messsage.</div>
                                    </div>
                                </div>


                            </div>

                            <div className="row gx-4 mt-15">
                                <h3 className="display-6 mb-5"><span className="dots-number bg-navy text-white text-center fs-20 d-inline-block">4</span> 파일을 업로드해 주세요. <span className="text-red">*</span></h3>
                                <div className="col-md-4">
                                    <input required type="file" name="attachedFile"  onChange={handleChange} id="file_upload" className="form-control"/>
                                </div>
                            </div>

                            <div className="row gx-4 mt-15">
                                <h3 className="display-6 mb-5"><span className="dots-number bg-navy text-white text-center fs-20 d-inline-block">5</span> 귀하의 소중한 명함을 업로드해 주세요. <span className="text-red">*</span></h3>
                                <div className="col-md-4">
                                    <input required type="file" name="attachedCard"  onChange={handleChange} id="file_upload2" className="form-control"/>
                                </div>
                            </div>

                            <div className="col-12 mt-10">
                                <div className="form-check">
                                    <div className="d-inline-block m-auto mb-5">
                                        <label className="form-check-label fs-18" htmlFor="flexCheck1">
                                            (필수) 개인정보 수집 및 이용에 동의합니다.
                                        </label>
                                        <input className="form-check-input" onChange={()=>setCheck(!isCheck)} name="agreeTerms" type="checkbox" id="flexCheck1" checked={isCheck}/>
                                    </div>
                                </div>
                                <p className="text-start d-inline-block m-auto fs-18">문의 답변 발송을 위한 개인정보(회사명, 이름, 직급, 연락처, 이메일)를 수집하고 이용합니다.<br/>
                                    수집된 정보는 이메일 발송, 전화상담, 통계 조회 외 다른 목적으로 이용되지 않으며, 서비스가 종료되거나 구독을 해지할 경우 즉시 그 정보가 파기됩니다.<br/> 이 내용에 동의하지 않을 경우, 개인정보 수집 및 이용 동의를 거부할 권리가 있습니다. 다만, 동의 거부 시 서비스 이용이 제한됩니다.
                                </p>
                                <div className="mt-15">
                                    <input onClick={save} value="문의하기" className="btn btn-primary rounded btn-send mb-3 fs-18"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </>

    );
}
