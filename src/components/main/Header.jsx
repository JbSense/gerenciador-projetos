import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Search from '../inputs/Search'

function Header() {
  return(
    <div className="Header">
      <ul>
        <li>
          <Search width="30rem" placeholder="Search tasks..." />
        </li>

        <span className="links">
          <li>Assignees</li>
          <li>Show</li>
          <li>More</li>
        </span>

        <span className="buttons-links">
          <li className="share">Share</li>
          <li className="create-new">+ Create New</li>
        </span>
      </ul>
    </div>
  )
}

export default Header