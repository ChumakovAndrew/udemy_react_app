import "./app-info.css";

const AppInfo = (props) => {
    return (
        <div className="app-info">
            <h2>Учет сотрудников в компании N</h2>
            <h3>{`Общее число сотрудников: ${props.onEmployees}`}</h3>
            <h3>{`Премию получат: ${props.onIncreased}`}</h3>
        </div>
    )
}

export default AppInfo;