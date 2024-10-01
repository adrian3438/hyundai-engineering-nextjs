import { Fragment } from "react";

import PortfolioDetail from "../../../../../components/pages/promotion-center/PortfolioDetail";
import api from "lib/api";

interface ParamsType {
    params : {id : string | undefined}
}
export default async function PromotionCenter({params : {id}} : ParamsType ) {

    const response = await api.get(`/user/contents/getContentDetail.php?ID=${id}&contentType=2&userLang=KR`) 
    console.log(response?.data)
    return (
        <Fragment>
            <PortfolioDetail/>
        </Fragment>
    );
}
