import "./ToggleTheme.scss"
import Icon from "@/components/Icon"

const ToggleTheme = () => {
  return (
    <button className="theme-switcher" id="theme-toggle">
      <Icon className="theme-light" hasFill name="theme-light" />
      <Icon className="theme-dark" hasFill name="theme-dark" />
    </button>
  )
}

export default ToggleTheme
