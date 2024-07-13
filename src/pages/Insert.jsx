import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
const Insert=()=>{


  const [input,setinput]=useState({})

  const handlechange=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setinput(values=>({...values,[name]:value}))
  }

const handleclick=()=>{
  //e.preventDefault();
  let url="http://localhost:3000/student"
  axios.post(url,input).then((res)=>{
    alert("posted")
    setinput({
      rollno:"",
      
    })
  }).catch((err)=>{
    console.log("error",err)
  })
}
    return(
      <>
      <h1>Insert page</h1>
    
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rollno</Form.Label>
        <Form.Control type="text" name='rollno' value={input.rollno}placeholder="Enter rollno" onChange={handlechange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='name' value={input.name} placeholder="Enter name" onChange={handlechange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" name='city' value={input.city} placeholder="Enter city" onChange={handlechange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Fees</Form.Label>
        <Form.Control type="text" name='fees' value={input.fees}placeholder="Enter fees" onChange={handlechange} />
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={handleclick}>
        Submit
      </Button>
    
      </>
    ) 
  }
  export default Insert;
