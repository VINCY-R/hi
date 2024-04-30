import React from 'react'
import { ImFire } from "react-icons/im";
import { useGlobal } from '../context/global';
import GiffItem from './GiffItem';
import Masonry from 'react-masonry-css'
import '../styles/Trending.css'
import Loader from './Loader';


function Trending() {
    const {trending,loading}=useGlobal()

    console.log(trending)


    return (
        <div>
            <h2>Trending<ImFire /></h2>
            {loading && <Loader />}
            
            <Masonry breakpointCols={4}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column" >

            {
              trending.map((giff)=>{
                return <GiffItem key={giff.id}{...giff} giffItem={giff} />
              })  
            }
            </Masonry>
        </div>
    )
}

export default Trending