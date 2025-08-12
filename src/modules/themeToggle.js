export default class ThemeToggle {
  constructor(toggleBtnSelector) {
    this.selectors = {
      themeDark: "theme-dark",
      isDark: "is-dark",
    }

    this.root = document.documentElement
    this.toggleBtn = document.querySelector(toggleBtnSelector)

    this.initTheme()

    if (this.toggleBtn) {
      this.toggleBtn.addEventListener("click", () => this.handleClick())
    }
  }

  initTheme() {
    const savedTheme = localStorage.getItem("theme")

    if (savedTheme) {
      this.root.classList.toggle(
        this.selectors.themeDark,
        savedTheme === "dark",
      )
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      this.root.classList.add(this.selectors.themeDark)
      localStorage.setItem("theme", "dark")
    } else {
      localStorage.setItem("theme", "light")
    }

    this.syncButton()
  }

  handleClick() {
    const isDark = this.root.classList.toggle(this.selectors.themeDark)
    localStorage.setItem("theme", isDark ? "dark" : "light")
    this.syncButton()
  }

  syncButton() {
    if (!this.toggleBtn) {
      return
    }
    const isDarkMode = this.root.classList.contains(this.selectors.themeDark)
    this.toggleBtn.classList.toggle(this.selectors.isDark, isDarkMode)
  }
}
