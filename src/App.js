import React from "react";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Display from "./components/display";
import Parent from "./components/parent";
import Task3 from "./components/task3";

const App = () => {
  return (<>    

    <Router>
            
      <Navbar/>
      <Routes>

        <Route
          path="/task1"
          element={
            <Display
              name={"manita"}
              email={"pantamanee145@gmail.com"}
              phone={9840264048}
            />
          }
        />
        <Route path="/task2" element={<Parent />} />
        <Route path="/task3" element={<Task3 />} />
      </Routes>

    </Router>
    </>
  );
};

export default App;
