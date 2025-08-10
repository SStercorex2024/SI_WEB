export default class SelectMate {
  constructor(rootSelector) {
    this.rootElements =
      typeof rootSelector === "string"
        ? document.querySelectorAll(rootSelector)
        : rootSelector instanceof NodeList
          ? rootSelector
          : [rootSelector]

    this.isMobile = this._isMobileDevice()
    this._init()
  }

  _isMobileDevice() {
    return (
      typeof window.orientation !== "undefined" ||
      navigator.userAgent.indexOf("IEMobile") !== -1
    )
  }

  _init() {
    this.rootElements.forEach((rootEl, index) => {
      rootEl.setAttribute("data-indx-select", index)
      rootEl.setAttribute("data-selec-open", "false")

      const selectEl = rootEl.querySelector("select")
      const ulCont = rootEl.querySelector(".cont_select_int")
      const selectedOptionP = rootEl.querySelector(".selecionado_opcion")
      const iconEl = rootEl.querySelector(".icon_select_mate")

      selectedOptionP.setAttribute("data-n-select", index)
      iconEl.setAttribute("data-n-select", index)

      ulCont.innerHTML = ""

      const options = selectEl.options
      for (let i = 0; i < options.length; i++) {
        const li = document.createElement("li")
        li.innerHTML = options[i].innerHTML
        li.setAttribute("data-index", i)
        li.setAttribute("data-selec-index", index)
        li.style.cursor = "pointer"

        if (options[i].selected || selectEl.value === options[i].innerHTML) {
          li.classList.add("active")
          selectedOptionP.innerHTML = options[i].innerHTML
        }

        li.addEventListener("click", () => this._selectOption(i, index))
        ulCont.appendChild(li)
      }

      if (this.isMobile) {
        selectEl.addEventListener("change", () => {
          this._selectOption(selectEl.selectedIndex, index)
        })
      }

      selectedOptionP.addEventListener("click", () => this._toggleSelect(index))
      iconEl.addEventListener("click", () => this._toggleSelect(index))
    })
  }

  _toggleSelect(index) {
    const rootEl = document.querySelector(`[data-indx-select='${index}']`)
    const ulCont = rootEl.querySelector(".cont_select_int")
    const iconEl = rootEl.querySelector(".icon_select_mate")
    const isOpen = rootEl.getAttribute("data-selec-open") === "true"

    if (this.isMobile) {
      const selectEl = rootEl.querySelector("select")
      if (document.createEvent) {
        const evt = document.createEvent("MouseEvents")
        evt.initMouseEvent("mousedown", true, true, window)
        selectEl.dispatchEvent(evt)
      } else if (selectEl.fireEvent) {
        selectEl.fireEvent("onmousedown")
      } else {
        selectEl.click()
      }
    } else {
      if (!isOpen) {
        const lis = ulCont.querySelectorAll("li")
        let totalHeight = 0
        lis.forEach((li) => {
          totalHeight += li.offsetHeight
        })
        ulCont.style.height = totalHeight + "px"
        rootEl.setAttribute("data-selec-open", "true")
        iconEl.style.transform = "rotate(180deg)"
      } else {
        ulCont.style.height = "0px"
        rootEl.setAttribute("data-selec-open", "false")
        iconEl.style.transform = "rotate(0deg)"
      }
    }
  }

  _selectOption(optionIndex, selectIndex) {
    const rootEl = document.querySelector(`[data-indx-select='${selectIndex}']`)
    const selectEl = rootEl.querySelector("select")
    const ulCont = rootEl.querySelector(".cont_select_int")
    const lis = ulCont.querySelectorAll("li")
    const selectedOptionP = rootEl.querySelector(".selecionado_opcion")

    lis.forEach((li, idx) => {
      if (idx === optionIndex) {
        li.classList.add("active")
      } else {
        li.classList.remove("active")
      }
    })

    selectedOptionP.innerHTML = lis[optionIndex].innerHTML
    selectEl.selectedIndex = optionIndex

    const event = new Event("change", { bubbles: true })
    selectEl.dispatchEvent(event)

    this._closeSelect(selectIndex)
  }

  _closeSelect(index) {
    const rootEl = document.querySelector(`[data-indx-select='${index}']`)
    const ulCont = rootEl.querySelector(".cont_select_int")
    const iconEl = rootEl.querySelector(".icon_select_mate")
    ulCont.style.height = "0px"
    rootEl.setAttribute("data-selec-open", "false")
    iconEl.style.transform = "rotate(0deg)"
  }
}
