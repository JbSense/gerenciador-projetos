import './Task.css'

function Task(props) {
  return(
    <div className="Task">
      <p className="sector">{props.sector}</p>
      <p className="options">...</p>
      <p className="task-name">{props.taskName}</p>

      <div className="members-level">
        <div className="members-image">
          <img src="images/sukuna-icon.png" alt="Perfil Icon" />
          <img src="images/sukuna-icon.png" alt="Perfil Icon" />
          <img src="images/sukuna-icon.png" alt="Perfil Icon" />
        </div>

        <div className="level-task">
          <p>{props.levelTask}</p>
        </div>
      </div>

      <div className="bottom-bar">
        <p>#3</p>
        <p>@12</p>
        <p>! 1 mention</p>
      </div>
    </div>
  )
}

export default Task