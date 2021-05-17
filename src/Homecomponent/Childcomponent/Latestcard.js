import React ,{useState} from 'react'
import '../homecomponen.css'


function Latestcard(props){
 

  return(
    <div className='latcard'>
    <div className='latcard-text'> 
    <h3>Capucino </h3>
    <span> $50</span>
    <span></span>
    </div>
    
    
    
    <div className='latcard-img'> 
    <img src={props.img} alt='lat' />
    </div>
  
    </div>
    );
}

export default Latestcard;