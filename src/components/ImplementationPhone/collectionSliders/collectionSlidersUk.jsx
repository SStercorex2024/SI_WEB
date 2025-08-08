import BorderPhone from "@/components/ImplementationPhone/collectionSliders/BorderPhone"
import Icon from "@/components/Icon"
import { Image } from "minista"

const SlideUk1 = () => {
  return (
    <BorderPhone>
      <div className="phone__header">
        <div className="phone__header-row">
          <div className="phone__header-date">12:05</div>
          <div className="phone__header-extra">
            <Icon className="phone__header-cellular" name="сellular" />
            <Icon className="phone__header-battery" name="battery" />
          </div>
        </div>
        <div className="phone__header-body">
          <Icon
            className="phone__header-arrow-left"
            hasFill
            name="arrow-left"
          />
          <Image
            src="./src/assets/images/phons/logo-lab.svg"
            className="phone__header-icon"
          />
          <div className="phone__header-text">
            <span className="phone__header-name">Лабораторна Діагностика</span>
            <span className="phone__header-bot">бот</span>
          </div>
          <Icon className="phone__header-dots" name="dots" />
        </div>
      </div>
      <div className="phone__body">
        <div className="phone__body-container phone__body-container--center">
          <div className="phone__body-head phone__body-head--laboratory phone__body-head--orange">
            <Image
              src="./src/assets/images/phons/logo-lab.svg"
              className="phone__body-icon"
            />
            <h3>
              Ласкаво просимо до Центру <br /> Діагностики Пацієнтів Бота!
            </h3>
          </div>
          <div className="phone__body-content">
            <h4 className="phone__body-content-title">Що може цей бот?</h4>
            <p className="phone__body-content-desc">
              Як цей бот може вам допомогти:
            </p>
            <ul className="phone__body-list">
              <li className="phone__body-item">
                ✅ Допомагає повернути 13% вартості платних послуг через
                спрощену процедуру податкового вирахування.
              </li>
              <li className="phone__body-item">
                ✅ Інформує про знижки та акції;
              </li>
              <li className="phone__body-item">
                ✅ Онлайн-консультант з лабораторних аналізів та послуг;
              </li>
              <li className="phone__body-item">
                ✅ Повідомляє про результати ваших лабораторних досліджень та
                забезпечує швидкий доступ до них;
              </li>
            </ul>
            <p className="phone__body-end">👉 Щоб почати, натисніть Почати.</p>
          </div>
        </div>
        <div className="phone__footer">
          <div className="phone__footer-head">
            <span className="phone__footer-head-title">Що може бот</span>
            <span className="phone__footer-head-start">/start</span>
          </div>
          <div className="phone__footer-row">
            <div className="phone__footer-menu-btn">
              <Icon className="phone__footer-ex" name="ex" />
              <span className="phone__footer-menu">Меню</span>
            </div>
            <Icon className="phone__footer-smile" name="smile" />
            <span className="phone__footer-typing">Повідомлення</span>
            <div className="phone__footer-extra">
              <Icon name="attach" />
              <Icon name="micro" />
            </div>
          </div>
        </div>
      </div>
    </BorderPhone>
  )
}

