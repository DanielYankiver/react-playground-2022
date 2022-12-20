import './App.css';
import AddNumbers from "./components/AddNumbers";
import DataBinding from "./components/DataBinding";
import DisableButton from "./components/DisableButton";
import ShowHide from "./components/ShowHide";
import Users from "./components/Users";

function App() {
  

  return (
    <div className="App">
      <div className="app-title">Coding Exercises Below</div>
      <Users />
      <ShowHide />
      <DataBinding />
      <DisableButton />
      <AddNumbers />
    </div>
  );
}

export default App;
