import { Fragment } from "react";
import { cookies } from "next/headers";
import News from "../../../../../components/pages/promotion-center/News";
import { fetchLanguage } from "utils/fetchLanguage";
import api from "lib/api";

export default async function PromotionCenterNews({params, searchParams : {lang, page, business}} : any) {
    const language = await fetchLanguage(lang)
    const cookie = cookies()
    const cookieLang : any = cookie.get('LANG') || 'kr'
    const langValue = lang || cookieLang?.value

    // 리스트
    const response = await api.get(`/user/promotion/getContentsList.php?contentType=${1}&businessDivisionType=${business || '0'}&userLang=${langValue}&page=${page || 1}&size=10&sortColumn=date&sortOrder=desc`)
    // 사업영역 리스트
    const response1 = await api.get(`/admin/code/getBusinessDivisionTypeList.php`)
    // Popular 리스트
    const popularResponse = await api.get(`/user/promotion/getPopularNews.php?userLang=KR`)
    // 사업영역 갯수 가져오기
    const categoryResponse = await api.get(`/user/promotion/getCategoryList.php`)

    const data = response?.data?.result === true ? response?.data?.List : null;
    const bussinessTypeList = response1?.data?.result === true ? response1?.data?.List : []
    const totalCount = response?.data?.result === true ? response?.data?.totalCnt : 0
    const popularList = popularResponse?.data?.result === true ? popularResponse?.data?.List : []
    const categoryList = categoryResponse?.data?.result === true ? categoryResponse?.data?.List : []
    return (
        <Fragment>
            <News
                data={data}
                bussinessTypeList={bussinessTypeList}
                language={language}
                page={page || 1}
                business={business || '0'}
                totalCount={totalCount}
                popularList={popularList}
                categoryList={categoryList}
            />
        </Fragment>
    );
}
