import React from 'react'

const header = () => {
   return (
      <header>
         <div className='header-inner'>
            <div className='logo'>IMMO</div>
            <nav>
               <ul>
                  <li>
                     <a href='/'>Projects</a>
                  </li>
                  <li>
                     <a href='/'>CV/Resume</a>
                  </li>
                  <li>
                     <a href='/'>About Me</a>
                  </li>
                  <li className='btn'>
                  <a href='/'>Contact</a>
                  </li>
               </ul>
            </nav>
         </div>
      </header>
   )
}

export default header
