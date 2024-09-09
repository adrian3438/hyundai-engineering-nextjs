import { Fragment } from "react";

import CeoGreeting from "../../../../../components/pages/company/CeoGreeting";
import { fetchLanguage } from "utils/fetchLanguage";


export default async function Company({searchParams : {lang}} : any) {
  const language = await fetchLanguage(lang)
  return (
      <Fragment>
        <CeoGreeting/>
      </Fragment>
  );
}
