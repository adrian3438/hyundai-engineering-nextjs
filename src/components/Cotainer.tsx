'use client'

import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { useCookies } from "react-cookie"
import Providers from "../redux/provider"
import AdminSideBar from "./DotsAdmin/SideBar"
import AdminHeader from "./DotsAdmin/AdminHeader"
import api from "lib/api"

export default function Container ({children} : any) {
    const pathname = usePathname()
    const splitPath = pathname.split('/')
    const [cookie, setCookie] = useCookies(['LANG', 'hessid']);
    console.log(cookie.hessid)
    async function getAdminInfo () {
        const formData : any = new FormData()
        formData.append('managerUuid' , cookie.hessid)
        if(splitPath[1] === 'dotsAdmin'){
            const response = await api.post(`/admin/manager/getManagerInfo.php` , formData)
        }
    }
    useEffect(() => {getAdminInfo()} , [splitPath])
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