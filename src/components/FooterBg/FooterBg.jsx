import "./FooterBg.scss"
import { Picture } from "minista"

const FooterBg = () => {
  return (
    <div className="footer-bg">
      <div className="container-plus">
        <div className="footer-bg__image">
          <Picture
            src="/src/assets/images/footer-bg.png"
            formats={["avif", "inherit"]}
          />
        </div>
      </div>
    </div>
  )
}

export default FooterBg
