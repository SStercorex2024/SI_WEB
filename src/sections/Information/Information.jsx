import "./Information.scss"
import Icon from "@/components/Icon"
import Button from "@/components/Button"
import onlyNumbers from "@/constants/onlyNumbers"

const Information = ({ t }) => {
  return (
    <section
      className="information"
      aria-labelledby="information-section-title"
    >
      <div className="container-plus">
        <div className="information__content-wrapper">
          <h1 className="information__title" id="information-section-title">
            {t.title}
          </h1>
          <div className="information__content">
            <ul className="information__list">
              <li className="information__item">
                <Icon name="internet" hasFill className="information__icon" />
                <a href="#" className="information__link">
                  {t.link}
                </a>
              </li>
              <li className="information__item">
                <Icon name="phone" hasFill className="information__icon" />
                <a
                  href={`tel:${onlyNumbers(t.phone)}`}
                  className="information__link"
                  data-js-copy=""
                  id="phone"
                >
                  {t.phone}
                </a>
                <Button
                  className="information__copy"
                  hasFillIcon
                  extraAttrs={{ ...{ "data-js-copy-target": "" } }}
                  iconName="copy"
                />
              </li>
              <li className="information__item">
                <Icon name="telegram-info" className="information__icon" />
                <a
                  href="https://t.me/sw_robot"
                  className="information__link"
                  data-js-copy=""
                  id="telegram"
                >
                  {t.telegram}
                </a>
                <Button
                  hasFillIcon
                  className="information__copy"
                  extraAttrs={{ ...{ "data-js-copy-target": "" } }}
                  iconName="copy"
                />
              </li>
              <li className="information__item">
                <Icon name="email" hasFill className="information__icon" />
                <a
                  href={`mailto:${t.email}`}
                  data-js-copy=""
                  className="information__link"
                  id="email"
                >
                  {t.email}
                </a>
                <Button
                  className="information__copy"
                  hasFillIcon
                  extraAttrs={{ ...{ "data-js-copy-target": "#email" } }}
                  iconName="copy"
                />
              </li>
            </ul>
            <ul className="information__sublist">
              <li className="information__subitem">
                <Icon name="person" className="information__icon" />
                <div className="information__subwrapper">
                  <p className="information__subdesc">
                    <big>{t.owner.name}</big> <br />
                    {t.owner.desc}
                  </p>
                </div>
              </li>
              <li className="information__subitem">
                <Icon name="location" hasFill className="information__icon" />
                <address className="information__address">
                  {t.address.label}
                  <br /> {t.address.addressFact}
                </address>
              </li>
            </ul>
          </div>
          <span className="information__extra">{t.extra}</span>
        </div>
        <div className="information__copyright container-plus">
          <a href="#" className="information__copyright-link">
            {t.copyright.link}
          </a>
          <span>{t.copyright.label}</span>
        </div>
      </div>
    </section>
  )
}

export default Information
