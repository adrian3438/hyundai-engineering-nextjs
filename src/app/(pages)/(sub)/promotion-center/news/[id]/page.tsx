import { Fragment } from "react";

import NewsDetail from "../../../../../../components/pages/promotion-center/NewsDetail";

interface ParamsType {
    params : {id : string | undefined}
}
export default function PromotionCenter({params : {id}} : ParamsType) {
    return (
        <Fragment>
            <NewsDetail
                id={id}
            />
        </Fragment>
    );
}
