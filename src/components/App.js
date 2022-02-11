import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const[search, SetSearch] = useState("")

  function handleSearch(newSearch){
    SetSearch(newSearch) //sets the current state to the state (taken from Search component)
  }


  return (
    <div className="app">
      <Header onSearch={handleSearch}/>
      <ListingsContainer search={search}/>
      {/* pass prop down to ListingsContainer. This prop is the search value entered in the Search component saved in this component */}
    </div>
  );
}

export default App;
