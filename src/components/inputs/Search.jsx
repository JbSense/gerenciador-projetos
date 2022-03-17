import './Search.css'

function Search(props) {
    return(
        <div className="Search" style={{ width: props.width }}>
          <input type="text" name="" id="" placeholder={props.placeholder} />
        </div>
    )
}

export default Search