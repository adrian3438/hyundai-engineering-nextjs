import NextLink from "../reuseable/links/NextLink";
import {NavBarData} from "../../data/hyundai/navBarData"

interface Props {
    depthId?: 'menu1' | 'menu2' | 'menu3',
    activeId?: number,
}

export default function NavBar({depthId, activeId}: Props) {
    return (
        <div className="border-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-auto p-0">
                        <a href="/" className="px-5 py-4 d-inline-block lh-1 bg-blue"><i className="uil uil-home fs-20 text-white"></i></a>
                    </div>
                    {depthId &&
                        <div className="col-auto p-0 d-none d-md-block">
                            <ul className="mb-0 p-0 d-flex">
                                {NavBarData.kr[depthId]?.map((item, index) => (
                                    <NextLink href={item.linkUrl} key={index} title={item.title}
                                      className={`fs-19 border-end py-3 px-9 align-items-center ${index === activeId ? 'fw-bold active pb-2' : ''}`}
                                    />
                                ))}
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}