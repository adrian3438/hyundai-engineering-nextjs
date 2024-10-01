import { Fragment } from "react";
import PortfolioDetail from "../../../../../components/pages/promotion-center/PortfolioDetail";
import api from "lib/api";

interface ParamsType {
    params : {id : string | undefined}
}
export default async function PromotionCenter({params : {id}} : ParamsType ) {

    // const response = await api.get(`/user/contents/getContentDetail2.php?ID=${id}&contentType=2&userLang=KR`) 
    // console.log(response?.data)
    // const list = response?.data?.result === true && response?.data?.List?.length > 0 ? response?.data?.List[0] : null;
    // const next = response?.data?.result === true && response?.data?.next?.length > 0 ? response?.data?.next[0] : null;
    // const prev = response?.data?.result === true && response?.data?.prev?.length > 0 ? response?.data?.prev[0] : null;

    return (
        <Fragment>
            <PortfolioDetail
                id={id}
                // data={list}
                // next={next}
                // prev={prev}
            />
        </Fragment>
    );
}
