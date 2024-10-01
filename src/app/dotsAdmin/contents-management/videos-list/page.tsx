import VideosListBox from "components/pages/dotsAdmin/videos-list";
interface SearchParamsType {
    searchParams : {
        page : number 
        size : number
        keyword : string
        sortColumn : string
        sortOrder : string
    }
}
export default function VideosList ({searchParams : {page , size , keyword , sortColumn , sortOrder}} : SearchParamsType) {

    return(
        <>
        <VideosListBox
            page={page || 1}
            size={size || 25}
            keyword={keyword || ''}
            sortColumn={sortColumn || 'videoMdate'}
            sortOrder={sortOrder || 'desc'}
        />
        </>
    )
}