import en from "@/locales/en"
import uk from "@/locales/uk"

const translations = { en, uk }

const useTranslation = (lang = "en") => {
  return translations[lang] || translations["en"]
}

export default useTranslation
