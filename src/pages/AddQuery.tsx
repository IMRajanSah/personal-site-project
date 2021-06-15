import React, { useState } from 'react'
import MyHeader from './MyHeader'
import MyFooter from './MyFooter'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import { useHistory } from 'react-router'

interface IQuery{
    id:number,
    name:string,
    status:string,
    question:string,
    answer:string;
}
const AddQuery = () => {

    const [myquery,setQuery]=useState({} as IQuery)
    const history = useHistory();

    const handleInputChange = (event: any) => {
      event.persist();

      setQuery({ ...myquery, [event.target.name]: event.target.value });
      
  };

    const handlesubmit = async (event: any)=>{
      event.persist();
      if(!myquery.name)
      {
        alert("please enter Name");
      }else{
        myquery.status="Not Replied";
        myquery.answer="";
        // console.log(myquery);
        await axios.post("http://localhost:3050/query",  myquery);
        history.push("/");
      }
        
    }

    return (
        <div >
            <MyHeader/>
           
            <p className="QueryHeading">Enter Your Query</p>
            <div style={{padding:'2%'}}>
  <Form.Group >
    <Form.Label>Name</Form.Label>
    <Form.Control id='require' value={myquery.name} name="name" type="text" placeholder="Enter Name" onChange ={handleInputChange} />
  </Form.Group>

  <Form.Group >
    <Form.Label>Question</Form.Label>
    <Form.Control  value={myquery.question} name="question" type="text" placeholder="Enter your Question" required onChange ={handleInputChange} />
    <Form.Text className="text-muted">
      Feel Free To Ask
    </Form.Text>
  </Form.Group>

  
  <Button variant="primary" type="submit" onClick={handlesubmit}>
    Submit
  </Button>
  </div>

            <MyFooter/>
        </div>
    )
}

export default AddQuery
