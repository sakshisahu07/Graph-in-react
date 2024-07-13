import { useState,useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';

const Update=()=>{
  const [mydata,setMydata]=useState([])

  const loadData=()=>{

    let url="http://localhost:3000/student"
    axios.get(url).then((res)=>{
      setMydata(res.data)
    })
  }
  useEffect(()=>{
    loadData()
  },[])

  const mydel=(myid)=>{
    let url=`http://localhost:3000/student/${myid}`
    axios.delete(url).then((res)=>{
      alert("Deleted")
      loadData()
    })
  }

  const ans=mydata.map((key)=>{
    return(
      <>
      <tr>
        <td>{key.rollno}</td>
        <td>{key.name}</td>
        <td>{key.city}</td>
        <td>{key.fees}</td>
        <td><button onClick={()=>{mydel(key.id)}}>Delete</button></td>
      </tr>
      </>
    )

  })
    return(
      <>
      <h1>Update page</h1>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Roll No</th>
          <th>Name</th>
          <th>City</th>
          <th>Fees</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>
      </>
    )
  }
  export default Update;