'use client'

export default function AdminHeader () {

    return(
        <>
        <div className="dotsHeader">
            <div className="header">
                <div>
                    <div>
                        <div>
                            <span>관리자 : 관리자</span>
                            <i className="fa-regular fa-chevron-down"></i>
                        </div>
                    </div>
                    <div>
                        <button>로그아웃</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}