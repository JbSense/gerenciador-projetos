import Task from './Task'
import './TaskColumn.css'

function TaskColumn(props) {
  return(
    <div className="TaskColumn">
      <div className="task-column-header">
        <p className="column-name" style={{backgroundColor: props.backgroundColor}}>{props.columnName}</p>

        <div className="options">
          <p>+</p>
          <p>-</p>
        </div>
      </div>

      <Task sector="Dev" taskName="Create View" levelTask="Low"/>
    </div>
  )
}

export default TaskColumn