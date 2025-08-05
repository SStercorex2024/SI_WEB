class OverlayMenu {
  selectors = {
    burger: "[data-js-burger-button]",
    menu: "[data-js-burger-menu]",
    sublistRoot: "[data-js-sublist]",
  }

  stateClasses = {
    isActive: "is-active",
    isShadow: "is-shadow",
  }

  constructor() {
    this.burgerButton = document.querySelector(this.selectors.burger)
    this.burgerMenu = document.querySelector(this.selectors.menu)
    this.body = document.body

    if (!this.burgerButton || !this.burgerMenu) return

    this.init()
  }

  init = () => {
    this.burgerButton.addEventListener("click", this.toggleMenu)
    window.addEventListener("resize", this.handleResize)
  }

  toggleMenu = () => {
    const isActive = this.burgerButton.classList.contains(
      this.stateClasses.isActive,
    )

    this.closeAllSublistActives()

    if (isActive) {
      this.closeMenu()
    } else {
      this.openMenu()
    }
  }

  openMenu = () => {
    this.burgerButton.classList.add(this.stateClasses.isActive)
    this.burgerMenu.classList.add(this.stateClasses.isActive)
    this.body.classList.add(this.stateClasses.isShadow)
  }

  closeMenu = () => {
    this.burgerButton.classList.remove(this.stateClasses.isActive)
    this.burgerMenu.classList.remove(this.stateClasses.isActive)
    this.body.classList.remove(this.stateClasses.isShadow)
  }

  closeAllSublistActives = () => {
    const root = document.querySelector(this.selectors.sublistRoot)
    if (!root) return

    root.querySelectorAll(`.${this.stateClasses.isActive}`).forEach((el) => {
      el.classList.remove(this.stateClasses.isActive)
    })
  }

  handleResize = () => {
    if (window.innerWidth > 959) {
      this.closeMenu()
    }
  }
}

export default OverlayMenu
