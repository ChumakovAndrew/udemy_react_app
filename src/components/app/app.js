import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import uniqid from 'uniqid';
import './app.css';




class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {name: "John", salary: 800, increase: true, id: 1},
        {name: "Alex", salary: 900, increase: false, id: 2},
        {name: "John", salary: 1000, increase: true, id: 3},
        {name: "John", salary: 1000, increase: true, id: 4},
        {name: "John", salary: 1000, increase: true, id: 5},
      ]
    }
  }

  addItem = (name, salary) => {
    let newEmployee = {
      name: name,
      salary: salary,
      increase: false,
      id: uniqid()
    }

    this.setState(({data}) => {
      const newArr = [...data, newEmployee]
      return {
        data: newArr
      }
    })
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
    }
    })
  }

  render() {
    return (
      <div className="app">
          <AppInfo />
  
          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList 
            data={this.state.data}
            onDelete={this.deleteItem}/>
          <EmployeesAddForm
          onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;
