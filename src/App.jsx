import "./App.css";
import NameBadge from "./components/NameBadge/NameBadge";

function App() {
  return (
    <div className="App">
      <NameBadge displayedName="Kira Nerise" />
      <NameBadge displayedName="Carol Park" />
      <NameBadge displayedName="Katie Pierce" />
      <NameBadge displayedName="Garrett Guier" />
      <NameBadge displayedName="Daphne Guier-Park" />
    </div>
  );
}

export default App;
