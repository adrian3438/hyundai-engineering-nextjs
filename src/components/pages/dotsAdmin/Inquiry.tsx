'use client'

import fileDownLoad from "components/fileDownload"
import api from "lib/api"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

interface Props {
    id : any
}
export default function InquiryPage ({id} : any) {
    const router = useRouter()
    const [data, setData] = useState<any>(null)
    const [isActive , setActive] = useState<boolean>(false)
    async function Reply () {
        const confirmMsg = '답변처리를 하시겠습니까?';
        const confirm = window.confirm(confirmMsg);
        if(confirm) {
            try {
                const formData = new FormData()
                formData.append('inquiryId' , id)
                formData.append('replyStatus' , 'R')
                const response = await api.post(`/admin/inquiry/updInquiryReplyStatus.php`, formData)
                if(response?.data?.result === true) { alert(response?.data?.resultMsg); router.back(); }
            }catch { alert('Server Error'); }
        }
    }
    useEffect(()=>{
        async function fetchDetail () {
            if(id) {
                try {
                    const response = await api.get(`/admin/inquiry/getInquiryDetail.php?ID=${id}`)
                    if(response?.data?.result === true) {
                        setData(response?.data)
                    }else{
                        alert(response?.data?.resultMsg)
                    }
                }catch {alert('Server Error')}
            }
        }
        fetchDetail()
    }, [id])
    useEffect(() => {
        const links = [
            {
                rel: "stylesheet",
                href: "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css"
            },
            {
                rel: "stylesheet",
                href: "https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
            },
            {
                rel: "stylesheet",
                href: "https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.18/summernote-bs4.min.css"
            }
        ];

        links.forEach(({ rel, href }) => {
            const link = document.createElement("link")
            link.rel = rel;
            link.href = href;
            document.head.appendChild(link);
        });

        // Cleanup function to remove the links when the component is unmounted or updated
        return () => {
            links.forEach(({ href }) => {
                const link = document.querySelector(`link[href="${href}"]`);
                if (link) {
                    document.head.removeChild(link);
                }
            });
        };
    }, []);
    return(
        <>
        <div className="contentBox inquiry_common">
            <h3>Inquiry</h3>
            <div className="flexBox">
                <div>
                    <h4>고객문의</h4>
                </div>
                <div className="btnBox">
                    <button className="blackBtn" onClick={()=>router.back()}>목록으로</button>
                    {data?.replyStatus === 'U' && 
                    <button className="blueBtn" onClick={Reply}>답변하기</button>
                    }
                </div>
            </div>

            <div className="titleBox">
                <div>
                    {data?.replyStatus === 'U'?
                    <button className={isActive ? 'red active' : 'red'} onClick={()=>setActive(!isActive)}>
                        답변전
                    </button> : ''}
                    {data?.replyStatus !== 'U' ?
                    <button className={isActive ? 'blue active' : 'blue'} onClick={()=>setActive(!isActive)}>
                        답변완료
                    </button>
                    :''
                    }
                    <div>
                        <span>답변전</span>
                        <span>답변완료</span>
                    </div>
                </div>
                <h5>{}</h5>
            </div>

            <div className="before">
                <div className="inquiry_table">
                    <ul>
                        <li>
                            <div>
                                <span>문의 유형</span>
                                <span>
                                    {data?.inquiryType === 'NB' && '신축'}
                                    {data?.inquiryType === 'RE' && '증개축'}
                                    {data?.inquiryType === 'FR' && '공장리모델링'}
                                    {data?.inquiryType === 'FW' && '공장방수'}
                                    {data?.inquiryType === 'FP' && '공장보수'} 
                                </span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>회사명</span>
                                <span>{data?.inquiryCompanyName}</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>이름</span>
                                <span>{data?.inquiryName}</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>직급</span>
                                <span>{data?.inquiryPosition}</span>
                            </div>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <div>
                                <span>이메일</span>
                                <span>{data?.inquiryEmail}</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>연락처</span>
                                <span>{data?.inquiryPhone}</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>개인정보수집 및 동의</span>
                                <span>{data?.privacyAgree === 'Y' ? '동의' : '미동의'}</span>
                            </div>
                        </li>
                    </ul>

                    <div className="inquiry_details">
                        <span>문의내용</span>
                        <div dangerouslySetInnerHTML={{
                            __html : data?.inquiryContent
                        }}>
                        </div>
                    </div>
                    
                    <div className="fileName">
                        <span>첨부파일</span>
                        {data?.attachedFile ?
                        <div>
                            <span onClick={()=>fileDownLoad(data?.attachedFilename, data?.attachedFile)}>{data?.attachedFilename}</span>
                        </div>
                        :''
                        }
                    </div>
                    
                    <div className="fileName">
                        <span>명함파일</span>
                        {data?.attachedFile ?
                        <div>
                            <span style={{marginBottom : '15px'}} onClick={()=>fileDownLoad(data?.namecardFilename, data?.namecardFile)}>{data?.namecardFilename}</span>
                            <img src={data?.namecardFile}/>
                        </div>
                        :''
                        }
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}