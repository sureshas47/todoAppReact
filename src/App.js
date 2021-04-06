import React from "react";
import './App.css';
import ViewComp from "./TodoComponents/viewComp";
import './TodoComponents/view.css'


function App() {
  return (

    <div className="App">
        <header>
            <React.StrictMode>
                <ViewComp />
            </React.StrictMode>
        </header>


    </div>
  );
}

export default App;
