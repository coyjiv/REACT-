import React from 'react';
import './App.css';
import AppRoutes from "./routes/AppRoutes";
import Sidebar from "./Components/Sidebar/Sidebar";

const App = () =>{
    return (
      <div className="App">
          <Sidebar/>
        <AppRoutes/>
      </div>
    );

    }
    


export default App;
