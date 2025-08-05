import Banner from "@/sections/Banner"
import useTranslation from "@/hooks/useTranslation";

export const metadata = {
  title: "Home",
}

export default function Home() {
  const { t } = useTranslation()
  return <Banner t={t.banner} />
}
