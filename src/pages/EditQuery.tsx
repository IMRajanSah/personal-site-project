import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import MyFooter from './MyFooter';
import MyHeader from './MyHeader';

interface IQuery{
    id:number,
    name:string,
    status:string,
    question:string,
    answer:string;
}

const EditQuery = (props:any) => {

    const [myquery,setQuery]=useState({} as IQuery)
    
    const history = useHistory();

    // console.log(props.match.params.id);
    const getQueryDetail = async() =>{
        
        let response = await axios.get(`http://localhost:3050/query/${props.match.params.id}`);
        setQuery(response.data);
    }
    
    const handleInputChange = (event: any) => {
        event.persist();

        setQuery({ ...myquery, [event.target.name]: event.target.value });
    };

    const handlesubmit = async()=>{
        if(!myquery.name || !myquery.question)
        {
            alert('Enter the name and question');
        }
        else{  
       await axios.patch(`http://localhost:3050/query/${props.match.params.id}`, myquery);
       history.push("/");
        }
    }

    useEffect(() =>{
        getQueryDetail();
    },[])
    return (
        
        <div>
            <MyHeader/>
            <p className="QueryHeading">Edit Your Query</p>
            <div style={{padding:'2%'}}>
  <Form.Group >
    <Form.Label>Name</Form.Label>
    <Form.Control  value={myquery.name} name="name" type="text" onChange ={handleInputChange} required/>
  </Form.Group>

  <Form.Group >
    <Form.Label>Question</Form.Label>
    <Form.Control value={myquery.question} name="question" type="text" onChange ={handleInputChange} required/>
  </Form.Group>

  
  <Button variant="primary" type="submit" onClick={handlesubmit}>
    Edit Submit
  </Button>  
        </div>
        <MyFooter/>
        </div>

    )
}

export default EditQuery
