import './employees-add-form.css';
import { Component } from 'react';

class EmployeesAddForm extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            salary: 0,
            error: " "
        }
    }

    onSubmitForm = (e) => {
        e.preventDefault()
        const {onAdd} = this.props
        const {name, salary, error} = this.state

        if(name !== "" && name !== " " && name.length < 12 && salary !== 0 && salary !== "" && salary !== " " && salary.length < 6){
            onAdd(name, salary)
            this.setState({error: "сотрудник добавлен"})
        }
        else{
            this.setState({error: "вы ввели не корректные данные"})
        }

        this.setState({
            name: "",
            salary: 0
        })

        if(error !== ""){
            setTimeout(() => { 
                this.setState({
                    error: ""
                })
            }, 2500)
        }
    }

    onChangeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

        return (
            <div className="app-add-form">
                <h3>Добавте нового сотрудника</h3>
                <h4>{this.state.error}</h4>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name='name'
                        value={this.state.name}
                        onChange={this.onChangeValue} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name='salary'
                        value={this.state.salary}
                        onChange={this.onChangeValue} />
    
                    <button type="submit"
                            className="btn btn-outline-light"
                            onClick={this.onSubmitForm}>Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;