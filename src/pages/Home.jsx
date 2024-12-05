import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Category from '../Components/category'




function Home() {

  const [addVideoResponse,setAddVideoResponse]=useState("")



  return (
   <>
   <div className="container d-flex justify-content-between m-5">
    <Add setAddVideoResponse={setAddVideoResponse}/>

    <Link to={'/history'} className='text-warning fw-bold fs-5' style={{textDecoration:'none'}}> Watch History</Link>


   </div>

   <div className="row p-5">
    <div className="col-lg-6">
      <h3 className='text-info p-3'>All Videos</h3>
      <View addVideoResponse={addVideoResponse}/>
    </div>
    <div className="col-lg-6">
      <Category></Category>
    </div>
   </div>
   </>
  )
}

export default Home