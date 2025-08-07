import "./ImplementationCard.scss"

const ImplementationCard = ({ t }) => {
  return (
    <div className="implementation-card">
      <h3 className="implementation-card__title">{t.title}</h3>
      <div className="implementation-card__desc">
        <p>{t.desc}</p>
      </div>
      <div className="implementation-card__extra">
        <div className="implementation-card__buttons"></div>
        <a href="#contanct" className="implementation-card__our">
          {t.our}
        </a>
      </div>
    </div>
  )
}

export default ImplementationCard
