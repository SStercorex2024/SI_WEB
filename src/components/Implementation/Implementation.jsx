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
      <div className="container">
        <h2 className="implementation__title">{t.title}</h2>
        <div className="implementation__cards">
          {t.items.map((item, index) => (
            <div className="implementation__card" key={index}>
              <ImplementationCard t={item.card} />
              <ImplementationPhone t={{ phone: item.phone }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Implementation
