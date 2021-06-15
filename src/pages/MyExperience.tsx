import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'

interface Iexperience{
    id:number,
    companyName:string,
    profile:string,
    startYear:number,
    endYear:number,
    website:string,
    logo:string
}

const MyExperience = () => {
    const [experience, setExperience] = useState([] as Iexperience[])

    const getAllExperience= async ()=>{
        let response = await axios.get('http://localhost:3050/experience')
        setExperience(response.data);
    }

    useEffect(()=>{
        getAllExperience();
    },[])

    return (
        <div>
            <div id="experience">
        <div className="experience-title">EXPERIENCE</div>
        <div className="card-display">
            {experience.map((myexperience)=>(
          <>
        <Card className="card" style={{ width: '18rem' ,border:'none'}}> 
        <Card.Header style={{background:'none'}}>{myexperience.companyName}</Card.Header>
        <Card.Img style={{padding:'20px'}} variant="top" src={myexperience.logo} />
  <Card.Body>
      
    <Card.Title>{myexperience.profile}</Card.Title>
    <p>From :{myexperience.startYear}</p>
    <p> To: {myexperience.endYear}</p>
    <a style={{color:'#bdbdbd'}} href={myexperience.website} rel="noreferrer" target="_blank">Visit Us</a>
    
  </Card.Body>
 
</Card>
</>
    ))}
</div>
</div>
        </div>
    )
}

export default MyExperience
