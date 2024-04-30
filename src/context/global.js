import React,{useContext, useEffect, useReducer} from "react";
import { globalReducer } from "../reducers/globalReducer";
import { GET_SEARCH, GET_TRENDING, LOADING,ADD_TO_LIKED ,GET_FAVORITES} from "../utils/globalActions";
import axios from "axios";


const apiKey=process.env.REACT_APP_API_KEY;
const baseUrl="https://api.giphy.com/v1/gifs"



const GlobalContext=React.createContext()

export const GlobalProvider=({children})=>{

    const initialState={
        loading:false,
        searchResults:[],
        trending:[],
        liked:[],
        random:{}
    }

    const [state,dispatch]=useReducer(globalReducer,initialState)

    const getTrending=async()=>{
        dispatch({type:LOADING})
        const res =await axios.get(`${baseUrl}/trending?api_key=${apiKey}&limit=30`)

        dispatch({type:GET_TRENDING,payload:res.data.data})
        
    }
    const searchGiffs=async(query)=>{
        dispatch({type:LOADING})
        const res =await axios.get(`${baseUrl}/search?api_key=${apiKey}&q=${query}&limit=25`)
        dispatch({type:GET_SEARCH,payload:res.data.data})
    }

    const saveToLiked=(gif)=>{
        const storedItems=JSON.parse(window.localStorage.getItem("liked"))||[]
        const existingItem=storedItems.find(item=>item.id===gif.id);

        if(!existingItem){
            const items=[...storedItems,gif]
            window.localStorage.setItem("liked",JSON.stringify(items))
            dispatch({type:ADD_TO_LIKED,payload:gif})
            alert("Added")
        }else{
            alert("Exists already")
        }
    } 
    
    const removeFromLS=(gif)=>{
        const storedItems=JSON.parse(window.localStorage.getItem("liked"))||[]
        const items=storedItems.filter((item)=>item.id!==gif.id)
        window.localStorage.setItem('liked',JSON.stringify(items))
        
        getFromLS()
    }
    
    const getFromLS=()=>{
        const storedItems=JSON.parse(window.localStorage.getItem("liked"))||[]
        dispatch({type:GET_FAVORITES,payload:storedItems})

    }
   
        
    useEffect(()=>{
        getTrending()
        getFromLS()
                
    },[])
    return(
        <GlobalContext.Provider value={{...state,searchGiffs,saveToLiked,removeFromLS}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobal=()=>{
    return useContext(GlobalContext)
}