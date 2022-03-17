import './MenuList.css'

function MenuList(props) {
  return(
    <div className="MenuList">
      <p className="menu-title">{props.title}</p>

      <ul>
        {
          props.fields.map(field => {
            return <li>{field}</li>
          })
        }
      </ul>
    </div>
  )
}

export default MenuList