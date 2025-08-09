import "./ImplementationCard.scss"
import Icon from "@/components/Icon"
import toKebabCase from "@/constants/toKebabCase"

const ImplementationCard = ({ t }) => {
  return (
    <div className="implementation-card">
      <h3 className="implementation-card__title" id={`${toKebabCase(t.title)}`}>
        {t.title}
      </h3>
      <div className="implementation-card__desc">
        <p>{t.desc}</p>
      </div>
      <div className="implementation-card__extra">
        <div className="implementation-card__pagination-wrapper">
          <div className="phone-button-next" data-js-slider-prev="">
            <Icon name="arrow-left-blue" hasFill />
          </div>
          <div className="phone-pagination" data-js-slider-pagination=""></div>
          <div className="phone-button-prev" data-js-slider-next="">
            <Icon name="arrow-right" hasFill />
          </div>
        </div>
        <a href="#contanct" className="implementation-card__our">
          {t.our}
        </a>
      </div>
    </div>
  )
}

export default ImplementationCard
