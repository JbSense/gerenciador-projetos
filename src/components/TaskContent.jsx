import './TaskContent.css'
import TasksColumn from './TaskColumn'

function TaskContent() {
  return(
    <div className="TaskContent">
      <TasksColumn columnName="TO DO (8)" backgroundColor="#c7f1ff"/>
      <TasksColumn columnName="IN WORK (12)" backgroundColor="#bfbdfd"/>
      <TasksColumn columnName="REVIEW (1)" backgroundColor="#fac89b"/>
      <TasksColumn columnName="DONE (3)" backgroundColor="#bee8c4"/>
    </div>
  )
}

export default TaskContent