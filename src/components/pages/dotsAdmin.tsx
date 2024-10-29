'use client'

import api from "lib/api"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useAppDispatch } from "store/hooks"
import { setUser } from "store/Slices/adminInfoSlice"
import { useCookies } from 'react-cookie'

export default function AdminLoginPage () {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const [cookie , setCookie] = useCookies(['hessid']);
    const [login, setLogin] = useState<{id :string, password : string}>({
        id : '', password : ''
    })
    function handleChange(e:React.ChangeEvent<HTMLInputElement>){
        const {name, value} = e.target;
        setLogin((prev) => ({...prev, [name] : value}))
    }
    async function handleLogin () {
        try{
            const formData = new FormData()
            formData.append('managerLoginId', login?.id)
            formData.append('managerPass', login?.password)
            const res = await api.post(`/admin/manager/adminLogin.php`, formData)
            if(res?.data?.result === true) {
                setCookie('hessid', res.data.uuid, { path: '/' }); // You can adjust the options as needed
                dispatch(setUser({users : res.data}));
                router.push(`/dotsAdmin/common-code-management/common-code-list`);
            }else{
                alert(res.data.resultMsg);
            }
        }catch{
            alert('Server Error')
        }
    }
    function handleEnter (e:React.KeyboardEvent<HTMLInputElement>){
        if(e.key==='Enter') handleLogin()
    }
    return(<>
    <div className="admin_loginBox">
        <h2>Hyundai Engineering</h2>
        <p>로그인 후 더욱 다양한 서비스를 이용해 보세요.</p>
        <div>
                <div className="inputList">
                    <label htmlFor="">
                        <img src="/img/dotsAdmin/form_id.png" alt="login"/>
                    </label>
                    <input 
                        type="text" 
                        onChange={handleChange} 
                        name="id" 
                        id="" 
                        onKeyDown={handleEnter}
                        placeholder="아이디"
                    />
                </div>
                <div className="inputList">
                    <label htmlFor="">
                        <img src="/img/dotsAdmin/form_pw.png" alt="password"/>
                    </label>
                    <input 
                        type="password" 
                        onChange={handleChange} 
                        name="password" 
                        id="" 
                        onKeyDown={handleEnter}
                        placeholder="비밀번호"
                    />
                </div>
                <div className="inputCheckBox">
                    <input type="checkbox" name="id_save" id="id_save"/>
                    <label htmlFor="id_save">아이디 저장</label>
                </div>

                <button 
                    className="admin_loginBtn"
                    onClick={handleLogin}
                >로그인</button>
            </div>
    </div>
    </>)
}