import './App.css';
import AddNumbers from "./components/AddNumbers";
import Counter from "./components/Counter";
import DataBinding from "./components/DataBinding";
import DisableButton from "./components/DisableButton";
import FetchData from "./components/FetchData";
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
      <Counter />
      <FetchData />
    </div>
  );
}

export default App;
