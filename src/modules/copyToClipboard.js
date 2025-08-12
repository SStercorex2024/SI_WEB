function copyToClipboard() {
  const selectors = {
    btn: "[data-js-copy-target]",
    text: "[data-js-copy]",
  }

  document.querySelectorAll(selectors.btn).forEach((button) => {
    button.addEventListener("click", () => {
      const container = button.closest("li")
      const target = container?.querySelector(selectors.text)
      if (!target) {
        return
      }

      navigator.clipboard.writeText(target.textContent.trim())
    })
  })
}

export default copyToClipboard
