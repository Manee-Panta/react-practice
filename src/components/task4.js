import React from 'react'
import '../style/task4.css'
import { Link } from 'react-router-dom'


export const Task4 = () => {
  return (
    <div className='portfolio-main'>
        <div className='portfolio-nav'>
            <div className='logo'>Manita</div>
<ol>
    <li> <Link to={'/home'}>Home</Link> </li>
    <li><Link to={'/about'}>About</Link></li>
    <li><Link to={'/skill'}>Skills</Link></li>
    <li><Link to={'/contact'}>Contact</Link></li>
</ol>
        </div>
       
    </div>
  )
}
export default Task4;