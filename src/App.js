import './App.css';
import DataBinding from "./components/DataBinding";
import ShowHide from "./components/ShowHide";
import Users from "./components/Users";

function App() {
  

  return (
    <div className="App">
      <div className="app-title">Coding Exercises Below</div>
      <Users />
      <ShowHide />
      <DataBinding />

    </div>
  );
}

export default App;
