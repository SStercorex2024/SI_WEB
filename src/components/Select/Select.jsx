import React, { useEffect } from "react"
import "./Select.scss"
import Icon from "@/components/Icon"
import SelectMate from "@/modules/Select"

const Select = ({ t }) => {
  useEffect(() => {
    new SelectMate(".select_mate")
  }, [])

  return (
    <div className="contact__select">
      <label htmlFor="contact-select" className="select__label">
        {t.selectLabel}
      </label>
      <div className="select_mate" data-mate-select="active">
        <select id="contact-select" onChange={() => {}}>
          {t.select.map((item, index) => (
            <option key={index} value={index === 0 ? "" : index}>
              {item}
            </option>
          ))}
        </select>
        <p className="selecionado_opcion" />
        <span className="icon_select_mate">
          <Icon name="arrow-down" hasFill/>
        </span>
        <div className="cont_list_select_mate">
          <ul className="cont_select_int" />
        </div>
      </div>
    </div>
  )
}

export default Select
