import React from 'react'
import { Link } from 'react-router-dom'
import landingImage from '../assets/music.gif'
import { Card } from 'react-bootstrap'
import settings from '../assets/setting.png'




function Landing() {
  return (
    <div className='container m-5'>
   <div className='row'>
    <div className='col-7'>
      <h1 style={{fontSize:'60px '}}>Welcome to <span className='text-warning'> Media Player</span></h1>
      <p style={{textAlign:'justify'}} className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum veritatis a est quis eaque repellendus dolor blanditiis, porro sapiente voluptate eos ducimus odio voluptas. Vero, perferendis eaque! Consectetur, explicabo error.</p>
      <Link to={'/home'} className='btn btn-info mt-4'>Get Started</Link>

    </div>
    <div className='col-5'>
      <img className='m-5' style={{width:'500px', height:'500px'}} src={landingImage} alt="" />

    </div>
   </div>

   <div className='feature container my-5'>
    <h2 className='text-center text-warning'>Features</h2>
    <div className='row mt-5 '>
      <div className="col-4 ">

      <Card style={{ width: '20rem' }} className='p-3'>
      <Card.Img variant="top" src={settings} />
      <Card.Body>
        <Card.Title>Managing vidieos</Card.Title>
        <Card.Text>
          User can upload, view and remove the vedios
        </Card.Text>
       
      </Card.Body>
    </Card>
      </div>

      <div className="col-4">

<Card style={{ width: '20rem' }} className='p-3'>
<Card.Img variant="top" src={settings} />
<Card.Body>
  <Card.Title>Managing vidieos</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </Card.Text>
 
</Card.Body>
</Card>
</div>

<div className="col-4">

<Card style={{ width: '20rem' }} className='p-3'>
<Card.Img variant="top" src={settings} />
<Card.Body>
  <Card.Title>Managing vidieos</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </Card.Text>
 
</Card.Body>
</Card>
</div>
    </div>

    <div className='container my-5 p-5 border border-white border-3 rounded'>

      <div >
        <h3 className='text-warning p-3 text-center'>Simple,Fast and Powerful</h3>
      </div>

      <div className='row '>
        <div className='col-6  '>
         <div className='text-white mt-5'>
          <p><span className='fs-5 fw-bold'>Play Everything:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore maxime corporis blanditiis error beatae, architecto facere totam non? Temporibus nesciunt qui veritatis quasi aut quas obcaecati esse delectus dolore nobis!</p>

          <p><span className='fs-5 fw-bold'>Marge videos:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quo ab! Veniam, unde nihil. Reiciendis tenetur quo eaque eveniet ipsum sit, tempore quibusdam natus veniam consectetur fuga quis inventore voluptatibus.</p>
          <p><span className='fs-5 fw-bold'>Watch History:</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, cum. Perspiciatis voluptate libero est quaerat autem expedita, ut rem similique et ratione facere ipsam assumenda placeat at non magni. Veniam?</p>

         </div>
        </div>
        <div className='col-6 p-5'>
        <iframe  width="560" height="315" src="https://www.youtube.com/embed/d9MyW72ELq0?si=wjVunn5GYbUP8BYD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>

    </div>

   </div>


   </div>




  )
}

export default Landing