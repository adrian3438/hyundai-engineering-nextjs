import { Fragment } from "react";
import { cookies } from "next/headers";
import News from "../../../../../components/pages/promotion-center/News";
import { fetchLanguage } from "utils/fetchLanguage";
import api from "lib/api";

export default async function PromotionCenter({params, searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang)
    const cookie = cookies()
    const cookieLang : any = cookie.get('LANG') || 'kr'
    const langValue = lang || cookieLang?.value
    const response = await api.get(`/user/promotion/getContentsList.php?contentType=${1}&userLang=${langValue}&page=1&size=10&sortColumn=date&sortOrder=desc`)
    const data = response?.data?.result === true ? response?.data?.List : null;
    console.log(data)
    return (
        <Fragment>
            <News data={data} language={language}/>
        </Fragment>
    );
}
