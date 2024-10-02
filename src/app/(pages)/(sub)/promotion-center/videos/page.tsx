import { Fragment } from "react";

import Videos from "../../../../../components/pages/promotion-center/Videos";
import api from "lib/api";

export default async function PromotionCenterVideos() {
    const response = await api.get(`/user/promotion/getPrVideoList.php?videoType=1&page=1&size=99&keyword=&sortColumn=videoMdate&sortOrder=desc`)
    const data = response?.data?.Result === true ? response?.data?.List : []
    console.log(data)
    return (
        <Fragment>
            <Videos
                data={data}
            />
        </Fragment>
    );
}
