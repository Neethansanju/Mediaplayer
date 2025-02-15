import React from 'react'

import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteVideo, saveHistory } from '../services/allAPI';



function VideoCard({ displayData, setDeleteResponse }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  
  const handleShow = async () => {
    const { caption, youTubeUrl } = displayData

    const localTime = new Date()

    const formatedDate = localTime.toLocaleString()
    const videoHistory = { caption, youTubeUrl, formatedDate }

    try {
      await saveHistory(videoHistory)

    } catch (err) {
      console.log(err);


    }






    setShow(true)
  };

  const handleRemoveVideo = async (videoId) => {
    try {
      const result = await deleteVideo(videoId)
      setDeleteResponse(result.data)

    } catch (err) {
      console.log(err);


    }
  }

  const dragStarted=(e,videoId)=>{
    console.log(videoId);
    e.dataTransfer.setData("videoId",videoId)
  }
  
  

  return (
    <>
      <Card draggable={true} onDragStart={(e)=>dragStarted(e,displayData?.id)}>
        <Card.Img onClick={handleShow} style={{ height: '200px' }} variant="top" src={displayData?.imageUrl} />
        <Card.Body className='d-flex align-items-center justify-content-between'>
          <h5>{displayData?.caption}</h5>
          <button onClick={() => handleRemoveVideo(displayData?.id)} className='btn'><i className='fa-solid fa-trash' style={{ color: 'red', fontSize: '20px' }}></i></button>



        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{displayData.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="582" src={`${displayData.youTubeUrl}?autoplay=1`} title="Armadham | Aavesham | Jithu Madhavan |Fahadh Faasil | Sushin Shyam | Vinayak| Nazriya| Anwar Rasheed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>

      </Modal>

    </>
  )
}

export default VideoCard