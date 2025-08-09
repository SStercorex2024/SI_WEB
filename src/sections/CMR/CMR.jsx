import "./CMR.scss"
import { Image } from "minista"
import toKebabCase from "@/constants/toKebabCase"

const CMR = ({ t }) => {
  const cardsImages = [
    "/src/assets/images/crm/1.svg",
    "/src/assets/images/crm/2.svg",
    "/src/assets/images/crm/3.svg",
    "/src/assets/images/crm/4.svg",
    "/src/assets/images/crm/5.svg",
    "/src/assets/images/crm/6.svg",
    "/src/assets/images/crm/7.svg",
  ]

  return (
    <section
      className="cmr-integration"
      aria-labelledby="cmr-integration-title"
      id={toKebabCase(t.title)}
    >
      <div className="container-plus">
        <h1 className="cmr-integration__title" id="cmr-integration-title">
          {t.title}
        </h1>
        <div className="cmr-integration__content">
          <div className="cmr-integration__cards">
            <div className="cmr-integration__card">{t.desc}</div>
            {cardsImages.map((url, index) => (
              <div className="cmr-integration__card" key={index}>
                <Image src={url} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CMR
