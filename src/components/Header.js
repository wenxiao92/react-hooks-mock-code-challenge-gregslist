import React from "react";
import Search from "./Search";

function Header( {onSearch}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearch={onSearch}/>
      {/* prop sent from parent component. parent component will hold the state of the search so that it can be passed to another child component */}
    </header>
  );
}

export default Header;
