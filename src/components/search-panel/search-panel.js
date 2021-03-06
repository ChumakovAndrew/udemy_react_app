import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component{
    constructor(props){
        super(props)
        this.state = {
            temp: ""
        }
    }

    onUpdateSerch = (e) => {
        const temp = e.target.value
        this.setState({temp})
        this.props.onUpdateSerch(temp)
    }

    render() {
        return (
            <input type="text"
                    className="form-control search-input"
                    placeholder="Найти сотрудника"
                    value={this.state.temp}
                    onChange={this.onUpdateSerch}/>
        )
    }
}
export default SearchPanel;