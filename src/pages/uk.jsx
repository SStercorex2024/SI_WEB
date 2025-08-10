import "@/styles"
import Header from "@/layouts/Header"
import Banner from "@/sections/Banner"
import uk from "@/locales/uk"
import { Head } from "minista"
import Implementation from "@/components/Implementation"
import Content from "@/layouts/Content"
import CMR from "@/sections/CMR"
import Contact from "@/sections/Contact"

export const metadata = {
  title: uk.banner.title,
  lang: "uk",
  og: {
    title: uk.banner.title,
    description: uk.banner.description,
    image: "/preview-uk.jpg",
    url: "/uk/",
  },
}

export default function UkPage() {
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
      <Header t={uk.header} />
      <Content>
        <Banner t={uk.banner} />
        <Implementation t={uk.implementation} />
        <CMR t={uk.CMR} />
        <Contact t={uk.contact} />
      </Content>
    </>
  )
}
