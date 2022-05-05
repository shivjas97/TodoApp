import React from 'react'
import Todos from './Todos';
import Multipleinput from './component/Multipleinput';
import Login1 from './component/Login1';
import Home from './component/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div >
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="Login1" element={<Login1 />} />
            <Route path="Todos" element={<Todos />} />
            <Route path="Multipleinput" element={<Multipleinput />} />
          </Routes>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
