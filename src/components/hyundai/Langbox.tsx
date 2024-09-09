'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"

export default function Langbox () {
    const router = useRouter()
    const query = useSearchParams()
    const currentRoute = usePathname()
    const [cookie , setCookie] = useCookies(['LANG'])
    const [lang , setLang] = useState<any>(null)
    function handleLang (e : any, lang : string) {
        e.preventDefault()
        setCookie('LANG', lang, {path : '/'})
        // 언어 변경 시 , url 변경
        const newParams = new URLSearchParams(query.toString())
        newParams.set('lang', lang)
        router.push(`${currentRoute}?${newParams?.toString()}`)
    }
    
    useEffect(()=>{setLang(cookie.LANG)} , [setCookie, cookie])
    return(
        <>
        <li className="nav-item dropdown language-select text-uppercase">
            <a role="button" aria-haspopup="true" aria-expanded="false" data-bs-toggle="dropdown" className="nav-link dropdown-item dropdown-toggle">
                {lang === 'kr' && 'KO'}
                {lang === 'en' && 'EN'}
            </a>
            <ul className="dropdown-menu">
                {LangArr?.map((lang : any) => (
                <li className="nav-item" key={lang?.lang}>
                    <button className="dropdown-item" onClick={(e)=>handleLang(e, lang?.lang)}>{lang?.text}</button>
                </li>
                ))}
            </ul>
        </li>
        </>
    )
}

export const LangArr = [
    {lang : 'kr' , text : 'KO'},
    {lang : 'en' , text : 'EN'}
]