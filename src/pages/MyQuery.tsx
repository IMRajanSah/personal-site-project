import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { useHistory } from "react-router";


interface Iquery{
    id:number,
    name:string,
    status:string,
    question:string,
    answer:string
}

const MyQuery = () => {
    const [query, setQuery] = useState([] as Iquery[])

    const history = useHistory();


    //for dialog box
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    const getAllquery= async ()=>{
        let response = await axios.get('http://localhost:3050/query')
        setQuery(response.data);
    }

    useEffect(()=>{
        getAllquery();
    },[])

    const handleDelete =async(id:number) => {

      //keeping the deleted data in separate json deleted-query
        const response=await axios.get(`http://localhost:3050/query/${id}`);
        await axios.post("http://localhost:3050/Deleted-Query",  response.data);
        

        await axios.delete(`http://localhost:3050/query/${id}`);
        // console.log(response);
        // history.push("/todo");

        getAllquery();
        // console.log(id);
        handleClose();
        return;
    }



    return (
        <div>
            <div id="query">
        <div className="query-title"><i>Queries</i></div>
        <div className="query-card-display">
            {query.map((myquery)=>(
            <>
            <Card className="card" style={{ width: '17rem',minHeight: '14rem',margin:'3px',fontSize:10 }}>
  <Card.Body>
    <Card.Title>Query from:{myquery.name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Status: {myquery.status}</Card.Subtitle>
    <Card.Text>
      <b>Question: </b> {myquery.question}
    </Card.Text>
    <Card.Text>
      <b>Answer: </b> {myquery.answer}
    </Card.Text>
    <Button variant="primary" onClick = {()=> {history.push(`/edit-query/${myquery.id}`)}}>Edit</Button>&nbsp;&nbsp;&nbsp;
    {/* <Button variant="danger" onClick ={()=> handleDelete(myquery.id)}>Delete</Button> */}
    <Button variant="danger" onClick ={handleShow}>Delete</Button>

  </Card.Body>
</Card>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation ?</Modal.Title>
        </Modal.Header>
        {/* <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body> */}
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            NO
          </Button>
          <Button variant="danger" onClick={()=> handleDelete(myquery.id)}>
            YES
          </Button>
        </Modal.Footer>
      </Modal>

</>
))}
 <Card className="card" style={{ width: '18rem',minHeight: '14rem',margin:'2px',fontSize:10 }}>
  <Card.Body>
    <Card.Title>Add Query</Card.Title>
    
    <Button variant="dark" style={{width:'50%',height:'50%'}} onClick = {()=> {history.push("/add-query");}}><i className="fa fa-plus"></i></Button>

  </Card.Body>
</Card>

</div>
</div>
</div>
    )
}

export default MyQuery
