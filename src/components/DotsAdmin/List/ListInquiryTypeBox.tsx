import { usePathname, useRouter, useSearchParams } from "next/navigation"
interface Props {
    inquiryType : string
}
export default function ListInquiryTypeBox ({inquiryType} : Props) {

    const router = useRouter()
    const path = usePathname()
    const query = useSearchParams()
    function search (e:any){
        const newParams : number | any = new URLSearchParams(query.toString())
        newParams.set('inquiryType', e.target.value)
        router.push(`${path}?${newParams?.toString()}`)
    }
    return(
        <>
        <div className="selectBox">
            <select value={inquiryType} name="" id="" onChange={search}>
                <option value="ALL" selected>전체</option>
                <option value="NB" selected>신축</option>
                <option value="RE" selected>증개축</option>
                <option value="FR" selected>공장리보델링</option>
                <option value="FW" selected>공장방수</option>
                <option value="FP" selected>공장보수</option>
            </select>
        </div>
        </>
    )
}
