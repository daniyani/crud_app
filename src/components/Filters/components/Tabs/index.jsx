import React from 'react'

import "./style.css"

const Tabs = ({ onChangeTab, tab }) => {
        const buttonsData = [
                {name: "all", label: "Все сотрудники"},
                {name: "rise", label: "На повышение"},
                {name: "highSalary", label: "З/П больше 1000$"}
        ]
  return (
    <div className="btn-group">
        {buttonsData.map(item => {
        return (
           <button 
                key={item.name}
                type="button"
                className={`btn ${item.name === tab ? "btn-light" : "btn-outline-light"}`}
                onClick={() => onChangeTab(item.name)}
                >
                {item.label}
          </button>
                        )
        })}
</div>
  )
}

export default Tabs