function HeaderLogged(params){
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Cyber Place</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link" href="#">Agregar </a>
          <a class="nav-item nav-link" href="#">Eliminar</a>
          <a class="nav-item nav-link" href="#">Comprar</a>
          <a class="nav-item nav-link" href="#">Ver Carrito</a>
          <a class="nav-item nav-link" href="#">Salir</a>
        </div>
      </div>
    </nav>
  )
}

export default HeaderLogged;
