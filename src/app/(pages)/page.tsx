import { Fragment } from "react";

// CUSTOM ICON COMPONENT

import Main from "../../components/pages/Main";
import Header from "../../components/hyundai/Header";
import { fetchLanguage } from "utils/fetchLanguage";
import api from "lib/api";

export default async function Home({searchParams : {lang}} : 'kr' | 'en' | any) {
  const language = await fetchLanguage(lang)
  // 소식지 가져오기
  // const response1 = await api.get(`/user/promotion/getContentsList.php?contentType=${1}&businessDivisionType=0&userLang=${'KR'}&page=${1}&size=3&sortColumn=date&sortOrder=desc`)
  // 포트폴리오 가져오기
  // const response2 = await api.get(`/user/promotion/getContentsList.php?contentType=${2}&businessDivisionType=0&userLang=KR&page=1&size=3&sortColumn=date&sortOrder=desc`)

  // const news = response1?.data?.result === true ? response1?.data?.List : []
  // const portFolio = response2?.data?.result === true ? response2?.data?.List : []
  return (
      <Fragment>
          <Main />
      </Fragment>
  );
}
