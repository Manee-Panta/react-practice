import React from 'react'

const New = () => {
    function hookupevents() {
        for (var i = 0; i < 3; i++) {
         document.getElementById("button"+ i)
  
    .addEventListener("click", function () {
        alert(i);
   
        console.log(i);
      });
  }
        
        
      }
  return (
    <div>
         <button onClick={hookupevents} id="button0">
          Button1
        </button>
        <button onClick={hookupevents} id="button1">
          Button2
        </button>
        <button onClick={hookupevents} id="button2">
          Button3
        </button>
      </div>
    
  )
}

export default New