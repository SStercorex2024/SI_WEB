import "./Contact.scss"
import { Image } from "minista"
import Select from "@/components/Select"
import Button from "@/components/Button"

const Contact = ({ t }) => {
  return (
    <section
      className="contact"
      id="contact"
      aria-labelledby="section-contact-title"
    >
      <div className="container-plus">
        <div className="contact__content">
          <div className="contact__text">
            <Image
              className="contact__image"
              src="/src/assets/images/contact/1.svg"
            />
            <h1 className="contact__title" id="section-contact-title">
              {t.title}
            </h1>
            <div className="contact__desc">
              <p>{t.desc}</p>
            </div>
          </div>
          <form action="" className="contact__form">
            <label htmlFor="name-input" className="contact__input-label">
              {t.inputLabelName}
            </label>
            <input
              id="name-input"
              type="text"
              className="contact__input"
              required
              aria-description={t.inputName}
            />
            <label htmlFor="name-phone" className="contact__input-label">
              {t.inputLabelPhone}
            </label>
            <input
              id="name-phone"
              type="text"
              className="contact__input"
              required
              aria-description={t.inputPhone}
            />
            <Select t={t} />
            <div className="contact__policy">
              <div className="contact__checkbox">
                <input
                  type="checkbox"
                  required
                  value=""
                  id="squared"
                  name="check"
                />
                <label htmlFor="squared"></label>
              </div>
              <div
                className="contact__policy-desc"
                dangerouslySetInnerHTML={{ __html: t.politic }}
              ></div>
            </div>

            <Button className="contact__button" type="submit" label={t.send} />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
