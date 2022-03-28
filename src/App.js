// App = bagian komponen
// opening dan closing tag disini diambil dari import <burger></burger>
// atau dengan single tag <burger/>

// Folder Component disini mirip seperti Partials Challange-03
// Folder Burger disini mirip seperti User Challange-03

// import dari folder component
import Burger from './Components/Burger/Burger'; 


function App() {
  return (
    <div className="App">
      <Burger />,
    </div>
  );
}
 
export default App;




