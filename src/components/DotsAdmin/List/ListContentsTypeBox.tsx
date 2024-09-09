export default function ListContentsTypeBox () {

    return(
        <>
        <div className="selectBox">
            <select value={''} name="" id="">
                <option value="0">전체 카테고리</option>
                {contentsData?.map((list:any, index:number)=>(
                    <option key={index} value={list?.codeId}>{list?.codeName}</option>
                ))}
            </select>
        </div>
        </>
    )
}

export const contentsData = [
    {codeId : 1, codeName : '포트폴리오'},
    {codeId : 2, codeName : '영상'},
    {codeId : 3, codeName : '소식지'},
]