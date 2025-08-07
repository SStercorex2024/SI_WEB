import Banner from "@/sections/Banner"
import useTranslation from "@/hooks/useTranslation"

export const metadata = {
  title: "Ми створюємо найрізноманітніших ботів",
  lang: "uk",
  og: {
    title: "Ми створюємо найрізноманітніших ботів",
    description: "ДЛЯ ВАШОГО БІЗНЕСУ",
    image: "/preview-uk.jpg",
    url: "/uk/",
  },
}

export default function UkPage({ params }) {
  const lang = params?.lang || metadata.lang || "uk"
  const t = useTranslation(lang)

  return <Banner t={t.banner} />
}
