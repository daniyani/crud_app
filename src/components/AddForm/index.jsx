import { Component } from 'react';

import './style.css';

class AddFrom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            salary: ""
        }
    }

    onChangeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    disabledSumbit = () => {
        return Object.values(this.state).every(item => !!item)
    }

    clearForm = () => {
        this.setState({ name: "", salary: "" })
    }
    sendFormData = (e) => {
        e.preventDefault()
        this.props.addNewPerson(this.state)
        this.clearForm()
    }

render () {

    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChangeHandler}
                    />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?" 
                    name="salary"
                    value={this.state.salary}
                    onChange={this.onChangeHandler}
                    />

                <button 
                  type="submit"
                  className="btn btn-outline-light"
                  onClick={this.sendFormData}
                  disabled={!this.disabledSumbit()}
                  >
                    Добавить
                    </button>
            </form>
        </div>
    )
}
}

export default AddFrom;