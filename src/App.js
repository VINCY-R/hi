import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header"

import { FaHeart } from "react-icons/fa";
import { Container} from 'react-bootstrap';
import { ImFire } from "react-icons/im";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import './App.css'
import CustomButtons from './Components/CustomButtons';
import Trending from './Components/Trending';
import { useState } from 'react';
import Liked from './Components/Liked';
import Search from './Components/Search';
 // Removed unused Button import

function App() {
  const[rendered,setRendered]=useState('trending')

    const content=()=>{
      switch(rendered){
        case 'trending':
          return <Trending />
        case 'liked':
          return <Liked rendered={rendered} />
        
        case 'search':
          return <Search />
        default:
          return <Trending />
      }
    }
  
    return (
      <div>
      <div>
        <Header setRendered={setRendered} />
        <Container className="d-flex justify-content-center align-items-center" style={{ padding: '20px' }}>
            <CustomButtons icon={<FaHeart />} name="Liked" 
            onClick={()=>{
              setRendered('liked')
            }} />
            <CustomButtons icon={<ImFire />} name="Trending" 
            onClick={()=>{
              setRendered('trending')
            }}/>
            
        </Container>
      </div>
      <main>
        {content()}
      </main>
      </div>
        
    );
}

export default App;
