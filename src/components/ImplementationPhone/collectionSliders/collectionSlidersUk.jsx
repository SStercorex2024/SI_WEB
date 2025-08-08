import BorderPhone from "@/components/ImplementationPhone/collectionSliders/BorderPhone"
import Icon from "@/components/Icon"

const SlideUk1 = () => {
  return (
    <BorderPhone>
      <div className="phone__header">
        <div className="phone__header-row">
          <div className="phone__header-date">12:05</div>
          <div className="phone__header-extra">
            <Icon name="сellular" />
            <Icon name="battery" />
          </div>
        </div>
        <div className="phone__header-body">
          <Icon name="arrow-left" />
          <Icon name="laboratiory" />
          <div className="phone__header-text">
            <span>Лабораторна діагностика</span>
            <span>бот</span>
          </div>
          <Icon name="dots" />
        </div>
      </div>
      <div className="phone__body">
        <div className="phone__body-container-center phone__body-container--center">
          <div className="phone__body-head phone__body-head--laboratory phone__body-head--orange">
            <Icon name="laboratory-second" />
            <h3>Вітаємо у Пацієнт-боті діагностичного центру!</h3>
          </div>
          <div className="phone__body-content">
            <h4 className="phone__body-content-title">Що вміє цей бот?</h4>
            <p>Як цей бот може допомогти вам:</p>
            <ul className="phone__body-list">
              <li className="phone__body-item">
                ✅ Допомагає повернути 13% вартості платних послуг через
                спрощену подачу заявки на податкове відшкодування.
              </li>
              <li className="phone__body-item">
                ✅ Інформує про знижки та акції;
              </li>
              <li className="phone__body-item">
                ✅ Онлайн-консультант з лабораторних аналізів та послуг;
              </li>
              <li className="phone__body-item">
                ✅ Повідомляє про готовність результатів та надає швидкий доступ
                до них;
              </li>
            </ul>
            <p>👉 Щоб почати, натисніть Start.</p>
          </div>
        </div>
      </div>
      <div className="phone__footer">
        <div className="phone__footer-head">
          <span>Можливості бота</span>
          <span>/start</span>
        </div>
        <div className="phone__footer-row">
          <div className="phone__footer-menu-btn">
            <Icon name="ex" />
            <span>Меню</span>
          </div>
          <Icon name="smile" />
          <span>Повідомлення</span>
          <div className="phone__footer-extra">
            <Icon name="attach" />
            <Icon name="micro" />
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
            <Icon name="сellular" />
            <Icon name="battery" />
          </div>
        </div>
        <div className="phone__header-body">
          <Icon name="arrow-left" />
          <Icon name="laboratiory" />
          <div className="phone__header-text">
            <span>Лабораторна діагностика</span>
            <span>бот</span>
          </div>
          <Icon name="dots" />
        </div>
      </div>
      <div className="phone__body">
        <div className="phone__body-start right-ogonek">/start</div>
        <div className="phone__body-container phone__body-container--left">
          <div className="phone__body-text left-ogonek">
            <div className="phone__body-head phone__body-head--laboratory phone__body-head--orange">
              <Icon name="laboratory-second" />
              <h3>Вітаємо у Пацієнт-боті діагностичного центру!</h3>
            </div>
            <div className="phone__body-content">
              <h4 className="phone__body-content-title">Що вміє цей бот?</h4>
              <p>Як цей бот може допомогти вам:</p>
              <ul className="phone__body-list">
                <li className="phone__body-item">
                  ✅ Допомагає повернути 13% вартості платних послуг через
                  спрощену подачу заявки на податкове відшкодування.
                </li>
                <li className="phone__body-item">
                  ✅ Інформує про знижки та акції;
                </li>
                <li className="phone__body-item">
                  ✅ Онлайн-консультант з лабораторних аналізів та послуг;
                </li>
                <li className="phone__body-item">
                  ✅ Повідомляє про готовність результатів та надає швидкий
                  доступ до них;
                </li>
              </ul>
            </div>
          </div>
          <div className="phone__body-button">Отримати результати</div>
          <div className="phone__body-button">Онлайн-консультант</div>
        </div>
      </div>
      <div className="phone__footer">
        <div className="phone__footer-row">
          <div className="phone__footer-menu-btn">
            <Icon name="ex" />
            <span>Меню</span>
          </div>
          <Icon name="smile" />
          <span>Повідомлення</span>
          <div className="phone__footer-extra">
            <Icon name="attach" />
            <Icon name="micro" />
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
            <Icon name="сellular" />
            <Icon name="battery" />
          </div>
        </div>
        <div className="phone__header-body">
          <Icon name="arrow-left" />
          <Icon name="laboratiory" />
          <div className="phone__header-text">
            <span>Лабораторна діагностика</span>
            <span>бот</span>
          </div>
          <Icon name="dots" />
        </div>
      </div>
      <div className="phone__body">
        <div className="phone__body-container phone__body-container--left">
          <span className="phone__body-button">Онлайн-консультант</span>
          <span className="phone__body-button phone__body-button-arrow-left">
            Каталог аналізів
          </span>
          <p className="phone__body-segment-text">
            Будь ласка, введіть кодове слово, вказане у вашому чеку-замовленні
            (7 символів). Або введіть "скасувати", щоб скасувати.
          </p>
          <span className="phone__anser right-ogonek">XXX8WDW</span>
          <div className="phone__recip">
            <ul>
              <li>КУРЧАТОВ М.В.</li>
              <li>Рік народження: 27.09.2008 Дата реєстрації запиту:</li>
              <li>
                11.02.2025 06-020 <br /> Тестостерон загальний
              </li>
              <li>
                Результат тестостерону загального: 3.30 Референтний діапазон:
                0.00 – 4.20
              </li>
            </ul>
          </div>
          <div className="phone__pdf-block">
            <div className="phone__pdf-wrapper">
              <Icon name="pdf" />
            </div>
            <div className="phone__pdf-text">
              <span className="phone__pdf-name"></span>
              <span className="phone__pdf-data"></span>
            </div>
            <Icon name="dot" />
          </div>
          <span className="phone__pdf-end">
            Результат збережено у PDF-документі.
          </span>
        </div>
      </div>
      <div className="phone__footer">
        <div className="phone__footer-row">
          <div className="phone__footer-menu-btn">
            <Icon name="ex" />
            <span>Меню</span>
          </div>
          <Icon name="smile" />
          <span>Повідомлення</span>
          <div className="phone__footer-extra">
            <Icon name="attach" />
            <Icon name="micro" />
          </div>
        </div>
      </div>
    </BorderPhone>
  )
}

export { SlideUk1, SlideUk2, SlideUk3 }
