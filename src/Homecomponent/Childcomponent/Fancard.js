import React from 'react'
import '../homecomponen.css'

function Fancard(props) {
  return(
      <div className='cardd'>
     
       <div className='card-detail'>
         <div>
          <img src={props.img} alt='his' className='card-detail-image' />
          </div>
          
              <div className='card-detail-text'>
              <h4>Capucino  </h4>
               
           </div>
       </div>
     
        
       </div>
    );
}

export default Fancard;