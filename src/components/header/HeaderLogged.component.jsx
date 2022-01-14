

function HeaderLogged(params) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        <img src={require('./logo.png')} width='50px' alt='Logo' />
        | Cyber Place</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="/products"> Ver productos </a>
          <a className="nav-item nav-link" href="/product/manage"> Gestion </a>
          <a className="nav-item nav-link" href="/buy">Comprar</a>
          <a className="nav-item nav-link" href="/shopping/cart">Ver Carrito</a>
          <a className="nav-item nav-link" href="logout">Salir</a>
        </div>
      </div>
    </nav>
  )
}

export default HeaderLogged;
