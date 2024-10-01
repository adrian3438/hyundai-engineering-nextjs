'use client'
import ListSearchBox from "components/DotsAdmin/List/ListSearchBox";
import ListSizeBox from "components/DotsAdmin/List/ListSizeBox";
import api from "lib/api";
import { useAppSelector } from "store/hooks";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ListFilter from "components/DotsAdmin/List/ListFilter";

interface Props {
    page : number
    size : number
    keyword : string
    sortColumn : string
    sortOrder : string
}

export default function VideosListBox ({
    page , size , keyword , sortColumn , sortOrder
} : Props) {
    const router = useRouter()
    const [data, setData] = useState<[]>([])
    const [totalCount , setTotalCount] = useState<number>(0)
    async function getList () {
        try {   
            const response = await api.get(`/admin/contents/getPromotionVideoList.php?contentType=0&page=1&size=${size}&keyword=${keyword}&sortColumn=videoMdate&sortOrder=desc`)
            if(response?.data?.result === true) {setData(response?.data?.List)}
            else {alert(response?.data?.resultMsg); setData([])}
        }catch{
            alert('Server Error')
        }
    }
    async function statusChange (id : number , status : string){
        try{
            const formData : number | string | any = new FormData()
            formData.append('videoId', id)
            formData.append('videoActiveStatus', status === 'Y' ? 'N' : 'Y')
            const response = await api.post(`/admin/contents/updPromotionVideoActiveStatus.php`, formData)
            if(response?.data?.result === true) getList()
            else alert(response?.data?.resultMsg)
        }catch{alert('Server Error')}
    }
    useEffect(()=>{getList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keyword])
    return(
        <>
        <div className="contentBox whistleBlow">
            <h3>Videos</h3>
            <div className="flexBox">
                <div>
                    <h4>홍보영상 관리</h4>
                </div>
            </div>

            <div className="toolBox">
                <div className="left">
                    <div className="selectBox">
                        <ListSizeBox
                            size={size}
                        />
                    </div>
                </div>

                <div className="right">
                    <div className="btnBox">
                        <button className="blueBtn" onClick={()=>router.push(`/dotsAdmin/contents-management/videos`)}>신규등록</button>
                    </div>
                    <ListSearchBox
                        keyword={keyword}
                    />
                </div>
            </div>

            <div className="tableWrap">
                <div className="tableType_a">
                    <table>
                        <ListFilter

                        />
                        <tbody>
                            {data?.map((list:any, index:number) => (
                                <tr key={index} style={{cursor : 'pointer'}}>
                                    <td onClick={()=>router.push(`/dotsAdmin/contents-management/videos?id=${list?.videoId}`)}>
                                        <span className="readOnly">{'-'}</span>
                                    </td>
                                    <td onClick={()=>router.push(`/dotsAdmin/contents-management/videos?id=${list?.videoId}`)}>
                                        <span className="readOnly">{list?.videoTypeName}</span>
                                    </td>
                                    <td onClick={()=>router.push(`/dotsAdmin/contents-management/videos?id=${list?.videoId}`)}>
                                        <span className="readOnly">{list?.videoNameKr}</span>
                                    </td>
                                    <td>
                                        <span className="readOnly"><a href={list?.videoUrlKr} target="_blank"><i className="fa-brands fa-youtube" aria-hidden="true"></i></a></span>
                                    </td>
                                    <td onClick={()=>router.push(`/dotsAdmin/contents-management/videos?id=${list?.videoId}`)}>
                                        <span className="readOnly">{list?.videoPublishDate}</span>
                                    </td>
                                    <td onClick={()=>router.push(`/dotsAdmin/contents-management/videos?id=${list?.videoId}`)}>
                                        <span className="readOnly">{list?.videoMdate}</span>
                                    </td>
                                    <td>
                                        <div className="toggleSwitchBox">
                                            <span className="toggleSwitch">
                                                <input 
                                                type="checkbox" 
                                                id={`commoncode_${list?.videoId}`}
                                                className="toggleIpt"
                                                checked={list?.videoActiveStatus === 'Y'}
                                                onChange={()=>statusChange(list?.videoId, list?.videoActiveStatus)}
                                                hidden
                                                />
                                                <label htmlFor={`commoncode_${list?.videoId}`} className="toggleSwitch">
                                                    <span className="toggleButton"></span>
                                                </label>
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div className="pagerBox">
                <p>Showing 1 to 10 of 98 entries</p>
                =
            </div>
        </div>
        </>
    )
}