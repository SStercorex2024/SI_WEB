import initScrollProgress from "@/modules/ScrollTop"
import OverlayMenu from "@/modules/OverlayMenu"
import OpenSublist from "@/modules/OpenSublist"
import SliderCollection from "@/modules/SlidersCollection"
import SelectMate from "@/modules/Select"
import copyToClipboard from "@/modules/copyToClipboard"
import ThemeToggle from "@/modules/themeToggle"

new SelectMate('.select_mate[data-mate-select="active"]')
new SliderCollection()
new OpenSublist()
new ThemeToggle("#theme-toggle")

document.addEventListener("DOMContentLoaded", () => {
  copyToClipboard()
  initScrollProgress()
  new OverlayMenu()
})
