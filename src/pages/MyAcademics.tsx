import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  Card } from 'react-bootstrap'


interface education{
    id:number,
    title:string,
    schoolname:string,
    startYear:number,
    endYear:number,
    address:string,
    logo:string,
    website:string
}

const MyAcademics = () => {

    const [educations, setEducations] = useState([] as education[]);

    

    const getAllEducation = async () => {
        let response =await axios.get('https://personal-site-project.herokuapp.com/api/education');
        setEducations(response.data);
        // console.log(response.data);
    }

    useEffect(() => {
        getAllEducation();
    }, [])



    return (
        <div id="academic">
        <div className="academic-title">ACADEMIC</div>
        <div className="card-display">
            {educations.map((education)=>(
          <>
        <Card className="card" style={{ width: '18rem' ,border:'none'}}> 
        <Card.Header style={{background:'none'}}>{education.title}</Card.Header>
  <Card.Img style={{height:'218px', width:'288px',padding:'20px',borderRadius:'30%'}} variant="top" src={education.logo} />
  <Card.Body>
      
    <Card.Title>{education.schoolname}</Card.Title>
    <p>From :{education.startYear} To: {education.endYear}</p>
    <span>Address: </span>
    <Card.Text>{education.address}</Card.Text>
    <a style={{color:'#bdbdbd'}} href={education.website} rel="noreferrer" target="_blank">Visit Us</a>
    
  </Card.Body>
 
</Card>
</>
    ))}
</div>
</div>
    )
}

export default MyAcademics
