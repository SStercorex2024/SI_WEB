import "./Header.scss"
import Logo from "@/components/Logo"
import toKebabCase from "@/constants/toKebabCase"
import Button from "@/components/Button"
import BurgerButton from "@/components/BurgerButton"
import classNames from "classnames"
import Icon from "@/components/Icon"

const Header = ({ t }) => {
  return (
    <header className="header">
      <div
        className="container-extra container-extra--header"
        data-js-sublist=""
        data-js-burger-menu=""
      >
        <div className="header__content">
          <div className="header__lang-switch">
            <a href="/" className="header__lang-link">
              EN
            </a>
            <a href="/uk" className="header__lang-link">
              UK
            </a>
          </div>

          <div className="header__logo-wrapper">
            <Logo />
            <BurgerButton
              className="header__burger-button"
              extraAttrs={{ ...{ "data-js-burger-button": "" } }}
            />
          </div>
          <nav className="header__nav">
            <ul className="header__list">
              {t.navList.map((item, index) => {
                const isWithSublist = index === 1
                return (
                  <li
                    className={classNames("header__list-item", {
                      "header__list-item--sublist": isWithSublist,
                    })}
                    key={index}
                  >
                    {isWithSublist ? (
                      <>
                        <button
                          className="header__list-link"
                          type="button"
                          data-js-sublist-button=""
                        >
                          <span>{item}</span>
                          <Icon
                            className="header__list-icon"
                            name="arrow-down"
                            hasFill
                          />
                        </button>
                        {t.navSubList && (
                          <ul
                            className="header__sublist"
                            data-js-sublist-list=""
                          >
                            {t.navSubList.map((subItem, subIndex) => (
                              <li
                                className="header__sublist-item"
                                key={subIndex}
                              >
                                <a
                                  href={`#${toKebabCase(subItem)}`}
                                  className="header__sublist-link"
                                >
                                  {subItem}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <a
                        href={`#${toKebabCase(item)}`}
                        className="header__list-link"
                      >
                        {item}
                      </a>
                    )}
                  </li>
                )
              })}
            </ul>
          </nav>
          <div className="header__buttons">
            <div className="header__buttons-sublist" data-js-sublist-button="">
              <button
                className="header__button"
                aria-label={t.extra.label}
                type="button"
              >
                <Icon
                  className="header__button-icon"
                  name="arrow-down"
                  hasFill
                />
                <span className="header__button-label">{t.extra.label}</span>
              </button>
              <ul className="header__button-sublist" data-js-sublist-list="">
                <li>
                  <a href={t.extra.id} className="header__button-sublink">
                    {t.extra.label}
                  </a>
                </li>
                <li>
                  <a href={t.extra.id} className="header__button-sublink">
                    {t.extra.label}
                  </a>
                </li>
              </ul>
            </div>
            <Button
              className="header__button-extra"
              href={t.extra.id}
              label={t.extra.button}
              mode="with-dot"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
