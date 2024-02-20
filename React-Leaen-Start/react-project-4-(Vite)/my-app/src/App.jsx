import "./App.css";
import  Item  from "./components/Item";
import logo from "./assets/logo.png";
import content from "./data/content";
function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo" />
      <h2>เครื่องมือพัฒนาระบบ : React + Vite </h2>
      {content.map((data) => {
        return (
          <Item key={data.id} {...data}/> 
        );
      })}
    </div>
  );
}

export default App;
