import "./Implementation.scss"
import ImplementationCard from "@/components/ImplementationCard"
import ImplementationPhone from "@/components/ImplementationPhone"

const Implementation = ({ t }) => {
  return (
    <section
      className="implementation"
      aria-labelledby="implementation-section-title"
    >
      <h1 className="visually-hidden" id="implementation-section-title">
        {t.titleHidden}
      </h1>
      <div className="container-plus">
        <h2 className="implementation__title">{t.title}</h2>
        <div className="implementation__cards" data-js-slider-2="">
          {t.items.map((item, index) => (
            <div className="implementation__card" key={index}>
              <ImplementationCard t={item.card} />
              <ImplementationPhone slides={item.slides} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Implementation
