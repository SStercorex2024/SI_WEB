import "@/styles"
import Header from "@/layouts/Header"
import Banner from "@/sections/Banner"
import en from "@/locales/en"
import { Head } from "minista"
import Implementation from "@/components/Implementation"
import Content from "@/layouts/Content"
import CMR from "@/sections/CMR"
import Contact from "@/sections/Contact"
import Our from "@/sections/Our"
import Information from "@/sections/Information"
import FooterBg from "@/components/FooterBg"
import ScrollProgress from "@/components/ScrollProgress"

export const metadata = {
  title: en.banner.title,
  lang: "en",
  og: {
    title: en.banner.title,
    description: en.banner.description,
    image: "/preview-en.jpg",
    url: "/",
  },
}

export default function EnPage() {
  const { title, lang, og } = metadata
  return (
    <>
      <Head htmlAttributes={{ lang }}>
        <title>{`CI WEB | ${title}`}</title>
        <meta name="description" content={og.description} />
        <meta property="og:title" content={og.title} />
        <meta property="og:description" content={og.description} />
        <meta property="og:image" content={og.image} />
        <meta property="og:url" content={og.url} />
        <meta property="og:type" content="website" />
        <script src="/src/main.js" type="module" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Header t={en.header} />
      <Content>
        <ScrollProgress />
        <Banner t={en.banner} />
        <Implementation t={en.implementation} />
        <CMR t={en.CMR} />
        <Contact t={en.contact} />
        <Our t={en.ourJobs} />
        <Information t={en.information} />
        <FooterBg />
      </Content>
    </>
  )
}
