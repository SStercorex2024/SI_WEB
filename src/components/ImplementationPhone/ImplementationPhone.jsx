import "./ImplementationPhone.scss"
// import { Picture } from "minista"
// import { loadImages } from "@/constants/loadImages"

const ImplementationPhone = ({ slides }) => {
  // const ImplementationPhone = ({ t }) => {
  // const imageUrls = loadImages(t.phone)
  return (
    <div className="implementation-phone">
      <div className="swiper phone-slider">
        <div className="phone-wrapper swiper-wrapper">
          {/*{imageUrls.map((imgUrl, index) => (*/}
          {/*  <div className="phone-slide swiper-slide" key={index}>*/}
          {/*    <Picture src={imgUrl} formats={["avif", "webp", "inherit"]} />*/}
          {/*  </div>*/}
          {/*))}*/}
          {slides &&
            slides.map((Slide, index) => (
              <div className="phone-slide swiper-slide" key={index}>
                <Slide />
              </div>
            ))}
        </div>
        <div className="implementation-phone__pagination-wrapper">
          <div className="phone-button-next"></div>
          <div className="phone-button-next"></div>
          <div className="phone-pagination"></div>
        </div>
      </div>
    </div>
  )
}

export default ImplementationPhone
