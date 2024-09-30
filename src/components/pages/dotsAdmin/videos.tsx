'use client'

import TextBox from "components/DotsAdmin/Element/TextBox"
import api from "lib/api"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
interface Props {
    id : any
}
export default function VideosViewBox ({id} : Props) {
    const router = useRouter()
    const [data, setData] = useState<any>({
        videoType : '1', subject : '', link : '', date : '',
    })
    const [contentsType , setContentsType] = useState<any>([])
    
    function handleSelect (e:React.ChangeEvent<HTMLSelectElement>) {
        const {name , value} = e.target;
        setData((prev:any) => ({...prev, [name] : value}))
    }
    
    async function save () {
        const formData = new FormData()
        if(id) {formData.append('videoId', id)}
        formData.append('videoType', '1')
        formData.append('videoNameKr', data?.subject)
        formData.append('videoNameEn', data?.subject)
        formData.append('videoUrlKr', data?.link)
        formData.append('videoUrlEn', data?.link)
        if(id){
            const response = await api.post(`/admin/contents/updPromotionVideo.php`, formData)
            if(response?.data?.result === true){
                alert(response?.data?.resultMsg); router.back()
            } 
        }else{
            const response = await api.post(`/admin/contents/setPromotionVideo.php`, formData)
            if(response?.data?.result === true){
                alert(response?.data?.resultMsg); router.push(`/dotsAdmin/contents-management/videos-list`)
            } 
        }
    }
    useEffect(() => {
        async function fetchTypeList () {
            const res1 = await api.get(`/admin/code/getContentsTypeList.php`);
            if(res1?.data?.result === true) {setContentsType(res1?.data?.List)} 
        }
        fetchTypeList()
    }, [])
    useEffect(()=>{
        async function getDetail () {
            if(id) {
                const response = await api.get(`/admin/contents/getPromotionVideoDetail.php?videoId=${id}`)
            }
        }
        getDetail()
    }, [id])
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
                                        <select value={data?.videoType} name="videoType" onChange={(e)=>handleSelect(e)} id="">
                                            {contentsType?.map((contents : any, index : number) => (
                                                <option key={index} value={contents?.codeId}>{contents?.codeName}</option>
                                            ))}
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
                        
                    </tbody>
                </table>
            </div>
            
        </div>
        </>
    )
} 