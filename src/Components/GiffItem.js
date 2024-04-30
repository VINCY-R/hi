import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { useGlobal } from '../context/global'
import '../styles/GiffItem.css'
import Modal from './Modal'

function GiffItem({id, title, embed_url, url: link,rendered, images: { original: { url } } }) {
  const [modal, setModal] = useState(false);

  const { saveToLiked,removeFromLS  } = useGlobal(); 

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className='bigbox'>
        {modal && <Modal title={title} giff={url} link={link} embed_url={embed_url} setModal={setModal} />}
        <div className="gif" onClick={toggleModal}> {/* Changed here */}
            <img className='img' src={url} alt={title} />
            <div className='luv' onClick={()=>{
              if(rendered==='liked'){
                removeFromLS(
                  {
                    id,title,url:link,images:{original:{url}}
                  }
                )
              }else{
              saveToLiked({
                id,title,url:link,images:{original:{url}}
              })}
            }}>
                <FaHeart /> 
            </div>
        </div>
    </div>
  )
}

export default GiffItem;
