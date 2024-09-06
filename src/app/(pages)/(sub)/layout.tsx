import Footer from "../../../components/hyundai/Footer";
import Header from "../../../components/hyundai/Header";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <header className="w-100">
                <Header
                    navClassName="navbar navbar-expand-lg center-nav transparent navbar-light"
                />
            </header>
            {children}
        </>
    );
}
