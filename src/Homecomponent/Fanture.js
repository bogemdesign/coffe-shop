import React, {useState , useEffect} from 'react'
import Fancard from './Childcomponent/Fancard'
import axios from 'axios'
import './homecomponen.css'




function Fanture(props) {
//const axios = require("axios");
const [User, setUser] = useState();

const api = 'http://localhost:3001/tampil'
 const data = async function () {
  try {
    const response = await axios.get(
    api);
    console.log(response.values);
    setUser(response.data)
  } catch (error) {
    console.error(error);
  }
}

  useEffect ( () => {
      data();
      
      
},[]);


  return (
    <div>
    <div className='tjudul'>
Terlaris
    </div>
     <div className='con-card'>
    {User}
    <Fancard />
    </div>
    </div>
  );
}

export default Fanture;