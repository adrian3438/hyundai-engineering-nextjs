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
                <option value="S" selected>스마일리더 랩</option>
                <option value="T" selected>테스터</option>
                <option value="N" selected>영양제</option>
                <option value="F" selected>식품</option>
                <option value="O" selected>기타</option>
            </select>
        </div>
        </>
    )
}