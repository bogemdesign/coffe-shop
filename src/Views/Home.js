import React from 'react'
import Header from'../Homecomponent/Header'
import Fanture from'../Homecomponent/Fanture'
import Latest from'../Homecomponent/Latest'
import '../Homecomponent/homecomponen.css'



function Home() {
  return(
    <div >
    <Header/>
    <div className='tbody'>
    <Fanture />
    <Latest />
    </div>
    </div>
    );
}

export default Home;