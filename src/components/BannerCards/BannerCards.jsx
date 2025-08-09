import "./BannerCards.scss"
import Icon from "@/components/Icon"
import Button from "@/components/Button"

const BannerCards = ({ cards }) => {
  return (
    <>
      {cards.map((card, index) => (
        <div className="banner-card" key={index}>
          <div className="banner-card__header">
            <div className="banner-card__name-wrapper">
              <Icon
                className="banner-card__icon"
                ariaLabel={card.name}
                hasFill
                name={card.name.toLowerCase()}
              />
              <span className="banner-card__name">{card.name}</span>
            </div>
            <div className="banner-card__desc">
              <p>{card.desc}</p>
            </div>
          </div>
          <div className="banner-card__info">
            <Button
              href="#contacts"
              className="banner-card__label"
              mode="blue"
              label={card.label}
            />
            <Button
              href="#contacts"
              className="banner-card__price"
              mode="accent"
              label={card.price}
            />
          </div>
        </div>
      ))}
    </>
  )
}

export default BannerCards
