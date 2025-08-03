import locales from "@/locales"

export function useTranslation(lang = "en") {
  const t = locales[lang] || locales["en"]
  return { t, lang }
}
