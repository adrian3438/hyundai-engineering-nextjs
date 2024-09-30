'use client'

import { usePathname, useRouter } from "next/navigation"

export default function AdminSideBar () {
    const pathname = usePathname()
    const splitPath = pathname?.split('/')
    const router = useRouter()
    return(
        <>
        {/* members. product. content. pr_video. certificate. inquiry. settings */}
        <aside>
            <h2>
                <img src="/img/hyundai/logo-light.png" alt="hyundae"/>
            </h2>
            <ul className="mainMenu">

                <li className={splitPath[2] === 'common-code-management' ? 'content active' : 'content'}>
                    <span onClick={()=>router.push(`/dotsAdmin/common-code-management/common-code-list/`)}>공용코드 관리</span>
                    <ul className="subMenu">
                        <li className={splitPath[3]==='common-code-list' || splitPath[3]==='common-code'? 'active' : ''} onClick={()=>router.push(`/dotsAdmin/common-code-management/common-code-list/`)}>
                            <span>컨텐츠 유형관리</span>
                        </li>
                        <li className={splitPath[3]==='bussiness-code-list' || splitPath[3]==='bussiness-code'? 'active' : ''} onClick={()=>router.push(`/dotsAdmin/common-code-management/bussiness-code-list/`)}>
                            <span>사업영역 유형관리</span>
                        </li>
                    </ul>
                </li>

                <li className={splitPath[2] === 'contents-management' ? 'content active' : 'content'}>
                    <span onClick={()=>router.push(`/dotsAdmin/contents-management/contents-list/`)}>컨텐츠 관리</span>
                    <ul className="subMenu">
                        <li className={splitPath[3]==='contents-list' || splitPath[3]==='contents'? 'active' : ''} onClick={()=>router.push(`/dotsAdmin/contents-management/contents-list/`)}>
                            <span>컨텐츠 관리</span>
                        </li>
                        <li className={splitPath[3]==='videos-list' || splitPath[3]==='videos'? 'active' : ''} onClick={()=>router.push(`/dotsAdmin/contents-management/videos-list/`)}>
                            <span>홍보영상 관리</span>
                        </li>
                    </ul>
                </li>

                <li className={splitPath[2] === 'inquiry-management' ? 'inquiry active' : 'inquiry'}>
                    <span onClick={()=>router.push(`/dotsAdmin/inquiry-management/inquiry-list/`)}>문의관리</span>
                    <ul className="subMenu">
                        <li className={splitPath[3]==='inquiry-list' || splitPath[3]==='inquiry'? 'active' : ''} onClick={()=>router.push(`/dotsAdmin/inquiry-management/inquiry-list/`)}>
                            <span>문의접수</span>
                        </li>
                    </ul>
                </li>

                <li className={splitPath[2] === 'admin-account-management' ? 'settings active' : 'settings'}>
                    <span onClick={()=>router.push(`/dotsAdmin-account-management/dotsAdmin-account-list/`)}>관리자 계정관리</span>
                    <ul className="subMenu">
                        <li className={splitPath[3]==='admin-account-list' || splitPath[3]==='admin-account'? 'active' : ''} onClick={()=>router.push(`/dotsAdmin-account-management/dotsAdmin-account-list/`)}>
                            <span>관리자 계정</span>
                        </li>
                    </ul>
                </li>
                
            </ul>
        </aside>
        </>
    )
}