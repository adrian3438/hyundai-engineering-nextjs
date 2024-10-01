import { Fragment } from "react";
import { cookies } from "next/headers";
import News from "../../../../../components/pages/promotion-center/News";
import { fetchLanguage } from "utils/fetchLanguage";
import api from "lib/api";

export default async function PromotionCenterNews({params, searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang)
    const cookie = cookies()
    const cookieLang : any = cookie.get('LANG') || 'kr'
    const langValue = lang || cookieLang?.value
    const response = await api.get(`/user/promotion/getContentsList.php?contentType=${1}&businessDivisionType=0&userLang=${langValue}&page=1&size=10&sortColumn=date&sortOrder=desc`)
    const response1 = await api.get(`/admin/code/getBusinessDivisionTypeList.php`)
    const data = response?.data?.result === true ? response?.data?.List : null;
    const bussinessTypeList = response1?.data?.result === true ? response1?.data?.List : []
    return (
        <Fragment>
            <News data={data} bussinessTypeList={bussinessTypeList} language={language}/>
        </Fragment>
    );
}
