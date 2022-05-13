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
        {name: "John", salary: 800, increase: true, rise: true, id: 1},
        {name: "Alex", salary: 900, increase: false, rise: false, id: 2},
        {name: "John", salary: 1000, increase: true, rise: false, id: 3}
      ],
      temp: ""
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

  onToggleIncrease = (id) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if( item.id === id )
          return {...item, increase: !item.increase}
        return item;
      })
    }))
  }

  onToggleRise = (id) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if( item.id === id )
          return {...item, rise: !item.rise}
        return item;
      })
    }))
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
    }
    })
  }

  onSerchEmployee = (items, temp) => {
    if(temp === 0) {
      return items
    }
    return items.filter(item => {
      return item.name.indexOf(temp) > -1
    })
  }

  onUpdateSerch = (temp) => {
    this.setState({temp: temp})
  }

  render() {
    const {data, temp} =  this.state
    const employees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length;
    const visibleData = this.onSerchEmployee(data, temp)
    return (
      <div className="app">
          <AppInfo 
            onEmployees={employees}
            onIncreased={increased}/>
  
          <div className="search-panel">
              <SearchPanel
              onUpdateSerch={this.onUpdateSerch}/>
              <AppFilter/>
          </div>
          
          <EmployeesList 
            data={visibleData}
            onDelete={this.deleteItem}
            onIncrease={this.onToggleIncrease}
            onRise={this.onToggleRise}/>
          <EmployeesAddForm
          onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;
