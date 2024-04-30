import React from 'react'
import { useGlobal } from '../context/global';
import GiffItem from './GiffItem';
import Masonry from 'react-masonry-css'
import '../styles/Trending.css'
import Loader from './Loader';
import { FaListUl } from "react-icons/fa";


function Search() {
    const {searchResults,loading}=useGlobal()


    return (
        <div>
            <h2><FaListUl />  Search Results</h2>
            {loading && <Loader />}
            
            <Masonry breakpointCols={4}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column" >

            {
              searchResults.map((giff)=>{
                return <GiffItem key={giff.id}{...giff} giffItem={giff} />
              })  
            }
            </Masonry>
        </div>
    )
}

export default Search