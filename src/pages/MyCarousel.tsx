import React from 'react'
import { Carousel } from 'react-bootstrap'
const MyCarousel = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img id="image1"
      className="d-block w-100"
      src="https://scontent.fsif1-1.fna.fbcdn.net/v/t1.18169-9/16865073_396040470759874_4744518486050513942_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=19026a&_nc_ohc=gbvyuUShrkAAX88SQI3&_nc_ht=scontent.fsif1-1.fna&oh=fa1281eede6e053052cb104d40495d92&oe=60DDADE5"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Hack <i>if you can</i></h3>
      {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img id="image1"
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      alt="Second slide"
    />

    <Carousel.Caption>
        <h3>Type <i>your words</i></h3>
      {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img id="image1"
      className="d-block w-100"
      src="https://scontent.fsif1-1.fna.fbcdn.net/v/t1.6435-9/38204311_668322983531620_454394723734388736_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=19026a&_nc_ohc=tPh-Np3JHdwAX_wr3Yd&_nc_ht=scontent.fsif1-1.fna&oh=b6e45516a618838ef5dc31c687940e56&oe=60DB3AAD"
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3>Listen <i>your favourite</i></h3>
      {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default MyCarousel
