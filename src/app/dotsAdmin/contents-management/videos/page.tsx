import VideosViewBox from "components/pages/dotsAdmin/videos"

interface SearchParamsType {
    searchParams : {
        id : any
    }
}
export default function Videos ({searchParams : {id}} : SearchParamsType) {

    return(
        <>
        <VideosViewBox
            id={id}
        />
        </>
    )
}