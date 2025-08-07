import "./LanguageSwitcher.scss"
import { Link } from "minista"
import uk from "@/locales"
import en from "@/locales"

const LanguageSwitcher = ({ currentLang }) => {
  return (
    <div className="language-switcher">
      <Link
        href="/"
        className={currentLang === "en" ? "active" : ""}
        aria-current={currentLang === "en" ? "page" : undefined}
      >
        EN
      </Link>
      <span> | </span>
      <Link
        href="/uk"
        className={currentLang === "uk" ? "active" : ""}
        aria-current={currentLang === "uk" ? "page" : undefined}
      >
        UK
      </Link>
    </div>
  )
}

export default LanguageSwitcher
