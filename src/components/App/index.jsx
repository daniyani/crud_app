import { Component } from 'react'

import Header from '../Header'
import Filters from '../Filters'
import Table from "../Table"
import AddFrom from '../AddForm'

import './style.css'

class App extends Component {
constructor(props) {
    super(props)
    this.state = {
        data: [
            {
                id: 1,
                name: "John S.",
                salary: 1000,
                isIncreased: false,
                isRised: false
            },
            {
                id: 2,
                name: "Annet B.",
                salary: 1700,
                isIncreased: false,
                isRised: false
            },
            {
                id: 3,
                name: "Anthony R.",
                salary: 2000,
                isIncreased: false,
                isRised: false
            }, 
        ],
        search: "",
        tab: "all"
    }
}

onDelete = (id) => {
    this.setState(({data}) => {
        return {
            data: data.filter((item) => item.id !== id)
        }
    })
}

addNewPerson = (item) => {
    this.setState(({data}) => {
        return {
            data: [...data, { ...item, id: data.length + 1 }]
        }
    })
}

onSetPrivilege = (id, name) => {
    this.setState(({data}) => ({
        data: data.map(item => {
            if(item.id === id) {
               return { ...item, [name]: !item[name] }
            }
            return item
        })
    }))

}

onSetSearch = (searchString) => {
    this.setState({ search:  searchString })
}

onChangeTab = (tabName) => {
    this.setState({ tab: tabName })
}

getTabsData = (data, tab) => {
    switch(tab) {
        case "rise": 
            return data.filter(item => item.isRised)
        case "highSalary": 
            return data.filter(item => item.salary > 1000)
        default: 
            return data
    }   
}

getFilteredData = (searchString, data, tab) => {
   const newData = this.getTabsData(data, tab)

    if(!searchString.length) {
        return newData
    }

    return newData.filter(item => item.name.includes(searchString))
}

render() {
 const { search, data, tab } = this.state

    return (
        <div className="app">
            <Header data={data} />
            <Filters 
            search={search} 
            onSetSearch={this.onSetSearch}
            onChangeTab={this.onChangeTab}
            tab={tab}
            />
            <Table 
            data={this.getFilteredData(search, data, tab)} 
            onDelete={this.onDelete}
            onSetPrivilege={this.onSetPrivilege}
            />
            <AddFrom addNewPerson={this.addNewPerson}/>
        </div>
    )
}
}

export default App