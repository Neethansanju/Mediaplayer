import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addVideos } from '../services/allAPI';


function Add({setAddVideoResponse}) {
  const [videoDetails, setVideoDetails] = useState({ caption: "", imageUrl: "", youTubeUrl: "" })
  console.log(videoDetails);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [isInvalidUrl, setIsInvalidUrl] = useState(false)

  const getEmbedUrl = (link) => {
    {/*https://www.youtube.com/watch?v=OsMqr3556F8 */ }
    {/*"https://www.youtube.com/embed/OsMqr3556F8" */ }

    if (link.includes("v=")) {

      let videoId = link.split("v=")[1].slice(0, 11)
      setVideoDetails({ ...videoDetails, youTubeUrl: `https://www.youtube.com/embed/${videoId}` })
      console.log(videoId);
      setIsInvalidUrl(false)

    } else {
      setVideoDetails({ ...videoDetails, youTubeUrl: "" })
      setIsInvalidUrl(true)
    }
  }

  const handleUpload = async () => {
    const { caption, imageUrl, youTubeUrl } = videoDetails
    if (caption && imageUrl && youTubeUrl) {

      try {
        const result = await addVideos(videoDetails)

        setAddVideoResponse(result.data)
        // console.log(result);
        if (result.status > 200 && result.status < 300) {
          toast.success(`${result.data.caption} added to your collection`)
          handleClose()
        }

      }
      catch (err) {
        console.log(err);

      }


    } else {
      //  alert("please enter a field")
      toast.warning("Enter the field compleatly")
    }

  }
  return (
    <>
      <div className="d-flex align-items-center">
        <h5 className='text-warning'>Upload New Video</h5>
        <button onClick={handleShow} className='btn btn-warning fs-5 rounded-circle ms-3 fw-bolder'>+</button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Video Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>please fill the following details..</p>

          <div className='border border-3 border-info rounded p-3'>

            {/*caption*/}
            <FloatingLabel controlId="floatingInputcaption" label="Video Caption" className="mb-3">
              <Form.Control onChange={e => setVideoDetails({ ...videoDetails, caption: e.target.value })} type="text" placeholder="Enter video caption" />
            </FloatingLabel>

            {/*/ image url*/}
            <FloatingLabel controlId="floatingInputimage" label="Image url" className="mb-3">
              <Form.Control onChange={e => setVideoDetails({ ...videoDetails, imageUrl: e.target.value })} type="text" placeholder="Enter video caption" />
            </FloatingLabel>

            {/*utube url */}
            <FloatingLabel controlId="floatingInputurl" label="Youtube url" className="mb-3">
              <Form.Control onChange={e => getEmbedUrl(e.target.value)} type="text" placeholder="Enter video caption" />
            </FloatingLabel>
            {
              isInvalidUrl &&
              <div className='text-danger fw-bold'>Invalid Url</div>
            }




          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="info">Upload</Button>
        </Modal.Footer>
      </Modal>


      


      {/* Same as */}

    </>
  )
}

export default Add