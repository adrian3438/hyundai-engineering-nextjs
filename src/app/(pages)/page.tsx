import { Fragment } from "react";

// CUSTOM ICON COMPONENT

import Main from "../../components/pages/Main";
import Header from "../../components/hyundai/Header";
import { fetchLanguage } from "utils/fetchLanguage";

export default async function Home({searchParams : {lang}} : 'kr' | 'en' | any) {
  const language = await fetchLanguage(lang)
  return (
      <Fragment>
          <Main/>
      </Fragment>
  );
}
