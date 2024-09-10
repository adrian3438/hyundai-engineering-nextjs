import Footer from "../../../components/hyundai/Footer";

import Header from "../../../components/hyundai/Header";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <header>
                <Header
                    navClassName="navbar navbar-expand-lg center-nav transparent navbar-light"
                    button={
                        <a href="/sitemap" className="d-md-none d-lg-block">
                            <i className="uil uil-bars fs-35 text-navy"></i>
                        </a>
                    }
                />
            </header>
            {children}
        </>
    );
}
