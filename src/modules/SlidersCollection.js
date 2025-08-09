import Swiper from "swiper"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

class Slider {
  selectors = {
    pagination: "[data-js-slider-pagination]",
    nextBtn: "[data-js-slider-next]",
    prevBtn: "[data-js-slider-prev]",
  }

  constructor(rootElement, option = {}) {
    this.rootElement = rootElement
    this.paginationElement = this.rootElement.querySelector(
      this.selectors.pagination,
    )
    this.nextBtn = this.rootElement.querySelector(this.selectors.nextBtn)
    this.prevBtn = this.rootElement.querySelector(this.selectors.prevBtn)

    this.option = {
      modules: [Pagination, Autoplay, Navigation],
      loop: true,
      pagination: this.paginationElement
        ? {
            el: this.paginationElement,
            clickable: true,
            bulletClass: "slider-bullet",
            bulletActiveClass: "slider-bullet-active",
          }
        : false,
      navigation:
        this.nextBtn && this.prevBtn
          ? {
              nextEl: this.nextBtn,
              prevEl: this.prevBtn,
            }
          : false,
      ...option,
    }

    this.init()
  }

  init() {
    this.swiper = new Swiper(this.rootElement, this.option)

    setTimeout(() => {
      this.swiper.slideTo(0, 0)
      this.swiper.update()
    }, 100)
  }
}

class SliderCollection {
  constructor() {
    this.init()
  }

  init() {
    if (
      document.readyState === "complete" ||
      document.readyState === "interactive"
    ) {
      this.initializeSliders()
    } else {
      window.addEventListener("DOMContentLoaded", () =>
        this.initializeSliders(),
      )
    }
  }

  initializeSliders() {
    this.initializeVerticalSliders()
    this.initializeHorizontalSliders()
  }

  initializeVerticalSliders() {
    document.querySelectorAll("[data-js-slider]").forEach((element) => {
      new Slider(element, {
        direction: "vertical",
        loop: true,
      })
    })
  }

  initializeHorizontalSliders() {
    document.querySelectorAll("[data-js-slider-2]").forEach((element) => {
      element.querySelectorAll(".implementation__card").forEach((card) => {
        const pagination = card.querySelector("[data-js-slider-pagination]")
        const nextBtn = card.querySelector("[data-js-slider-next]")
        const prevBtn = card.querySelector("[data-js-slider-prev]")
        const swiperContainer = card.querySelector(".phone-slider")

        if (!swiperContainer) return

        new Slider(swiperContainer, {
          modules: [Pagination, Navigation, Autoplay],
          watchOverflow: false,
          slidesPerView: "auto",
          slidesPerGroup: 1,
          loop: false,
          pagination: pagination
            ? {
                el: pagination,
                type: "fraction",
                clickable: true,
              }
            : false,
          navigation:
            nextBtn && prevBtn
              ? {
                  nextEl: nextBtn,
                  prevEl: prevBtn,
                }
              : false,
          breakpoints: {
            0: {
              slidesPerView: 1,
            },
            1024: {
              spaceBetween: 14,
            },
          },
        })
      })
    })
  }
}

export default SliderCollection
