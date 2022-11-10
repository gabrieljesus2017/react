import React from "react";
class NavBar extends React.Component   {
  render( ) {
return (

  <div class="grid-container">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#"></a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto navHeaderItems">
        <li class="nav-item active">
          <a class="nav-link" href="./index.html">inicio <span class="sr-only"></span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./pages/productos.html">celulares</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./pages/tablet.html"> tablet</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" href="./pages/noticias.html"> noticias </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./pages/contacto.html"> contacto</a>
        </li>
        
      </ul>
    </div>
  </nav>
</div>


);
  }
 



};

export default NavBar;