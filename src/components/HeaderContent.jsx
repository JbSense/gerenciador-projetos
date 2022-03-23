import './HeaderContent.css'

function HeaderContent() {
  return(
    <div className="HeaderContent">
      <div className="page-info">
        <p>PROJECTS - APPS - MOVE APP</p>
        <h1>Crypter App</h1>
      </div>

      <div className="members">
        <div className="icons">
          <img src="images/sukuna-icon.png" alt="Perfil Icon" />
          <img src="images/sukuna-icon.png" alt="Perfil Icon" />
          <img src="images/sukuna-icon.png" alt="Perfil Icon" />
        </div>

        <p className="addMember">+ Member</p>

        <p>/</p>
      </div>
    </div>
  )
}

export default HeaderContent