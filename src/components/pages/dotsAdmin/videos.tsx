'use client'

import TextBox from "components/DotsAdmin/Element/TextBox"
import { useRouter } from "next/navigation"
import { useState } from "react"
interface Props {
    id : any
}
export default function VideosViewBox ({id} : Props) {
    const router = useRouter()
    const [data, setData] = useState<any>({
        videoType : '', subject : '', link : '', date : ''
    })
    function handleSelect (e:React.ChangeEvent<HTMLSelectElement>) {

    }
    function handleChange (e:React.ChangeEvent<HTMLInputElement>) {
        const {name , value} = e.target;
        setData((prev:any) => ({...prev, [name] : value}))
    }
    async function save () {

    }
    return(
        <>
        <div className="contentBox add">
            <h3>Contents</h3>
            <div className="flexBox">
                <div>
                    <h4>콘텐츠</h4>
                </div>
                <div className="btnBox">
                    <button className="blackBtn" onClick={()=>router.back()}>목록으로</button>
                    <button className="blueBtn" onClick={()=>save()}>{id ? '수정하기' : '저장하기'}</button>
                </div>
            </div>

            <div className="input_tableWrap">
                <table>
                    <tbody>
                        <tr>
                            <th>영상 유형 <span className="star">*</span></th>
                            <td>
                                <div className="selectContainer">
                                    <div className="selectWrap">
                                        <div className="selectBox">
                                        <select value={data?.contentType} name="contentType" onChange={(e)=>handleSelect(e)} id="">
                                            <option>영상유형</option>
                                        </select>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <TextBox
                            title={'제목'}
                            name={'subject'}
                            value={data?.subject}
                            setData={setData}
                        />
                        <TextBox
                            title={'영상링크'}
                            name={'link'}
                            value={data?.link}
                            setData={setData}
                        />
                        <tr>
                            <th>보도일자 <span className="star">*</span></th>
                            <td>
                                <div className="dateBox">
                                    <input type="date" onChange={(e)=>handleChange(e)} value={data?.date} name="date" id="date"/>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
        </>
    )
} 