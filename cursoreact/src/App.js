//import logo from './logo.svg';
import './App.css';
import NavBar from "./componentes/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from "./componentes/ItemLIstContainer";

   
function App() {

  
  return (
   
     <header>
     <h1>Mi Pagina Web</h1>
      <section className="componentes">
        
<NavBar/>
<Item/>


      </section>
     </header>
 
  
  );
}



export default App;
