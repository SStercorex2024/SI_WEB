import useTranslation from "@/hooks/useTranslation"

export const metadata = {
  title: "We create all kinds of bots",
  lang: "en",
  og: {
    title: "We create all kinds of bots",
    description: "FOR YOUR BUSINESS",
    image: "/preview-en.jpg",
    url: "/en/",
  },
}

export default function EnPage() {
  const { t } = useTranslation("en")
  return (
    <section>
      <h1>{t.header.title}</h1>
      <p>{t.banner.subtitle}</p>
    </section>
  )
}
