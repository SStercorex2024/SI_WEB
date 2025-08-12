import "./Our.scss"

const Our = ({ t }) => {
  return (
    <div className="our" aria-labelledby="section-our-title">
      <div className="container-plus">
        <div className="our__content ">
          <h1 className="our__title" id="section-our-tite">
            {t.title}
          </h1>
          <a className="our__link" href="#">
            {t.link}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Our
