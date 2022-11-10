import React from "react";
//class Item extends React.Component   {
 // render( ) {
    //<P>
    //precio: {props.precio}
//</P>

 function Articulos(props) {
    console.log ( props);
 return (
 
    <div className= "Articulos">
        
        <h3>
          producto: {props.producto}
        </h3>
       
        <p>
        precio: {props.precio}    
        </p>
    </div>
);
  }

  function Articulo (){
return(
    <div classname="Articulo">

        <Articulos producto="samsung" precio="250 us"/>
    </div>

);

  }
 





export default Articulos;