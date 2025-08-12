// import initScrollProgress from "@/modules/ScrollTop"
// initScrollProgress()
import OverlayMenu from "@/modules/OverlayMenu"
import OpenSublist from "@/modules/OpenSublist"
import SliderCollection from "@/modules/SlidersCollection"
import SelectMate from "@/modules/Select"
import copyToClipboard from "@/modules/copyToClipboard"

new SelectMate('.select_mate[data-mate-select="active"]')
new SliderCollection()
new OpenSublist()
document.addEventListener("DOMContentLoaded", () => {
  copyToClipboard()
  new OverlayMenu()
})
