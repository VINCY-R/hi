import React from 'react'
import { ImFire } from "react-icons/im";
import { useGlobal } from '../context/global';
import GiffItem from './GiffItem';
import Masonry from 'react-masonry-css'
import '../styles/Trending.css'
import Loader from './Loader';


function Liked({rendered}) {
    const {liked,loading}=useGlobal()

    console.log(liked)


    return (
        <div>
            <h2>Liked<ImFire /></h2>
            {loading && <Loader />}
            
            <Masonry breakpointCols={4}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column" >

            {
              liked.map((giff)=>{
                return <GiffItem key={giff.id} rendered={rendered} {...giff} giffItem={giff} />
              })  
            }
            </Masonry>
        </div>
    )
}

export default Liked