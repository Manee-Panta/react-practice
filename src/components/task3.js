import React from "react";
import "../style/task3.css";
import MediaQuery from "react-responsive";
const Task3 = () => {
  return (


<div>
    <h1>Device Test!</h1>
    <MediaQuery minDeviceWidth={1000}>
        <p>you are on desktop</p>
    <div className="task3-main">
      <div className="task3-body">
       
        <div className="row">
          <div className="box1"></div>
          <div className="box2"></div>
          <div className="box3"></div>
        </div>
        <div className="row">
          <div className="box4"></div>
          <div className="box5"></div>
          <div className="box6"></div>
        </div>
      </div>
    </div>
      <MediaQuery minDeviceWidth ={500}>
        <p>you are on mobileee</p>
      <div className="task3-main">
      <div className="task3-body">
       
        <div className="row">
          <div className="box1"></div>
          <div className="box2"></div>
       
        </div>
        <div className="row">
          
          <div className="box3"></div>
          <div className="box5"></div>
        </div>
        <div className="row">
          
          <div className="box5"></div>
          <div className="box6"></div>
        </div>
      </div>
    </div>
      </MediaQuery>
    </MediaQuery>
  
    
  </div>
  );
};
export default Task3;

