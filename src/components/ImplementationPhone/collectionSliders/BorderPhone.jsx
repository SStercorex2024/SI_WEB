export default function (props) {
  const { children } = props

  return (
    <div className="phone">
      <div className="phone-wrapper">
        <div className="phone-container">{children}</div>
      </div>
    </div>
  )
}
