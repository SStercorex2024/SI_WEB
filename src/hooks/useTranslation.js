import en from "@/locales/en"
import uk from "@/locales/uk"

const translations = { en, uk }

const useTranslation = (lang = "en") => {
  const t = translations[lang] || translations["en"]
  return { t, lang }
}

export default useTranslation
