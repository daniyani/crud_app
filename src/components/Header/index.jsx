import React from 'react'
import './style.css'

 const Header = ({ data }) => {

  const increasedPersons = data.filter(item => item.isIncreased)

  return (
    <div className="header">
        <h1>Учет сотрудников</h1>
        <h2>Общее число сотрудников: {data.length}</h2>
        <h3>Премию получают: {increasedPersons.length}</h3>
    </div>
  )
}

export default Header