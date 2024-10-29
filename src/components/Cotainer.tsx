'use client'

import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { useCookies } from "react-cookie"
import Providers from "../redux/provider"
import AdminSideBar from "./DotsAdmin/SideBar"
import AdminHeader from "./DotsAdmin/AdminHeader"

export default function Container ({children} : any) {
    const pathname = usePathname()
    const splitPath = pathname.split('/')
    const [cookie, setCookie] = useCookies(['LANG'])
    useEffect(() => {
        if(cookie.LANG === undefined){
            setCookie('LANG', 'kr', {path : '/'})
        }
        document.body.style.overflowY = 'visible';
    }, [cookie?.LANG, setCookie, pathname])
    return(
        <>
        {splitPath[1] === 'dotsAdmin' ?
        <Providers>
            <div className="admin_wrap">
                {splitPath[2] ? <AdminHeader/> : ''}
                {splitPath[2] ? <AdminSideBar/> : ''}
                <div className="dotsContentWrap">
                {children}
                </div>
            </div>
        </Providers>

        :
        <>
           {children}
        </>
        }
        </>
    )
}