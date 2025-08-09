import "./Banner.scss"
import BannerCards from "@/components/BannerCards"

const Banner = ({ t }) => {
  return (
    <section className="banner" aria-labelledby="banner__title" id={t.id}>
      <div className="container-extra container-extra--banner">
        <div className="banner__content">
          <div className="banner__header">
            <div className="banner__header-date">
              <span>{t.span}</span>
            </div>
            <h1 className="banner__header-title" id="banner__header-title">
              {t.titleHeaderOne}
              <br />
              <strong>{t.titleHeaderSecond.toUpperCase()}</strong>
            </h1>
          </div>
          <div className="banner__cards">
            <BannerCards cards={t.cards} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
