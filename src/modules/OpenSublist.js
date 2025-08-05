class OpenSublist {
  selectors = {
    root: "[data-js-sublist]",
    button: "[data-js-sublist-button]",
    sublist: "[data-js-sublist-list]",
  }

  stateClasses = {
    isActive: "is-active",
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    if (!this.rootElement) return

    this.init()
  }

  init = () => {
    this.rootElement.addEventListener("click", this.handleClick)
  }

  handleClick = (e) => {
    const button = e.target.closest(this.selectors.button)
    if (!button || !this.rootElement.contains(button)) return

    const container = button.closest(
      ".header__list-item--sublist, .header__buttons-sublist",
    )
    if (!container) return

    const sublist = container.querySelector(this.selectors.sublist)
    if (!sublist) return

    container.classList.toggle(this.stateClasses.isActive)
  }
}

export default OpenSublist
