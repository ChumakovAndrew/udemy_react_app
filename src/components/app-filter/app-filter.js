import { Component } from "react";
import "./app-filter.css";

class AppFilter extends Component {

    onUpdateFilter = (filter) => {
        const temp = filter
        this.props.onUpdateFilter(temp)
    }

    render() {
        return (
            <div className="btn-group">
                <button type="button"
                        className="btn btn-light"
                        onClick = {this.onUpdateFilter("all")}>
                        Все сотрудники
                </button>
                <button type="button"
                        className="btn btn-outline-light"
                        onClick = {this.onUpdateFilter("rise")}>
                        На повышение
                </button>
                <button type="button"
                        className="btn btn-outline-light"
                        onClick = {this.onUpdateFilter("more1000")}>
                        З/П больше 1000$
                </button>
            </div>
        )
    }
}

export default AppFilter;