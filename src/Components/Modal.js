import React from 'react';
import '../styles/Modal.css';
import { FaDownload, FaShareAlt } from 'react-icons/fa';

const Modal = ({ title, giff, link, setModal }) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Check out this GIF: ${title}`,
          url: link
        });
        console.log('GIF shared successfully');
      } catch (error) {
        console.error('Error sharing the GIF:', error);
      }
    } else {
      
      alert('Web share is not supported in this browser. Please copy the URL manually.');
    }
  };

  return (
    <div className="modal-overlay" onClick={() => setModal(false)}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>{title}</h2>
        <img src={giff} alt={title} />
        <div className="modal-actions">
          <a href={giff} download={`giff-${title}.gif`} className="download-button">
            <FaDownload /> Download
          </a>
          <button onClick={handleShare} className="share-button">
            <FaShareAlt /> Share
          </button>
        </div>
        <button className='close-btn' onClick={() => setModal(false)}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