const SlideUk2 = () => {
  return (
    <BorderPhone>
      <div className="phone__header">
        <div className="phone__header-row">
          <div className="phone__header-date">12:05</div>
          <div className="phone__header-extra">
            <Icon className="phone__header-cellular" name="сellular" />
            <Icon className="phone__header-battery" name="battery" />
          </div>
        </div>
        <div className="phone__header-body">
          <Icon
            className="phone__header-arrow-left"
            hasFill
            name="arrow-left"
          />
          <Image
            src="./src/assets/images/phons/logo-lab.svg"
            className="phone__header-icon"
          />
          <div className="phone__header-text">
            <span className="phone__header-name">Лабораторна Діагностика</span>
            <span className="phone__header-bot">бот</span>
          </div>
          <Icon className="phone__header-dots" name="dots" />
        </div>
      </div>
      <div className="phone__body">
        <div className="phone__body-start phone__body-start--right-ogonek">
          /start
        </div>
        <div
          className="phone__body-container
         phone__body-container--left"
        >
          <div className="phone__body-text">
            <div className="phone__body-head phone__body-head--laboratory phone__body-head--orange">
              <Icon name="laboratory-second" />
              <h3>Ласкаво просимо до Центру Діагностики Пацієнтів Бота!</h3>
            </div>
            <div className="phone__body-content">
              <p className="phone__body-subtitle">
                Як цей бот може вам допомогти:
              </p>
              <ul className="phone__body-list">
                <li className="phone__body-item">
                  ✅ Допомагає повернути 13% вартості платних послуг через
                  спрощену процедуру податкового вирахування.
                </li>
                <li className="phone__body-item">
                  ✅ Інформує про знижки та акції;
                </li>
                <li className="phone__body-item">
                  ✅ Онлайн-консультант з лабораторних аналізів та послуг;
                </li>
                <li className="phone__body-item">
                  ✅ Повідомляє про результати ваших лабораторних досліджень та
                  забезпечує швидкий доступ до них;
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="phone__body-button">Отримати результати</div>
        <div className="phone__body-button">Онлайн консультант</div>
        <div className="phone__footer">
          <div className="phone__footer-row">
            <div className="phone__footer-menu-btn">
              <Icon className="phone__footer-ex" name="ex" />
              <span className="phone__footer-menu">Меню</span>
            </div>
            <Icon className="phone__footer-smile" name="smile" />
            <span className="phone__footer-typing">Повідомлення</span>
            <div className="phone__footer-extra">
              <Icon name="attach" />
              <Icon name="micro" />
            </div>
          </div>
        </div>
      </div>
    </BorderPhone>
  )
}

const SlideUk3 = () => {
  return (
    <BorderPhone>
      <div className="phone__header">
        <div className="phone__header-row">
          <div className="phone__header-date">12:05</div>
          <div className="phone__header-extra">
            <Icon className="phone__header-cellular" name="сellular" />
            <Icon className="phone__header-battery" name="battery" />
          </div>
        </div>
        <div className="phone__header-body">
          <Icon
            className="phone__header-arrow-left"
            hasFill
            name="arrow-left"
          />
          <Image
            src="./src/assets/images/phons/logo-lab.svg"
            className="phone__header-icon"
          />
          <div className="phone__header-text">
            <span className="phone__header-name">Лабораторна Діагностика</span>
            <span className="phone__header-bot">бот</span>
          </div>
          <Icon className="phone__header-dots" name="dots" />
        </div>
      </div>
      <div className="phone__body">
        <span className="phone__body-button is-active">Онлайн консультант</span>
        <span className="phone__body-button phone__body-button--arrow">
          Каталог тестів
        </span>
        <p className="phone__body-segment-text">
          Будь ласка, введіть кодове слово, вказане на вашому чеку замовлення (7
          символів). Або наберіть «скасувати» для скасування.
        </p>
        <span className="phone__anser right-ogonek">XXX8WDW</span>
        <div className="phone__body-container phone__body-container--full">
          <div className="phone__recip">
            <ul>
              <li>КУРЧАТОВ М.В.</li>
              <li>
                Рік народження: 27.09.2008 <br /> Дата реєстрації запиту:
              </li>
              <li>
                11.02.2025 06-020 <br /> Загальний тестостерон
              </li>
              <li>
                Результат загального тестостерону: 3.30 <br /> Референсні
                значення: 0.00 – 4.20
              </li>
            </ul>
          </div>
        </div>
        <div className="phone__pdf-block">
          <div className="phone__pdf-wrapper">
            <Icon className="phone__pdf-icon" hasFill name="pdf" />
          </div>
          <div className="phone__pdf-text">
            <span className="phone__pdf-name">XXX8WDW.pdf</span>
            <span className="phone__pdf-data">142.9 КБ PNG</span>
          </div>
          <Icon className="phone__pdf-dots" name="dots" />
          <span className="phone__pdf-end">
            Результат збережено у PDF-документі.
          </span>
        </div>
        <div className="phone__footer">
          <div className="phone__footer-row">
            <div className="phone__footer-menu-btn">
              <Icon className="phone__footer-ex" name="ex" />
              <span className="phone__footer-menu">Меню</span>
            </div>
            <Icon className="phone__footer-smile" name="smile" />
            <span className="phone__footer-typing">Повідомлення</span>
            <div className="phone__footer-extra">
              <Icon name="attach" />
              <Icon name="micro" />
            </div>
          </div>
        </div>
      </div>
    </BorderPhone>
  )
}

export { SlideUk1, SlideUk2, SlideUk3 }
