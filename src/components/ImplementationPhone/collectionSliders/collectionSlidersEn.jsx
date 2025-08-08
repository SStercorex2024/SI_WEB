import BorderPhone from "./BorderPhone"
import Icon from "@/components/Icon"

const SlideEn1 = () => {
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
            <span>Laboratory Diagnostics</span>
            <span>bot</span>
          </div>
          <Icon name="dots" />
        </div>
      </div>
      <div className="phone__body">
        <div className="phone__body-container-center phone__body-container--center">
          <div className="phone__body-head phone__body-head--laboratory phone__body-head--orange">
            <Icon name="laboratory-second" />
            <h3>Welcome to the Patient Bot Diagnostics Center!</h3>
          </div>
          <div className="phone__body-content">
            <h4 className="phone__body-content-title">What can this bot do?</h4>
            <p>How this bot can help you:</p>
            <ul className="phone__body-list">
              <li className="phone__body-item">
                ✅ Helps you get back 13% of the cost of paid services through a
                simplified tax deduction application process.
              </li>
              <li className="phone__body-item">
                ✅ Informs you about discounts and promotions;
              </li>
              <li className="phone__body-item">
                ✅ Online consultant for lab tests and services;
              </li>
              <li className="phone__body-item">
                ✅ Notifies you about your lab test results and provides quick
                access to them;
              </li>
            </ul>
            <p>👉 To get started, press Start.</p>
          </div>
        </div>
      </div>
      <div className="phone__footer">
        <div className="phone__footer-head">
          <span>What the bot can do</span>
          <span>/start</span>
        </div>
        <div className="phone__footer-row">
          <div className="phone__footer-menu-btn">
            <Icon name="ex" />
            <span>Menu</span>
          </div>
          <Icon name="smile" />
          <span>Message</span>
          <div className="phone__footer-extra">
            <Icon name="attach" />
            <Icon name="micro" />
          </div>
        </div>
      </div>
    </BorderPhone>
  )
}

const SlideEn2 = () => {
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
            <span>Laboratory Diagnostics</span>
            <span>bot</span>
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
              <h3>Welcome to the Patient Bot Diagnostics Center!</h3>
            </div>
            <div className="phone__body-content">
              <h4 className="phone__body-content-title">
                What can this bot do?
              </h4>
              <p>How this bot can help you:</p>
              <ul className="phone__body-list">
                <li className="phone__body-item">
                  ✅ Helps you get back 13% of the cost of paid services through
                  a simplified tax deduction application process.
                </li>
                <li className="phone__body-item">
                  ✅ Informs you about discounts and promotions;
                </li>
                <li className="phone__body-item">
                  ✅ Online consultant for lab tests and services;
                </li>
                <li className="phone__body-item">
                  ✅ Notifies you about your lab test results and provides quick
                  access to them;
                </li>
              </ul>
            </div>
          </div>
          <div className="phone__body-button">Get Results</div>
          <div className="phone__body-button">Online Consultant</div>
        </div>
      </div>
      <div className="phone__footer">
        <div className="phone__footer-row">
          <div className="phone__footer-menu-btn">
            <Icon name="ex" />
            <span>Menu</span>
          </div>
          <Icon name="smile" />
          <span>Message</span>
          <div className="phone__footer-extra">
            <Icon name="attach" />
            <Icon name="micro" />
          </div>
        </div>
      </div>
    </BorderPhone>
  )
}

const SlideEn3 = () => {
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
            <span>Laboratory Diagnostics</span>
            <span>bot</span>
          </div>
          <Icon name="dots" />
        </div>
      </div>
      <div className="phone__body">
        <div className="phone__body-container phone__body-container--left">
          <span className="phone__body-button">Online Consultant</span>
          <span className="phone__body-button phone__body-button-arrow-left">
            Test Catalog
          </span>
          <p className="phone__body-segment-text">
            Please enter the code word indicated on your order receipt (7
            characters). Or type "cancel" to cancel.
          </p>
          <span className="phone__anser right-ogonek">XXX8WDW</span>
          <div className="phone__recip">
            <ul>
              <li>KURCHATOV M.V.</li>
              <li>Year of birth: 09/27/2008 Date of request registration:</li>
              <li>
                02/11/2025 06-020 <br /> Total Testosterone
              </li>
              <li>
                Total Testosterone Result: 3.30 Reference Range: 0.00 – 4.20
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
            The result has been saved in a PDF document.
          </span>
        </div>
      </div>
      <div className="phone__footer">
        <div className="phone__footer-row">
          <div className="phone__footer-menu-btn">
            <Icon name="ex" />
            <span>Menu</span>
          </div>
          <Icon name="smile" />
          <span>Message</span>
          <div className="phone__footer-extra">
            <Icon name="attach" />
            <Icon name="micro" />
          </div>
        </div>
      </div>
    </BorderPhone>
  )
}

export { SlideEn1, SlideEn2, SlideEn3 }
