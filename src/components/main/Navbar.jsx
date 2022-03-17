import './Navbar.css'
import MenuFolder from '../MenuFolder'
import MenuList from '../MenuList'
import Account from '../Account'

function Navbar() {
  return(
    <div className="Navbar">
      <div className="current-page">
        <p>Tasky</p>
      </div>

      <MenuFolder />

      <MenuList title="Menu"  fields={[
        "Dashboard",
        "Projects",
        "Your Tasks",
        "Calendar"
      ]}/>
      
      <MenuList title="General"  fields={[
        "Settings",
        "Support"
      ]}/>

      <Account />
    </div>
  )
}

export default Navbar