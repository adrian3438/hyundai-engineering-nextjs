import { Fragment } from "react";

import Portfolio from "../../../../components/pages/promotion-center/Portfolio";
import api from "lib/api";

interface SearchParamsType {
    searchParams : {
        page : number , type : number
    }
}

export default async function PromotionCenterPortFolio({searchParams : {page , type}} : SearchParamsType) {
    const responseList = await api.get(`/user/promotion/getContentsList.php?contentType=${2}&businessDivisionType=${type || 0}&userLang=KR&page=${page || 1}&size=99&sortColumn=date&sortOrder=desc`)
    const list = responseList?.data?.result === true ? responseList?.data?.List : []
    
    const responseBussinessType = await api.get(`/admin/code/getBusinessDivisionTypeList.php`)
    const bussinessTypeList = responseBussinessType?.data?.result === true ? responseBussinessType?.data?.List : []
    
    const totalCount = responseList?.data?.result === true ? responseList?.data?.totalCnt : 0

    return (
        <Fragment>
            <Portfolio
                page={page}
                typeList={bussinessTypeList}
                type={type}
            />
        </Fragment>
    );
}
