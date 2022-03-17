import './MenuFolder.css'
import Search from './inputs/Search'

function MenuFolder() {
  return(
    <div className="MenuFolder">
      <div className="folder">
        <img src="images/blue-folder-icon.png" alt="Blue Folder Icon" />
        <p>Folder</p>
        <p>Xavier's team</p>
      </div>

      <Search width="80%" placeholder="Search folder..." />
    </div>
  )
}

export default MenuFolder