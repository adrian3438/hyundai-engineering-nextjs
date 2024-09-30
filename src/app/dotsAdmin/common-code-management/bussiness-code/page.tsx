import BussinessCodeViewPage from "components/pages/dotsAdmin/bussiness-code";
interface searchParamsType {
    searchParams : {
        id : string
    }
}
export default function BussinessCode ({searchParams : {id}} : searchParamsType ) {

    return(
        <>
        <BussinessCodeViewPage
            id={id}
        />
        </>
    )
}