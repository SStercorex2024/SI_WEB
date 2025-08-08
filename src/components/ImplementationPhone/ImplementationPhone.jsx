import "./collectionSliders/phone.scss"
import "./ImplementationPhone.scss"

const ImplementationPhone = ({ slides }) => {
  return (
    <div className="implementation-phone">
      <div className="swiper phone-slider">
        <div className="swiper-wrapper">
          {slides &&
            slides.map((Slide, index) => (
              <div className="phone-slide swiper-slide" key={index}>
                <Slide />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default ImplementationPhone
