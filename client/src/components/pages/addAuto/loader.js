import React from 'react'


function Loader (){
  return(
    <>
    <div className='uploader'>
      <svg id="animated" viewBox="0 0 100 100">
        <circle cx="48" cy="48" r="45" />
        <path fill="none" strokeLinecap="round" strokeWidth="3" stroke="#fff"
        strokeDasharray="251.2,0"
        d="M48 10
           a 40 40 0 0 1 0 80
           a 40 40 0 0 1 0 -80">
        <animate attributeName="stroke-dasharray" from="0,251.2" to="251.2,0" dur="5s"/>           
        </path>
      </svg>
    </div>
    </>    
  )
  }


  export default Loader