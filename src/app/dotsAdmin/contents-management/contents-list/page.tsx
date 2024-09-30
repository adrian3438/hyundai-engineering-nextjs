import ContentsListPage from "components/pages/dotsAdmin/contents-list";

export default function ContentsList ({searchParams : {
    contentsType, bussinessType, page, size, keyword, column, order
}} : any) {

    return(
        <>
        <ContentsListPage
            contentsType={contentsType || 0}
            bussinessType={bussinessType || 0}
            page={page || 1}
            size={size || 25}
            keyword={keyword || ''}
            column={column || 'promDate'}
            order={order || 'desc'}
        />
        </>
    )
}