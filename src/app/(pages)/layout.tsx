import type { Metadata } from "next";

// animate css
import "animate.css";
// import swiper css
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
// video player css
import "plyr-react/plyr.css";
// glightbox css
import "glightbox/dist/css/glightbox.css";
// Bootstrap and custom scss
import "assets/scss/style.scss";
import Footer from "../../components/hyundai/Footer";
// import Header from "../../components/hyundai/Header";
import Container from "components/Cotainer";
import ProviderContainer from "components/ProviderContainer";

export const metadata: Metadata = {
  title: "현대엔지니어링",
  authors: [{ name: "현대엔지니어링", url: "https://hdco97.com" }],
  description: "1997년부터 다져온 현대엔지니어링의 기술력과 노하우를 바탕으로 고객 여러분이 보다 안전하고 안락한 공간을 누릴 수 있도록 끊임없는 노력과 최선을 다해 시공하도록 하겠습니다.",
  keywords: ["신축", "증축", "개축", "공장 리모델링", "공장방수", "공장보수"],
  openGraph: {
    title: "현대엔지니어링",
    description: "1997년부터 다져온 종합건설회사, 현대엔지니어링",
    url: "https://hdco97.com",
    siteName: "현대엔지니어링",
    images: [
      {
        url: "https://hdco97.com/og-image.png", // 대표 이미지
        width: 1200,
        height: 630,
        alt: "Hyundae Engineering Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "현대엔지니어링",
    description: "종합건설회사 현대엔지니어링",
    images: ["https://hdco79.com/og-image.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <body>
        <ProviderContainer>
            <Container>
                {children}
            </Container>
        </ProviderContainer>

        <Footer/>
        </body>
        </html>
    );
}
